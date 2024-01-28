import Link from "next/link";

import { CTABanner } from "../cta/CTABanner";
import { Section } from "../layout/Section";
import { Button } from "@/components/ui/button";

const Banner = () => (
  <Section>
    <CTABanner
      title="Empower your business with expert guidance."
      subtitle="Start your Free Trial."
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <Button>Get Started</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
