import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Info, MapPin } from "lucide-react";

const ImpactInfo = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-warning/20">
                  <AlertTriangle className="w-6 h-6 text-warning" />
                </div>
                <CardTitle className="text-lg">Serviços Afetados</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Entrega de encomendas</li>
                <li>• Coleta domiciliar</li>
                <li>• Sedex e PAC</li>
                <li>• Telegramas</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/20">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Regiões Afetadas</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Sudeste (parcial)</li>
                <li>• Sul (parcial)</li>
                <li>• Centro-Oeste</li>
                <li>• Nordeste (algumas cidades)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-success/20">
                  <Info className="w-6 h-6 text-success" />
                </div>
                <CardTitle className="text-lg">O que fazer?</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Aguarde normalização</li>
                <li>• Consulte rastreamento</li>
                <li>• Entre em contato com remetente</li>
                <li>• Considere alternativas</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImpactInfo;
