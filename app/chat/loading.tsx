import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const ChatLoading = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-primary">
      <Skeleton className="w-[500px] h-[800px] rounded-lg" />
    </div>
  );
};

export default ChatLoading;
