import React from "react";
import LandingPageWrapper from "@/components/wrappers/LandingPageWrapper";
import Container from "@/components/common-layout/Container";
import ColorPalette from "@/components/pages/design-system/ColorPalette";
import TypeScale from "@/components/pages/design-system/TypeScale";
import SpacingScale from "@/components/pages/design-system/SpacingScale";
import ButtonsShowcase from "@/components/pages/design-system/ButtonsShowcase";
import CardsAndTagsShowcase from "@/components/pages/design-system/CardsAndTagsShowcase";
import InputsShowcase from "@/components/pages/design-system/InputsShowcase";
import ModalShowcase from "@/components/pages/design-system/ModalShowcase";

const SECTIONS: { title: string; description: string; content: React.ReactNode }[] = [
  { title: "Colors", description: "Brand primary (OnlyFans blue) plus the neutral, success, warning, and danger ramps.", content: <ColorPalette /> },
  { title: "Type scale", description: "Semantic sizes defined in tailwind.config.ts, alongside Tailwind's unmodified defaults.", content: <TypeScale /> },
  { title: "Spacing scale", description: "Named spacing tokens matching the site's real layout rhythm (88px section padding, etc.).", content: <SpacingScale /> },
  { title: "Buttons", description: "Primary, secondary, ghost, outline, disabled, and pill variants.", content: <ButtonsShowcase /> },
  { title: "Cards & tags", description: "Base card, an accent/featured variant, and the tag palette.", content: <CardsAndTagsShowcase /> },
  { title: "Inputs", description: "Text fields (default, error, disabled) and a select.", content: <InputsShowcase /> },
  { title: "Modal", description: "Shared overlay component — backdrop click, Escape key, and close button all dismiss it.", content: <ModalShowcase /> },
];

export default function DesignSystemPage() {
  return (
    <LandingPageWrapper>
      <Container className="py-4xl">
        <div className="max-w-[640px] mb-4xl">
          <h1 className="font-heading font-extrabold text-heading-xl text-neutral-900 mb-sm">Design system</h1>
          <p className="text-body-lg text-neutral-600">
            Color tokens, type scale, and spacing scale from <code className="bg-neutral-100 rounded px-1">tailwind.config.ts</code>, plus the
            core component set — for client review and sign-off before Milestone 2.
          </p>
        </div>

        <div className="flex flex-col gap-4xl">
          {SECTIONS.map((section) => (
            <section key={section.title} className="border-t border-solid border-neutral-200 pt-2xl">
              <h2 className="font-heading font-bold text-heading-md text-neutral-900 mb-1">{section.title}</h2>
              <p className="text-body-sm text-neutral-500 mb-lg">{section.description}</p>
              {section.content}
            </section>
          ))}
        </div>
      </Container>
    </LandingPageWrapper>
  );
}
