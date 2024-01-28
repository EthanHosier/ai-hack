import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-[900px]">
        <Skeleton className="w-[300px] h-[40px] mt-6" />
        <div className="flex w-full justify-between">
          <Skeleton className="w-[400px] h-[40px] mt-7" />
          <Skeleton className="w-[300px] h-[40px] mt-7" />
        </div>
        <div className="flex justify-between w-full">
          <Skeleton className="w-[280px] h-[120px] mt-6" />
          <Skeleton className="w-[280px] h-[120px] mt-6" />
          <Skeleton className="w-[280px] h-[120px] mt-6" />
        </div>
        <div className="flex justify-between w-full mt-4">
          <Skeleton className="w-[280px] h-[120px] mt-6" />
          <Skeleton className="w-[280px] h-[120px] mt-6" />
          <Skeleton className="w-[280px] h-[120px] mt-6" />
        </div>
        <div className="flex justify-between w-full mt-10">
          <Skeleton className="w-[600px] h-[370px] mt-6" />
          <Skeleton className="w-[250px] h-[370px] mt-6" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
