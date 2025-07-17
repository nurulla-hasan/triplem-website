import Collecting from "@/components/home/Collecting";
import Faq from "@/components/home/Faq";
import Hero from "@/components/home/Hero";
import Quality from "@/components/home/Quality";
import Testimonials from "@/components/home/Testimonials";
import TrendingCarousel from "@/components/home/TrendingCarousel";

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
