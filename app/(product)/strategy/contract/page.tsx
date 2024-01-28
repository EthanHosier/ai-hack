"use effect";

import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import GptContract from "./_components/gpt-contract";

const Page = () => {
  return (
    <div className="bg-primary h-screen pt-8">
      <div className="w-[800px] mx-auto">
        <Card className="p-4">
          <CardContent>
            <CardContent className="overflow-y-auto h-[800px]">
              <GptContract />
            </CardContent>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Page;
