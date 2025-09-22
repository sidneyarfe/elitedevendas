import { cn } from "@/lib/utils";

interface WorkshopSectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "default" | "card" | "gradient";
  padding?: "default" | "large" | "none";
  id?: string;
}

const WorkshopSection = ({ 
  children, 
  className, 
  background = "default",
  padding = "default",
  id
}: WorkshopSectionProps) => {
  return (
    <section 
      id={id}
      className={cn(
        "w-full",
        background === "card" && "bg-card shadow-card",
        background === "gradient" && "bg-gradient-workshop-subtle",
        padding === "default" && "py-16 px-4",
        padding === "large" && "py-24 px-4",
        padding === "none" && "",
        className
      )}
    >
      <div className="container mx-auto max-w-6xl">
        {children}
      </div>
    </section>
  );
};

export default WorkshopSection;