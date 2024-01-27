import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = "edge";

export async function POST(req: Request) {
  const { content } = await req.json();
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      // ...initialProgrammerMessages,
      // ...allDBMessages,
      { role: "user", content },
    ],
    model: "gpt-4-vision-preview",
    stream: true,
    max_tokens: 4096, //be careful with this one as price
  });

  const stream = OpenAIStream(chatCompletion, {
    onStart: async () => {},
    onToken: async (token: string) => {},
    onCompletion: async (completion: string) => {},
  });

  return new StreamingTextResponse(stream);
}
