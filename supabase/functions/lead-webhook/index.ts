import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { leadData } = await req.json();
    
    console.log('Novo lead recebido:', leadData);

    const n8nWebhookUrl = Deno.env.get('N8N_WEBHOOK_URL');
    
    if (!n8nWebhookUrl) {
      console.error('N8N_WEBHOOK_URL não configurada');
      return new Response(JSON.stringify({ error: 'Webhook URL não configurada' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Payload para enviar para o N8N
    const payload = {
      evento: 'novo_lead',
      lead: {
        nome: leadData.name,
        email: leadData.email,
        whatsapp: leadData.whatsapp,
        data_cadastro: new Date().toISOString()
      },
      timestamp: new Date().toISOString()
    };

    console.log('Enviando para N8N:', payload);

    // Chamar webhook do N8N
    const response = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      console.log('Webhook N8N enviado com sucesso');
      return new Response(JSON.stringify({ success: true, message: 'Webhook enviado' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    } else {
      console.error('Erro ao enviar webhook:', response.status, response.statusText);
      return new Response(JSON.stringify({ error: 'Erro ao enviar webhook' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

  } catch (error) {
    console.error('Erro na function lead-webhook:', error);
    return new Response(JSON.stringify({ error: String(error) }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});