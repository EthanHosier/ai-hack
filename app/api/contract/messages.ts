export type Message = {
  role: "system" | "user" | "assistant";
  content: any;
};

export const initialProgrammerMessages: Message[] = [
  {
    role: "system",
    content: `I am going to ask you for a gainshare agreament contract. You must send me the exact following: `,
  },
];
