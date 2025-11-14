import Hero from "@/components/pages/home/Hero";
import { HomeTechStack } from "@/components/pages/home/TechStack";
import WorkHistory from "@/components/pages/home/WorkHistory";
import { Projects } from "@/components/pages/home/Projects";
import { HomeSocials } from "@/components/pages/home/SocialLinks";
import { HomeContact } from "@/components/pages/home/Contact";
import EducationHistory from "@/components/pages/home/EducationHistory";

export default function Home() {
  return (
    <div className="mx-auto pt-6 pb-12 max-w-150 space-y-12 px-4 sm:py-10">
      <Hero />
      <HomeTechStack />
      <WorkHistory />
      <EducationHistory />
      <Projects />
      <HomeSocials />
      <HomeContact />
    </div>
  );
}
