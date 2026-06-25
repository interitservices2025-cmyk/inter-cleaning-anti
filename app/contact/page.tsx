import React from "react";
import ContactForm from "@/components/forms/ContactForm";
import { Icons } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";

export default function ContactPage() {
  const serviceAreas = [
    { city: "Toronto", zip: "M5C / M4B" },
    { city: "Mississauga", zip: "L5A / L4T" },
    { city: "Brampton", zip: "L6R / L6T" },
    { city: "Markham", zip: "L3R / L6C" },
    { city: "Vaughan", zip: "L4K / L6A" },
    { city: "Oakville", zip: "L6H / L6M" },
    { city: "Burlington", zip: "L7L / L7R" },
    { city: "Richmond Hill", zip: "L4C / L4E" },
  ];

  return (
    <div className="w-full font-opensans bg-white">
      {/* Hero Section */}
      <section className="bg-brand-light py-20 border-b border-gray-100">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="bg-primary/10 text-primary font-montserrat font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full inline-block">
            Get in Touch
          </span>
          <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl text-text-dark max-w-3xl mx-auto leading-tight">
            We'd Love to Hear From You
          </h1>
          <p className="text-text-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Have questions about our cleaning checklists or scheduling? Contact our Brampton office today.
          </p>
        </Reveal>
      </section>

      {/* Info & Form Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact details */}
          <Reveal animationType="slide-in-left" className="space-y-10">
            <div className="space-y-4">
              <span className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest">
                Our Office
              </span>
              <h2 className="font-montserrat font-extrabold text-3xl text-text-dark">
                Contact Information
              </h2>
              <p className="text-text-muted text-sm leading-relaxed">
                Our customer care representatives are available Monday through Sunday to assist you with scheduling, estimates, and customer support.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              {/* Phone */}
              <div className="space-y-3">
                <div className="bg-primary/10 text-primary p-3 rounded-2xl inline-block">
                  <Icons.Phone size={22} />
                </div>
                <h4 className="font-montserrat font-bold text-base text-text-dark">Call Us</h4>
                <p className="text-text-muted text-xs leading-relaxed">
                  Speak directly with an agent:
                </p>
                <a href="tel:+14168719045" className="block text-primary font-bold text-sm hover:underline">
                  +1 (416) 871-9045
                </a>
              </div>

              {/* Email */}
              <div className="space-y-3">
                <div className="bg-primary/10 text-primary p-3 rounded-2xl inline-block">
                  <Icons.Mail size={22} />
                </div>
                <h4 className="font-montserrat font-bold text-base text-text-dark">Email Us</h4>
                <p className="text-text-muted text-xs leading-relaxed">
                  Send us a general inquiry:
                </p>
                <a href="mailto:contact@inter-cleaningservices.com" className="block text-primary font-bold text-sm hover:underline">
                  contact@inter-cleaningservices.com
                </a>
              </div>

              {/* Address */}
              <div className="space-y-3 col-span-1 sm:col-span-2">
                <div className="bg-primary/10 text-primary p-3 rounded-2xl inline-block">
                  <Icons.MapPin size={22} />
                </div>
                <h4 className="font-montserrat font-bold text-base text-text-dark">Office Headquarters</h4>
                <p className="text-text-muted text-xs leading-relaxed">
                  Visit us in Brampton (Appointments only):
                </p>
                <span className="block text-text-dark text-sm font-semibold">
                  Brampton, Ontario, L6W 3L3, Canada
                </span>
              </div>
            </div>

            {/* Service Areas */}
            <div className="pt-8 border-t border-gray-100 space-y-4">
              <h4 className="font-montserrat font-bold text-base text-text-dark">
                Service Areas (Greater Toronto Area)
              </h4>
              <p className="text-text-muted text-xs leading-relaxed">
                We service homes and commercial properties within a 50km radius of downtown Toronto:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {serviceAreas.map((area) => (
                  <div
                    key={area.city}
                    className="border border-gray-150 rounded-2xl p-3 bg-brand-light text-center"
                  >
                    <span className="block font-montserrat font-bold text-xs text-text-dark">
                      {area.city}
                    </span>
                    <span className="text-text-muted text-[10px] uppercase font-bold tracking-wider">
                      {area.zip}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Form container */}
          <Reveal animationType="slide-in-right">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Styled Interactive SVG Map Section */}
      <section className="py-20 bg-brand-light border-y border-gray-100 text-center space-y-8">
        <Reveal animationType="fade-in-up" className="max-w-xl mx-auto space-y-3">
          <span className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest">
            Coverage Area
          </span>
          <h2 className="font-montserrat font-extrabold text-2xl text-text-dark">
            Our GTA Coverage Zone
          </h2>
          <p className="text-text-muted text-xs leading-relaxed">
            Our fully equipped crews travel to residential and commercial properties throughout the highlighted zones.
          </p>
        </Reveal>

        {/* Vector SVG Map Mockup */}
        <Reveal animationType="scale-up" className="max-w-2xl mx-auto bg-white rounded-3xl shadow-md border border-gray-200 p-8 flex items-center justify-center">
          <svg
            viewBox="0 0 800 400"
            className="w-full h-auto text-gray-200 font-montserrat font-bold text-xs"
          >
            {/* Outline of Lake Ontario */}
            <path
              d="M 150,350 C 250,370 450,370 650,300 C 700,280 750,220 780,180 L 800,180 L 800,400 L 0,400 L 0,330 Z"
              fill="#e0f2fe"
            />
            {/* Water label */}
            <text x="500" y="370" fill="#0284c7" className="italic opacity-60 text-2xs">
              Lake Ontario
            </text>

            {/* Grid gridlines */}
            <line x1="100" y1="0" x2="100" y2="400" stroke="#f3f4f6" strokeWidth="1" />
            <line x1="200" y1="0" x2="200" y2="400" stroke="#f3f4f6" strokeWidth="1" />
            <line x1="300" y1="0" x2="300" y2="400" stroke="#f3f4f6" strokeWidth="1" />
            <line x1="400" y1="0" x2="400" y2="400" stroke="#f3f4f6" strokeWidth="1" />
            <line x1="500" y1="0" x2="500" y2="400" stroke="#f3f4f6" strokeWidth="1" />
            <line x1="600" y1="0" x2="600" y2="400" stroke="#f3f4f6" strokeWidth="1" />
            <line x1="700" y1="0" x2="700" y2="400" stroke="#f3f4f6" strokeWidth="1" />

            {/* Coverage radius circle */}
            <circle cx="400" cy="200" r="140" fill="#DC0D73" fillOpacity="0.04" stroke="#DC0D73" strokeWidth="2" strokeDasharray="6,4" />

            {/* Hub markers */}
            {/* Toronto Hub */}
            <g transform="translate(420, 240)">
              <circle r="5" fill="#FEB400" />
              <text x="10" y="4" fill="#6B7280" className="text-xxs">Toronto</text>
            </g>

            {/* Mississauga Hub */}
            <g transform="translate(290, 260)">
              <circle r="5" fill="#FEB400" />
              <text x="10" y="4" fill="#6B7280" className="text-xxs">Mississauga</text>
            </g>

            {/* Markham Hub */}
            <g transform="translate(510, 160)">
              <circle r="5" fill="#FEB400" />
              <text x="10" y="4" fill="#6B7280" className="text-xxs">Markham</text>
            </g>

            {/* Vaughan Hub */}
            <g transform="translate(390, 150)">
              <circle r="5" fill="#FEB400" />
              <text x="10" y="4" fill="#6B7280" className="text-xxs">Vaughan</text>
            </g>

            {/* Brampton HQ Hub */}
            <g transform="translate(250, 190)">
              <circle r="6" fill="#DC0D73" />
              <circle r="12" fill="none" stroke="#DC0D73" strokeWidth="1.5" className="animate-ping" />
              <text x="12" y="4" fill="#1F2937">Brampton HQ</text>
            </g>

            {/* Oakville Hub */}
            <g transform="translate(200, 310)">
              <circle r="5" fill="#FEB400" />
              <text x="10" y="4" fill="#6B7280" className="text-xxs">Oakville</text>
            </g>

            {/* Coverage badge tag */}
            <rect x="330" y="20" width="140" height="30" rx="15" fill="#DC0D73" />
            <text x="400" y="38" fill="#FFFFFF" textAnchor="middle" className="font-bold text-[9px] uppercase tracking-wider">
              GTA Active Zone
            </text>
          </svg>
        </Reveal>
      </section>
    </div>
  );
}
