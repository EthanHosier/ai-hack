"use client";

import React, { useRef, useState } from "react";
import Header from "./header";
import ChatList from "./chatlist";
import ChatInput from "./chat-input";

type User = "assistant" | "user";

export type Message = {
  content: string;
  role: User;
};

interface ChatBotProps {
  preview?: boolean;
}

const DEFAULT_MESSAGES: Message[] = [
  {
    role: "assistant",
    content:
      "Hi there! I'm GILO ✨, here to help your business. Could you tell me a bit about your business and what you're looking to achieve or improve?",
  },
];
const ChatBot: React.FC<ChatBotProps> = ({ preview }) => {
  const [messages, setMessages] = useState<Message[]>(DEFAULT_MESSAGES);

  const [isLoading, setIsLoading] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);
  const [chatId, setChatId] = useState("");

  const handleSubmit = async (value: string) => {
    setIsLoading(true);

    const userResponse: Message = {
      role: "user",
      content: value,
    };

    let assistantResponse: Message = {
      role: "assistant",
      content: "",
    };

    let msgs = messages;
    setMessages((prev) => [...prev, userResponse, assistantResponse]);

    try {
      abortControllerRef.current = new AbortController();
      const res = await fetch("/api/message", {
        method: "POST",
        body: JSON.stringify({ text: value, allMessages: msgs }),
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
          role: "assistant",
          content: assistantResponse.content + t,
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

  if (preview)
    return (
      <div className="bg-white rounded-lg pb-16 shadow w-[500px] h-[300px] mb-24">
        <Header />
        <ChatList
          chats={messages}
          isLoading={isLoading}
          sendMessage={handleSubmit}
          preview
        />
        <ChatInput
          onSubmit={handleSubmit}
          isStreaming={isLoading}
          onStop={handleStop}
          disabled={messages.length === 3}
          preview
        />
      </div>
    );

  return (
    <div className="bg-white rounded-lg pb-16 shadow w-[500px] h-[800px] relative">
      <Header />
      <ChatList
        chats={messages}
        isLoading={isLoading}
        sendMessage={handleSubmit}
      />
      <ChatInput
        onSubmit={handleSubmit}
        isStreaming={isLoading}
        onStop={handleStop}
        disabled={messages.length === 3}
      />
    </div>
  );
};

export default ChatBot;
