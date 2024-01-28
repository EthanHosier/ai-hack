import Link from "next/link";

import { Background } from "../background/Background";
import { HeroOneButton } from "../hero/HeroOneButton";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import Header from "@/app/(product)/chat/_components/header";
import ChatBot from "@/app/(product)/chat/_components/chatbot";
const headingFont = localFont({
  src: "../../../public/fonts/font.woff2",
});
const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li className="md:mx-2 mx-1">
          <Link href="#">About us</Link>
        </li>
        <li className="md:mx-2 mx-1">
          <Link href="/chat">Go to app</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20">
      <HeroOneButton
        title={
          <span className={cn(headingFont.className, "gap-2")}>
            {"Spark Success with "}
            <span className="text-primary">AI ✨</span>
          </span>
        }
        description="Connecting Small Businesses & NGOs to Global Experts"
        button={<></>}
      />
    </Section>
    <div className="flex w-full items-center justify-center">
      <ChatBot preview />
    </div>
  </Background>
);

export { Hero };
