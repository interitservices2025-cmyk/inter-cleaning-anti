"use client";

import React from "react";
import Button from "@/components/ui/Button";
import { Icons } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";
import { useTranslation } from "@/hooks/useTranslation";
import { SafeImage } from "@/components/ui/SafeImage";

export default function AboutPage() {
  const { t, language } = useTranslation();

  const values = [
    {
      title: t("about.values.val1Title"),
      desc: language === "fr"
        ? "Nous établissons les normes de nettoyage les plus élevées et effectuons des audits réguliers pour maintenir des résultats impeccables à chaque visite."
        : t("about.values.val1Desc"),
      icon: <Icons.Sparkles size={24} />,
    },
    {
      title: t("about.values.val2Title"),
      desc: t("about.values.val2Desc"),
      icon: <Icons.ShieldCheck size={24} />,
    },
    {
      title: t("about.values.val3Title"),
      desc: t("about.values.val3Desc"),
      icon: <Icons.Waves size={24} />,
    },
    {
      title: t("about.values.val4Title"),
      desc: t("about.values.val4Desc"),
      icon: <Icons.Calendar size={24} />,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-brand-light py-20 border-b border-gray-100">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="bg-primary/10 text-primary font-montserrat font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full inline-block">
            {t("about.hero.tag")}
          </span>
          <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl text-text-dark max-w-3xl mx-auto leading-tight">
            {t("about.hero.title")}
          </h1>
          <p className="font-opensans text-text-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            {t("about.hero.desc")}
          </p>
        </Reveal>
      </section>

      {/* Story & Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image columns */}
            <Reveal animationType="slide-in-left" className="w-full">
              <div className="relative h-[400px] sm:h-[500px] w-full rounded-3xl overflow-hidden shadow-xl bg-gray-100">
                <SafeImage
                  src="/images/hero_cleaning.png"
                  alt="Our professional cleaning team"
                  className="w-full h-full"
                />
              </div>
            </Reveal>

            {/* Text columns */}
            <Reveal animationType="slide-in-right" className="space-y-8 font-opensans">
              <div className="space-y-4">
                <span className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest block">
                  {t("about.story.tag")}
                </span>
                <h2 className="font-montserrat font-extrabold text-3xl text-text-dark">
                  {t("about.story.title")}
                </h2>
                <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                  {t("about.story.desc1")}
                </p>
                <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                  {t("about.story.desc2")}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                <div className="space-y-2">
                  <h4 className="font-montserrat font-bold text-base text-text-dark flex items-center gap-2">
                    <Icons.Check className="text-secondary" size={18} /> {t("about.story.mission")}
                  </h4>
                  <p className="text-text-muted text-xs leading-relaxed">
                    {t("about.story.missionDesc")}
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-montserrat font-bold text-base text-text-dark flex items-center gap-2">
                    <Icons.Check className="text-secondary" size={18} /> {t("about.story.vision")}
                  </h4>
                  <p className="text-text-muted text-xs leading-relaxed">
                    {t("about.story.visionDesc")}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-brand-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest">
              {t("about.values.tag")}
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-dark">
              {t("about.values.title")}
            </h2>
            <p className="font-opensans text-text-muted text-sm">
              {t("about.values.desc")}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <Reveal
                key={val.title}
                delay={idx * 100}
                animationType="fade-in-up"
                className="h-full flex"
              >
                <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-150 flex flex-col items-center text-center font-opensans hover:shadow-xl transition-all duration-300 w-full">
                  <div className="bg-primary/10 text-primary p-4 rounded-2xl mb-6 shadow-inner">
                    {val.icon}
                  </div>
                  <h3 className="font-montserrat font-bold text-base text-text-dark mb-3">
                    {val.title}
                  </h3>
                  <p className="text-text-muted text-xs leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy / Commitment Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text details */}
            <Reveal animationType="slide-in-left" className="space-y-6 font-opensans">
              <span className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest">
                {t("about.philosophy.tag")}
              </span>
              <h2 className="font-montserrat font-extrabold text-3xl text-text-dark">
                {t("about.philosophy.title")}
              </h2>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                {t("about.philosophy.desc1")}
              </p>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                {t("about.philosophy.desc2")}
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <Button variant="primary" href="/quote">
                  {t("about.philosophy.cta1")}
                </Button>
                <Button variant="outline" href="/services">
                  {t("about.philosophy.cta2")}
                </Button>
              </div>
            </Reveal>

            {/* Video or Image mockup placeholder */}
            <Reveal animationType="slide-in-right" className="w-full">
              <div className="relative h-[350px] lg:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
                <SafeImage
                  src="/images/service_residential.png"
                  alt="Eco-friendly cleaning supplies"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
