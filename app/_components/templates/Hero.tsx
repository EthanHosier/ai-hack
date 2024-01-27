import Link from "next/link";

import { Background } from "../background/Background";
import { HeroOneButton } from "../hero/HeroOneButton";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li className="md:mx-2 mx-1">
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            GitHub
          </Link>
        </li>
        <li className="md:mx-2 mx-1">
          <Link href="/">Sign in</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {"The modern landing page for\n"}
            <span className="text-primary-500">React developers</span>
          </>
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
