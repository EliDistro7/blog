'use client'

import allanImage from '@/public/team/allan.jpeg';
import japhetImage from '@/public/team/japhet.jpeg';
import roseImage from '@/public/team/benny.jpeg';
import bariImage from '@/public/team/benny.jpeg';
import bennyImage from '@/public/team/benny.jpeg';

import { Linkedin, Twitter, Instagram, Mail, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import TeamMemberCard from '@/app/components/TeamMemberCard'

export default function TeamPage() {
  const departmentHeads = [
    {
      name: "Allan Mushi",
      role: "Head of Sales and Marketing",
      department: "Sales & Marketing",
      bio: "8+ years driving revenue growth and brand expansion. Specializes in digital marketing strategies and sales pipeline optimization.",
      image: '/team/allan.jpeg',
      tzExperience: "5+ years growing Tanzanian brands",
      badge: "Certified Sales Leader (CPSL)",
      skills: [
        "Digital Marketing Strategy",
        "CRM Management",
        "Market Analysis",
        "Sales Team Leadership",
        "Revenue Growth"
      ]
    },
    {
      name: "Japhet Ezeckiel",
      role: "Head MC",
      department: "Master of Ceremonies",
      bio: "Charismatic host with 8 years experience in weddings and corporate events across Tanzania.",
      image: '/team/japhet.jpeg',
      tzExperience: "Known as 'Bwana Shindano' on TZ reality TV",
      badge: "Tanzania Events Host of the Year 2022",
      skills: [
        "Public Speaking",
        "Event Planning",
        "Audience Engagement",
        "Script Writing",
        "Bilingual Hosting"
      ]
    },
    {
      name: "Rose",
      role: "Chief Editor",
      department: "Content Editor",
      bio: "Digital content editor growing brands across Africa. Fluent in Swahili/English content creation.",
      image: '/team/benny.jpeg',
      tzExperience: "Built 5 Tanzanian brands to 100K+ followers",
      badge: "Meta Certified Professional",
      skills: [
        "Content Strategy",
        "SEO Writing",
        "Social Media Management",
        "Brand Voice Development",
        "Multilingual Content"
      ]
    },
    {
      name: "Bariki Kaneno",
      role: "Lead Developer",
      department: "Technology",
      bio: "Full stack developer with expertise in modern web technologies. Architect of our digital platforms and technical vision.",
      image: '/team/bari4.png',
      tzExperience: "Building Tanzania's digital future",
      badge: "Lead Developer",
      skills: [
        "React/Next.js",
        "Node.js",
        "TypeScript",
        "Cloud Architecture",
        "Database Design",
        "API Development"
      ]
    },
    {
      name: "Benny",
      role: "Head of Catering",
      department: "Catering Services",
      bio: "Gourmet chef trained in Zanzibar and Paris. Creates unforgettable culinary experiences.",
      image: '/team/benny.jpeg',
      tzExperience: "Former head chef at Serengeti Safari Lodge",
      badge: "Tanzania Culinary Award Winner",
      skills: [
        "Menu Development",
        "Food Presentation",
        "Large-scale Catering",
        "Local Cuisine Expert",
        "International Flavors"
      ]
    },
  ];


  return (
    <div className="bg-brand-foam">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-dark to-brand-blue text-white pt-12 pb-28 px-4">
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
            Meet Our <span className="text-brand-yellow">Leadership</span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            The brilliant minds driving innovation across every department
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-brand-foam clip-path-wave"></div>
      </section>

      {/* Team Grid */}
      <section className="container mx-auto py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {departmentHeads.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </section>

      {/* Professional Leadership Values Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 font-serif">
            <span className="text-brand-green">Our</span> Leadership Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Integrity",
                desc: "We uphold the highest ethical standards in all decisions",
                icon: "⚖️"
              },
              {
                title: "Innovation",
                desc: "We champion creative solutions and continuous improvement",
                icon: "💡"
              },
              {
                title: "Excellence",
                desc: "We pursue outstanding quality in everything we do",
                icon: "🏆"
              },
              {
                title: "Accountability",
                desc: "We take ownership of our actions and results",
                icon: "📝"
              },
              {
                title: "Collaboration",
                desc: "We achieve more through teamwork and shared knowledge",
                icon: "🤝"
              },
              {
                title: "Vision",
                desc: "We lead with strategic foresight and clear direction",
                icon: "🔭"
              }
            ].map((value, i) => (
              <div key={i} className="bg-brand-foam/50 p-8 rounded-xl">
                <span className="text-4xl mb-4 inline-block">{value.icon}</span>
                <h3 className="text-xl font-bold text-brand-dark mb-2">{value.title}</h3>
                <p className="text-gray-700">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-teal py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss how we can collaborate on your next project.
          </p>
          <Link
            href="/contact" 
            className="inline-flex items-center justify-center gap-2 bg-white text-brand-dark font-bold px-8 py-4 rounded-full hover:bg-brand-foam transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Mail className="w-5 h-5" />
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}


