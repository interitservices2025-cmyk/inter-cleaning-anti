"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Icons } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";
import { useTranslation } from "@/hooks/useTranslation";
import { SafeImage } from "@/components/ui/SafeImage";

export default function WindowCleaningPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t, language } = useTranslation();

  const toggleFaq = (index: number | null) => {
    setOpenFaq(index);
  };

  const checklist = language === "fr" ? [
    {
      title: "Nettoyage intérieur des vitres",
      items: [
        "Nettoyage des vitres sans traces à l'aide de raclettes haut de gamme",
        "Essuyage des cadres intérieurs, poignées et verrous",
        "Aspiration et essuyage des rails de rebords de fenêtres",
        "Nettoyage intérieur des lucarnes et impostes vitrées",
      ],
    },
    {
      title: "Nettoyage extérieur des vitres",
      items: [
        "Essuyage de la saleté, du pollen, des toiles d'araignée et des traces de pluie",
        "Récurage et essuyage des rebords extérieurs et des cadres en vinyle",
        "Utilisation sécurisée d'échelles et de perches télescopiques",
        "Système à eau pure avec perche alimentée en eau (pour les zones en hauteur)",
      ],
    },
    {
      title: "Lavage moustiquaires & rails",
      items: [
        "Retrait des moustiquaires, récurage avec des détergents et lavage",
        "Séchage et réinstallation des moustiquaires sur les cadres",
        "Nettoyage en profondeur des guides de châssis et des trous d'évacuation",
        "Élimination des projections de peinture et des étiquettes adhésives",
      ],
    },
    {
      title: "Cloisons vitrées & Miroirs",
      items: [
        "Polissage des cloisons de bureau vitrées double face",
        "Essuyage sans traces des grands miroirs de hall du sol au plafond",
        "Essuyage des balustrades en verre, rampes d'escalier et balcons",
        "Désinfection des portes d'entrée du vestibule",
      ],
    },
  ] : [
    {
      title: "Interior Window Clean",
      items: [
        "Streak-free glass cleaning using premium squeegees",
        "Wipe interior frames, handles, and locks",
        "Vacuum and wipe window sill tracks",
        "Clean inside skylights and transom glass",
      ],
    },
    {
      title: "Exterior Window Clean",
      items: [
        "Wipe dirt, pollen, spiderwebs, and rain stains off outer glass",
        "Scrub and wipe down exterior sills and vinyl frames",
        "Safe ladder and extension-pole operations",
        "Water-fed pole pure water system (for high-reach areas)",
      ],
    },
    {
      title: "Screen & Track Wash",
      items: [
        "Remove screens, scrub with cleaning detergents, and wash",
        "Dry and re-install screens on window frames",
        "Deep-clean sash guides and drainage holes",
        "Remove paint splashes and adhesive stickers",
      ],
    },
    {
      title: "Glass Partitions & Mirrors",
      items: [
        "Polish double-sided glass office partitions",
        "Streak-free wipe of large floor-to-ceiling lobby mirrors",
        "Wipe glass balustrades, staircase railings, and balconies",
        "Sanitize vestibule entrance doors",
      ],
    },
  ];

  const steps = language === "fr" ? [
    {
      title: "Inspection & Installation",
      desc: "Nous vérifions le nombre de fenêtres, la hauteur et la disposition pour planifier l'installation de l'échelle ou l'accès par perche en toute sécurité.",
    },
    {
      title: "Lavage & Passage de raclette",
      desc: "Nous lavons les surfaces vitrées avec du savon biodégradable et utilisons des raclettes en caoutchouc professionnelles pour un séchage sans traces.",
    },
    {
      title: "Finitions des rebords & moustiquaires",
      desc: "Notre équipe essuie tous les rails et rebords environnants, lave les moustiquaires et les remet en place.",
    },
  ] : [
    {
      title: "Inspection & Setup",
      desc: "We verify window count, height, and layout to plan ladder placement or pole reach safely.",
    },
    {
      title: "Scrub & Squeegee",
      desc: "We wash glass surfaces with bio-degradable glass soap, and use professional rubber squeegees for streak-free drying.",
    },
    {
      title: "Sills & Screen Finishing",
      desc: "Our crew wipes down all surrounding tracks and sills, washes screen panels, and snaps them back in.",
    },
  ];

  const faqs = language === "fr" ? [
    {
      q: "Quelles hauteurs pouvez-vous atteindre pour le lavage des vitres ?",
      a: "Nous nettoyons les vitres intérieures et extérieures jusqu'à 3 étages pour les maisons et bâtiments commerciaux en utilisant des échelles et des perches télescopiques en fibre de carbone. Nous ne nettoyons pas les gratte-ciels.",
    },
    {
      q: "Que se passe-t-il s'il pleut le jour prévu pour mon nettoyage ?",
      a: "En cas de forte pluie ou de vent violent, nous vous contacterons pour reporter le nettoyage extérieur. Les vitres intérieures peuvent toujours être nettoyées comme prévu si vous le souhaitez.",
    },
    {
      q: "Nettoyez-vous également les moustiquaires des fenêtres ?",
      a: "Oui ! Notre service de nettoyage de vitres comprend le retrait des moustiquaires, leur récurage à l'eau et avec des détergents doux pour enlever la poussière, leur séchage et leur réinstallation.",
    },
  ] : [
    {
      q: "What heights can you reach for window washing?",
      a: "We clean interior and exterior windows up to 3 stories high for residential homes and commercial buildings using specialized carbon-fiber water-fed poles and ladders. We do not do high-rise skyscraper cleaning.",
    },
    {
      q: "What happens if it rains on my scheduled cleaning day?",
      a: "In the event of heavy rain or high winds, we will contact you to reschedule the exterior cleaning. Interior windows can still be cleaned as scheduled if preferred, and we will return for the exteriors.",
    },
    {
      q: "Do you clean the window screens as well?",
      a: "Yes! Our window cleaning service includes removing screens, scrubbing them down with water and soft detergents to remove dust and dirt, drying them, and re-installing them.",
    },
  ];

  return (
    <div className="w-full font-opensans bg-white">
      {/* Service Hero */}
      <section className="relative h-[300px] sm:h-[400px] lg:h-[480px] w-full flex items-center justify-center bg-gray-100">
        <SafeImage
          src="/images/service_window.png"
          alt="Premium Window & Glass Cleaning"
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
            {t("services.window.tag")}
          </span>
          <h1 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-text-dark max-w-xl">
            {t("services.window.title")}
          </h1>
          <p className="text-text-muted text-sm sm:text-base max-w-lg leading-relaxed">
            {t("services.window.desc")}
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
            {t("services.window.h2")}
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            {t("services.window.p")}
          </p>
        </Reveal>
      </section>

      {/* Checklist Section */}
      <section className="py-20 bg-brand-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest">
              {t("services.window.checklistTag")}
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl text-text-dark">
              {t("services.window.checklistTitle")}
            </h2>
            <p className="text-text-muted text-sm">
              {t("services.window.checklistDesc")}
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
              {t("services.window.processTag")}
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl text-text-dark">
              {t("services.window.processTitle")}
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
              {t("services.window.faqTitle")}
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
            {t("services.window.ctaTitle")}
          </h2>
          <p className="text-white/90 text-sm max-w-md mx-auto">
            {t("services.window.ctaDesc")}
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
