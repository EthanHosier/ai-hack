import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import {
  Briefcase,
  Building,
  ChevronRight,
  Languages,
  MapPin,
  PoundSterling,
  StarIcon,
} from "lucide-react";
import React from "react";
import SelectBtn from "../../strategy/_components/select-btn";
import { Badge } from "@/components/ui/badge";

const BottomSection = () => {
  return (
    <div className="bg-muted p-4 pb-8 flex justify-center">
      <div className="w-[900px] flex gap-[50px]">
        <Card className="mt-8 p-8 pb-2 w-[800px] relative">
          <CardTitle>
            John Doe, International Business Expansion Consultant
          </CardTitle>
          <CardContent>
            <div className="flex justify-between mt-4">
              <div className="flex-1">
                <h1 className="text-muted-foreground flex items-center">
                  <PoundSterling className="-mr-1 size-4" />{" "}
                  <PoundSterling className="size-4" />
                </h1>
                <h2 className="text-black flex items-center mt-4 text-xs">
                  <Languages className="size-5 mr-4" /> English (Fluent), German
                  (Native), French (Conversational)
                </h2>
                <h2 className="text-black flex items-center mt-4 text-xs">
                  <MapPin className="size-5 mr-4" />{" "}
                  <Badge className="text-bold">Munich, Germany</Badge>
                </h2>
                <h2 className="text-black flex items-center mt-4 text-xs">
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
                      <Badge className="gap-1 ml-1 text-xs" key={i}>
                        <span className="text-xs">{e}</span>
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
        </Card>

        <Card className="mt-8 p-8 pb-2 w-[300px]">
          <CardTitle>Key Updates</CardTitle>
          <CardContent>
            <div className="mt-2">
              <ol style={{ listStyleType: "disc" }}>
                <li className="mt-4">
                  Exceeded leads target! 100 leads at a 20% increase, surpassing
                  the goal of 70.
                </li>
                <li className="mt-4">Exceeded online traffic target by 43%!</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BottomSection;
