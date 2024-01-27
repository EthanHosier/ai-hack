import { Card } from "@/components/ui/card";
import React from "react";
import KpiCard from "./kpi-card";
import { DollarSign, PieChartIcon, TrendingUp } from "lucide-react";

const MiddleSection = () => {
  return (
    <div className="bg-primary p-4 flex justify-center">
      <div className="w-[900px]">
        <div className="flex gap-4 my-4">
          <KpiCard
            className="shadow-lg bg-muted"
            title={<h1>Gainshare</h1>}
            value={
              <p className="text-2xl -mt-5 font-bold flex">
                6%
                {/* <span className="text-green-600 flex text-sm items-center justify-center ml-auto">
                <ArrowUp className="h-4" />
                20%
              </span> */}
              </p>
            }
            comment={
              // <p className="text-muted-foreground text-sm">Target: 70</p>
              <></>
            }
            icon={<PieChartIcon />}
          />
          <KpiCard
            className="shadow-lg bg-muted"
            title={<h1>Progress</h1>}
            value={
              <p className="text-2xl -mt-5 font-bold flex">
                20{" "}
                {/* <span className="text-red-600 flex text-sm items-center justify-center ml-auto">
                <Arrow className="h-4" />
                60%
              </span> */}
              </p>
            }
            comment={
              // <p className="text-muted-foreground text-sm">Target: 21</p>
              <></>
            }
            icon={<TrendingUp />}
          />
          <KpiCard
            className="shadow-lg bg-muted"
            title={<h1>Incremental Revenue</h1>}
            value={<p className="text-2xl -mt-5 font-bold">£100k</p>}
            comment={
              // <p className="text-muted-foreground text-sm">Target: 70</p>
              <></>
            }
            icon={<DollarSign />}
          />
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
