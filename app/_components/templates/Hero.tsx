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
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
const headingFont = localFont({
  src: "../../../public/fonts/font.woff2",
});
const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li className="md:mx-2 mx-1">
          <Link href="#"> About us</Link>
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
    <div className="flex flex-col w-full items-center justify-center">
      <ChatBot preview />
      <div className="mt-36 flex">
        {/* {["Market Strategy", "Supply Chains", "Project Management"].map(
          (e, i) => (
            <div
              key={i}
              className={cn(
                "flex text-black mr-2 mb-2 bg-white p-2 text-md rounded-full mx-4 items-center gap-2 font-semibold pr-4",
                headingFont.className
              )}
            >
              <div className="rounded-full size-10 bg-primary flex items-center justify-center">
                <Check className="size-6" />
              </div>
              {e}
            </div>
          )
        )} */}
      </div>
    </div>
  </Background>
);

export { Hero };
