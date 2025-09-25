import workshopLogo from "@/assets/workshop-elite-logo.png";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-8 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img 
            src={workshopLogo}
            alt="Elite de Vendas"
            className="h-12 w-auto"
          />
        </div>
        
        {/* Copyright and Company Info */}
        <div className="space-y-2 text-sm">
          <p className="font-medium">
            COPYRIGHT 2025 - ALAVANC CONSULTORIA EMPRESARIAL
          </p>
          
          <p>
            CNPJ: 30.177.445/0001-02
          </p>
          
          <p>
            Av. Generalíssimo Deodoro, 1893 - Nazaré.<br />
            Belém - PA, 66040-140
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;