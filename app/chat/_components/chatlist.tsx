import React from "react";
import { Message } from "./chatbot";
import Chat from "./chat";
import { cn } from "@/lib/utils";

interface ChatListProps {
  chats: Message[];
}

const ChatList: React.FC<ChatListProps> = ({ chats }) => {
  return (
    <div className="p-4 pt-8 flex flex-col gap-4">
      {chats.map((c: Message, i) => (
        <Chat message={c} />
      ))}
    </div>
  );
};

export default ChatList;
