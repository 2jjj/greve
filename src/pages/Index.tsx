import StatusHero from "@/components/StatusHero";
import UpdatesTimeline from "@/components/UpdatesTimeline";
import ImpactInfo from "@/components/ImpactInfo";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { formatInTimeZone } from "date-fns-tz";
import { ptBR } from "date-fns/locale";

const Index = () => {
  // Dados mockados - em produção viriam de uma API
  const currentStatus: "operational" | "strike" | "partial" = "partial";
  const lastUpdate = formatInTimeZone(
    new Date(),
    "America/Sao_Paulo",
    "d 'de' MMMM 'de' yyyy 'às' HH:mm",
    { locale: ptBR }
  );

  const updates = [
    {
      id: 1,
      date: "10 Nov 2025",
      time: "14:30",
      title: "Operação parcial mantida",
      description:
        "Os Correios continuam operando com capacidade reduzida. Algumas agências permanecem fechadas e entregas podem sofrer atrasos de até 5 dias úteis.",
    },
    {
      id: 2,
      date: "09 Nov 2025",
      time: "10:15",
      title: "Negociações em andamento",
      description:
        "Sindicatos e direção dos Correios se reuniram hoje para discutir as reivindicações. Há expectativa de acordo nas próximas 48 horas.",
    },
    {
      id: 3,
      date: "08 Nov 2025",
      time: "16:45",
      title: "Início da paralisação parcial",
      description:
        "Trabalhadores de diversas unidades iniciaram paralisação parcial. Serviços essenciais continuam funcionando, mas com atrasos significativos.",
    },
  ];

  return (
    <div className="min-h-screen">
      <StatusHero status={currentStatus} lastUpdate={lastUpdate} />
      
      <UpdatesTimeline updates={updates} />
      
      <ImpactInfo />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Quer mais informações?
          </h3>
          <p className="text-muted-foreground mb-6">
            Acesse o site oficial dos Correios para informações detalhadas sobre rastreamento
            e atendimento.
          </p>
          <Button size="lg" className="gap-2" asChild>
            <a href="https://www.correios.com.br" target="_blank" rel="noopener noreferrer">
              Visitar Site Oficial
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>

      <footer className="py-8 bg-muted/30 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            Este site é independente e não tem afiliação oficial com os Correios.
          </p>
          <p className="mt-2">
            Informações atualizadas regularmente baseadas em fontes públicas.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
