"use effect";

import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const Page = () => {
  return (
    <div className="bg-primary h-screen pt-8">
      <div className="w-[800px] mx-auto">
        <Card className="p-4">
          <CardContent>
            <CardContent></CardContent>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Page;
