import Link from "next/link";
import { SectionHeader } from "./SectionHeader";

export const StoriesSection = () => {
  // Mock data for stories (replace with real data later)
  const stories = [
    {
      id: 1,
      title: {
        en: "Empowering Women Through Education",
        sw: "Kuwawezesha Wanawake Kupitia Elimu"
      },
      excerpt: {
        en: "How our scholarship program transformed Mama Asha's life and her community",
        sw: "Jinsi programu yetu ya udhamini ilibadilisha maisha ya Mama Asha na jamii yake"
      },
      category: {
        en: "Education",
        sw: "Elimu"
      },
      slug: "empowering-women-through-education"
    },
    {
      id: 2,
      title: {
        en: "Clean Water for Remote Villages",
        sw: "Maji Safi kwa Vijiji Vilivyo Mbali"
      },
      excerpt: {
        en: "The journey to bring sustainable water solutions to 5,000 Tanzanians",
        sw: "Safari ya kuleta suluhu za maji endelevu kwa Watanzania 5,000"
      },
      category: {
        en: "Health",
        sw: "Afya"
      },
      slug: "clean-water-for-remote-villages"
    },
    {
      id: 3,
      title: {
        en: "Youth Entrepreneurship Program",
        sw: "Programu ya Ujasiriamali kwa Vijana"
      },
      excerpt: {
        en: "How young Tanzanians are building businesses with our support",
        sw: "Jinsi vijana wa Tanzania wanajenga biashara kwa msaada wetu"
      },
      category: {
        en: "Economic Growth",
        sw: "Ukuaji wa Kiuchumi"
      },
      slug: "youth-entrepreneurship-program"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-ocean-foam to-white py-16">
      <div className="container">
        {/* English Version */}
        <SectionHeader
          title="Stories from Tanzania"
          highlight="Tanzania"
          description="Discover the impact we're making through local voices"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {stories.map((story) => (
            <div key={story.id} className="bg-white rounded-lg shadow-depth overflow-hidden hover:shadow-depth-hover transition-shadow">
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-ocean-teal/10 text-ocean-deep rounded-full text-sm font-medium mb-3">
                  {story.category.en}
                </span>
                <h3 className="text-xl font-bold text-ocean-deep mb-2">{story.title.en}</h3>
                <p className="text-ocean-medium mb-4">{story.excerpt.en}</p>
                <Link 
                  href={`/blog/${story.slug}`}
                  className="text-ocean-teal font-medium hover:underline inline-flex items-center"
                >
                  Read story
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Swahili Version - Same layout but with Swahili text */}
        <SectionHeader
          title="Hadithi kutoka Tanzania"
          highlight="Tanzania"
          description="Gundua athari tunazofanya kupitia sauti za wenyeji"
       
        />
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {stories.map((story) => (
            <div key={story.id} className="bg-white rounded-lg shadow-depth overflow-hidden hover:shadow-depth-hover transition-shadow">
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-ocean-teal/10 text-ocean-deep rounded-full text-sm font-medium mb-3">
                  {story.category.sw}
                </span>
                <h3 className="text-xl font-bold text-ocean-deep mb-2">{story.title.sw}</h3>
                <p className="text-ocean-medium mb-4">{story.excerpt.sw}</p>
                <Link 
                  href={`/blog/${story.slug}`}
                  className="text-ocean-teal font-medium hover:underline inline-flex items-center"
                >
                  Soma hadithi
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 rounded-full bg-ocean-teal hover:bg-ocean-light text-ocean-deep font-bold transition-colors shadow-depth"
          >
            View All Stories / Angalia Hadithi Zote
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

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