

import Link from "next/link";
import { Suspense } from "react";
import { AllPosts } from "../Posts";
import { SectionHeader } from "./SectionHeader";

export const StoriesSection = async () => (
  <div className="bg-gradient-to-b from-ocean-foam to-white py-16">
    <div className="container">
      <SectionHeader
        title="Stories from Tanzania"
        highlight="Tanzania"
        description="Discover the impact we're making through local voices"
      />
      
      <div className="border-t border-ocean-medium/20">
        <Suspense>{await AllPosts()}</Suspense>
      </div>
      
      <div className="text-center mt-10">
        <Link
          href="/blog"
          className="inline-flex items-center px-6 py-3 rounded-full bg-ocean-teal hover:bg-ocean-light text-ocean-deep font-bold transition-colors shadow-depth"
        >
          View All Stories
          <ArrowIcon />
        </Link>
      </div>
    </div>
  </div>
);

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-5 h-5 ml-2"
    fill="currentColor"
  >
    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
  </svg>
);