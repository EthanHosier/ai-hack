import React from "react";
import { Message } from "./chatbot";
import { cn } from "@/lib/utils";

interface ChatProps {
  message: Message;
}

const Chat: React.FC<ChatProps> = ({ message }) => {
  return (
    <div
      className={cn(
        "w-full flex",
        { "items-start flex-row-reverse": message.user === "ai" },
        { "items-end": message.user === "user" }
      )}
    >
      <div className="flex-1 min-w-12"></div>
      <div
        className={cn("text-black rounded-xl p-4", {
          "bg-muted text-black rounded-bl-none": message.user === "ai",
          "bg-primary rounded-br-none": message.user === "user",
        })}
      >
        {message.text}
      </div>
    </div>
  );
};

export default Chat;
