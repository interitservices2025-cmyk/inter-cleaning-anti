"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";
import { Icons } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";

export default function AboutPage() {
  const [teamLoaded, setTeamLoaded] = useState(false);
  const [suppliesLoaded, setSuppliesLoaded] = useState(false);

  const values = [
    {
      title: "Uncompromising Quality",
      desc: "We set the highest cleaning standards and perform regular audits to maintain flawless results on every visit.",
      icon: <Icons.Sparkles size={24} />,
    },
    {
      title: "Reliability & Integrity",
      desc: "Our clients trust us in their most personal spaces. We show up on time, respect your privacy, and act with complete honesty.",
      icon: <Icons.ShieldCheck size={24} />,
    },
    {
      title: "Eco-Friendly Cleaning",
      desc: "We prioritize the health of your family and the planet by using safe, non-toxic, and biodegradable cleaning products.",
      icon: <Icons.Waves size={24} />,
    },
    {
      title: "Customer-Centric Care",
      desc: "Your satisfaction is our primary goal. We customize our cleaning checklists to fit your specific needs and schedule.",
      icon: <Icons.Calendar size={24} />,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-brand-light py-20 border-b border-gray-100">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="bg-primary/10 text-primary font-montserrat font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full inline-block">
            Our Story & Values
          </span>
          <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl text-text-dark max-w-3xl mx-auto leading-tight">
            Dedicated to Spotless Standards & Absolute Trust
          </h1>
          <p className="font-opensans text-text-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Learn more about the team behind the cleanest homes and offices in the Greater Toronto Area.
          </p>
        </Reveal>
      </section>

      {/* Story & Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image columns */}
            <Reveal animationType="slide-in-left" className="w-full">
              <div className="relative h-[400px] sm:h-[500px] w-full rounded-3xl overflow-hidden shadow-xl bg-gray-100">
                {!teamLoaded && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                    <Icons.Sparkles className="text-gray-300 animate-spin" size={28} />
                  </div>
                )}
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80"
                  alt="Our professional cleaning team"
                  onLoad={() => setTeamLoaded(true)}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    teamLoaded ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            </Reveal>

            {/* Text columns */}
            <Reveal animationType="slide-in-right" className="space-y-8 font-opensans">
              <div className="space-y-4">
                <span className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest block">
                  Who We Are
                </span>
                <h2 className="font-montserrat font-extrabold text-3xl text-text-dark">
                  Providing Peace of Mind, One Clean at a Time
                </h2>
                <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                  Founded in Toronto, Inter-Cleaning Services began with a simple mission: to deliver premium-quality, hassle-free cleaning services that give busy families and companies their time and health back.
                </p>
                <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                  Over the years, we have refined our processes, invested in advanced training for our staff, and adopted top-grade eco-friendly cleaning supplies. Today, we are proud to serve hundreds of loyal residential and commercial clients across the GTA.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                <div className="space-y-2">
                  <h4 className="font-montserrat font-bold text-base text-text-dark flex items-center gap-2">
                    <Icons.Check className="text-secondary" size={18} /> Our Mission
                  </h4>
                  <p className="text-text-muted text-xs leading-relaxed">
                    To enhance the quality of life and work for our clients by creating exceptionally clean, healthy, and inviting environments.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-montserrat font-bold text-base text-text-dark flex items-center gap-2">
                    <Icons.Check className="text-secondary" size={18} /> Our Vision
                  </h4>
                  <p className="text-text-muted text-xs leading-relaxed">
                    To be the leading premium cleaning service provider in Ontario, recognized for our flawless execution and exceptional staff support.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-brand-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest">
              What Guides Us
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-dark">
              Our Core Values
            </h2>
            <p className="font-opensans text-text-muted text-sm">
              These principles guide how we clean, how we treat our employees, and how we serve our clients.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <Reveal
                key={val.title}
                delay={idx * 100}
                animationType="fade-in-up"
                className="h-full flex animate-reveal"
              >
                <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-150 flex flex-col items-center text-center font-opensans hover:shadow-xl transition-all duration-300 w-full">
                  <div className="bg-primary/10 text-primary p-4 rounded-2xl mb-6 shadow-inner">
                    {val.icon}
                  </div>
                  <h3 className="font-montserrat font-bold text-base text-text-dark mb-3">
                    {val.title}
                  </h3>
                  <p className="text-text-muted text-xs leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy / Commitment Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text details */}
            <Reveal animationType="slide-in-left" className="space-y-6 font-opensans">
              <span className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest">
                Our Service Philosophy
              </span>
              <h2 className="font-montserrat font-extrabold text-3xl text-text-dark">
                The Cleaning Authority You Can Rely On
              </h2>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                At Inter-Cleaning Services, we understand that professional cleaning is an investment in your well-being. That is why we do not believe in cutting corners. Our cleaning protocols are inspired by clinic-grade sanitation practices, combined with residential hospitality.
              </p>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                We use high-efficiency HEPA vacuums that capture 99.9% of dust particles and allergens, color-coded microfibers to eliminate cross-contamination, and disinfectant solutions that are lethal to germs but entirely safe for kids and pets.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <Button variant="primary" href="/quote">
                  Book a Cleaning
                </Button>
                <Button variant="outline" href="/services">
                  Explore Cleaning Services
                </Button>
              </div>
            </Reveal>

            {/* Video or Image mockup placeholder */}
            <Reveal animationType="slide-in-right" className="w-full">
              <div className="relative h-[350px] lg:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
                {!suppliesLoaded && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                    <Icons.Sparkles className="text-gray-300 animate-spin" size={28} />
                  </div>
                )}
                <img
                  src="https://images.unsplash.com/photo-1528740564264-4a90d33d8114?auto=format&fit=crop&w=800&q=80"
                  alt="Eco-friendly cleaning supplies"
                  onLoad={() => setSuppliesLoaded(true)}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    suppliesLoaded ? "opacity-100" : "opacity-0"
                  }`}
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
