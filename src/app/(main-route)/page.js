import Collecting from "@/components/home-components/Collecting";
import Faq from "@/components/home-components/Faq";
import Hero from "@/components/home-components/Hero";
import Quality from "@/components/home-components/Quality";
import Testimonials from "@/components/home-components/Testimonials";
import TrendingCarousel from "@/components/home-components/TrendingCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      <Quality />
      <Collecting />
      <TrendingCarousel />
      <Testimonials />
      <Faq />
    </>
  );
}
