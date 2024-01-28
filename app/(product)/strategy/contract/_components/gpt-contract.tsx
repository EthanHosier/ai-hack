"use client";

import { Message } from "@/app/api/message/messages";
import React, { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";

const GptContract = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [contract, setContract] = useState("");

  useEffect(() => {
    generateContract();
  }, []);

  const generateContract = async () => {
    setIsLoading(true);

    try {
      const res = await fetch("/api/contract", {
        method: "POST",
        body: JSON.stringify({ text: "Please generate me the contract" }),
        headers: {
          "Content-Type": "application/json",
        },
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

        setContract((contract) => contract + t);
        if (done) break;
      }
    } catch (err: any) {
      if (err.name !== "AbortError") {
        alert("Error sending message");
      }
    }
    setIsLoading(false);
  };

  return <div>{contract === "" ? <SyncLoader size={10} /> : contract}</div>;
};

export default GptContract;
