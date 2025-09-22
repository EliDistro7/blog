
'use client';

import HeroSection from "@/app/components/home/HeroSection";
import ServicesGrid from "@/app/components/home/ServicesGrid";
import TestimonialSection from "@/app/components/home/TestimonialSection";
import CTASection from "@/app/components/home/CTASection";
import Blog from "@/app/components/Blog";
import ServicesVisualization from '@/app/components/home/Services'
import ChatBot from '@/app/components/chatBot/index4';

import Link from "next/link";
import { ChevronRight, Rocket, Code, Zap } from "lucide-react";
import { format, parseISO } from "date-fns";
import { StoriesSection } from "./components/home/StoriesSection";





 function Home() {




  return (
    <div className="mt-16 flex flex-col gap-20">
      <ServicesVisualization />
      <TestimonialSection />
      <CTASection />
      <ChatBot />
    </div>
  );
}


export default Home