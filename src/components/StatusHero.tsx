import { Package } from "lucide-react";
import StatusBadge from "./StatusBadge";

interface StatusHeroProps {
  status: "operational" | "strike" | "partial";
  lastUpdate: string;
}

const StatusHero = ({ status, lastUpdate }: StatusHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-20">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.1))]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          <div className="bg-secondary/20 backdrop-blur-sm p-4 rounded-full">
            <Package className="w-16 h-16 text-secondary" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Status dos Correios
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90">
            Acompanhe em tempo real a situação dos serviços dos Correios
          </p>
          
          <div className="pt-4">
            <StatusBadge status={status} />
          </div>
          
          <p className="text-sm text-primary-foreground/70">
            Última atualização: {lastUpdate}
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatusHero;
