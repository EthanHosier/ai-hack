import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { initialProgrammerMessages } from "./messages";

//CONTRACT GENERATION

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = "edge";

export async function POST(req: Request) {
  const { text } = await req.json();
  const chatCompletion = await openai.chat.completions.create({
    messages: [...initialProgrammerMessages, { role: "user", content: text }],
    model: "gpt-4-0125-preview",
    stream: true,
    max_tokens: 4096, //be careful with this one as price
  });

  const stream = OpenAIStream(chatCompletion, {
    onStart: async () => {
      console.log({ chatCompletion });
    },
    onToken: async (token: string) => {
      console.log({ chatCompletion, token });
    },
    onCompletion: async (completion: string) => {},
  });

  return new StreamingTextResponse(stream);
}
