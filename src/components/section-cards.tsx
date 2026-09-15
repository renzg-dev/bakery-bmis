import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { TrendingUp as IconTrendingUp, TrendingDown } from "lucide-react";

interface SectionCardsProps {
  title: string;
  value: string | number;
  trend: number;
}

const SectionCards = ({ title, value, trend }: SectionCardsProps) => {
  return (
    <>
      <Card className="flex min-w-[250px] flex-1 flex-col gap-4">
        <CardHeader>
          <CardDescription>{title}</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {value}
          </CardTitle>
          <CardAction>
            <Badge
              variant="outline"
              className={trend >= 1 ? "text-green-800" : "text-red-700"}
            >
              <IconTrendingUp />
              {trend}%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default SectionCards;
