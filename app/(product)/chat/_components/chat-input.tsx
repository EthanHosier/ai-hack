"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Grid3X3, Send } from "lucide-react";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

interface ChatInputProps {
  onSubmit: (value: string) => void;
  isStreaming: boolean;
  onStop: () => void;
  disabled: boolean;
  preview?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({
  onSubmit,
  isStreaming,
  onStop,
  disabled,
  preview,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null); // Specify the type as HTMLTextAreaElement

  useEffect(() => {
    // Focus on the textarea when the component mounts
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (isStreaming) {
      onStop();
    } else {
      onSubmit(e.target.text.value);
      e.target.text.value = "";
    }
  };

  if (preview)
    return (
      <div className="w-full bg-muted rounded-xl p-4 items-center gap-4 flex justify">
        <Grid3X3 className="size-8" />
        <Link href="/chat" className="flex-1 flex items-center justify-center">
          {/* <Input className="rotating-border" /> */}
          <div className="bblock h-5 bg-white glow -ml-4 w-[320px] -mt-3.5" />

          <Input className="z-100 absolute bg-white w-[330px] rounded-lg h-[32px] mt-[2px] p-1 focus:border-transparent border-transparent focus:outline-none outline-none ring-transparent focus:ring-transparent" />
        </Link>
        <Button
          type="button"
          size="icon"
          className="aspect-square size-10"
          disabled={isStreaming || disabled}
        >
          <Send className="size-5 text-black" />
        </Button>
      </div>
    );

  return (
    <form
      className="w-full bg-muted rounded-xl p-4 flex items-center gap-4"
      onSubmit={handleSubmit}
    >
      <Grid3X3 className="size-8" />

      <textarea
        ref={textareaRef}
        disabled={disabled}
        name="text"
        className={cn(
          "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
        )}
      />
      <Button
        size="icon"
        className="aspect-square size-10"
        disabled={isStreaming || disabled}
      >
        <Send className="size-5 text-black" />
      </Button>
    </form>
  );
};

export default ChatInput;
