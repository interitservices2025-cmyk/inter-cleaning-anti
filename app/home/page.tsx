"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Icons } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";

interface ServiceCardProps {
  title: string;
  desc: string;
  image: string;
  href: string;
  icon: React.ReactNode;
  delay?: number;
}

function ServiceCard({ title, desc, image, href, icon, delay = 0 }: ServiceCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Reveal delay={delay} animationType="fade-in-up" className="h-full">
      <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
          {/* Skeleton Loader */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
              <Icons.Sparkles className="text-gray-300 animate-spin" size={24} />
            </div>
          )}
          <img
            src={image}
            alt={title}
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl text-primary shadow-sm z-10">
            {icon}
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="font-montserrat font-bold text-lg text-text-dark group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-text-muted text-sm mt-2 leading-relaxed flex-grow">
            {desc}
          </p>
          <div className="mt-6 pt-4 border-t border-gray-50">
            <Link
              href={href}
              className="inline-flex items-center gap-2 text-primary font-montserrat font-bold text-xs uppercase tracking-wider group-hover:gap-3 transition-all"
            >
              Learn More <Icons.ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [aboutLoaded, setAboutLoaded] = useState(false);
  const [kitchenLoaded, setKitchenLoaded] = useState(false);
  const [bathroomLoaded, setBathroomLoaded] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services: ServiceCardProps[] = [
    {
      title: "Residential Cleaning",
      desc: "Exceptional cleaning services for houses, condos, and apartments. Custom schedules to suit your lifestyle.",
      image: "https://images.unsplash.com/photo-1603796846097-bee99e4a60c9?auto=format&fit=crop&w=600&q=80",
      href: "/services/residential-cleaning",
      icon: <Icons.Home size={22} />,
    },
    {
      title: "Office & Commercial Cleaning",
      desc: "Maintain a pristine and productive workspace. Expert sanitation and customized plans for offices of all sizes.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
      href: "/services/office-cleaning",
      icon: <Icons.Building size={22} />,
    },
    {
      title: "Deep Cleaning",
      desc: "A thorough top-to-bottom scrub down of your property. Reaches hidden dirt, dust, and grime in every corner.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
      href: "/services/deep-cleaning",
      icon: <Icons.Sparkles size={22} />,
    },
    {
      title: "Move-In / Move-Out Cleaning",
      desc: "Relocate stress-free. We guarantee a spotless home for new occupants or to secure your security deposit.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      href: "/services/move-in-move-out",
      icon: <Icons.Trash size={22} />,
    },
    {
      title: "Carpet & Upholstery Cleaning",
      desc: "Revitalize your carpets and furniture. Specialized deep extraction process removes stains, allergens, and odors.",
      image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=600&q=80",
      href: "/services/carpet-upholstery-cleaning",
      icon: <Icons.Brush size={22} />,
    },
    {
      title: "Window & Glass Cleaning",
      desc: "Crystal-clear exterior and interior window washing. Bring bright, natural light back into your spaces.",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=600&q=80",
      href: "/services/window-glass-cleaning",
      icon: <Icons.Waves size={22} />,
    },
  ];

  const faqs = [
    {
      q: "Are your cleaners insured and bonded?",
      a: "Yes, absolutely. All our professional cleaners are fully insured, bonded, and undergo rigorous background checks to ensure your peace of mind and security.",
    },
    {
      q: "Do I need to supply the cleaning equipment and products?",
      a: "No, you don't. Our team arrives fully equipped with commercial-grade vacuums, microfibers, and premium, eco-friendly cleaning solutions at no extra cost to you.",
    },
    {
      q: "What is your 100% Satisfaction Guarantee?",
      a: "We stand behind the quality of our work. If you are not completely satisfied with any area we've cleaned, simply call us within 24 hours and we will return to re-clean the area for free.",
    },
    {
      q: "How do you calculate your cleaning rates?",
      a: "Our rates are based on the square footage of the space, the layout (bedrooms/bathrooms), and the specific type of service requested. Request a free quote online to get an exact customized estimate.",
    },
    {
      q: "Can I schedule recurring cleanings?",
      a: "Yes! We offer weekly, bi-weekly (every 2 weeks), and monthly schedules. Regular clients receive special discounted rates on all their ongoing cleaning sessions.",
    },
  ];

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Text column */}
            <Reveal animationType="slide-in-left" className="space-y-8 text-center lg:text-left z-10">
              <span className="bg-primary/10 text-primary font-montserrat font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full inline-block">
                Greater Toronto Area's Cleaning Leader
              </span>
              <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl lg:text-6xl text-text-dark leading-tight">
                Pristine Homes.
                <br />
                <span className="text-primary">Spotless Offices.</span>
              </h1>
              <p className="font-opensans text-text-muted text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Experience the luxury of a premium cleaning service. We deliver immaculate results with trained staff, eco-friendly products, and a 100% satisfaction guarantee.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button variant="primary" href="/quote">
                  Get a Free Quote
                </Button>
                <Button variant="outline" href="/services">
                  Explore Services
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4 text-xs font-semibold text-text-dark font-opensans border-t border-gray-100 max-w-md mx-auto lg:mx-0">
                <span className="flex items-center gap-1.5">
                  <Icons.Check className="text-secondary" size={16} /> Fully Insured & Bonded
                </span>
                <span className="flex items-center gap-1.5">
                  <Icons.Check className="text-secondary" size={16} /> Eco-Friendly Products
                </span>
              </div>
            </Reveal>

            {/* Image column */}
            <Reveal delay={200} animationType="fade-in-up" className="w-full">
              <div className="relative h-[350px] sm:h-[450px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
                {!heroLoaded && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                    <Icons.Sparkles className="text-gray-300 animate-spin" size={32} />
                  </div>
                )}
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
                  alt="Professional Cleaning Services"
                  onLoad={() => setHeroLoaded(true)}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    heroLoaded ? "opacity-100" : "opacity-0"
                  }`}
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl flex items-center justify-between border border-gray-100 z-10">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-xl">
                      <Icons.Sparkles size={24} />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-sm text-text-dark">
                        Sparkling Guarantee
                      </h4>
                      <p className="font-opensans text-text-muted text-xs">
                        100% Satisfaction or we re-clean
                      </p>
                    </div>
                  </div>
                  <div className="text-right hidden sm:block">
                    <div className="flex text-amber-400 gap-0.5 mb-1 justify-end">
                      {[...Array(5)].map((_, i) => (
                        <Icons.Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <span className="font-opensans text-text-dark font-bold text-xs">
                      4.9/5 on Google Reviews
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Trust Section / Stats */}
      <section className="bg-brand-light py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center font-opensans">
            <Reveal animationType="fade-in-up" delay={0} className="space-y-2">
              <div className="inline-flex text-primary mb-2">
                <Icons.ShieldCheck size={36} />
              </div>
              <h3 className="font-montserrat font-extrabold text-2xl text-text-dark">
                Trusted & Verified
              </h3>
              <p className="text-text-muted text-sm max-w-xs mx-auto">
                Every member of our crew undergoes extensive training and background checks.
              </p>
            </Reveal>
            <Reveal animationType="fade-in-up" delay={150} className="space-y-2">
              <div className="inline-flex text-primary mb-2">
                <Icons.Clock size={36} />
              </div>
              <h3 className="font-montserrat font-extrabold text-2xl text-text-dark">
                Flexible Scheduling
              </h3>
              <p className="text-text-muted text-sm max-w-xs mx-auto">
                Book cleanings on your schedule: weekly, bi-weekly, monthly, or one-off services.
              </p>
            </Reveal>
            <Reveal animationType="fade-in-up" delay={300} className="space-y-2">
              <div className="inline-flex text-primary mb-2">
                <Icons.Sparkles size={36} />
              </div>
              <h3 className="font-montserrat font-extrabold text-2xl text-text-dark">
                Premium Equipment
              </h3>
              <p className="text-text-muted text-sm max-w-xs mx-auto">
                We use high-grade HEPA filters and safe, non-toxic cleaning products.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-dark">
              Our Professional Cleaning Services
            </h2>
            <p className="font-opensans text-text-muted text-sm sm:text-base leading-relaxed">
              We offer comprehensive residential and commercial cleaning solutions tailored to your unique requirements. Enjoy a pristine space without lifting a finger.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => (
              <ServiceCard key={svc.title} {...svc} delay={idx * 100} />
            ))}
          </div>

          <Reveal className="text-center mt-12">
            <Button variant="outline" href="/services">
              View All Services
            </Button>
          </Reveal>
        </div>
      </section>

      {/* 4. About Preview Section */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image stack */}
            <Reveal animationType="slide-in-left" className="w-full">
              <div className="relative h-[350px] lg:h-[450px] w-full rounded-3xl overflow-hidden shadow-lg bg-gray-100">
                {!aboutLoaded && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                    <Icons.Sparkles className="text-gray-300 animate-spin" size={24} />
                  </div>
                )}
                <img
                  src="https://images.unsplash.com/photo-1528740564264-4a90d33d8114?auto=format&fit=crop&w=800&q=80"
                  alt="Our Cleaning Standards"
                  onLoad={() => setAboutLoaded(true)}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    aboutLoaded ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            </Reveal>

            {/* Text content */}
            <Reveal animationType="slide-in-right" className="space-y-6">
              <span className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest">
                Get to Know Us
              </span>
              <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-dark">
                Committed to Delivering Sparkling Results
              </h2>
              <p className="font-opensans text-text-muted text-sm sm:text-base leading-relaxed">
                Founded with a vision to redefine professional cleaning in Toronto, Inter-Cleaning Services has grown into one of the most trusted names in the GTA. We don't just clean; we sanitize, refresh, and care for your environment.
              </p>
              <p className="font-opensans text-text-muted text-sm sm:text-base leading-relaxed">
                Our approach combines top-tier hospitality standards with specialized sanitizing practices, ensuring your family, guests, and employees reside in absolute safety and clean comfort.
              </p>
              <div className="pt-4">
                <Button variant="primary" href="/about">
                  Read Our Story
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest">
              Simple Steps
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-dark">
              How It Works
            </h2>
            <p className="font-opensans text-text-muted text-sm sm:text-base">
              Getting your space cleaned is easy and stress-free. Follow these three simple steps.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <Reveal animationType="fade-in-up" delay={0} className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-montserrat font-bold text-xl mx-auto shadow-sm">
                1
              </div>
              <h3 className="font-montserrat font-bold text-lg text-text-dark">
                Request a Quote
              </h3>
              <p className="font-opensans text-text-muted text-sm leading-relaxed max-w-xs mx-auto">
                Fill out our quick quote form online. Select your service, property type, and frequency.
              </p>
            </Reveal>

            <Reveal animationType="fade-in-up" delay={150} className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center text-secondary font-montserrat font-bold text-xl mx-auto shadow-sm">
                2
              </div>
              <h3 className="font-montserrat font-bold text-lg text-text-dark">
                Schedule & Clean
              </h3>
              <p className="font-opensans text-text-muted text-sm leading-relaxed max-w-xs mx-auto">
                Confirm your slot. Our fully-vetted and equipped cleaning professionals arrive and do their magic.
              </p>
            </Reveal>

            <Reveal animationType="fade-in-up" delay={300} className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500 font-montserrat font-bold text-xl mx-auto shadow-sm">
                3
              </div>
              <h3 className="font-montserrat font-bold text-lg text-text-dark">
                Enjoy Your Space
              </h3>
              <p className="font-opensans text-text-muted text-sm leading-relaxed max-w-xs mx-auto">
                Step into a spotless, fresh, and sanitized environment backed by our Satisfaction Guarantee.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. Before & After Showcase */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest">
              Visible Quality
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-dark">
              Before & After Showcase
            </h2>
            <p className="font-opensans text-text-muted text-sm sm:text-base">
              See the direct impact of our deep cleaning expertise in kitchens, carpets, and bathrooms.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Kitchen Showcase */}
            <Reveal animationType="fade-in-up" delay={0} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
              <div className="grid grid-cols-2">
                <div className="relative h-64 w-full bg-gray-100">
                  {!kitchenLoaded && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center z-10" />
                  )}
                  <img
                    src="https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=400&q=80"
                    alt="Kitchen Before Cleaning"
                    onLoad={() => setKitchenLoaded(true)}
                    className={`w-full h-full object-cover grayscale brightness-75 transition-opacity duration-500 ${
                      kitchenLoaded ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <span className="absolute top-4 left-4 bg-red-500 text-white font-montserrat text-2xs uppercase tracking-wider px-2 py-1 rounded font-bold z-25">
                    Before
                  </span>
                </div>
                <div className="relative h-64 w-full bg-gray-100">
                  {!kitchenLoaded && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center z-10" />
                  )}
                  <img
                    src="https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=400&q=80"
                    alt="Kitchen After Cleaning"
                    onLoad={() => setKitchenLoaded(true)}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${
                      kitchenLoaded ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <span className="absolute top-4 left-4 bg-green-500 text-white font-montserrat text-2xs uppercase tracking-wider px-2 py-1 rounded font-bold z-25">
                    After
                  </span>
                </div>
              </div>
              <div className="p-5 text-center flex-grow">
                <h4 className="font-montserrat font-bold text-base text-text-dark">
                  Deep Kitchen Cleaning
                </h4>
                <p className="font-opensans text-text-muted text-xs mt-1">
                  Removal of heavy grease deposits and surface sanitization.
                </p>
              </div>
            </Reveal>

            {/* Bathroom Showcase */}
            <Reveal animationType="fade-in-up" delay={150} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
              <div className="grid grid-cols-2">
                <div className="relative h-64 w-full bg-gray-100">
                  {!bathroomLoaded && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center z-10" />
                  )}
                  <img
                    src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80"
                    alt="Bathroom Before Cleaning"
                    onLoad={() => setBathroomLoaded(true)}
                    className={`w-full h-full object-cover grayscale brightness-50 transition-opacity duration-500 ${
                      bathroomLoaded ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <span className="absolute top-4 left-4 bg-red-500 text-white font-montserrat text-2xs uppercase tracking-wider px-2 py-1 rounded font-bold z-25">
                    Before
                  </span>
                </div>
                <div className="relative h-64 w-full bg-gray-100">
                  {!bathroomLoaded && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center z-10" />
                  )}
                  <img
                    src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80"
                    alt="Bathroom After Cleaning"
                    onLoad={() => setBathroomLoaded(true)}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${
                      bathroomLoaded ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <span className="absolute top-4 left-4 bg-green-500 text-white font-montserrat text-2xs uppercase tracking-wider px-2 py-1 rounded font-bold z-25">
                    After
                  </span>
                </div>
              </div>
              <div className="p-5 text-center flex-grow">
                <h4 className="font-montserrat font-bold text-base text-text-dark">
                  Grout & Tile Revitalization
                </h4>
                <p className="font-opensans text-text-muted text-xs mt-1">
                  Complete mildew removal and scale elimination in showers.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest">
              Happy Clients
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-dark">
              What Our Customers Say
            </h2>
            <p className="font-opensans text-text-muted text-sm sm:text-base">
              Read real feedback from homeowners and property managers across the Greater Toronto Area.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Reveal animationType="fade-in-up" delay={0} className="h-full flex">
              <div className="bg-brand-light rounded-3xl p-8 border border-gray-100 flex flex-col justify-between w-full">
                <div className="space-y-4 font-opensans">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Icons.Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-text-dark text-sm italic leading-relaxed">
                    "Absolutely amazing job! The team cleaned my condo in downtown Toronto before I moved in, and they left it looking brand new. The attention to detail in the kitchen and bathrooms was stunning."
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200/50 flex items-center gap-3">
                  <div className="bg-primary text-white font-montserrat font-bold text-xs w-10 h-10 rounded-full flex items-center justify-center">
                    SM
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-sm text-text-dark">Sarah Miller</h4>
                    <p className="font-opensans text-text-muted text-xs">Condo Owner, Toronto</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Testimonial 2 */}
            <Reveal animationType="fade-in-up" delay={150} className="h-full flex">
              <div className="bg-brand-light rounded-3xl p-8 border border-gray-100 flex flex-col justify-between w-full">
                <div className="space-y-4 font-opensans">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Icons.Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-text-dark text-sm italic leading-relaxed">
                    "Inter-Cleaning Services handles our commercial office cleaning in Mississauga. They are consistently punctual, thorough, and highly professional. Highly recommend for any business."
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200/50 flex items-center gap-3">
                  <div className="bg-primary text-white font-montserrat font-bold text-xs w-10 h-10 rounded-full flex items-center justify-center">
                    DL
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-sm text-text-dark">David Lee</h4>
                    <p className="font-opensans text-text-muted text-xs">Operations Manager, Mississauga</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Testimonial 3 */}
            <Reveal animationType="fade-in-up" delay={300} className="h-full flex">
              <div className="bg-brand-light rounded-3xl p-8 border border-gray-100 flex flex-col justify-between w-full">
                <div className="space-y-4 font-opensans">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Icons.Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-text-dark text-sm italic leading-relaxed">
                    "We have booked their bi-weekly residential service for our home in Markham. Coming back to a clean and fresh-smelling home is the best part of our week. Excellent customer service!"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200/50 flex items-center gap-3">
                  <div className="bg-primary text-white font-montserrat font-bold text-xs w-10 h-10 rounded-full flex items-center justify-center">
                    RK
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-sm text-text-dark">Rebecca K.</h4>
                    <p className="font-opensans text-text-muted text-xs">Homeowner, Markham</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16 space-y-4">
            <span className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest">
              Have Questions?
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl text-text-dark">
              Frequently Asked Questions
            </h2>
            <p className="font-opensans text-text-muted text-sm">
              Find answers to common questions about our services and booking details.
            </p>
          </Reveal>

          <div className="space-y-4 font-opensans">
            {faqs.map((faq, index) => (
              <Reveal key={index} delay={index * 80} animationType="fade-in-up">
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex items-center justify-between w-full p-6 text-left focus:outline-none cursor-pointer"
                  >
                    <span className="font-montserrat font-bold text-sm sm:text-base text-text-dark">
                      {faq.q}
                    </span>
                    <div className="text-primary ml-4">
                      {openFaq === index ? <Icons.Minus size={18} /> : <Icons.Plus size={18} />}
                    </div>
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      openFaq === index ? "max-h-96 border-t border-gray-100" : "max-h-0"
                    }`}
                  >
                    <p className="p-6 text-text-muted text-sm leading-relaxed bg-brand-light/20">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="bg-primary py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f11582] via-primary to-[#b00a5c] opacity-80"></div>
        <Reveal animationType="scale-up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Ready to Experience the Ultimate Clean?
          </h2>
          <p className="font-opensans text-white/90 text-base sm:text-lg max-w-xl mx-auto">
            Book now and get a customized quote for your home or business. Our cleaning experts are ready to make your space shine.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="secondary" href="/quote">
              Request a Free Quote
            </Button>
            <Button variant="white" href="/contact" className="border-2 border-white/10 hover:border-white">
              Contact Our Office
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
