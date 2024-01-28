import React from "react";
import {
  ArrowDown,
  ArrowUp,
  CheckCheck,
  Computer,
  DollarSign,
  FileCheck,
  LineChart,
  Users,
} from "lucide-react";
import KpiCard from "./kpi-card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DatePickerWithRange } from "./date-range-picker";
const TopCards = () => {
  return (
    <div className="bg-muted p-4 flex justify-center">
      <div className="w-[900px]">
        <h1 className="text-3xl font-semibold">
          Welcome back, <span className="text-primary">Sahib!</span>
        </h1>

        <div className="flex justify-between mt-8">
          <Tabs defaultValue="account" className="rounded-lg">
            <TabsList>
              <TabsTrigger value="account">Overview</TabsTrigger>
              <TabsTrigger value="password">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
          </Tabs>
          <DatePickerWithRange />
        </div>

        <div className="flex gap-4 mt-4">
          <KpiCard
            title={
              <h1>
                Leads {""}
                <span className="text-sm">
                  <span>/week</span>
                </span>
              </h1>
            }
            value={
              <p className="text-2xl -mt-5 font-bold flex">
                100{" "}
                <span className="text-green-600 flex text-sm items-center justify-center ml-auto">
                  <ArrowUp className="h-4" />
                  20%
                </span>
              </p>
            }
            comment={
              <p className="text-muted-foreground text-sm">Target: 70</p>
            }
            icon={<Users className="text-muted-foreground" />}
          />
          <KpiCard
            title={
              <h1>
                Close <span className="text-xs">/week</span>
              </h1>
            }
            value={
              <p className="text-2xl -mt-5 font-bold flex">
                20{" "}
                <span className="text-red-600 flex text-sm items-center justify-center ml-auto">
                  <ArrowDown className="h-4" />
                  60%
                </span>
              </p>
            }
            comment={
              <p className="text-muted-foreground text-sm">Target: 21</p>
            }
            icon={<CheckCheck className="text-muted-foreground" />}
          />
          <KpiCard
            title={<h1>Online Traffic</h1>}
            value={<p className="text-2xl -mt-5 font-bold">100</p>}
            comment={
              <p className="text-muted-foreground text-sm">Target: 70</p>
            }
            icon={<Computer className="text-muted-foreground" />}
          />
        </div>
      </div>
    </div>
  );
};

export default TopCards;
