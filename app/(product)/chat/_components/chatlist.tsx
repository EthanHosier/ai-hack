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
import ProfilePreview from "./profile-preview";

interface Profile {
  imageUrl: string;
  name: string;
  previouslyAt: string;
  occupation: string;
}

const profiles: Profile[] = [
  {
    imageUrl: "/images/person.avif",
    name: "John Doe",
    previouslyAt: "Google",
    occupation: "Consultant",
  },
  {
    imageUrl: "/images/person1.jpg",
    name: "Jane Smith",
    previouslyAt: "Microsoft",
    occupation: "Analyst",
  },
  {
    imageUrl: "/images/person2.avif",
    name: "Bob Johnson",
    previouslyAt: "Amazon",
    occupation: "Manager",
  },
  {
    imageUrl: "/images/person3.jpeg",
    name: "Emily Brown",
    previouslyAt: "Facebook",
    occupation: "Engineer",
  },
];

interface ChatListProps {
  chats: Message[];
  isLoading: boolean;
  sendMessage: (value: string) => void;
  preview?: boolean;
}

const ChatList: React.FC<ChatListProps> = ({
  chats,
  isLoading,
  sendMessage,
  preview,
}) => {
  return (
    <div
      className={cn("p-4 pt-8 flex flex-col gap-4 overflow-y-auto", {
        "h-[630px]": !preview,
        "pb-8": preview,
      })}
    >
      {chats.map((c: Message, i) => (
        <>
          <Chat key={i} message={c} />

          {chats.length === 3 && i === 2 && !isLoading && (
            <div className="flex justify-center w-full gap-4">
              <Card
                className="p-3 flex justify-between flex-col items-center text-sm size-[150px] cursor-pointer"
                onClick={() => sendMessage("Go-to-Market Strategy")}
              >
                <div className="size-20 rounded-full bg-muted flex items-center justify-center">
                  <Rocket className="size-10" />
                </div>
                Go-to-Market Strategy
              </Card>
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

          {chats.length === 5 &&
            i === 4 &&
            chats.map((c) => c.content).indexOf("Go-to-Market Strategy") !==
              -1 &&
            !isLoading && (
              <div className="grid grid-cols-2 gap-4">
                {profiles.map((p, i) => (
                  <ProfilePreview
                    key={i}
                    imageUrl={p.imageUrl}
                    name={p.name}
                    previouslyAt={p.previouslyAt}
                    occupation={p.occupation}
                  />
                ))}
              </div>
            )}
        </>
      ))}
    </div>
  );
};

export default ChatList;
