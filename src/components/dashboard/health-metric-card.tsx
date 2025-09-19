import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LucideIcon, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { HeartBeatIcon } from "../shared/animated-icons";

type HealthMetricCardProps = {
  title: string;
  value: string;
  unit?: string;
  icon: LucideIcon;
  trend?: "up" | "down" | "stable";
  trendLabel?: string;
};

const trendIcons = {
  up: TrendingUp,
  down: TrendingDown,
  stable: Minus,
};

export function HealthMetricCard({
  title,
  value,
  unit,
  icon: Icon,
  trend,
  trendLabel,
}: HealthMetricCardProps) {

  const TrendIcon = trend ? trendIcons[trend] : null;

  const cardIcon = title === "Blood Pressure" ? <HeartBeatIcon className="h-6 w-6 text-muted-foreground"/> : <Icon className="h-6 w-6 text-muted-foreground" />;

  return (
    <Card className="hover:shadow-md transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {cardIcon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {value}
          {unit && <span className="ml-1 text-base font-normal text-muted-foreground">{unit}</span>}
        </div>
        {trend && TrendIcon && (
          <p className={cn("text-xs text-muted-foreground flex items-center",
            trend === 'up' && 'text-red-500',
            trend === 'down' && 'text-green-500'
          )}>
            <TrendIcon className="h-4 w-4 mr-1" />
            {trendLabel}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
