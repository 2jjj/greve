import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";

interface Update {
  id: number;
  date: string;
  time: string;
  title: string;
  description: string;
}

interface UpdatesTimelineProps {
  updates: Update[];
}

const UpdatesTimeline = ({ updates }: UpdatesTimelineProps) => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <Clock className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">Últimas Atualizações</h2>
        </div>

        <div className="space-y-6">
          {updates.map((update, index) => (
            <Card key={update.id} className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-xl">{update.title}</CardTitle>
                  <div className="flex flex-col items-end text-sm text-muted-foreground whitespace-nowrap">
                    <span className="font-medium">{update.date}</span>
                    <span>{update.time}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{update.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpdatesTimeline;
