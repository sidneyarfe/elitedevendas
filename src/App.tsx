import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EliteVendasPage from "./pages/EliteVendasPage";
import EliteVendasPageV2 from "./pages/EliteVendasPageV2";
import EliteVendasPageV3 from "./pages/EliteVendasPageV3";
import EliteVendasObrigadoV1 from "./pages/EliteVendasObrigadoV1";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/elitedevendas" element={<EliteVendasPage />} />
          <Route path="/elitedevendas-v2" element={<EliteVendasPageV2 />} />
          <Route path="/elitedevendas-v3" element={<EliteVendasPageV3 />} />
          <Route path="/elitedevendas-obg-v1" element={<EliteVendasObrigadoV1 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
