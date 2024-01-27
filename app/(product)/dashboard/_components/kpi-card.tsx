import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const KpiCard = ({
  title,
  value,
  comment,
  icon,
  className,
}: {
  title: JSX.Element;
  value: JSX.Element;
  comment: JSX.Element;
  icon: JSX.Element;
  className?: string;
}) => {
  return (
    <Card className={cn("w-[300px]", className)}>
      <CardHeader>
        <CardTitle className="text-sm font-semibold">
          <div className="flex justify-between">
            {title}
            {icon}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {value}
        {comment}
      </CardContent>
    </Card>
  );
};
export default KpiCard;
