"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Icons } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";
import { useTranslation } from "@/hooks/useTranslation";
import { SafeImage } from "@/components/ui/SafeImage";

export default function CarpetCleaningPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t, language } = useTranslation();

  const toggleFaq = (index: number | null) => {
    setOpenFaq(index);
  };

  const checklist = language === "fr" ? [
    {
      title: "Nettoyage de tapis à la vapeur",
      items: [
        "Aspiration préalable pour éliminer la poussière et la saleté sèche",
        "Extraction à la vapeur haute température (extraction à l'eau chaude)",
        "Prétraitement des zones de passage et des taches tenaces",
        "Souffleurs à séchage rapide et redressement des fibres",
      ],
    },
    {
      title: "Neutraliseur d'odeurs & taches",
      items: [
        "Traitement des taches d'animaux et dégradation enzymatique",
        "Neutralisation des taches de café, thé, encre et graisse",
        "Désodorisation en profondeur des fibres de tapis",
        "Formules désinfectantes écologiques (sans résidus toxiques)",
      ],
    },
    {
      title: "Canapés & Tissus d'ameublement",
      items: [
        "Test du tissu pour garantir la stabilité des teintures et des fibres",
        "Aspiration douce des coussins et des interstices",
        "Nettoyage manuel à faible humidité des appuis-tête et accoudoirs",
        "Désinfection du rembourrage sous-jacent",
      ],
    },
    {
      title: "Protection des tissus",
      items: [
        "Application d'un protecteur anti-taches et anti-déversement",
        "Traitement antistatique (sur demande)",
        "Extraction des acariens et des allergènes",
        "Traitement raviveur de couleurs",
      ],
    },
  ] : [
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

  const steps = language === "fr" ? [
    {
      title: "Aspirer & Prétraiter",
      desc: "Nous extrayons la saleté superficielle et appliquons des solutions non toxiques pour dissoudre les taches incrustées.",
    },
    {
      title: "Extraction à la vapeur",
      desc: "Notre système à haute pression injecte de l'eau chaude et aspire la saleté, les acariens et les résidus de savon.",
    },
    {
      title: "Séchage & Protection",
      desc: "Nous appliquons un protecteur de fibres et installons des séchoirs pour réduire le temps de séchage à 4-6 heures.",
    },
  ] : [
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

  const faqs = language === "fr" ? [
    {
      q: "Combien de temps faut-il pour que les tapis et les canapés sèchent ?",
      a: "Grâce à nos machines d'extraction haute performance, les tapis sèchent généralement en 4 à 6 heures. Les tissus d'ameublement peuvent prendre de 6 à 8 heures selon la ventilation et la température ambiante.",
    },
    {
      q: "Déplacez-vous les meubles pendant le nettoyage ?",
      a: "Nos agents peuvent déplacer les meubles légers (chaises, petites tables et canapés) pour nettoyer en dessous. Nous ne déplaçons pas les meubles lourds comme les armoires, grands lits ou bibliothèques.",
    },
    {
      q: "Pouvez-vous éliminer toutes les taches et odeurs d'animaux ?",
      a: "Nous utilisons des traitements enzymatiques professionnels qui décomposent les déchets organiques au niveau moléculaire. Bien que nous éliminions 95 % des taches et odeurs, les résultats dépendent de l'ancienneté de la tache.",
    },
  ] : [
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
        <SafeImage
          src="/images/service_carpet.png"
          alt="Premium Carpet & Upholstery Cleaning"
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
            {t("services.carpet.tag")}
          </span>
          <h1 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-text-dark max-w-xl">
            {t("services.carpet.title")}
          </h1>
          <p className="text-text-muted text-sm sm:text-base max-w-lg leading-relaxed">
            {t("services.carpet.desc")}
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
            {t("services.carpet.h2")}
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            {t("services.carpet.p")}
          </p>
        </Reveal>
      </section>

      {/* Checklist Section */}
      <section className="py-20 bg-brand-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest">
              {t("services.carpet.checklistTag")}
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl text-text-dark">
              {t("services.carpet.checklistTitle")}
            </h2>
            <p className="text-text-muted text-sm">
              {t("services.carpet.checklistDesc")}
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
              {t("services.carpet.processTag")}
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl text-text-dark">
              {t("services.carpet.processTitle")}
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
              {t("services.carpet.faqTitle")}
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
            {t("services.carpet.ctaTitle")}
          </h2>
          <p className="text-white/90 text-sm max-w-md mx-auto">
            {t("services.carpet.ctaDesc")}
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
