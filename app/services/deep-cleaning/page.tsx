"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Icons } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";

export default function DeepCleaningPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [heroLoaded, setHeroLoaded] = useState(false);

  const checklist = [
    {
      title: "Kitchen Deep-Clean",
      items: [
        "Clean inside oven, microwave, and stove grates",
        "Clean inside refrigerator and freezer (if emptied)",
        "Degrease range hood, exhaust fan, & filters",
        "Wipe cabinet fronts, hinges, and handles",
      ],
    },
    {
      title: "Bathroom Descaling",
      items: [
        "Descale glass doors, showerheads, and faucets",
        "Remove mildew and stains from grout & silicone seams",
        "Deep scrub tile walling and bathroom vents",
        "Sanitize trash bins and clean behind toilet bases",
      ],
    },
    {
      title: "Detail Woodwork",
      items: [
        "Hand-wipe baseboards, door frames, and panels",
        "Clean heater vents, outlets, and switch covers",
        "Wipe window frames, tracks, sills, and blinds",
        "Dust door hinges and top edges of doors",
      ],
    },
    {
      title: "General Sanitation",
      items: [
        "High-dust ceiling fans, light fixtures, and corners",
        "Vacuum under beds, sofas, and large rugs",
        "Wipe baseboards and sanitise high-touch surfaces",
        "Damp-wipe heaters and radiator covers",
      ],
    },
  ];

  const steps = [
    {
      title: "Pre-Clean Inspection",
      desc: "We scan the space to identify heavy scale, grease buildup, and areas requiring special treatment.",
    },
    {
      title: "Deep Scrub & Sanitize",
      desc: "Our cleaners execute our detailed baseboard, oven, and tile-grout scrubbing checklist.",
    },
    {
      title: "Supervisor Quality Sign-off",
      desc: "A final supervisor inspection guarantees that all high and low surfaces are perfectly clean.",
    },
  ];

  const faqs = [
    {
      q: "What is the difference between a regular clean and a deep clean?",
      a: "A regular clean covers surface dusting, vacuuming, and general mopping. A deep clean targets hidden dirt, limescale build-up, interior appliances (like ovens and fridges), and detailed hand-wiping of baseboards and frames.",
    },
    {
      q: "How often should I book a Deep Cleaning service?",
      a: "We recommend booking a deep clean at least 2 to 3 times a year (such as Spring and Fall) to keep dust and scale build-up under control, or before initiating a recurring regular service.",
    },
    {
      q: "How long does a deep clean take?",
      a: "Because of the detailed scrubbing involved, deep cleanings take longer than standard cleans. Depending on the size and initial state of the property, they can take anywhere from 4 to 8 hours.",
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
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
          alt="Premium Deep Cleaning"
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
            Top-To-Bottom Scrub
          </span>
          <h1 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-text-dark max-w-xl">
            Deep Cleaning Services
          </h1>
          <p className="text-text-muted text-sm sm:text-base max-w-lg leading-relaxed">
            Intensive sanitization and detail scrubbing for your home or business premises. Perfect for seasonal touch-ups in the GTA.
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
            Eliminate Stubborn Dirt with Our Deep Clean
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            Sometimes, a standard dust-and-wipe isn't enough. Over time, grease accumulates behind stoves, scale builds up on shower screens, and dust settles on baseboards. Our premium Deep Cleaning service is a thorough, top-to-bottom sanitize designed to return your property to its original, spotless glory. We bring industrial scrubbing supplies and take the time to clean every minor detail.
          </p>
        </Reveal>
      </section>

      {/* Checklist Section */}
      <section className="py-20 bg-brand-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest">
              Detail Routine
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl text-text-dark">
              Deep Cleaning Checklist
            </h2>
            <p className="text-text-muted text-sm">
              Our most comprehensive package. Here is a breakdown of what our experts tackle:
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
              Process
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl text-text-dark">
              Precision Cleaning Steps
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
              Deep Clean FAQ
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
            Schedule Your Seasonal Deep Clean Today
          </h2>
          <p className="text-white/90 text-sm max-w-md mx-auto">
            Get an instant custom estimate and let our certified cleaning experts revive your space.
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
