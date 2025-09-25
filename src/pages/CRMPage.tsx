import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, LogOut, Search, User, Mail, Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface Lead {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  created_at: string;
}

const CRMPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Credenciais simples hardcoded
  const ADMIN_USERNAME = 'equipecomercial';
  const ADMIN_PASSWORD = 'vendas2024';

  useEffect(() => {
    // Verificar se já está logado
    const isLoggedIn = localStorage.getItem('crm_authenticated') === 'true';
    setIsAuthenticated(isLoggedIn);
    
    if (isLoggedIn) {
      loadLeads();
    }
  }, []);

  useEffect(() => {
    // Filtrar leads por busca
    if (searchTerm) {
      const filtered = leads.filter(lead => 
        lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.whatsapp.includes(searchTerm)
      );
      setFilteredLeads(filtered);
    } else {
      setFilteredLeads(leads);
    }
  }, [searchTerm, leads]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      localStorage.setItem('crm_authenticated', 'true');
      setIsAuthenticated(true);
      loadLeads();
    } else {
      alert('Usuário ou senha incorretos');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('crm_authenticated');
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  const loadLeads = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Erro ao carregar leads:', error);
        return;
      }

      setLeads(data || []);
    } catch (error) {
      console.error('Erro ao carregar leads:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatWhatsAppNumber = (whatsapp: string) => {
    // Remove tudo que não é número
    const numbers = whatsapp.replace(/\D/g, '');
    
    // Adiciona o código do país se não tiver
    let formattedNumber = numbers;
    if (!numbers.startsWith('55')) {
      formattedNumber = '55' + numbers;
    }
    
    return formattedNumber;
  };

  const handleWhatsAppClick = (whatsapp: string) => {
    const formattedNumber = formatWhatsAppNumber(whatsapp);
    const whatsappUrl = `https://wa.me/${formattedNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, 'dd/MM/yyyy HH:mm', { locale: ptBR });
  };

  // Tela de login
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-primary">
              CRM - Acesso da Equipe
            </CardTitle>
            <p className="text-muted-foreground">
              Faça login para acessar os leads
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium">
                  Usuário
                </label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Digite o usuário"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Senha
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite a senha"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Entrar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Tela principal do CRM
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      {/* Header */}
      <header className="bg-card border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-primary">CRM - Leads</h1>
            <Badge variant="secondary" className="text-sm">
              {filteredLeads.length} leads
            </Badge>
          </div>
          <Button variant="outline" onClick={handleLogout} className="gap-2">
            <LogOut className="w-4 h-4" />
            Sair
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Barra de busca */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Buscar por nome, email ou WhatsApp..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Botão para atualizar */}
        <div className="mb-6">
          <Button onClick={loadLeads} disabled={loading} variant="outline">
            {loading ? 'Carregando...' : 'Atualizar Leads'}
          </Button>
        </div>

        {/* Grid de leads */}
        {loading ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Carregando leads...</p>
          </div>
        ) : filteredLeads.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">
              {searchTerm ? 'Nenhum lead encontrado na busca' : 'Nenhum lead cadastrado ainda'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredLeads.map((lead) => (
              <Card key={lead.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    <CardTitle className="text-lg truncate">
                      {lead.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{lead.email}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MessageSquare className="w-4 h-4" />
                    <span>{lead.whatsapp}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(lead.created_at)}</span>
                  </div>
                  
                  <Button 
                    onClick={() => handleWhatsAppClick(lead.whatsapp)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Chamar no WhatsApp
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CRMPage;