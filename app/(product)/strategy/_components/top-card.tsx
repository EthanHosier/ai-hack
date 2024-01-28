import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Briefcase,
  Building,
  ChevronRight,
  Languages,
  MapPin,
  PoundSterling,
  Sparkles,
  StarIcon,
} from "lucide-react";
import React from "react";
import SelectBtn from "./select-btn";
const TopCard = () => {
  return (
    <div className="w-full bg-primary flex flex-col items-center p-8">
      <div className="flex w-full items-center justify-center gap-2">
        <div className="rounded-full p-1.5 bg-black"></div>
        <div className="rounded-full p-1 bg-black"></div>
        {Array.from({ length: 10 }, (_, index) => index).map((i) => (
          <div className="rounded-full p-0.5 border border-black" key={i}></div>
        ))}
      </div>
      <Card className="mt-8 p-8 pb-2 w-[800px] relative">
        <CardTitle>
          John Doe, International Business Expansion Consultant
        </CardTitle>
        <CardContent>
          <div className="flex justify-between mt-4">
            <div className="flex-1">
              <h1 className="text-muted-foreground flex items-center">
                {/* <PoundSterling className="-mr-1 size-4" />{" "}
                <PoundSterling className="size-4" /> */}
              </h1>
              <h2 className="text-black flex items-center mt-4 text-sm">
                <Languages className="size-5 mr-4" /> English (Fluent), German
                (Native), French (Conversational)
              </h2>
              <h2 className="text-black flex items-center mt-4 text-sm">
                <MapPin className="size-5 mr-4" />{" "}
                <Badge className="text-bold">Munich, Germany</Badge>
              </h2>
              <h2 className="text-black flex items-center mt-4 text-sm">
                <Building className="size-5 mr-4" /> 2-5 days a week in office
              </h2>

              <div className="mt-8 flex">
                <Briefcase className="size-5" />
                <div className="ml-2 gap-1">
                  {[
                    "GTM",
                    "Strategies",
                    "Supply Chains",
                    "Market Analysis",
                    "Internal Expansion",
                    "Beverages",
                  ].map((e, i) => (
                    <Badge className="gap-1 ml-1" key={i}>
                      {e}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-1 justify-center flex border-l-2">
              <img
                src="/images/person.avif"
                className="rounded-2xl aspect-square w-[200px] h-[200px] object-cover"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-row-reverse">
          <SelectBtn />
        </CardFooter>
        <div className="rounded-full size-10 flex items-center justify-center aspect-square bg-white shadow-lg cursor-pointer absolute -right-12 ">
          <ChevronRight className="" />
        </div>
      </Card>
    </div>
  );
};

export default TopCard;
