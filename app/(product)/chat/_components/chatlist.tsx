import React from "react";
import { Message } from "./chatbot";
import Chat from "./chat";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Box, PackageOpen, Rocket, X } from "lucide-react";

interface ChatListProps {
  chats: Message[];
  isLoading: boolean;
  sendMessage: (value: string) => void;
}

const ChatList: React.FC<ChatListProps> = ({
  chats,
  isLoading,
  sendMessage,
}) => {
  return (
    <div className="p-4 pt-8 flex flex-col gap-4 overflow-y-auto h-[630px]">
      {chats.map((c: Message, i) => (
        <>
          <Chat key={i} message={c} />

          {chats.length === 3 && i === 2 && !isLoading && (
            <div className="flex justify-center w-full gap-4">
              <Dialog>
                <DialogTrigger>
                  <Card className="p-3 flex justify-between flex-col items-center text-sm size-[150px]">
                    <div className="size-20 rounded-full bg-muted flex items-center justify-center">
                      <Rocket className="size-10" />
                    </div>
                    Go-to-Market Strategy
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <Card
                className="p-3 flex justify-between flex-col items-center text-sm text-wrap size-[150px] text-center cursor-pointer"
                onClick={() => sendMessage("Logistics and Shipping")}
              >
                <div className="size-20 rounded-full bg-muted flex items-center justify-center">
                  <PackageOpen className="size-10" />
                </div>
                Logistics and Shipping
              </Card>
              <Card
                className="p-3 flex justify-between flex-col items-center text-sm text-wrap size-[150px] text-center cursor-pointer"
                onClick={() => sendMessage("No")}
              >
                <div className="size-20 rounded-full bg-muted flex items-center justify-center">
                  <X className="size-10" />
                </div>
                <h1 className="mb-3.5">No</h1>
              </Card>
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default ChatList;
