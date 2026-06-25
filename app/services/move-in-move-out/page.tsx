"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Icons } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";

export default function MoveInOutCleaningPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [heroLoaded, setHeroLoaded] = useState(false);

  const checklist = [
    {
      title: "Inside Closets & Drawers",
      items: [
        "Vacuum and damp-wipe inside all empty closets",
        "Wipe shelving, drawer tracks, and cabinet interiors",
        "Clean doors, knobs, hinges, and frames",
        "Sanitize vanity cabinets inside and out",
      ],
    },
    {
      title: "Heavy Appliance Detail",
      items: [
        "Scrub interior of empty ovens & stove grates",
        "Wash and disinfect interior refrigerator shelves & bins",
        "Clean behind & under stove & fridge (where pullable)",
        "Degrease range hood, exhaust vents, and filter mesh",
      ],
    },
    {
      title: "Detailed Bathroom Sanitizing",
      items: [
        "Thorough disinfection of sinks, bathtubs, and toilets",
        "Descale shower screens, faucets, and tile walls",
        "Polish vanity mirrors, knobs, and tile grout lines",
        "Wash and sanitize bathroom baseboards and floors",
      ],
    },
    {
      title: "Hard Floor & Wall Prep",
      items: [
        "Spot-clean fingerprints and marks off walls",
        "Dust and damp-wipe all baseboards and heaters",
        "Vacuum all carpets, area rugs, and corners",
        "Damp-mop all hardwood, laminate, or tile floorings",
      ],
    },
  ];

  const steps = [
    {
      title: "Book Empty Home Clean",
      desc: "Coordinate with your moving dates. Ensure the home is completely empty of furniture.",
    },
    {
      title: "Deep Vacant Cleaning",
      desc: "Our vetting team sanitizes every interior cupboard, baseboard, oven, and window sill.",
    },
    {
      title: "Inspection Checklist",
      desc: "Receive a detailed cleanup report showing proof of deep cleaning for landlords or buyers.",
    },
  ];

  const faqs = [
    {
      q: "Does the home need to be completely empty of furniture?",
      a: "Yes. For our team to execute a successful move-in/move-out clean, all furniture and personal belongings should be moved out of the property beforehand.",
    },
    {
      q: "Do you guarantee security deposit returns?",
      a: "We guarantee that our cleaning will pass any professional landlord inspection. If your landlord raises any issue with our cleaning, we return and re-clean the area for free.",
    },
    {
      q: "Are utilities (water and electricity) required?",
      a: "Yes, our cleaning equipment and vacuum cleaners require functioning electricity, and we need running hot/cold water to clean effectively.",
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
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
          alt="Move-In Move-Out Cleaning"
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
            Stress-Free Relocation
          </span>
          <h1 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-text-dark max-w-xl">
            Move-In / Move-Out Cleaning
          </h1>
          <p className="text-text-muted text-sm sm:text-base max-w-lg leading-relaxed">
            Transition smoothly with our vacant property cleaning service. Perfect for buyers, sellers, tenants, and landlords in Toronto & the GTA.
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
            Simplify Your Move with Professional Cleaners
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            Moving to a new house is one of the most stressful life events. Cleaning the old space to secure your security deposit, or cleaning the new home before unpacking, adds extra burden. Our specialized Move-In / Move-Out cleaning package guarantees that every cabinet, drawer, baseboard, and appliance is thoroughly scrubbed, so you can focus on settling in.
          </p>
        </Reveal>
      </section>

      {/* Checklist Section */}
      <section className="py-20 bg-brand-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest">
              Checklist details
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl text-text-dark">
              Move Cleaning Checklist
            </h2>
            <p className="text-text-muted text-sm">
              We focus on deep sanitizing empty properties. Here is what is covered:
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
              Moving Checklist
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl text-text-dark">
              How We Coordinate Your Move
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
              Move Clean FAQ
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
            Secure Your Inspection Success Today
          </h2>
          <p className="text-white/90 text-sm max-w-md mx-auto">
            Book your move-in/move-out clean with GTA's leading cleaning team. Free estimates online.
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
