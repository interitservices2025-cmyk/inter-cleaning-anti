"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Icons } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";

export default function OfficeCleaningPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [heroLoaded, setHeroLoaded] = useState(false);

  const toggleFaq = (index: number | null) => {
    setOpenFaq(index);
  };

  const checklist = [
    {
      title: "Desks & Workstations",
      items: [
        "Dust & sanitize desk surfaces (keyboards, monitors on request)",
        "Empty all trash bins and recycling containers",
        "Disinfect desk phones & light switches",
        "Vacuum carpeted areas and mop hard flooring",
      ],
    },
    {
      title: "Breakrooms & Kitchens",
      items: [
        "Sanitize counter surfaces, sinks, and faucets",
        "Wipe exterior of appliances (microwave, fridge, coffee makers)",
        "Disinfect dining tables and chairs",
        "Mop and scrub kitchen tiling",
      ],
    },
    {
      title: "Common Rooms & Lobbies",
      items: [
        "Dust glass tables, shelves, cabinets, and panels",
        "Polish door handles and entry glass panels",
        "Tidy up chairs and waiting sofas",
        "Vacuum high-traffic entry mats & runners",
      ],
    },
    {
      title: "Sanitized Restrooms",
      items: [
        "Thorough disinfection of toilets, urinals, and handles",
        "Scrub sinks, taps, countertops, and mirrors",
        "Mop floor tiling with clinic-grade disinfectants",
        "Restock toilet paper, soap, and hand towel dispensers",
      ],
    },
  ];

  const steps = [
    {
      title: "Free On-Site Assessment",
      desc: "We visit your facility to assess square footage, traffic, and clean frequencies.",
    },
    {
      title: "Custom Cleans Schedule",
      desc: "We establish a checklist and schedule cleanings (after-hours, daily, weekly, or bi-weekly).",
    },
    {
      title: "Ongoing Quality Audits",
      desc: "Our cleaning supervisors conduct regular audits to ensure consistent standards.",
    },
  ];

  const faqs = [
    {
      q: "Do you clean offices during business hours or after-hours?",
      a: "Most businesses prefer after-hours cleaning to avoid work disruption. We offer fully flexible scheduling, including evenings and weekends, to fit your operations.",
    },
    {
      q: "What types of commercial spaces do you service?",
      a: "We clean small to medium office spaces, retail outlets, showrooms, medical practices, law firms, and real estate offices across the GTA.",
    },
    {
      q: "Are your commercial cleaners trained and vetted?",
      a: "Yes. All staff members undergo thorough background checks, sign non-disclosure agreements to protect corporate confidentiality, and are trained in sanitization best practices.",
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
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
          alt="Office & Commercial Cleaning"
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
            Commercial Sanitation
          </span>
          <h1 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-text-dark max-w-xl">
            Office & Commercial Cleaning
          </h1>
          <p className="text-text-muted text-sm sm:text-base max-w-lg leading-relaxed">
            Maintain a spotless, professional, and healthy work environment. Trusted commercial cleaning services in Toronto and the GTA.
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
            Increase Productivity with a Pristine Workspace
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            A clean workspace is essential for employee health, morale, and performance. Our professional office cleaning service ensures that your workspaces, conference rooms, breakrooms, and bathrooms are thoroughly disinfected on a schedule that fits your company's needs. We customize our checklist to match your building layout, corporate policies, and budget.
          </p>
        </Reveal>
      </section>

      {/* Checklist Section */}
      <section className="py-20 bg-brand-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl text-text-dark">
              Commercial Cleaning Checklist
            </h2>
            <p className="text-text-muted text-sm">
              We deliver immaculate office spaces. Here is an overview of what is included in our business package:
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
              Our Process
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl text-text-dark">
              Structured Commercial Onboarding
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
              Commercial Cleaning FAQ
            </h2>
          </Reveal>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 100} animationType="fade-in-up">
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => toggleFaq(openFaq === idx ? null : idx)}
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
            Ready to Schedule an Office Consultation?
          </h2>
          <p className="text-white/90 text-sm max-w-md mx-auto">
            Book an assessment online or call our support team to discuss your corporate specifications.
          </p>
          <div className="pt-2">
            <Button variant="secondary" href="/quote">
              Request a Commercial Quote
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
