import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
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

  const validateForm = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.whatsapp.trim()) {
      toast.error("Campos obrigatórios", {
        description: "Por favor, preencha todos os campos.",
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Email inválido", {
        description: "Por favor, insira um email válido.",
      });
      return false;
    }

    const whatsappRegex = /^\(\d{2}\)\s?\d{4,5}-?\d{4}$|^\d{2}\s?\d{4,5}-?\d{4}$|^\d{10,11}$/;
    if (!whatsappRegex.test(formData.whatsapp.replace(/\s/g, ""))) {
      toast.error("WhatsApp inválido", {
        description: "Por favor, insira um número de WhatsApp válido com DDD.",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('leads')
        .insert([formData]);

      if (error) {
        throw error;
      }

      toast.success("Sucesso!", {
        description: "Seus dados foram salvos. Redirecionando para o checkout...",
      });

      onClose();
      
      setTimeout(() => {
        window.open("https://pay.kiwify.com.br/5zvVurg", "_blank");
      }, 1000);

    } catch (error) {
      console.error("Erro ao salvar lead:", error);
      toast.error("Erro", {
        description: "Ocorreu um erro ao salvar seus dados. Tente novamente.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    
    if (numbers.length <= 2) {
      return `(${numbers}`;
    } else if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    }
  };

  const handleInputChange = (field: string, value: string) => {
    if (field === "whatsapp") {
      value = formatWhatsApp(value);
    }
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="sm:max-w-md w-full mx-4 sm:mx-8 my-4 sm:my-8 max-h-[80vh] sm:max-h-[85vh] overflow-y-auto transform transition-all duration-200 ease-out flex flex-col justify-center">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold text-center text-gradient">
            Garanta sua vaga!
          </DialogTitle>
          <p className="text-center text-muted-foreground text-sm sm:text-base">
            Preencha seus dados para continuar com a inscrição
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4" autoComplete="on">
          <div>
            <Label htmlFor="name">Nome completo *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Digite seu nome completo"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
              disabled={isLoading}
              autoComplete="name"
            />
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="seuemail@exemplo.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
              disabled={isLoading}
              autoComplete="email"
            />
          </div>

          <div>
            <Label htmlFor="whatsapp">WhatsApp com DDD *</Label>
            <Input
              id="whatsapp"
              type="tel"
              placeholder="(85) 99999-9999"
              value={formData.whatsapp}
              onChange={(e) => handleInputChange("whatsapp", e.target.value)}
              maxLength={15}
              required
              disabled={isLoading}
              autoComplete="tel"
            />
          </div>

          <div className="pt-4">
            <Button 
              type="submit" 
              className="w-full bg-workshop-gold hover:bg-workshop-gold/90 text-black font-bold transition-colors duration-200"
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