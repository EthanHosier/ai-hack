import { VerticalFeatureRow } from "../feature/VerticalFeatureRow";
import { Section } from "../layout/Section";

const VerticalFeatures = () => (
  <Section
    title="Who are We?"
    description="Discover a new era of accessible expertise for small businesses and NGOs. At GILO, we understand the challenge of affording top-notch consulting services. Dive into a world where finding expert guidance is easy, and growth is within reach."
  >
    <VerticalFeatureRow
      title="Our Platform"
      description="Welcome to GILO—a game-changing platform designed with you in mind. Access a diverse pool of experts through a user-friendly interface and enjoy transparent, performance-based pricing. Our AI-driven journey ensures a seamless experience from start to finish, making expert advice a reality."
      image="/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Stand Out with GILO"
      description="In a world full of options, choose GILO for a unique AI-driven approach that sets us apart. Our platform not only connects you with the right experts but also ensures your success through a gainshare model, aligning our interests with yours."
      image="/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Your Opportunity, Our Team"
      description="Unlock the potential of the $X billion consulting market, overlooked by traditional players. Join hands with our passionate team, dedicated to transforming your experience and ensuring you thrive in an ever-evolving business landscape."
      image="/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
