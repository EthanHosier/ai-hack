"use client";

import { Message } from "@/app/api/message/messages";
import React, { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const GAINSHARE_AGREEMENT: string = `
# Gainshare Agreement

This Gainshare Agreement ("Agreement") is entered into on [Date], by and between:

**Sarib Singh**
[Your Address]
[Your Email]
[Your Phone Number]

and

**John Doe, International Business Expansion Consultant**
[John Doe's Address]
[John Doe's Email]
[John Doe's Phone Number]

## Purpose

The purpose of this Agreement is to define the terms under which the parties will collaborate on business expansion activities.

## Scope of Collaboration

Sarib Singh ("Client") engages John Doe ("Consultant") to provide expertise and assistance in the following areas:

- Go-To-Market (GTM) Strategies
- Internal Expansion Planning
- Supply Chain Management
- Market Analysis
- Marketing Strategies
- Beverages Industry Expertise

## Location

Consultant is based in Munich, Germany.

## Language Proficiency

Consultant is proficient in the following languages:

- English (Fluent)
- German (Native)
- French (Conversational)

## Profile Photo

[Attach Consultant's Profile Photo]

## About John Doe

John Doe is an experienced consultant specializing in international business expansion. Key attributes include:

- Expertise in strategic planning and market entry strategies.
- Extensive experience working with companies across industries.
- Prior research background in the beverage sector.

## Gainshare Terms

1. **Performance Metrics:** Gains will be determined based on the successful achievement of mutually agreed-upon performance metrics related to the business expansion project.

2. **Distribution of Gains:** The distribution of gains will be [specify terms, e.g., a percentage of increased revenue, cost savings, etc.].

3. **Confidentiality:** Both parties agree to maintain the confidentiality of sensitive information shared during the collaboration.

4. **Termination:** Either party may terminate this Agreement with [specify notice period] written notice.

5. **Governing Law:** This Agreement shall be governed by the laws of [specify jurisdiction].

By signing below, the parties acknowledge and agree to the terms outlined in this Gainshare Agreement.

**Sarib Singh** | Date: [Date]

**John Doe** | Date: [Date]
`;

const GptContract = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contract, setContract] = useState("");

  useEffect(() => {
    // Set loading to true initially
    setIsLoading(true);

    // After 5 seconds, set loading to false
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Cleanup the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, []);

  // const generateContract = async () => {
  //   setIsLoading(true);

  //   try {
  //     const res = await fetch("/api/contract", {
  //       method: "POST",
  //       body: JSON.stringify({ text: "Please generate me the contract" }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (!res.ok || !res.body) {
  //       alert("Error sending message");
  //       return;
  //     }

  //     const reader = res.body?.getReader();

  //     const decoder = new TextDecoder("utf-8");
  //     let finalResult = "";
  //     while (true) {
  //       const { value, done } = await reader.read();

  //       const t = decoder.decode(value);
  //       finalResult += t;

  //       setContract((contract) => contract + t);

  //       if (done) {
  //         console.log(finalResult);
  //         break;
  //       }
  //     }
  //   } catch (err: any) {
  //     if (err.name !== "AbortError") {
  //       alert("Error sending message");
  //     }
  //   }
  //   setIsLoading(false);
  // };

  return (
    <div className="prose">
      {isLoading ? (
        <SyncLoader size={10} />
      ) : (
        <Markdown remarkPlugins={[remarkGfm]}>{GAINSHARE_AGREEMENT}</Markdown>
      )}
    </div>
  );
};

export default GptContract;
