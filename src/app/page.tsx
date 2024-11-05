import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HackNIS?",
  description: "",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSectionOne />
      <div id="partners">

      </div>
      <Brands />
      <AboutSectionTwo/>
    </>
  );
}
