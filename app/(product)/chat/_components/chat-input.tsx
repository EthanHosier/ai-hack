import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Grid3X3, Send } from "lucide-react";
import React from "react";

interface ChatInputProps {
  onSubmit: (value: string) => void;
  isStreaming: boolean;
  onStop: () => void;
  disabled: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({
  onSubmit,
  isStreaming,
  onStop,
  disabled,
}) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (isStreaming) {
      onStop();
    } else {
      onSubmit(e.target.text.value);
      e.target.text.value = "";
    }
  };

  return (
    <form
      className="w-full bg-muted rounded-xl p-4 flex items-center gap-4"
      onSubmit={handleSubmit}
    >
      <Grid3X3 className="size-8" />

      <textarea
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
