import Link from "next/link";

import { Background } from "../background/Background";
import { HeroOneButton } from "../hero/HeroOneButton";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
const headingFont = localFont({
  src: "../../../public/fonts/font.woff2",
});
const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        {/* <li className="md:mx-2 mx-1">
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            GitHub
          </Link>
        </li> */}
        <li className="md:mx-2 mx-1">
          <Link href="/">Sign in</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <span className={cn(headingFont.className, "gap-2")}>
            {"The modern landing page for\n"}
            <span className="text-primary">React developers</span>
          </span>
        }
        description="The easiest way to build a React landing page in seconds."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <Button size="xl">Download Your Free Theme</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
