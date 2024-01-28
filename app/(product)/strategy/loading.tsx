import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col items-center">
      <Skeleton className="w-[250px] h-[20px] mt-8" />
      <Skeleton className="w-[800px] h-[400px] mt-8" />
      <div className="mt-16 flex justify-between w-[800px]">
        <Skeleton className="w-[390px] h-[300px]" />
        <Skeleton className="w-[390px] h-[300px]" />
      </div>
    </div>
  );
};

export default Loading;
