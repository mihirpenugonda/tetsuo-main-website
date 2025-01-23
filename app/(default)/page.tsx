export const metadata = {
  title: "Home - Tetsuo",
  description:
    "Welcome to Tetsuo, empowering the future of systems programming and AI.",
};

export const revalidate = 0; // This makes the page dynamic

import Cta from "@/components/cta";
import Features from "@/components/features";
import Hero from "@/components/hero-home";
import PageIllustration from "@/components/page-illustration";
import Timeline from "@/components/timeline";
import Workflows from "@/components/workflows";
import NewsTimeline from "@/components/news-timeline";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Timeline />
      <NewsTimeline />
      <Features />
      <Cta />
    </>
  );
}
