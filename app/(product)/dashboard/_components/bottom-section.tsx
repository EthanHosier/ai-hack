import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import {
  Briefcase,
  Building,
  ChevronRight,
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
        <Card className="mt-8 p-8 pb-2 w-[650px] relative">
          <CardTitle>John Doe, .... Specialist</CardTitle>
          <CardContent>
            <div className="flex justify-between mt-4">
              <div className="flex-1">
                <h1 className="text-muted-foreground flex items-center">
                  <PoundSterling className="size-5 mr-4" /> Plus Company Stock
                  Options
                </h1>
                <h2 className="text-black flex items-center mt-4 text-sm">
                  <StarIcon className="size-5 mr-4" /> Junior and Mid Level
                </h2>
                <h2 className="text-black flex items-center mt-4 text-sm">
                  <MapPin className="size-5 mr-4" />{" "}
                  <Badge className="text-bold">London</Badge>
                </h2>
                <h2 className="text-black flex items-center mt-4 text-sm">
                  <Building className="size-5 mr-4" /> 2-5 days a week in office
                </h2>

                <div className="mt-8 flex">
                  <Briefcase className="size-5" />
                  <div className="ml-2">
                    {[
                      "Fintech",
                      "BTB",
                      "Fundraising",
                      "Financial Services",
                      "Saas",
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
                ></img>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li className="mt-4">
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.
                </li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BottomSection;
