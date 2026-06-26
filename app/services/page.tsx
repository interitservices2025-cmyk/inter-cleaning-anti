"use client";

import React from "react";
import Button from "@/components/ui/Button";
import { Icons } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";
import { useTranslation } from "@/hooks/useTranslation";
import { SafeImage } from "@/components/ui/SafeImage";

interface ServiceBlock {
  title: string;
  desc: string;
  image: string;
  fallbackImage?: string;
  href: string;
  icon: React.ReactNode;
  features: string[];
}

export default function ServicesPage() {
  const { t, language } = useTranslation();

  const servicesList: ServiceBlock[] = [
    {
      title: t("services.residential.title"),
      desc: language === "fr"
        ? "Programmes de nettoyage complets pour maisons, condos et appartements. Laissez nos experts nettoyer pendant que vous profitez de votre temps libre."
        : "Comprehensive cleaning routines for homes, condos, and apartments. Let our experts clean while you enjoy your free time.",
      image: "/images/service_residential.png",
      href: "/services/residential-cleaning",
      icon: <Icons.Home size={24} />,
      features: language === "fr" ? [
        "Comptoirs de cuisine, évier et extérieurs d'appareils",
        "Désinfection de salle de bain, baignoire, douche et toilettes",
        "Dépoussiérage de tous les meubles, étagères et décorations",
        "Aspirateur sur les tapis et lavage des sols durs",
      ] : [
        "Kitchen counters, sink, & appliance exteriors",
        "Bathroom sanitizing, tub, shower, & toilet scrub",
        "Dusting all furniture, shelves, & decor",
        "Vacuuming carpets & washing hard floors",
      ],
    },
    {
      title: t("services.office.title"),
      desc: language === "fr"
        ? "Des bureaux propres favorisent la productivité et protègent la santé des employés. Calendriers commerciaux sur mesure adaptés à vos activités."
        : "Clean offices foster productivity and protect employee health. Custom commercial schedules tailored to your business operations.",
      image: "/images/service_office.png",
      href: "/services/office-cleaning",
      icon: <Icons.Building size={24} />,
      features: language === "fr" ? [
        "Désinfection des bureaux et vidage des corbeilles",
        "Désinfection de la cuisine commune et des sanitaires",
        "Polissage du hall d'entrée, des couloirs et des salles de réunion",
        "Nettoyage en dehors des heures de bureau pour zéro interruption",
      ] : [
        "Desk sanitizing & trash bin empty",
        "Breakroom kitchen & restroom disinfection",
        "Lobby, hallway, & meeting room polishing",
        "After-hours cleaning for zero disruption",
      ],
    },
    {
      title: t("services.deep.title"),
      desc: language === "fr"
        ? "Un nettoyage intensif ciblant les taches tenaces, le calcaire et l'accumulation de poussière. Parfait pour un rafraîchissement saisonnier."
        : "A intensive scrub down targeting stubborn stains, scale, and dust build-up. Perfect for seasonal refreshing.",
      image: "/images/service_deep.png",
      href: "/services/deep-cleaning",
      icon: <Icons.Sparkles size={24} />,
      features: language === "fr" ? [
        "Nettoyage de l'intérieur du four, du réfrigérateur et des placards",
        "Récurage minutieux des plinthes et des cadres de portes",
        "Élimination de la moisissure des joints de carrelage",
        "Désinfection des interrupteurs et des poignées de portes",
      ] : [
        "Inside oven, fridge, and cabinets",
        "Detailed baseboard & door frame scrubbing",
        "Mildew removal from tile grout & seams",
        "Sanitization of light switches & doorknobs",
      ],
    },
    {
      title: t("services.move.title"),
      desc: language === "fr"
        ? "Simplifiez votre transition. Nous nettoyons chaque recoin pour préparer le logement pour les nouveaux occupants ou pour l'état des lieux."
        : "Make your transition simple. We clean every nook and cranny to prepare the home for new occupants or landlords.",
      image: "/images/service_move.png",
      href: "/services/move-in-move-out",
      icon: <Icons.Trash size={24} />,
      features: language === "fr" ? [
        "Nettoyage intérieur des placards vides et des tiroirs",
        "Aspirateur en profondeur et désinfection des sols durs",
        "Polissage des robinets et lavage intérieur des fenêtres",
        "Garantie de réussite pour l'inspection du propriétaire",
      ] : [
        "Cleaning inside empty closets & drawers",
        "Deep carpet vacuuming & hard floor sanitizing",
        "Polishing fixtures & washing windows inside",
        "Guaranteed landlord inspection check",
      ],
    },
    {
      title: t("services.carpet.title"),
      desc: language === "fr"
        ? "Prolongez la durée de vie de vos tapis et canapés. Notre méthode d'extraction en profondeur élimine la saleté incrustée, les odeurs et les taches d'animaux."
        : "Extend the lifespan of your carpets and sofas. Our high-extraction method removes deep dirt, odors, and stubborn pet stains.",
      image: "/images/service_carpet.png",
      href: "/services/carpet-upholstery-cleaning",
      icon: <Icons.Brush size={24} />,
      features: language === "fr" ? [
        "Extraction à la vapeur à haute température",
        "Prétraitement des taches non toxique et sans résidu",
        "Élimination des allergènes et des poils d'animaux",
        "Application de produit protecteur pour tissus",
      ] : [
        "High-temperature steam extraction",
        "Non-toxic, residue-free stain pre-treatment",
        "Allergen & pet dander elimination",
        "Fabric guard protective application",
      ],
    },
    {
      title: t("services.window.title"),
      desc: language === "fr"
        ? "Illuminez votre vue avec un lavage de vitres intérieur et extérieur. Nous éliminons la saleté, les traces de pluie et les marques."
        : "Brighten your view with interior and exterior window washing. We remove grime, rain stains, and streaks.",
      image: "/images/service_window.png",
      href: "/services/window-glass-cleaning",
      icon: <Icons.Waves size={24} />,
      features: language === "fr" ? [
        "Lavage de vitres à la raclette sans traces",
        "Nettoyage des rebords, des cadres et lavage des moustiquaires",
        "Élimination des éclats de peinture et des résidus d'adhésif",
        "Opérations sécurisées sur échelle et personnel assuré",
      ] : [
        "Streak-free squeegee window cleaning",
        "Wiping sill, frame, and screen wash",
        "Removal of paint splashes & adhesive residue",
        "Safe, insured ladder operations",
      ],
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-brand-light py-20 border-b border-gray-100">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="bg-primary/10 text-primary font-montserrat font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full inline-block">
            {t("services.hero.tag")}
          </span>
          <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl text-text-dark max-w-3xl mx-auto leading-tight">
            {t("services.hero.title")}
          </h1>
          <p className="font-opensans text-text-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            {t("services.hero.desc")}
          </p>
        </Reveal>
      </section>

      {/* Services List Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {servicesList.map((svc, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={svc.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-b border-gray-50 pb-20 last:border-0 last:pb-0"
              >
                {/* Image */}
                <Reveal animationType={isEven ? "slide-in-left" : "slide-in-right"} className={`w-full ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}>
                  <div className="relative h-[300px] sm:h-[400px] w-full rounded-3xl overflow-hidden shadow-lg bg-gray-100">
                    <SafeImage
                      src={svc.image}
                      fallbackSrc={svc.fallbackImage}
                      alt={svc.title}
                      className="w-full h-full"
                    />
                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl text-primary shadow-md z-20">
                      {svc.icon}
                    </div>
                  </div>
                </Reveal>

                {/* Text Description */}
                <Reveal animationType={isEven ? "slide-in-right" : "slide-in-left"} className={`space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl text-text-dark">
                    {svc.title}
                  </h2>
                  <p className="font-opensans text-text-muted text-sm sm:text-base leading-relaxed">
                    {svc.desc}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-opensans text-xs text-text-dark">
                    {svc.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <Icons.Check className="text-secondary mt-0.5 flex-shrink-0" size={14} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 flex flex-col sm:flex-row gap-4">
                    <Button variant="primary" href="/quote">
                      {t("services.page.estimate")}
                    </Button>
                    <Button variant="outline" href={svc.href}>
                      {t("services.page.features")}
                    </Button>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      {/* Promise & Standards Section */}
      <section className="py-20 bg-brand-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-center font-opensans">
            <Reveal animationType="fade-in-up" delay={0} className="h-full flex">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-155 space-y-4 w-full">
                <div className="inline-flex text-primary p-3 bg-primary/5 rounded-2xl">
                  <Icons.Sparkles size={28} />
                </div>
                <h3 className="font-montserrat font-bold text-lg text-text-dark">
                  {t("services.page.ecoTitle")}
                </h3>
                <p className="text-text-muted text-xs leading-relaxed">
                  {t("services.page.ecoDesc")}
                </p>
              </div>
            </Reveal>
            <Reveal animationType="fade-in-up" delay={150} className="h-full flex">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-155 space-y-4 w-full">
                <div className="inline-flex text-primary p-3 bg-primary/5 rounded-2xl">
                  <Icons.ShieldCheck size={28} />
                </div>
                <h3 className="font-montserrat font-bold text-lg text-text-dark">
                  {t("services.page.vetTitle")}
                </h3>
                <p className="text-text-muted text-xs leading-relaxed">
                  {t("services.page.vetDesc")}
                </p>
              </div>
            </Reveal>
            <Reveal animationType="fade-in-up" delay={300} className="h-full flex">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-155 space-y-4 w-full">
                <div className="inline-flex text-primary p-3 bg-primary/5 rounded-2xl">
                  <Icons.Clock size={28} />
                </div>
                <h3 className="font-montserrat font-bold text-lg text-text-dark">
                  {t("services.page.guarTitle")}
                </h3>
                <p className="text-text-muted text-xs leading-relaxed">
                  {t("services.page.guarDesc")}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quote CTA Banner */}
      <section className="bg-primary py-16 text-white text-center">
        <Reveal animationType="scale-up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-montserrat font-extrabold text-3xl text-white">
            {t("services.page.ctaTitle")}
          </h2>
          <p className="font-opensans text-white/90 text-sm max-w-xl mx-auto">
            {t("services.page.ctaDesc")}
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
