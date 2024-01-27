"use client";

import React, { useState } from "react";
import Header from "./header";
import ChatList from "./chatlist";
import ChatInput from "./chat-input";

type User = "ai" | "user";

export type Message = {
  text: string;
  user: User;
};

const DEFAULT_MESSAGES: Message[] = [
  {
    user: "ai",
    text: "Hi I'm your GILO assistant, here to help your business. Could you tell me a bit about your business and what you're lookig to achieve or improve?",
  },
  {
    user: "user",
    text: "I am a tech startup and I need assistance in securing funding and positioning my product in a competitve market.",
  },
];

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>(DEFAULT_MESSAGES);

  return (
    <div className="bg-white rounded-lg pb-16 shadow w-[500px] h-[800px] relative">
      <Header />
      <ChatList chats={messages} />
      <ChatInput />
    </div>
  );
};

export default ChatBot;
