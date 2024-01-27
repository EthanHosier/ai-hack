import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

const BottomCards = () => {
  return (
    <div className="flex w-full justify-center gap-6 bg-muted pt-8 pb-8">
      <Card className="w-[390px]">
        <CardHeader className="bg-[#D5D5D5] rounded-t-lg font-semibold text-xl">
          Role
        </CardHeader>
        <CardContent>
          <h1 className="font-semibold mt-2">Who you are</h1>
          <ul style={{ listStyleType: "disc" }} className="mt-2 ml-4">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className="mt-2">
              Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </li>
            <li className="mt-2">
              Etiam elit est, hendrerit sit amet, tincidunt ac, viverra sed,
              nulla.
            </li>
            <li className="mt-2">Donec porta diam eu massa.</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="w-[390px]">
        <CardHeader className="bg-[#D5D5D5] rounded-t-lg font-semibold text-xl">
          Company
        </CardHeader>
        <CardContent>
          <h1 className="font-semibold mt-2">Company mission</h1>
          <ul style={{ listStyleType: "disc" }} className="mt-2 ml-4">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className="mt-2">
              Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </li>
            <li className="mt-2">
              Etiam elit est, hendrerit sit amet, tincidunt ac, viverra sed,
              nulla.
            </li>
            <li className="mt-2">Donec porta diam eu massa.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default BottomCards;
