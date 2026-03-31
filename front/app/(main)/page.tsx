import { HeroSection } from "@/components/sections/HeroSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { WhatIsTeaSection } from "@/components/sections/WhatIsTeaSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { SupportInfoSection } from "@/components/sections/SupportInfoSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { QuizSection } from "@/components/sections/QuizSection";
import { EmotionalSection } from "@/components/sections/EmotionalSection";
import { LeadCaptureSection } from "@/components/sections/LeadCaptureSection";
import { FaqSection } from "@/components/sections/FaqSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <WhatIsTeaSection />
      <StatsSection />
      <SupportInfoSection />
      <BeforeAfterSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <TeamSection />
      <QuizSection />
      <EmotionalSection />
      <LeadCaptureSection />
      <FaqSection />
    </>
  );
}
