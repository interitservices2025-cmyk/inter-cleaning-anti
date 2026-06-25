import React from "react";
import CareerForm from "@/components/forms/CareerForm";
import { Icons } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";

export default function CareersPage() {
  const benefits = [
    {
      title: "Competitive Compensation",
      desc: "We offer industry-leading hourly rates, paid travel time, and monthly performance bonuses.",
      icon: <Icons.DollarSign size={24} />,
    },
    {
      title: "Paid Professional Training",
      desc: "No professional experience required. We provide fully paid hospitality-standard cleaning training.",
      icon: <Icons.Sparkles size={24} />,
    },
    {
      title: "Flexible Schedules",
      desc: "Choose between stable full-time hours or flexible part-time shifts that fit your personal life.",
      icon: <Icons.Calendar size={24} />,
    },
    {
      title: "Healthy Work Environment",
      desc: "We prioritize your safety by using non-toxic, eco-friendly green cleaning products.",
      icon: <Icons.Waves size={24} />,
    },
  ];

  const jobs = [
    {
      title: "Residential Cleaning Specialist",
      type: "Full-Time or Part-Time",
      location: "Toronto & GTA",
      desc: "Provide premium cleaning services to residential homes and condos. Must be detail-oriented and have access to reliable transit.",
    },
    {
      title: "Commercial & Office Cleaning Crew",
      type: "Part-Time (Evenings & Weekends)",
      location: "Mississauga & Brampton",
      desc: "Sanitize office buildings, retail spaces, and workspaces after-hours. Perfect for students or secondary income.",
    },
    {
      title: "Deep Cleaning & Carpet Expert",
      type: "Full-Time",
      location: "Vaughan & Markham",
      desc: "Operate commercial steam extractors, floor polishers, and perform detail deep cleaning routines. Valid driver's license preferred.",
    },
  ];

  return (
    <div className="w-full font-opensans bg-white">
      {/* Hero Section */}
      <section className="bg-brand-light py-20 border-b border-gray-100">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="bg-primary/10 text-primary font-montserrat font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full inline-block">
            Join Our Team
          </span>
          <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl text-text-dark max-w-3xl mx-auto leading-tight">
            Build a Rewarding Career in Cleaning Excellence
          </h1>
          <p className="text-text-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            We support our cleaning specialists with premium training, fair wages, and a supportive family culture.
          </p>
        </Reveal>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest">
              Work With Us
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl text-text-dark">
              Why Join Inter-Cleaning Services?
            </h2>
            <p className="text-text-muted text-sm">
              We believe in rewarding hard work. Here is what we offer to all our dedicated staff members:
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <Reveal
                key={benefit.title}
                delay={idx * 100}
                animationType="fade-in-up"
                className="h-full flex"
              >
                <div className="bg-brand-light border border-gray-150 p-8 rounded-3xl space-y-4 hover:shadow-lg hover:bg-white transition-all duration-300 w-full">
                  <div className="bg-primary/10 text-primary p-3 rounded-2xl inline-block">
                    {benefit.icon}
                  </div>
                  <h3 className="font-montserrat font-bold text-base text-text-dark">
                    {benefit.title}
                  </h3>
                  <p className="text-text-muted text-xs leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions & Form Grid */}
      <section className="py-24 bg-brand-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Open Positions List */}
            <div className="space-y-8">
              <Reveal className="space-y-3">
                <span className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest">
                  Opportunities
                </span>
                <h2 className="font-montserrat font-extrabold text-3xl text-text-dark">
                  Open Opportunities
                </h2>
                <p className="text-text-muted text-sm leading-relaxed">
                  We are always looking for reliable, honest, and hardworking individuals to join our growing team. Review our positions and apply online.
                </p>
              </Reveal>

              <div className="space-y-6">
                {jobs.map((job, idx) => (
                  <Reveal key={job.title} delay={idx * 100} animationType="fade-in-up">
                    <div className="bg-white rounded-3xl p-6 border border-gray-150 shadow-sm space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-50 pb-3">
                        <h4 className="font-montserrat font-bold text-base text-text-dark">
                          {job.title}
                        </h4>
                        <span className="bg-secondary/15 text-text-dark font-montserrat font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full">
                          {job.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-text-muted font-semibold">
                        <Icons.MapPin size={14} className="text-primary" /> {job.location}
                      </div>
                      <p className="text-text-muted text-xs leading-relaxed pt-1">
                        {job.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Form Column */}
            <Reveal animationType="slide-in-right">
              <CareerForm />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
