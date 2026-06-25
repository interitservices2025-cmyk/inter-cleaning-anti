"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Icons } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";

interface ServiceBlock {
  title: string;
  desc: string;
  image: string;
  href: string;
  icon: React.ReactNode;
  features: string[];
}

export default function ServicesPage() {
  const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>({});
  
  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  const servicesList: ServiceBlock[] = [
    {
      title: "Residential Cleaning",
      desc: "Comprehensive cleaning routines for homes, condos, and apartments. Let our experts clean while you enjoy your free time.",
      image: "https://images.unsplash.com/photo-1603796846097-bee99e4a60c9?auto=format&fit=crop&w=600&q=80",
      href: "/services/residential-cleaning",
      icon: <Icons.Home size={24} />,
      features: [
        "Kitchen counters, sink, & appliance exteriors",
        "Bathroom sanitizing, tub, shower, & toilet scrub",
        "Dusting all furniture, shelves, & decor",
        "Vacuuming carpets & washing hard floors",
      ],
    },
    {
      title: "Office & Commercial Cleaning",
      desc: "Clean offices foster productivity and protect employee health. Custom commercial schedules tailored to your business operations.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
      href: "/services/office-cleaning",
      icon: <Icons.Building size={24} />,
      features: [
        "Desk sanitizing & trash bin empty",
        "Breakroom kitchen & restroom disinfection",
        "Lobby, hallway, & meeting room polishing",
        "After-hours cleaning for zero disruption",
      ],
    },
    {
      title: "Deep Cleaning",
      desc: "A intensive scrub down targeting stubborn stains, scale, and dust build-up. Perfect for seasonal refreshing.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
      href: "/services/deep-cleaning",
      icon: <Icons.Sparkles size={24} />,
      features: [
        "Inside oven, fridge, and cabinets",
        "Detailed baseboard & door frame scrubbing",
        "Mildew removal from tile grout & seams",
        "Sanitization of light switches & doorknobs",
      ],
    },
    {
      title: "Move-In / Move-Out Cleaning",
      desc: "Make your transition simple. We clean every nook and cranny to prepare the home for new occupants or landlords.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      href: "/services/move-in-move-out",
      icon: <Icons.Trash size={24} />,
      features: [
        "Cleaning inside empty closets & drawers",
        "Deep carpet vacuuming & hard floor sanitizing",
        "Polishing fixtures & washing windows inside",
        "Guaranteed landlord inspection check",
      ],
    },
    {
      title: "Carpet & Upholstery Cleaning",
      desc: "Extend the lifespan of your carpets and sofas. Our high-extraction method removes deep dirt, odors, and stubborn pet stains.",
      image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=600&q=80",
      href: "/services/carpet-upholstery-cleaning",
      icon: <Icons.Brush size={24} />,
      features: [
        "High-temperature steam extraction",
        "Non-toxic, residue-free stain pre-treatment",
        "Allergen & pet dander elimination",
        "Fabric guard protective application",
      ],
    },
    {
      title: "Window & Glass Cleaning",
      desc: "Brighten your view with interior and exterior window washing. We remove grime, rain stains, and streaks.",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=600&q=80",
      href: "/services/window-glass-cleaning",
      icon: <Icons.Waves size={24} />,
      features: [
        "Streak-free squeegee window cleaning",
        "Wiping sill, frame, and screen wash",
        "Removal of paint splashes & adhesive residue",
        "Safe, insured ladder operations",
      ],
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-brand-light py-20 border-b border-gray-100">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="bg-primary/10 text-primary font-montserrat font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full inline-block">
            Our Offerings
          </span>
          <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl text-text-dark max-w-3xl mx-auto leading-tight">
            Premium Cleaning Solutions for Home & Office
          </h1>
          <p className="font-opensans text-text-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            From routine home maintenance to commercial sanitation, we deliver spotless results backed by our 100% guarantee.
          </p>
        </Reveal>
      </section>

      {/* Services List Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {servicesList.map((svc, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={svc.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-b border-gray-50 pb-20 last:border-0 last:pb-0"
              >
                {/* Image */}
                <Reveal animationType={isEven ? "slide-in-left" : "slide-in-right"} className={`w-full ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}>
                  <div className="relative h-[300px] sm:h-[400px] w-full rounded-3xl overflow-hidden shadow-lg bg-gray-100">
                    {!loadedImages[index] && (
                      <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center z-10">
                        <Icons.Sparkles className="text-gray-300 animate-spin" size={24} />
                      </div>
                    )}
                    <img
                      src={svc.image}
                      alt={svc.title}
                      onLoad={() => handleImageLoad(index)}
                      className={`w-full h-full object-cover transition-opacity duration-500 ${
                        loadedImages[index] ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl text-primary shadow-md z-20">
                      {svc.icon}
                    </div>
                  </div>
                </Reveal>

                {/* Text Description */}
                <Reveal animationType={isEven ? "slide-in-right" : "slide-in-left"} className={`space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl text-text-dark">
                    {svc.title}
                  </h2>
                  <p className="font-opensans text-text-muted text-sm sm:text-base leading-relaxed">
                    {svc.desc}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-opensans text-xs text-text-dark">
                    {svc.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <Icons.Check className="text-secondary mt-0.5 flex-shrink-0" size={14} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 flex flex-col sm:flex-row gap-4">
                    <Button variant="primary" href="/quote">
                      Get an Estimate
                    </Button>
                    <Button variant="outline" href={svc.href}>
                      Detailed Features
                    </Button>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      {/* Promise & Standards Section */}
      <section className="py-20 bg-brand-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-center font-opensans">
            <Reveal animationType="fade-in-up" delay={0} className="h-full flex">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-150 space-y-4 w-full">
                <div className="inline-flex text-primary p-3 bg-primary/5 rounded-2xl">
                  <Icons.Sparkles size={28} />
                </div>
                <h3 className="font-montserrat font-bold text-lg text-text-dark">
                  Eco-Friendly Always
                </h3>
                <p className="text-text-muted text-xs leading-relaxed">
                  We believe that clean shouldn't mean toxic. We exclusively use biodegradable, organic cleaning products that protect your family and pet's health.
                </p>
              </div>
            </Reveal>
            <Reveal animationType="fade-in-up" delay={150} className="h-full flex">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-150 space-y-4 w-full">
                <div className="inline-flex text-primary p-3 bg-primary/5 rounded-2xl">
                  <Icons.ShieldCheck size={28} />
                </div>
                <h3 className="font-montserrat font-bold text-lg text-text-dark">
                  Rigorous Staff Vetting
                </h3>
                <p className="text-text-muted text-xs leading-relaxed">
                  Our clean staff are full-time employees, insured, bonded, and vetted via complete criminal background checks for absolute peace of mind.
                </p>
              </div>
            </Reveal>
            <Reveal animationType="fade-in-up" delay={300} className="h-full flex">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-150 space-y-4 w-full">
                <div className="inline-flex text-primary p-3 bg-primary/5 rounded-2xl">
                  <Icons.Clock size={28} />
                </div>
                <h3 className="font-montserrat font-bold text-lg text-text-dark">
                  24-Hour Guarantee
                </h3>
                <p className="text-text-muted text-xs leading-relaxed">
                  If anything is not up to your standards, let us know within 24 hours. We'll return and fix it immediately, entirely free of charge.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quote CTA Banner */}
      <section className="bg-primary py-16 text-white text-center">
        <Reveal animationType="scale-up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-montserrat font-extrabold text-3xl text-white">
            Ready to Schedule Your Cleaning?
          </h2>
          <p className="font-opensans text-white/90 text-sm max-w-xl mx-auto">
            Book now and get a customized quote for your residential home or commercial premises. We serve Toronto, Mississauga, Markham, Vaughan, and Oakville.
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
