"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Icons } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";
import { useTranslation } from "@/hooks/useTranslation";
import { SafeImage } from "@/components/ui/SafeImage";

export default function OfficeCleaningPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t, language } = useTranslation();

  const toggleFaq = (index: number | null) => {
    setOpenFaq(index);
  };

  const checklist = language === "fr" ? [
    {
      title: "Bureaux & Postes de travail",
      items: [
        "Épousseter et désinfecter les surfaces des bureaux (claviers, écrans sur demande)",
        "Vider toutes les poubelles et bacs de recyclage",
        "Désinfecter les téléphones de bureau et les interrupteurs",
        "Passer l'aspirateur sur les moquettes et laver les sols durs",
      ],
    },
    {
      title: "Salles de pause & Cuisines",
      items: [
        "Désinfecter les comptoirs, éviers et robinets",
        "Essuyer l'extérieur des appareils (micro-ondes, réfrigérateur, cafetières)",
        "Désinfecter les tables à manger et les chaises",
        "Laver et récurer le carrelage de la cuisine",
      ],
    },
    {
      title: "Salles communes & Halls",
      items: [
        "Épousseter les tables en verre, étagères, armoires et panneaux",
        "Polir les poignées de porte et les vitres d'entrée",
        "Ranger les chaises et les canapés d'attente",
        "Passer l'aspirateur sur les tapis d'entrée à fort passage",
      ],
    },
    {
      title: "Sanitaires désinfectés",
      items: [
        "Désinfection complète des toilettes, urinoirs et poignées",
        "Récurer les lavabos, robinets, comptoirs et miroirs",
        "Laver le carrelage de sol avec des désinfectants de qualité clinique",
        "Réapprovisionner les distributeurs de papier toilette, savon et essuie-mains",
      ],
    },
  ] : [
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

  const steps = language === "fr" ? [
    {
      title: "Évaluation gratuite sur site",
      desc: "Nous visitons vos locaux pour évaluer la superficie, le passage et les fréquences de nettoyage.",
    },
    {
      title: "Calendrier de nettoyage personnalisé",
      desc: "Nous établissons une liste de contrôle et planifions les nettoyages (hors heures de bureau, quotidien, hebdomadaire ou bihebdomadaire).",
    },
    {
      title: "Audits de qualité réguliers",
      desc: "Nos superviseurs effectuent audits réguliers pour garantir le maintien constant de nos normes.",
    },
  ] : [
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

  const faqs = language === "fr" ? [
    {
      q: "Nettoyez-vous les bureaux pendant les heures de travail ou après ?",
      a: "La plupart des entreprises préfèrent un nettoyage en dehors des heures de bureau pour éviter toute perturbation du travail. Nous offrons des horaires flexibles, y compris les soirs et week-ends.",
    },
    {
      q: "Quels types d'espaces commerciaux desservez-vous ?",
      a: "Nous nettoyons les espaces de bureaux de petite et moyenne taille, les commerces de détail, les salles d'exposition, les cabinets médicaux, les cabinets d'avocats et les agences immobilières dans tout le GTA.",
    },
    {
      q: "Vos agents de nettoyage commercial sont-ils formés et vérifiés ?",
      a: "Oui. Tous les membres de notre personnel subissent des vérifications complètes des antécédents, signent des accords de confidentialité pour protéger les secrets professionnels et sont formés aux meilleures pratiques de désinfection.",
    },
  ] : [
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
        <SafeImage
          src="/images/service_office.png"
          alt="Office & Commercial Cleaning"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>

        <Reveal className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start space-y-6 z-20">
          <Link
            href="/services"
            className="flex items-center gap-1.5 text-xs text-primary font-montserrat font-bold uppercase tracking-wider hover:underline"
          >
            <Icons.ChevronRight className="rotate-180" size={14} /> {t("nav.backToServices")}
          </Link>
          <span className="bg-primary/10 text-primary font-montserrat font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full">
            {t("services.office.tag")}
          </span>
          <h1 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-text-dark max-w-xl">
            {t("services.office.title")}
          </h1>
          <p className="text-text-muted text-sm sm:text-base max-w-lg leading-relaxed">
            {t("services.office.desc")}
          </p>
          <Button variant="primary" href="/quote">
            {t("nav.quote")}
          </Button>
        </Reveal>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-white">
        <Reveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl text-text-dark">
            {t("services.office.h2")}
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            {t("services.office.p")}
          </p>
        </Reveal>
      </section>

      {/* Checklist Section */}
      <section className="py-20 bg-brand-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest">
              {t("services.office.checklistTag")}
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl text-text-dark">
              {t("services.office.checklistTitle")}
            </h2>
            <p className="text-text-muted text-sm">
              {t("services.office.checklistDesc")}
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
              {t("services.office.processTag")}
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl text-text-dark">
              {t("services.office.processTitle")}
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
              {t("services.office.faqTitle")}
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
            {t("services.office.ctaTitle")}
          </h2>
          <p className="text-white/90 text-sm max-w-md mx-auto">
            {t("services.office.ctaDesc")}
          </p>
          <div className="pt-2">
            <Button variant="secondary" href="/quote">
              {t("services.office.ctaBtn")}
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
