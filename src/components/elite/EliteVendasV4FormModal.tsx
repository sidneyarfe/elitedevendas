import { useState, FormEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface EliteVendasV4FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EliteVendasV4FormModal = ({ isOpen, onClose }: EliteVendasV4FormModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value);
    setFormData({ ...formData, whatsapp: formatted });
    if (errors.whatsapp) {
      setErrors({ ...errors, whatsapp: "" });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Nome deve ter pelo menos 3 caracteres";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    // Validate WhatsApp
    const whatsappNumbers = formData.whatsapp.replace(/\D/g, "");
    if (!whatsappNumbers) {
      newErrors.whatsapp = "WhatsApp é obrigatório";
    } else if (whatsappNumbers.length !== 11) {
      newErrors.whatsapp = "WhatsApp deve ter 11 dígitos (DDD + número)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const whatsappNumbers = formData.whatsapp.replace(/\D/g, "");
      
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        whatsapp: whatsappNumbers,
      };

      console.log("Enviando dados:", payload);
      
      // Try to send to webhook with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout
      
      try {
        const response = await fetch("https://sidneyarfe.app.n8n.cloud/webhook/33e3577f-f51c-4a31-ac4b-4aca45f21b94", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        console.log("Resposta do webhook:", response.status);

        if (!response.ok) {
          console.warn("Webhook retornou erro, mas prosseguindo com redirecionamento");
        }
      } catch (fetchError) {
        console.warn("Erro ao enviar para webhook, mas prosseguindo:", fetchError);
        // Continue anyway - don't block the user from accessing checkout
      }

      // Always redirect to checkout regardless of webhook status
      console.log("Redirecionando para checkout...");
      onClose();
      
      // Reset form
      setFormData({ name: "", email: "", whatsapp: "" });
      
      // Redirect to checkout
      window.location.href = "https://pay.kiwify.com.br/5zvVurg";
      
    } catch (error) {
      console.error("Erro inesperado:", error);
      setSubmitError("Erro ao processar. Clique no botão abaixo para ir direto ao checkout.");
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-black text-center">
            🎯 Garanta Sua Vaga!
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Preencha os dados abaixo para continuar
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-semibold">
              Nome completo *
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Seu nome completo"
              className={errors.name ? "border-red-500" : ""}
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-semibold">
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="seu@email.com"
              className={errors.email ? "border-red-500" : ""}
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="whatsapp" className="text-sm font-semibold">
              WhatsApp com DDD *
            </Label>
            <Input
              id="whatsapp"
              type="tel"
              value={formData.whatsapp}
              onChange={handleWhatsAppChange}
              placeholder="(91) 99999-9999"
              maxLength={15}
              className={errors.whatsapp ? "border-red-500" : ""}
              disabled={isSubmitting}
            />
            {errors.whatsapp && (
              <p className="text-sm text-red-500">{errors.whatsapp}</p>
            )}
          </div>

          {submitError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 space-y-2">
              <p className="text-sm text-red-700">{submitError}</p>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  window.location.href = "https://pay.kiwify.com.br/5zvVurg";
                }}
                className="w-full text-sm bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Ir para o Checkout
              </button>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-workshop text-black font-bold text-lg py-6 rounded-xl hover:scale-105 transition-transform"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processando...
              </>
            ) : (
              "GARANTIR MINHA VAGA 🚀"
            )}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            🔒 Seus dados estão seguros e protegidos
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EliteVendasV4FormModal;
