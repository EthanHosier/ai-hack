import React from "react";
import { Message } from "./chatbot";
import { cn } from "@/lib/utils";
import { SyncLoader } from "react-spinners";

interface ChatProps {
  message: Message;
}

const Chat: React.FC<ChatProps> = ({ message }) => {
  return (
    <div
      className={cn(
        "w-full flex",
        { "items-start flex-row-reverse": message.role === "assistant" },
        { "items-end": message.role === "user" }
      )}
    >
      <div className="flex-1 min-w-12"></div>
      <div
        className={cn("text-black rounded-xl p-4", {
          "bg-muted text-black rounded-bl-none": message.role === "assistant",
          "bg-primary rounded-br-none": message.role === "user",
        })}
      >
        {message.content === "" ? <SyncLoader size={10} /> : message.content}
      </div>
    </div>
  );
};

export default Chat;
