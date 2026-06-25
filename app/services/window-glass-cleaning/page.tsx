"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Icons } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";

export default function WindowCleaningPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [heroLoaded, setHeroLoaded] = useState(false);

  const checklist = [
    {
      title: "Interior Window Clean",
      items: [
        "Streak-free glass cleaning using premium squeegees",
        "Wipe interior frames, handles, and locks",
        "Vacuum and wipe window sill tracks",
        "Clean inside skylights and transom glass",
      ],
    },
    {
      title: "Exterior Window Clean",
      items: [
        "Wipe dirt, pollen, spiderwebs, and rain stains off outer glass",
        "Scrub and wipe down exterior sills and vinyl frames",
        "Safe ladder and extension-pole operations",
        "Water-fed pole pure water system (for high-reach areas)",
      ],
    },
    {
      title: "Screen & Track Wash",
      items: [
        "Remove screens, scrub with cleaning detergents, and wash",
        "Dry and re-install screens on window frames",
        "Deep-clean sash guides and drainage holes",
        "Remove paint splashes and adhesive stickers",
      ],
    },
    {
      title: "Glass Partitions & Mirrors",
      items: [
        "Polish double-sided glass office partitions",
        "Streak-free wipe of large floor-to-ceiling lobby mirrors",
        "Wipe glass balustrades, staircase railings, and balconies",
        "Sanitize vestibule entrance doors",
      ],
    },
  ];

  const steps = [
    {
      title: "Inspection & Setup",
      desc: "We verify window count, height, and layout to plan ladder placement or pole reach safely.",
    },
    {
      title: "Scrub & Squeegee",
      desc: "We wash glass surfaces with bio-degradable glass soap, and use professional rubber squeegees for streak-free drying.",
    },
    {
      title: "Sills & Screen Finishing",
      desc: "Our crew wipes down all surrounding tracks and sills, washes screen panels, and snaps them back in.",
    },
  ];

  const faqs = [
    {
      q: "What heights can you reach for window washing?",
      a: "We clean interior and exterior windows up to 3 stories high for residential homes and commercial buildings using specialized carbon-fiber water-fed poles and ladders. We do not do high-rise skyscraper cleaning.",
    },
    {
      q: "What happens if it rains on my scheduled cleaning day?",
      a: "In the event of heavy rain or high winds, we will contact you to reschedule the exterior cleaning. Interior windows can still be cleaned as scheduled if preferred, and we will return for the exteriors.",
    },
    {
      q: "Do you clean the window screens as well?",
      a: "Yes! Our window cleaning service includes removing screens, scrubbing them down with water and soft detergents to remove dust and dirt, drying them, and re-installing them.",
    },
  ];

  return (
    <div className="w-full font-opensans bg-white">
      {/* Service Hero */}
      <section className="relative h-[300px] sm:h-[400px] lg:h-[480px] w-full flex items-center justify-center bg-gray-100">
        {!heroLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center z-10">
            <Icons.Sparkles className="text-gray-300 animate-spin" size={32} />
          </div>
        )}
        <img
          src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=80"
          alt="Premium Window & Glass Cleaning"
          onLoad={() => setHeroLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            heroLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>

        <Reveal className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start space-y-6 z-20">
          <Link
            href="/services"
            className="flex items-center gap-1.5 text-xs text-primary font-montserrat font-bold uppercase tracking-wider hover:underline"
          >
            <Icons.ChevronRight className="rotate-180" size={14} /> Back to Services
          </Link>
          <span className="bg-primary/10 text-primary font-montserrat font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full">
            Crystal Clear Views
          </span>
          <h1 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-text-dark max-w-xl">
            Window & Glass Cleaning
          </h1>
          <p className="text-text-muted text-sm sm:text-base max-w-lg leading-relaxed">
            Professional interior and exterior window washing for homes and offices. Spotless, streak-free guarantee across the GTA.
          </p>
          <Button variant="primary" href="/quote">
            Request a Quote
          </Button>
        </Reveal>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-white">
        <Reveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl text-text-dark">
            Let the Light In with Streak-Free Windows
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            Windows are your home's eyes to the world, but rain, wind, pollen, and dust quickly create a dirty film that blocks natural light. Our professional Window & Glass cleaning services ensure a crystal-clear, streak-free finish. We wash screens, wipe tracks, scrub sills, and polish glass surfaces inside and out so your property feels brighter and more spacious.
          </p>
        </Reveal>
      </section>

      {/* Checklist Section */}
      <section className="py-20 bg-brand-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest">
              Service Detail
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl text-text-dark">
              Window Cleaning Checklist
            </h2>
            <p className="text-text-muted text-sm">
              We clean every pane of glass meticulously. Here is what is covered:
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {checklist.map((group, idx) => (
              <Reveal
                key={group.title}
                delay={idx * 100}
                animationType="fade-in-up"
                className="h-full flex"
              >
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-150 space-y-4 hover:shadow-md transition-shadow w-full">
                  <h3 className="font-montserrat font-bold text-base text-text-dark pb-2 border-b border-gray-100 flex items-center gap-2">
                    <Icons.Sparkles className="text-secondary flex-shrink-0" size={16} />
                    {group.title}
                  </h3>
                  <ul className="space-y-3 text-xs text-text-muted">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Icons.Check className="text-primary mt-0.5 flex-shrink-0" size={12} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest">
              Method
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl text-text-dark">
              Our Professional Window Process
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {steps.map((step, idx) => (
              <Reveal key={step.title} delay={idx * 150} animationType="fade-in-up" className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-montserrat font-bold text-base mx-auto">
                  {idx + 1}
                </div>
                <h3 className="font-montserrat font-bold text-lg text-text-dark">{step.title}</h3>
                <p className="text-text-muted text-xs leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-brand-light border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-2xl text-text-dark">
              Window Cleaning FAQ
            </h2>
          </Reveal>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 100} animationType="fade-in-up">
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="flex items-center justify-between w-full p-5 text-left focus:outline-none cursor-pointer"
                  >
                    <span className="font-montserrat font-bold text-sm text-text-dark">{faq.q}</span>
                    <div className="text-primary">
                      {openFaq === idx ? <Icons.Minus size={16} /> : <Icons.Plus size={16} />}
                    </div>
                  </button>
                  {openFaq === idx && (
                    <div className="p-5 border-t border-gray-100 text-xs text-text-muted leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white text-center">
        <Reveal animationType="scale-up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl text-white">
            Ready for Crystal-Clear Windows?
          </h2>
          <p className="text-white/90 text-sm max-w-md mx-auto">
            Book our professional window and glass washing service today. Streak-free guarantee.
          </p>
          <div className="pt-2">
            <Button variant="secondary" href="/quote">
              Request a Free Quote
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
