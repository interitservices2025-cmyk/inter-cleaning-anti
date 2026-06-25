"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Icons } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";

export default function CarpetCleaningPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [heroLoaded, setHeroLoaded] = useState(false);

  const checklist = [
    {
      title: "Steam Carpet Clean",
      items: [
        "Pre-vacuuming to remove loose dirt and dry soil",
        "High-temperature steam extraction (Hot Water Extraction)",
        "Pre-treatment of traffic lanes & high-use spots",
        "Fast-dry blowers and pile grooming",
      ],
    },
    {
      title: "Stain & Odor Neutralizer",
      items: [
        "Pet stain treatment and enzyme breakdown",
        "Coffee, tea, ink, and grease spot neutralization",
        "Deep carpet fibers deodorization",
        "Eco-friendly sanitizing formulas (no toxic residues)",
      ],
    },
    {
      title: "Sofa & Upholstery Clean",
      items: [
        "Fabric testing to ensure dye and weave stability",
        "Gentle vacuuming of cushions and crevices",
        "Low-moisture hand cleaning of headrests & armrests",
        "Sanitizing upholstery padding underneath",
      ],
    },
    {
      title: "Fabric Protection",
      items: [
        "Coating with spill-resistant fabric shield",
        "Static control treatment (on request)",
        "Dust mite and allergen extraction",
        "Color brightening treatment",
      ],
    },
  ];

  const steps = [
    {
      title: "Vacuum & Pre-Treat",
      desc: "We extract loose dirt and apply specialized, non-toxic solutions to break down deep stains.",
    },
    {
      title: "Steam Extraction",
      desc: "Our high-psi steam extraction system injects hot water and sucks out dirt, mites, and soap residue.",
    },
    {
      title: "Drying & Protection",
      desc: "We apply carpet protector and set up dryers to reduce drying times down to 4-6 hours.",
    },
  ];

  const faqs = [
    {
      q: "How long does it take for carpets and sofas to dry?",
      a: "With our advanced high-extraction machinery, carpets typically dry within 4 to 6 hours. Upholstery may take slightly longer (6 to 8 hours) depending on ventilation and room temperature.",
    },
    {
      q: "Do you move furniture during the cleaning?",
      a: "Our cleaners can move light furniture (such as chairs, small tables, and sofas) to clean underneath. We do not move heavy items like wardrobes, large beds, or entertainment centers.",
    },
    {
      q: "Are you able to remove all pet stains and odors?",
      a: "We use professional-grade enzymatic treatments that break down organic pet waste at a molecular level. While we remove 95% of stains and odors, results depend on how long the stain has been set and if it has damaged carpet dyes.",
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
          src="https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=1200&q=80"
          alt="Premium Carpet & Upholstery Cleaning"
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
            Fiber Restoration
          </span>
          <h1 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-text-dark max-w-xl">
            Carpet & Upholstery Cleaning
          </h1>
          <p className="text-text-muted text-sm sm:text-base max-w-lg leading-relaxed">
            Revitalize your home carpets, area rugs, and upholstered furniture. Specialized steam extraction across Toronto & the GTA.
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
            Extend the Lifespan of Your Carpets & Sofas
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            Carpets and upholstered furniture act as giant air filters, trapping dust, pet dander, pollen, and bacteria. Over time, these particles grind into fabric fibers, causing discoloration, odors, and premature wear. Our premium Carpet & Upholstery cleaning service uses professional hot-water extraction and eco-friendly enzymes to lift deep-seated grime and neutralize allergens, leaving your home clean and fresh.
          </p>
        </Reveal>
      </section>

      {/* Checklist Section */}
      <section className="py-20 bg-brand-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest">
              Fabric Care
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl text-text-dark">
              Carpet & Upholstery Checklist
            </h2>
            <p className="text-text-muted text-sm">
              We clean all fabrics with care. Here is what is covered in our fiber package:
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
              Expert Method
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl text-text-dark">
              Steam Extraction Process
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
              Carpet Care FAQ
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
            Give Your Carpets and Sofas a Fresh Lease on Life
          </h2>
          <p className="text-white/90 text-sm max-w-md mx-auto">
            Book our professional steam cleaning services today. Fast drying, deep stain extraction.
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
