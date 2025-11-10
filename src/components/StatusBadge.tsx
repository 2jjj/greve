import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";

interface StatusBadgeProps {
  status: "operational" | "strike" | "partial";
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const statusConfig = {
    operational: {
      label: "Operando Normalmente",
      icon: CheckCircle2,
      variant: "default" as const,
      className: "bg-success text-success-foreground hover:bg-success/90",
    },
    strike: {
      label: "Em Greve",
      icon: XCircle,
      variant: "destructive" as const,
      className: "bg-destructive text-destructive-foreground",
    },
    partial: {
      label: "Operação Parcial",
      icon: AlertCircle,
      variant: "secondary" as const,
      className: "bg-warning text-warning-foreground hover:bg-warning/90",
    },
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <Badge variant={config.variant} className={`${config.className} text-lg px-4 py-2 gap-2`}>
      <Icon className="w-5 h-5" />
      {config.label}
    </Badge>
  );
};

export default StatusBadge;
