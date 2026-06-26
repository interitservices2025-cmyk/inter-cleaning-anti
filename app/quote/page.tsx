"use client";

import React from "react";
import QuoteForm from "@/components/forms/QuoteForm";
import { Icons } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";
import { useTranslation } from "@/hooks/useTranslation";

export default function QuotePage() {
  const { t, language } = useTranslation();

  const trustPoints = [
    {
      title: language === "fr" ? "Réponse en moins de 2 heures" : "Response in Under 2 Hours",
      desc: language === "fr"
        ? "Nos agents analysent la superficie de vos locaux et répondent rapidement avec une estimation tarifaire exacte."
        : "Our booking agents analyze your layout size and respond with an exact price estimate quickly.",
      icon: <Icons.Clock size={20} />,
    },
    {
      title: language === "fr" ? "Équipes assurées & cautionnées" : "Insured & Bonded Teams",
      desc: language === "fr"
        ? "Votre domicile et vos bureaux sont couverts par notre assurance responsabilité civile complète pour une sécurité absolue."
        : "Your home and office are covered by our comprehensive liability insurance for absolute safety.",
      icon: <Icons.ShieldCheck size={20} />,
    },
    {
      title: language === "fr" ? "Garantie 100% brillance" : "100% Sparkle Guarantee",
      desc: language === "fr"
        ? "Si une zone nettoyée ne correspond pas à vos attentes, nous y retournons gratuitement pour y remédier."
        : "If any area cleaned does not meet your expectations, we return to re-clean it free of charge.",
      icon: <Icons.Sparkles size={20} />,
    },
  ];

  return (
    <div className="w-full font-opensans bg-brand-light min-h-[80vh] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Intro & Trust points */}
          <Reveal animationType="slide-in-left" className="lg:col-span-1 space-y-8 lg:sticky lg:top-28">
            <div className="space-y-4">
              <span className="bg-primary/10 text-primary font-montserrat font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full inline-block">
                {t("quote.hero.tag")}
              </span>
              <h1 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-dark leading-tight">
                {t("quote.hero.title")}
              </h1>
              <p className="text-text-muted text-sm leading-relaxed">
                {t("quote.hero.desc")}
              </p>
            </div>

            {/* Trust points list */}
            <div className="space-y-6 pt-4">
              {trustPoints.map((point) => (
                <div key={point.title} className="flex gap-4 items-start">
                  <div className="bg-white text-primary p-3 rounded-2xl shadow-sm border border-gray-150 flex-shrink-0">
                    {point.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-montserrat font-bold text-sm text-text-dark">
                      {point.title}
                    </h4>
                    <p className="text-text-muted text-xs leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick contact banner */}
            <div className="bg-white rounded-3xl p-6 border border-gray-150 shadow-sm text-center space-y-3">
              <span className="text-text-muted text-xs font-semibold block">
                {t("quote.hero.phoneBanner")}
              </span>
              <a
                href="tel:+14168719045"
                className="font-montserrat font-extrabold text-lg text-primary hover:underline flex items-center justify-center gap-2"
              >
                <Icons.Phone size={18} /> +1 (416) 871-9045
              </a>
              <span className="text-[10px] text-text-muted block">
                {t("footer.hoursValue")}
              </span>
            </div>
          </Reveal>

          {/* Form wrapper */}
          <Reveal animationType="slide-in-right" className="lg:col-span-2">
            <QuoteForm />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
