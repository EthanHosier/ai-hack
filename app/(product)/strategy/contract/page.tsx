import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import GptContract from "./_components/gpt-contract";
import { Button } from "@/components/ui/button";
import DownloadPdf from "./_components/download-pdf";
import Link from "next/link";

const Page = () => {
  return (
    <div className="bg-muted h-screen pt-8">
      <div className="w-[800px] mx-auto">
        <Card className="p-4">
          <CardContent>
            <CardContent className="overflow-y-auto h-[600px]">
              <GptContract />
            </CardContent>
          </CardContent>
        </Card>
        <div className="w-full flex justify-between mt-4">
          <DownloadPdf />
          <Link href="/dashboard">
            <Button size={"lg"}>Continue</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
