"use client";

import React, { useRef, useState } from "react";
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
    text: "Hi I'm your GILO assistant, here to help your business. Could you tell me a bit about your business and what you're looking to achieve or improve?",
  },
];

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>(DEFAULT_MESSAGES);

  const [isLoading, setIsLoading] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);
  const [chatId, setChatId] = useState("");

  const handleSubmit = async (value: string) => {
    setIsLoading(true);

    const userResponse: Message = {
      user: "user",
      text: value,
    };

    let assistantResponse: Message = {
      user: "ai",
      text: "",
    };

    setMessages((prev) => [...prev, userResponse, assistantResponse]);

    try {
      abortControllerRef.current = new AbortController();
      const res = await fetch("/api/message", {
        method: "POST",
        body: JSON.stringify({ text: value }),
        headers: {
          "Content-Type": "application/json",
        },
        signal: abortControllerRef.current.signal,
      });

      if (!res.ok || !res.body) {
        alert("Error sending message");
        return;
      }

      const reader = res.body?.getReader();

      const decoder = new TextDecoder("utf-8");
      let finalResult = "";
      while (true) {
        const { value, done } = await reader.read();

        const t = decoder.decode(value);
        console.log(t);
        assistantResponse = {
          user: "ai",
          text: assistantResponse.text + t,
        };

        setMessages((prev) => [...prev.slice(0, -1), assistantResponse]);

        if (done) break;
      }
    } catch (err: any) {
      if (err.name !== "AbortError") {
        alert("Error sending message");
      }
    }
    abortControllerRef.current = null;
    setIsLoading(false);
  };

  const handleStop = () => {
    setIsLoading(false);
    if (!abortControllerRef.current) return;
    abortControllerRef.current.abort();
    abortControllerRef.current = null;
  };

  return (
    <div className="bg-white rounded-lg pb-16 shadow w-[500px] h-[800px] relative">
      <Header />
      <ChatList chats={messages} />
      <ChatInput
        onSubmit={handleSubmit}
        isStreaming={isLoading}
        onStop={handleStop}
      />
    </div>
  );
};

export default ChatBot;
