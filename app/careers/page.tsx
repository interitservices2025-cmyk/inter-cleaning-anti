"use client";

import React from "react";
import CareerForm from "@/components/forms/CareerForm";
import { Icons } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";
import { useTranslation } from "@/hooks/useTranslation";

export default function CareersPage() {
  const { t, language } = useTranslation();

  const benefits = [
    {
      title: language === "fr" ? "Rémunération Compétitive" : "Competitive Compensation",
      desc: language === "fr"
        ? "Nous offrons des taux horaires parmi les plus élevés de l'industrie, le remboursement du temps de trajet et des primes de performance mensuelles."
        : "We offer industry-leading hourly rates, paid travel time, and monthly performance bonuses.",
      icon: <Icons.DollarSign size={24} />,
    },
    {
      title: language === "fr" ? "Formation Professionnelle Payée" : "Paid Professional Training",
      desc: language === "fr"
        ? "Aucune expérience professionnelle requise. Nous fournissons une formation de nettoyage complète payée, conforme aux normes d'hospitalité."
        : "No professional experience required. We provide fully paid hospitality-standard cleaning training.",
      icon: <Icons.Sparkles size={24} />,
    },
    {
      title: language === "fr" ? "Horaires Flexibles" : "Flexible Schedules",
      desc: language === "fr"
        ? "Choisissez entre des heures stables à temps plein ou des quarts de travail à temps partiel flexibles qui s'adaptent à votre vie personnelle."
        : "Choose between stable full-time hours or flexible part-time shifts that fit your personal life.",
      icon: <Icons.Calendar size={24} />,
    },
    {
      title: language === "fr" ? "Environnement de Travail Sain" : "Healthy Work Environment",
      desc: language === "fr"
        ? "Nous accordons la priorité à votre sécurité en utilisant des produits de nettoyage écologiques, biodégradables et non toxiques."
        : "We prioritize your safety by using non-toxic, eco-friendly green cleaning products.",
      icon: <Icons.Waves size={24} />,
    },
  ];

  const jobs = [
    {
      title: language === "fr" ? "Spécialiste en Nettoyage Résidentiel" : "Residential Cleaning Specialist",
      type: language === "fr" ? "Temps plein ou Temps partiel" : "Full-Time or Part-Time",
      location: "Toronto & GTA",
      desc: language === "fr"
        ? "Fournissez des services de nettoyage haut de gamme dans les résidences et condos. Doit être soucieux des détails et disposer d'un moyen de transport fiable."
        : "Provide premium cleaning services to residential homes and condos. Must be detail-oriented and have access to reliable transit.",
    },
    {
      title: language === "fr" ? "Équipe de Nettoyage Commercial & Bureaux" : "Commercial & Office Cleaning Crew",
      type: language === "fr" ? "Temps partiel (Soirs & Week-ends)" : "Part-Time (Evenings & Weekends)",
      location: "Mississauga & Brampton",
      desc: language === "fr"
        ? "Assainissez les bureaux, les locaux commerciaux et les espaces de travail en dehors des heures d'ouverture. Parfait pour les étudiants ou comme revenu d'appoint."
        : "Sanitize office buildings, retail spaces, and workspaces after-hours. Perfect for students or secondary income.",
    },
    {
      title: language === "fr" ? "Expert en Nettoyage en Profondeur & Tapis" : "Deep Cleaning & Carpet Expert",
      type: language === "fr" ? "Temps plein" : "Full-Time",
      location: "Vaughan & Markham",
      desc: language === "fr"
        ? "Utilisez des extracteurs de vapeur professionnels, des polisseuses et réalisez des nettoyages en profondeur minutieux. Permis de conduire valide souhaitable."
        : "Operate commercial steam extractors, floor polishers, and perform detail deep cleaning routines. Valid driver's license preferred.",
    },
  ];

  return (
    <div className="w-full font-opensans bg-white">
      {/* Hero Section */}
      <section className="bg-brand-light py-20 border-b border-gray-100">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="bg-primary/10 text-primary font-montserrat font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full inline-block">
            {t("careers.hero.tag")}
          </span>
          <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl text-text-dark max-w-3xl mx-auto leading-tight">
            {t("careers.hero.title")}
          </h1>
          <p className="text-text-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            {t("careers.hero.desc")}
          </p>
        </Reveal>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest">
              {t("careers.benefitsSec.tag")}
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl text-text-dark">
              {t("careers.benefitsSec.title")}
            </h2>
            <p className="text-text-muted text-sm">
              {t("careers.benefitsSec.desc")}
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
                <div className="bg-brand-light border border-gray-155 p-8 rounded-3xl space-y-4 hover:shadow-lg hover:bg-white transition-all duration-300 w-full">
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
                  {t("careers.opp.tag")}
                </span>
                <h2 className="font-montserrat font-extrabold text-3xl text-text-dark">
                  {t("careers.opp.title")}
                </h2>
                <p className="text-text-muted text-sm leading-relaxed">
                  {t("careers.opp.desc")}
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

