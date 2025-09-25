import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

// As credenciais serão lidas das variáveis de ambiente
const META_PIXEL_ID = Deno.env.get('META_PIXEL_ID')
const META_ACCESS_TOKEN = Deno.env.get('META_ACCESS_TOKEN')
const META_API_URL = `https://graph.facebook.com/v19.0/${META_PIXEL_ID}/events?access_token=${META_ACCESS_TOKEN}`

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Aceitar apenas requisições POST
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { 
      status: 405,
      headers: corsHeaders 
    })
  }

  try {
    // Extrair corpo da requisição
    const body = await req.json()
    const { eventName, email, phone, firstName, lastName } = body

    console.log('Received event:', eventName, 'with data:', { email, phone, firstName, lastName })

    // Validar se o nome do evento foi fornecido
    if (!eventName || (eventName !== 'PageView' && eventName !== 'Lead')) {
      return new Response(JSON.stringify({ error: 'Event name is missing or invalid. Must be "PageView" or "Lead".' }), { 
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    // Coletar dados do usuário para melhor correspondência
    const clientIpAddress = req.headers.get('x-forwarded-for')?.split(',')[0]
    const clientUserAgent = req.headers.get('user-agent')

    // Montar o payload base
    const eventDataPayload = {
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      user_data: {
        client_ip_address: clientIpAddress,
        client_user_agent: clientUserAgent,
      },
    }

    // Adicionar dados específicos do usuário para o evento 'Lead'
    if (eventName === 'Lead') {
      eventDataPayload.user_data.em = [email].filter(Boolean)
      eventDataPayload.user_data.ph = [phone].filter(Boolean)
      eventDataPayload.user_data.fn = [firstName].filter(Boolean)
      eventDataPayload.user_data.ln = [lastName].filter(Boolean)
    }

    console.log('Sending payload to Meta:', JSON.stringify({ data: [eventDataPayload] }))

    // Enviar os dados para a API da Meta
    const response = await fetch(META_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: [eventDataPayload] }),
    })

    const metaResponse = await response.text()
    console.log('Meta API response:', response.status, metaResponse)

    return new Response(JSON.stringify({ success: true, eventSent: eventName }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })

  } catch (error) {
    console.error('Internal Server Error:', error)
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})