"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Icons } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";
import { useTranslation } from "@/hooks/useTranslation";
import { SafeImage } from "@/components/ui/SafeImage";

export default function ResidentialCleaningPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t, language } = useTranslation();

  const toggleFaq = (index: number | null) => {
    setOpenFaq(index);
  };

  const checklist = language === "fr" ? [
    {
      title: "Cuisines éclatantes",
      items: [
        "Essuyer et désinfecter les comptoirs et dosserets",
        "Nettoyer l'extérieur des gros appareils (réfrigérateur, cuisinière, micro-ondes)",
        "Récurer et désinfecter l'évier et polir la robinetterie",
        "Passer l'aspirateur et laver les sols, vider les poubelles",
      ],
    },
    {
      title: "Salles de bain désinfectées",
      items: [
        "Nettoyage complet de la cuvette, désinfection et polissage",
        "Récurer la baignoire, les carreaux de douche et les portes vitrées",
        "Nettoyer les éviers, les comptoirs, les miroirs et les poignées de meuble",
        "Laver et désinfecter les carreaux de sol de la salle de bain",
      ],
    },
    {
      title: "Chambres sans poussière",
      items: [
        "Épousseter toutes les tables, étagères, abat-jours et cadres",
        "Passer l'aspirateur sur les tapis, carpettes et sous les meubles accessibles",
        "Faire le lit avec des draps propres (si laissés sur le lit)",
        "Épousseter les rebords de fenêtres, les plinthes et les stores",
      ],
    },
    {
      title: "Espaces de vie polis",
      items: [
        "Épousseter les appareils électroniques, les armoires, les tables basses et les étagères",
        "Passer l'aspirateur sur les tissus d'ameublement, les coussins de canapé et les tapis",
        "Passer la serpillière humide sur tous les parquets, stratifiés ou carrelages",
        "Ranger les coussins et les couvertures",
      ],
    },
  ] : [
    {
      title: "Sparkling Kitchens",
      items: [
        "Wipe & sanitize counter surfaces & backsplashes",
        "Clean exterior of major appliances (fridge, stove, microwave)",
        "Scrub & disinfect sink and polishing fixtures",
        "Vacuum and wash floors, empty trash bins",
      ],
    },
    {
      title: "Sanitized Bathrooms",
      items: [
        "Thorough toilet scrub, sanitize, and polish",
        "Scrub bathtub, shower tiles, and glass doors",
        "Clean sinks, countertops, mirrors, and vanity handles",
        "Mop and disinfect bathroom tiles",
      ],
    },
    {
      title: "Dust-Free Bedrooms",
      items: [
        "Dust all tables, shelves, lampshades, and frames",
        "Vacuum carpets, area rugs, and under reachable furniture",
        "Make bed with fresh linens (if left out on bed)",
        "Dust windowsills, baseboards, and blinds",
      ],
    },
    {
      title: "Polished Living Areas",
      items: [
        "Dust electronics, cabinets, coffee tables, and shelves",
        "Vacuum upholstery, sofa cushions, and carpeted floors",
        "Damp-mop all hardwood, laminate, or tile flooring",
        "Tidy up cushions and throw blankets",
      ],
    },
  ];

  const steps = language === "fr" ? [
    {
      title: "Personnaliser & Réserver",
      desc: "Indiquez-nous la taille de votre maison, vos préférences horaires et les zones nécessitant une attention particulière.",
    },
    {
      title: "Nettoyage expert",
      desc: "Nos nettoyeurs entièrement assurés et vérifiés arrivent avec des produits de qualité supérieure et exécutent notre liste de contrôle.",
    },
    {
      title: "Contrôle de qualité rigoureux",
      desc: "Nous effectuons une inspection finale pour nous assurer que chaque détail répond à nos normes élevées de propreté.",
    },
  ] : [
    {
      title: "Customize & Book",
      desc: "Tell us about your home size, preferred timing, and any special focus areas you need.",
    },
    {
      title: "Expert Cleaning",
      desc: "Our fully insured, background-checked cleaners arrive with premium supplies and execute our checklist.",
    },
    {
      title: "Spotless Quality Check",
      desc: "We perform a final walkthrough to ensure every single detail meets our high standards of cleanliness.",
    },
  ];

  const faqs = language === "fr" ? [
    {
      q: "Dois-je être présent pendant le nettoyage ?",
      a: "Non. La plupart de nos clients préfèrent nous fournir un accès par clé, un code de boîte à clés ou des instructions pour la conciergerie. Votre sécurité est notre priorité, et toutes les clés sont codées et conservées en toute sécurité.",
    },
    {
      q: "Vos produits de nettoyage sont-ils sans danger pour les enfants et les animaux ?",
      a: "Absolument. Nous utilisons exclusivement des produits de nettoyage écologiques, respectueux de l'environnement et non toxiques, entièrement biodégradables et sûrs pour les enfants et les animaux domestiques.",
    },
    {
      q: "Puis-je annuler ou reporter mon rendez-vous ?",
      a: "Oui. Vous pouvez reporter ou annuler tout rendez-vous jusqu'à 24 heures avant l'heure prévue sans pénalité. Les annulations effectuées moins de 24 heures à l'avance peuvent entraîner de légers frais.",
    },
  ] : [
    {
      q: "Do I need to be home for my cleaning?",
      a: "No, you don't. Most of our clients prefer to provide key access, a lockbox code, or concierge instructions. Your security is our priority, and all keys are coded and stored safely.",
    },
    {
      q: "Are your cleaning products safe for kids and pets?",
      a: "Absolutely. We strictly use green, eco-friendly, and non-toxic cleaning products that are completely biodegradable and safe for both children and household pets.",
    },
    {
      q: "Can I cancel or reschedule my appointment?",
      a: "Yes. You can reschedule or cancel any appointment up to 24 hours before the scheduled time with no penalty. Cancelations within 24 hours may incur a small fee.",
    },
  ];

  return (
    <div className="w-full font-opensans bg-white">
      {/* Service Hero */}
      <section className="relative h-[300px] sm:h-[400px] lg:h-[480px] w-full flex items-center justify-center bg-gray-100">
        <SafeImage
          src="/images/service_residential.png"
          alt="Premium Residential Cleaning"
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
            {t("services.residential.tag")}
          </span>
          <h1 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-text-dark max-w-xl">
            {t("services.residential.title")}
          </h1>
          <p className="text-text-muted text-sm sm:text-base max-w-lg leading-relaxed">
            {t("services.residential.desc")}
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
            {t("services.residential.h2")}
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            {t("services.residential.p")}
          </p>
        </Reveal>
      </section>

      {/* Checklist / Features Section */}
      <section className="py-20 bg-brand-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest">
              {t("services.residential.checklistTag")}
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl text-text-dark">
              {t("services.residential.checklistTitle")}
            </h2>
            <p className="text-text-muted text-sm">
              {t("services.residential.checklistDesc")}
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
              {t("services.residential.processTag")}
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl text-text-dark">
              {t("services.residential.processTitle")}
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
              {t("services.residential.faqTitle")}
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
            {t("services.residential.ctaTitle")}
          </h2>
          <p className="text-white/90 text-sm max-w-md mx-auto">
            {t("services.residential.ctaDesc")}
          </p>
          <div className="pt-2">
            <Button variant="secondary" href="/quote">
              {t("services.page.ctaBtn")}
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
