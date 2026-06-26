"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Icons } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";
import { useTranslation } from "@/hooks/useTranslation";
import { SafeImage } from "@/components/ui/SafeImage";

export default function MoveInOutCleaningPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t, language } = useTranslation();

  const toggleFaq = (index: number | null) => {
    setOpenFaq(index);
  };

  const checklist = language === "fr" ? [
    {
      title: "Intérieur des placards & tiroirs",
      items: [
        "Aspirer et essuyer avec un chiffon humide l'intérieur de tous les placards vides",
        "Essuyer les étagères, les rails de tiroirs et l'intérieur des meubles",
        "Nettoyer les portes, poignées, charnières et encadrements",
        "Désinfecter les meubles sous-vasques à l'intérieur et à l'extérieur",
      ],
    },
    {
      title: "Nettoyage des gros appareils",
      items: [
        "Récurer l'intérieur des fours vides et les grilles de cuisinières",
        "Laver et désinfecter les étagères et bacs intérieurs du réfrigérateur",
        "Nettoyer derrière et sous la cuisinière et le réfrigérateur (si déplaçables)",
        "Dégraisser la hotte, les conduits d'évacuation et la grille du filtre",
      ],
    },
    {
      title: "Désinfection de la salle de bain",
      items: [
        "Désinfection complète des éviers, baignoires et toilettes",
        "Détartrer les parois de douche, la robinetterie et les carreaux muraux",
        "Polir les miroirs, poignées de meubles et joints de carrelage",
        "Laver et désinfecter les plinthes et les sols de la salle de bain",
      ],
    },
    {
      title: "Préparation des sols & murs",
      items: [
        "Nettoyer les traces de doigts et marques sur les murs",
        "Épousseter et essuyer toutes les plinthes et les radiateurs",
        "Passer l'aspirateur sur tous les tapis, carpettes et dans les coins",
        "Passer la serpillière humide sur tous les parquets, sols stratifiés ou carrelages",
      ],
    },
  ] : [
    {
      title: "Inside Closets & Drawers",
      items: [
        "Vacuum and damp-wipe inside all empty closets",
        "Wipe shelving, drawer tracks, and cabinet interiors",
        "Clean doors, knobs, hinges, and frames",
        "Sanitize vanity cabinets inside and out",
      ],
    },
    {
      title: "Heavy Appliance Detail",
      items: [
        "Scrub interior of empty ovens & stove grates",
        "Wash and disinfect interior refrigerator shelves & bins",
        "Clean behind & under stove & fridge (where pullable)",
        "Degrease range hood, exhaust vents, and filter mesh",
      ],
    },
    {
      title: "Detailed Bathroom Sanitizing",
      items: [
        "Thorough disinfection of sinks, bathtubs, and toilets",
        "Descale shower screens, faucets, and tile walls",
        "Polish vanity mirrors, knobs, and tile grout lines",
        "Wash and sanitize bathroom baseboards and floors",
      ],
    },
    {
      title: "Hard Floor & Wall Prep",
      items: [
        "Spot-clean fingerprints and marks off walls",
        "Dust and damp-wipe all baseboards and heaters",
        "Vacuum all carpets, area rugs, and corners",
        "Damp-mop all hardwood, laminate, or tile floorings",
      ],
    },
  ];

  const steps = language === "fr" ? [
    {
      title: "Réserver le nettoyage du logement vide",
      desc: "Coordonnez avec vos dates de déménagement. Assurez-vous que le logement soit complètement vide de tout meuble.",
    },
    {
      title: "Nettoyage en profondeur du local vacant",
      desc: "Notre équipe qualifiée désinfecte chaque placard intérieur, plinthe, four et rebord de fenêtre.",
    },
    {
      title: "Rapport d'inspection final",
      desc: "Recevez un rapport de nettoyage détaillé prouvant la désinfection pour les propriétaires ou les acheteurs.",
    },
  ] : [
    {
      title: "Book Empty Home Clean",
      desc: "Coordinate with your moving dates. Ensure the home is completely empty of furniture.",
    },
    {
      title: "Deep Vacant Cleaning",
      desc: "Our vetting team sanitizes every interior cupboard, baseboard, oven, and window sill.",
    },
    {
      title: "Inspection Checklist",
      desc: "Receive a detailed cleanup report showing proof of deep cleaning for landlords or buyers.",
    },
  ];

  const faqs = language === "fr" ? [
    {
      q: "Le logement doit-il être complètement vide de meubles ?",
      a: "Oui. Pour que notre équipe puisse exécuter un nettoyage d'entrée/sortie réussi, tous les meubles et effets personnels doivent être retirés au préalable.",
    },
    {
      q: "Garantissez-vous la récupération de la caution ?",
      a: "Nous garantissons que notre nettoyage passera avec succès toute inspection professionnelle de propriétaire. En cas de problème signalé par votre propriétaire, nous revenons gratuitement pour y remédier.",
    },
    {
      q: "L'eau et l'électricité doivent-elles être actives ?",
      a: "Oui, nos équipements de nettoyage et aspirateurs nécessitent de l'électricité, et nous avons besoin d'eau courante (chaude et froide) pour nettoyer efficacement.",
    },
  ] : [
    {
      q: "Does the home need to be completely empty of furniture?",
      a: "Yes. For our team to execute a successful move-in/move-out clean, all furniture and personal belongings should be moved out of the property beforehand.",
    },
    {
      q: "Do you guarantee security deposit returns?",
      a: "We guarantee that our cleaning will pass any professional landlord inspection. If your landlord raises any issue with our cleaning, we return and re-clean the area for free.",
    },
    {
      q: "Are utilities (water and electricity) required?",
      a: "Yes, our cleaning equipment and vacuum cleaners require functioning electricity, and we need running hot/cold water to clean effectively.",
    },
  ];

  return (
    <div className="w-full font-opensans bg-white">
      {/* Service Hero */}
      <section className="relative h-[300px] sm:h-[400px] lg:h-[480px] w-full flex items-center justify-center bg-gray-100">
        <SafeImage
          src="/images/service_move.png"
          alt="Move-In Move-Out Cleaning"
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
            {t("services.move.tag")}
          </span>
          <h1 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-text-dark max-w-xl">
            {t("services.move.title")}
          </h1>
          <p className="text-text-muted text-sm sm:text-base max-w-lg leading-relaxed">
            {t("services.move.desc")}
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
            {t("services.move.h2")}
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            {t("services.move.p")}
          </p>
        </Reveal>
      </section>

      {/* Checklist Section */}
      <section className="py-20 bg-brand-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest">
              {t("services.move.checklistTag")}
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl text-text-dark">
              {t("services.move.checklistTitle")}
            </h2>
            <p className="text-text-muted text-sm">
              {t("services.move.checklistDesc")}
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
              {t("services.move.processTag")}
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl text-text-dark">
              {t("services.move.processTitle")}
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
              {t("services.move.faqTitle")}
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
            {t("services.move.ctaTitle")}
          </h2>
          <p className="text-white/90 text-sm max-w-md mx-auto">
            {t("services.move.ctaDesc")}
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
