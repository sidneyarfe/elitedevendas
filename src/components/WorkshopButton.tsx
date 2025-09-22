import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface WorkshopButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  onClick?: () => void;
}

const WorkshopButton = ({ 
  children, 
  className, 
  variant = "default",
  size = "lg",
  onClick 
}: WorkshopButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default behavior if no custom onClick is provided
      window.open("https://wa.me/5591999999999?text=Quero%20garantir%20minha%20vaga%20no%20Workshop%20Elite%20de%20Vendas", "_blank");
    }
  };

  return (
    <Button
      onClick={handleClick}
      size={size}
      className={cn(
        "bg-gradient-workshop hover:bg-gradient-workshop text-black font-bold transition-all duration-300 hover:scale-105 hover:shadow-glow border-0 min-h-[60px] px-3 md:px-6 py-3 md:py-4 rounded-xl text-xs md:text-base font-extrabold tracking-tight md:tracking-wide uppercase shadow-lg whitespace-normal text-center w-full leading-relaxed flex items-center justify-center break-words hyphens-auto",
        variant === "outline" && "bg-transparent border-workshop-gold border-2 text-workshop-gold hover:bg-gradient-workshop hover:text-black",
        variant === "ghost" && "bg-transparent text-workshop-gold hover:bg-gradient-workshop-subtle hover:text-black",
        className
      )}
    >
      {children}
    </Button>
  );
};

export default WorkshopButton;