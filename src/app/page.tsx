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
import FAQSection from "@/components/FAQ/faq";

export const metadata: Metadata = {
  title: "HackNIS? - Хакатон для школьников в Актобе",
  description: "Прими участие в HackNIS? — крупнейшем хакатоне для школьников в Актобе! Учись создавать проекты, получай навыки программирования и технологий, соревнуйся в командах, выигрывай призы и наслаждайся мастер-классами. Регистрация уже открыта!",
  keywords: [
    "хакатон для школьников",
    "HackNIS Актобе",
    "технологии для школьников",
    "программирование Актобе",
    "мероприятия для школьников",
    "хакатон Казахстан",
    "мастер-классы по технологиям",
    "создание проектов",
    "соревнование для школьников",
    "обучение программированию",
    "мерч и призы",
    "командная работа",
    "хакниш",
    "хакниш Актобе"
  ],
};



export default function Home() {
  return (
    <>
      <Hero />
      <AboutSectionOne />
      <FAQSection/>
      <AboutSectionTwo/>
      <Brands />
    </>
  );
}
