import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="bg-primary h-screen pt-8">
      <div className="w-[800px] mx-auto">
        <Skeleton className="w-full h-10" />
      </div>
    </div>
  );
};

export default Loading;
