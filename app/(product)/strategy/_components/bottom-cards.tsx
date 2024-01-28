import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

const BottomCards = () => {
  return (
    <div className="flex w-full justify-center gap-6 bg-muted pt-8 pb-8">
      <Card className="w-[390px]">
        <CardHeader className="bg-[#D5D5D5] rounded-t-lg font-semibold text-xl">
          Professional Experience
        </CardHeader>
        <CardContent>
          <h1 className="font-semibold mt-2">
            Senior Consultant, Global Expansion Advisor, Accenture (2019-2022)
          </h1>
          <ul style={{ listStyleType: "disc" }} className="mt-2 ml-4">
            <li>
              Led a team advising European companies on market entry strategies,
              providing insights on regulatory landscapes, consumer trends, and
              distribution channels.
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card className="w-[390px]">
        <CardHeader className="bg-[#D5D5D5] rounded-t-lg font-semibold text-xl">
          Project Experience
        </CardHeader>
        <CardContent>
          <h1 className="font-semibold mt-2">
            Expansion Strategy for Artisanal Coffee Chain (UK to Germany) (2019)
          </h1>
          <ul style={{ listStyleType: "disc" }} className="mt-2 ml-4">
            <li>Lead Consultant</li>
            <li className="mt-2">
              Successfully guided the UK-based coffee chain in establishing a
              presence in major German cities by focusing on market analysis,
              local partnerships, and consumer engagement strategies.
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default BottomCards;
