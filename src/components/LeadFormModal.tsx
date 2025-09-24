import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadFormModal = ({ isOpen, onClose }: LeadFormModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar campos obrigatórios
    if (!formData.name.trim() || !formData.email.trim() || !formData.whatsapp.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    // Validar formato do WhatsApp (números com DDD)
    const whatsappRegex = /^\(\d{2}\)\s?\d{4,5}-?\d{4}$|^\d{2}\s?\d{4,5}-?\d{4}$|^\d{10,11}$/;
    if (!whatsappRegex.test(formData.whatsapp.replace(/\s/g, ""))) {
      toast({
        title: "WhatsApp inválido",
        description: "Por favor, insira um número de WhatsApp válido com DDD.",
        variant: "destructive",
      });
      return;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Salvar no Supabase
      const { error } = await supabase
        .from('leads')
        .insert([formData]);

      if (error) {
        throw error;
      }

      toast({
        title: "Sucesso!",
        description: "Seus dados foram salvos. Redirecionando para o checkout...",
      });

      // Fechar modal
      onClose();
      
      // Redirecionar para o checkout após um breve delay
      setTimeout(() => {
        window.open("https://pay.kiwify.com.br/5zvVurg", "_blank");
      }, 1000);

    } catch (error) {
      console.error("Erro ao salvar lead:", error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao salvar seus dados. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const formatWhatsApp = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, "");
    
    // Aplica máscara (XX) XXXXX-XXXX
    if (numbers.length <= 2) {
      return `(${numbers}`;
    } else if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    }
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value);
    setFormData(prev => ({
      ...prev,
      whatsapp: formatted
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md w-full mx-4">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-gradient">
            Garanta sua vaga!
          </DialogTitle>
          <p className="text-center text-muted-foreground">
            Preencha seus dados para continuar com a inscrição
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Nome completo *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Digite seu nome completo"
              value={formData.name}
              onChange={handleInputChange("name")}
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="seuemail@exemplo.com"
              value={formData.email}
              onChange={handleInputChange("email")}
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <Label htmlFor="whatsapp">WhatsApp com DDD *</Label>
            <Input
              id="whatsapp"
              type="tel"
              placeholder="(85) 99999-9999"
              value={formData.whatsapp}
              onChange={handleWhatsAppChange}
              maxLength={15}
              required
              disabled={isLoading}
            />
          </div>

          <div className="pt-4">
            <Button 
              type="submit" 
              className="w-full bg-workshop-gold hover:bg-workshop-gold/90 text-black font-bold"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processando...
                </>
              ) : (
                "Continuar para o Checkout"
              )}
            </Button>
          </div>

          <p className="text-xs text-center text-muted-foreground">
            Seus dados estão seguros e não serão compartilhados com terceiros.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};