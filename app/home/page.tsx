"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Icons } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";
import { useTranslation } from "@/hooks/useTranslation";
import { SafeImage } from "@/components/ui/SafeImage";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";

interface ServiceCardProps {
  title: string;
  desc: string;
  image: string;
  fallbackImage?: string;
  href: string;
  icon: React.ReactNode;
  delay?: number;
}

function ServiceCard({ title, desc, image, fallbackImage, href, icon, delay = 0 }: ServiceCardProps) {
  const { t } = useTranslation();
  return (
    <Reveal delay={delay} animationType="fade-in-up" className="h-full">
      <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
          <SafeImage
            src={image}
            fallbackSrc={fallbackImage}
            alt={title}
            className="w-full h-full group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl text-primary shadow-sm z-10 font-bold">
            {icon}
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="font-montserrat font-bold text-lg text-text-dark group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-text-muted text-sm mt-2 leading-relaxed flex-grow">
            {desc}
          </p>
          <div className="mt-6 pt-4 border-t border-gray-50">
            <Link
              href={href}
              className="inline-flex items-center gap-2 text-primary font-montserrat font-bold text-xs uppercase tracking-wider group-hover:gap-3 transition-all"
            >
              {t("nav.backToServices") === "Back to Services" ? "Learn More" : "En savoir plus"} <Icons.ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t, language } = useTranslation();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services: ServiceCardProps[] = [
    {
      title: t("services.residential.title"),
      desc: language === "fr"
        ? "Services de nettoyage exceptionnels pour maisons, condos et appartements. Horaires sur mesure adaptés à votre style de vie."
        : "Exceptional cleaning services for houses, condos, and apartments. Custom schedules to suit your lifestyle.",
      image: "/images/service_residential.png",
      href: "/services/residential-cleaning",
      icon: <Icons.Home size={22} />,
    },
    {
      title: t("services.office.title"),
      desc: language === "fr"
        ? "Maintenez un espace de travail propre et productif. Désinfection experte et formules sur mesure pour bureaux de toutes tailles."
        : "Maintain a pristine and productive workspace. Expert sanitation and customized plans for offices of all sizes.",
      image: "/images/service_office.png",
      href: "/services/office-cleaning",
      icon: <Icons.Building size={22} />,
    },
    {
      title: t("services.deep.title"),
      desc: language === "fr"
        ? "Un récurage de fond en comble minutieux de votre propriété. Atteint la saleté invisible et la poussière dans tous les recoins."
        : "A thorough top-to-bottom scrub down of your property. Reaches hidden dirt, dust, and grime in every corner.",
      image: "/images/service_deep.png",
      href: "/services/deep-cleaning",
      icon: <Icons.Sparkles size={22} />,
    },
    {
      title: t("services.move.title"),
      desc: language === "fr"
        ? "Déménagez l'esprit tranquille. Nous garantissons une propreté impeccable pour les nouveaux arrivants ou pour votre caution."
        : "Relocate stress-free. We guarantee a spotless home for new occupants or to secure your security deposit.",
      image: "/images/service_move.png",
      href: "/services/move-in-move-out",
      icon: <Icons.Trash size={22} />,
    },
    {
      title: t("services.carpet.title"),
      desc: language === "fr"
        ? "Redonnez vie à vos tapis et meubles. Notre procédé spécial d'extraction à la vapeur élimine taches, allergènes et odeurs."
        : "Revitalize your carpets and furniture. Specialized deep extraction process removes stains, allergens, and odors.",
      image: "/images/service_carpet.png",
      href: "/services/carpet-upholstery-cleaning",
      icon: <Icons.Brush size={22} />,
    },
    {
      title: t("services.window.title"),
      desc: language === "fr"
        ? "Lavage de vitres intérieur et extérieur sans traces. Faites entrer à nouveau une lumière éclatante et naturelle."
        : "Crystal-clear exterior and interior window washing. Bring bright, natural light back into your spaces.",
      image: "/images/service_window.png",
      href: "/services/window-glass-cleaning",
      icon: <Icons.Waves size={22} />,
    },
  ];

  const faqs = [
    {
      q: language === "fr" ? "Vos nettoyeurs sont-ils assurés et cautionnés ?" : "Are your cleaners insured and bonded?",
      a: language === "fr"
        ? "Oui, absolument. Tous nos professionnels du nettoyage sont entièrement assurés, cautionnés et font l'objet d'une vérification rigoureuse des antécédents criminels pour votre tranquillité d'esprit et votre sécurité."
        : "Yes, absolutely. All our professional cleaners are fully insured, bonded, and undergo rigorous background checks to ensure your peace of mind and security.",
    },
    {
      q: language === "fr" ? "Dois-je fournir le matériel et les produits de nettoyage ?" : "Do I need to supply the cleaning equipment and products?",
      a: language === "fr"
        ? "Non, pas du tout. Notre équipe arrive entièrement équipée avec des aspirateurs de qualité commerciale, des microfibres et des solutions de nettoyage écologiques de premier choix, sans aucun coût supplémentaire pour vous."
        : "No, you don't. Our team arrives fully equipped with commercial-grade vacuums, microfibers, and premium, eco-friendly cleaning solutions at no extra cost to you.",
    },
    {
      q: language === "fr" ? "Quelle est votre garantie de satisfaction à 100% ?" : "What is your 100% Satisfaction Guarantee?",
      a: language === "fr"
        ? "Nous garantissons la qualité de notre travail. Si vous n'êtes pas entièrement satisfait d'une zone nettoyée, appelez-nous simplement dans les 24 heures et nous reviendrons la nettoyer gratuitement."
        : "We stand behind the quality of our work. If you are not completely satisfied with any area we've cleaned, simply call us within 24 hours and we will return to re-clean the area for free.",
    },
    {
      q: language === "fr" ? "Comment calculez-vous vos tarifs de nettoyage ?" : "How do you calculate your cleaning rates?",
      a: language === "fr"
        ? "Nos tarifs sont basés sur la superficie de l'espace, la configuration (chambres/salles de bain) et le type de service demandé. Demandez un devis gratuit en ligne pour obtenir une estimation personnalisée exacte."
        : "Our rates are based on the square footage of the space, the layout (bedrooms/bathrooms), and the specific type of service requested. Request a free quote online to get an exact customized estimate.",
    },
    {
      q: language === "fr" ? "Puis-je planifier des nettoyages réguliers ?" : "Can I schedule recurring cleanings?",
      a: language === "fr"
        ? "Oui ! Nous proposons des formules hebdomadaires, bihebdomadaires (toutes les 2 semaines) et mensuelles. Les clients réguliers bénéficient de tarifs préférentiels sur toutes leurs sessions de nettoyage."
        : "Yes! We offer weekly, bi-weekly (every 2 weeks), and monthly schedules. Regular clients receive special discounted rates on all their ongoing cleaning sessions.",
    },
  ];

  const slides = language === "fr" ? [
    {
      id: 1,
      title: "Restauration Complète de Cuisine",
      service: "Nettoyage en profondeur",
      location: "Richmond Hill",
      desc: "Dégraissage en profondeur des surfaces, élimination des graisses tenaces et polissage des robinetteries en acier inoxydable.",
      imageBefore: "/images/showcase_kitchen_before.png",
      imageAfter: "/images/showcase_kitchen_after.png",
    },
    {
      id: 2,
      title: "Détartrage & Polissage de Salle de Bain",
      service: "Nettoyage résidentiel",
      location: "Toronto",
      desc: "Élimination des dépôts de calcaire tenaces sur les parois de douche vitrées et désinfection complète des surfaces en marbre.",
      imageBefore: "/images/showcase_bathroom_before.png",
      imageAfter: "/images/showcase_bathroom_after.png",
    },
    {
      id: 3,
      title: "Restauration en Profondeur de Tapis",
      service: "Nettoyage de tapis et meubles",
      location: "Vaughan",
      desc: "Extraction à la vapeur à haute température pour éliminer les taches de café, les allergènes incrustés et raviver les couleurs des fibres.",
      imageBefore: "/images/showcase_carpet_before.png",
      imageAfter: "/images/showcase_carpet_after.png",
    },
    {
      id: 4,
      title: "Polissage de Sol de Bureau",
      service: "Nettoyage de bureaux",
      location: "Brampton",
      desc: "Nettoyage intensif et lustrage de sol en bois franc pour restaurer une finition brillante et éliminer les rayures de passage.",
      imageBefore: "/images/showcase_floor_before.png",
      imageAfter: "/images/showcase_floor_after.png",
    }
  ] : [
    {
      id: 1,
      title: "Complete Kitchen Restoration",
      service: "Deep Cleaning",
      location: "Richmond Hill",
      desc: "Thorough surface degreasing, range hood cleaning, and stainless steel fixture polishing.",
      imageBefore: "/images/showcase_kitchen_before.png",
      imageAfter: "/images/showcase_kitchen_after.png",
    },
    {
      id: 2,
      title: "Bathroom Descaling & Polishing",
      service: "Residential Cleaning",
      location: "Toronto",
      desc: "Removal of stubborn limescale deposits on glass shower doors and complete sanitization of marble countertops.",
      imageBefore: "/images/showcase_bathroom_before.png",
      imageAfter: "/images/showcase_bathroom_after.png",
    },
    {
      id: 3,
      title: "Deep Carpet Extraction",
      service: "Carpet & Upholstery Cleaning",
      location: "Vaughan",
      desc: "High-temperature steam extraction to remove coffee stains, deep allergens, and restore fiber color.",
      imageBefore: "/images/showcase_carpet_before.png",
      imageAfter: "/images/showcase_carpet_after.png",
    },
    {
      id: 4,
      title: "Office Hardwood Floor Buffing",
      service: "Office Cleaning",
      location: "Brampton",
      desc: "Intensive floor scrubbing and buffing to restore a glassy, reflective finish and eliminate scratch marks.",
      imageBefore: "/images/showcase_floor_before.png",
      imageAfter: "/images/showcase_floor_after.png",
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, currentSlide]);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Text column */}
            <Reveal animationType="slide-in-left" className="space-y-8 text-center lg:text-left z-10">
              <span className="bg-primary/10 text-primary font-montserrat font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full inline-block">
                {t("home.hero.badge")}
              </span>
              <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl lg:text-6xl text-text-dark leading-tight">
                {t("home.hero.title1")}
                <br />
                <span className="text-primary">{t("home.hero.title2")}</span>
              </h1>
              <p className="font-opensans text-text-muted text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {t("home.hero.desc")}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button variant="primary" href="/quote">
                  {t("home.hero.cta1")}
                </Button>
                <Button variant="outline" href="/services">
                  {t("home.hero.cta2")}
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4 text-xs font-semibold text-text-dark font-opensans border-t border-gray-100 max-w-md mx-auto lg:mx-0">
                <span className="flex items-center gap-1.5">
                  <Icons.Check className="text-secondary" size={16} /> {t("home.hero.checked1")}
                </span>
                <span className="flex items-center gap-1.5">
                  <Icons.Check className="text-secondary" size={16} /> {t("home.hero.checked2")}
                </span>
              </div>
            </Reveal>

            {/* Image column */}
            <Reveal delay={200} animationType="fade-in-up" className="w-full">
              <div className="relative h-[350px] sm:h-[450px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
                <SafeImage
                  src="/images/hero_cleaning.png"
                  alt="Professional Premium Cleaning Services in Toronto"
                  priority={true}
                  className="w-full h-full"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl flex items-center justify-between border border-gray-100 z-10">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-xl">
                      <Icons.Sparkles size={24} />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-sm text-text-dark">
                        {t("home.hero.sparkle")}
                      </h4>
                      <p className="font-opensans text-text-muted text-xs">
                        {t("home.hero.sparkleDesc")}
                      </p>
                    </div>
                  </div>
                  <div className="text-right hidden sm:block">
                    <div className="flex text-amber-400 gap-0.5 mb-1 justify-end">
                      {[...Array(5)].map((_, i) => (
                        <Icons.Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <span className="font-opensans text-text-dark font-bold text-xs">
                      {t("home.hero.reviews")}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Trust Section / Stats */}
      <section className="bg-brand-light py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center font-opensans">
            <Reveal animationType="fade-in-up" delay={0} className="space-y-2">
              <div className="inline-flex text-primary mb-2">
                <Icons.ShieldCheck size={36} />
              </div>
              <h3 className="font-montserrat font-extrabold text-2xl text-text-dark">
                {t("home.stats.trusted")}
              </h3>
              <p className="text-text-muted text-sm max-w-xs mx-auto">
                {t("home.stats.trustedDesc")}
              </p>
            </Reveal>
            <Reveal animationType="fade-in-up" delay={150} className="space-y-2">
              <div className="inline-flex text-primary mb-2">
                <Icons.Clock size={36} />
              </div>
              <h3 className="font-montserrat font-extrabold text-2xl text-text-dark">
                {t("home.stats.flexible")}
              </h3>
              <p className="text-text-muted text-sm max-w-xs mx-auto">
                {t("home.stats.flexibleDesc")}
              </p>
            </Reveal>
            <Reveal animationType="fade-in-up" delay={300} className="space-y-2">
              <div className="inline-flex text-primary mb-2">
                <Icons.Sparkles size={36} />
              </div>
              <h3 className="font-montserrat font-extrabold text-2xl text-text-dark">
                {t("home.stats.premium")}
              </h3>
              <p className="text-text-muted text-sm max-w-xs mx-auto">
                {t("home.stats.premiumDesc")}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest">
              {t("home.overview.tag")}
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-dark">
              {t("home.overview.title")}
            </h2>
            <p className="font-opensans text-text-muted text-sm sm:text-base leading-relaxed">
              {t("home.overview.desc")}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => (
              <ServiceCard key={svc.title} {...svc} delay={idx * 100} />
            ))}
          </div>

          <Reveal className="text-center mt-12">
            <Button variant="outline" href="/services">
              {t("home.overview.more")}
            </Button>
          </Reveal>
        </div>
      </section>

      {/* 4. About Preview Section */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image stack */}
            <Reveal animationType="slide-in-left" className="w-full">
              <div className="relative h-[350px] lg:h-[450px] w-full rounded-3xl overflow-hidden shadow-lg bg-gray-100">
                <SafeImage
                  src="/images/service_residential.png"
                  alt="Our Cleaning Standards"
                  className="w-full h-full"
                />
              </div>
            </Reveal>

            {/* Text content */}
            <Reveal animationType="slide-in-right" className="space-y-6">
              <span className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest">
                {t("home.about.tag")}
              </span>
              <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-dark">
                {t("home.about.title")}
              </h2>
              <p className="font-opensans text-text-muted text-sm sm:text-base leading-relaxed">
                {t("home.about.desc1")}
              </p>
              <p className="font-opensans text-text-muted text-sm sm:text-base leading-relaxed">
                {t("home.about.desc2")}
              </p>
              <div className="pt-4">
                <Button variant="primary" href="/about">
                  {t("home.about.cta")}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest">
              {t("home.steps.tag")}
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-dark">
              {t("home.steps.title")}
            </h2>
            <p className="font-opensans text-text-muted text-sm sm:text-base">
              {t("home.steps.desc")}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <Reveal animationType="fade-in-up" delay={0} className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-montserrat font-bold text-xl mx-auto shadow-sm">
                1
              </div>
              <h3 className="font-montserrat font-bold text-lg text-text-dark">
                {t("home.steps.step1Title")}
              </h3>
              <p className="font-opensans text-text-muted text-sm leading-relaxed max-w-xs mx-auto">
                {t("home.steps.step1Desc")}
              </p>
            </Reveal>

            <Reveal animationType="fade-in-up" delay={150} className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center text-secondary font-montserrat font-bold text-xl mx-auto shadow-sm">
                2
              </div>
              <h3 className="font-montserrat font-bold text-lg text-text-dark">
                {t("home.steps.step2Title")}
              </h3>
              <p className="font-opensans text-text-muted text-sm leading-relaxed max-w-xs mx-auto">
                {t("home.steps.step2Desc")}
              </p>
            </Reveal>

            <Reveal animationType="fade-in-up" delay={300} className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500 font-montserrat font-bold text-xl mx-auto shadow-sm">
                3
              </div>
              <h3 className="font-montserrat font-bold text-lg text-text-dark">
                {t("home.steps.step3Title")}
              </h3>
              <p className="font-opensans text-text-muted text-sm leading-relaxed max-w-xs mx-auto">
                {t("home.steps.step3Desc")}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. Before & After Showcase */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest">
              {t("home.showcase.tag")}
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-dark">
              {t("home.showcase.title")}
            </h2>
            <p className="font-opensans text-text-muted text-sm sm:text-base">
              {t("home.showcase.desc")}
            </p>
          </Reveal>

          {/* Carrousel Wrapper */}
          <Reveal animationType="fade-in-up" className="relative max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col lg:flex-row h-auto min-h-[450px]">
            <div 
              className="w-full flex flex-col lg:flex-row"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {/* Visuals Column: Before & After comparison slider with real images */}
              <div className="lg:w-3/5 relative h-[300px] sm:h-[400px] lg:h-auto min-h-[400px] flex">
                <BeforeAfterSlider
                  beforeImage={slides[currentSlide].imageBefore}
                  afterImage={slides[currentSlide].imageAfter}
                  altBefore={`${slides[currentSlide].title} Before`}
                  altAfter={`${slides[currentSlide].title} After`}
                  beforeLabel={language === "fr" ? "Avant" : "Before"}
                  afterLabel={language === "fr" ? "Après" : "After"}
                  className="w-full h-full"
                />
              </div>

              {/* Content details Column */}
              <div className="lg:w-2/5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="bg-primary/10 text-primary font-montserrat font-bold text-2xs uppercase tracking-widest px-3 py-1 rounded-full">
                      {slides[currentSlide].service}
                    </span>
                    <span className="bg-gray-100 text-text-muted font-montserrat font-bold text-2xs uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1">
                      <Icons.MapPin size={10} className="text-primary" /> {slides[currentSlide].location}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-montserrat font-extrabold text-2xl text-text-dark transition-colors duration-300">
                    {slides[currentSlide].title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-muted text-sm leading-relaxed font-opensans">
                    {slides[currentSlide].desc}
                  </p>
                </div>

                {/* Navigation Buttons & Bullets info */}
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  {/* Left/Right navigation */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={prevSlide}
                      aria-label="Previous Project"
                      className="w-10 h-10 rounded-full border border-gray-200 text-text-muted hover:text-primary hover:border-primary flex items-center justify-center transition-all bg-white hover:shadow-sm cursor-pointer"
                    >
                      <Icons.ChevronRight className="rotate-180" size={20} />
                    </button>
                    <button
                      onClick={nextSlide}
                      aria-label="Next Project"
                      className="w-10 h-10 rounded-full border border-gray-200 text-text-muted hover:text-primary hover:border-primary flex items-center justify-center transition-all bg-white hover:shadow-sm cursor-pointer"
                    >
                      <Icons.ChevronRight size={20} />
                    </button>
                  </div>

                  {/* Dots pagination */}
                  <div className="flex items-center gap-1.5">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        aria-label={`Go to project slide ${idx + 1}`}
                        className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                          idx === currentSlide ? "bg-primary w-5" : "bg-gray-200 hover:bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest">
              {t("home.testimonials.tag")}
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-dark">
              {t("home.testimonials.title")}
            </h2>
            <p className="font-opensans text-text-muted text-sm sm:text-base">
              {t("home.testimonials.desc")}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Reveal animationType="fade-in-up" delay={0} className="h-full flex">
              <div className="bg-brand-light rounded-3xl p-8 border border-gray-100 flex flex-col justify-between w-full">
                <div className="space-y-4 font-opensans">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Icons.Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-text-dark text-sm italic leading-relaxed">
                    {language === "fr"
                      ? "\"Travail absolument incroyable ! L'équipe a nettoyé mon condo au centre-ville de Toronto avant mon emménagement, et ils l'ont laissé comme neuf. L'attention aux détails dans la cuisine et les salles de bain était remarquable.\""
                      : "\"Absolutely amazing job! The team cleaned my condo in downtown Toronto before I moved in, and they left it looking brand new. The attention to detail in the kitchen and bathrooms was stunning.\""}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200/50 flex items-center gap-3">
                  <div className="bg-primary text-white font-montserrat font-bold text-xs w-10 h-10 rounded-full flex items-center justify-center">
                    SM
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-sm text-text-dark">Sarah Miller</h4>
                    <p className="font-opensans text-text-muted text-xs">
                      {language === "fr" ? "Propriétaire de condo, Toronto" : "Condo Owner, Toronto"}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Testimonial 2 */}
            <Reveal animationType="fade-in-up" delay={150} className="h-full flex">
              <div className="bg-brand-light rounded-3xl p-8 border border-gray-100 flex flex-col justify-between w-full">
                <div className="space-y-4 font-opensans">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Icons.Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-text-dark text-sm italic leading-relaxed">
                    {language === "fr"
                      ? "\"Inter-Cleaning Services s'occupe du nettoyage de nos bureaux commerciaux à Mississauga. Ils sont toujours ponctuels, minutieux et très professionnels. Recommandé vivement pour toute entreprise.\""
                      : "\"Inter-Cleaning Services handles our commercial office cleaning in Mississauga. They are consistently punctual, thorough, and highly professional. Highly recommend for any business.\""}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200/50 flex items-center gap-3">
                  <div className="bg-primary text-white font-montserrat font-bold text-xs w-10 h-10 rounded-full flex items-center justify-center">
                    DL
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-sm text-text-dark">David Lee</h4>
                    <p className="font-opensans text-text-muted text-xs">
                      {language === "fr" ? "Directeur des opérations, Mississauga" : "Operations Manager, Mississauga"}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Testimonial 3 */}
            <Reveal animationType="fade-in-up" delay={300} className="h-full flex">
              <div className="bg-brand-light rounded-3xl p-8 border border-gray-100 flex flex-col justify-between w-full">
                <div className="space-y-4 font-opensans">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Icons.Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-text-dark text-sm italic leading-relaxed">
                    {language === "fr"
                      ? "\"Nous avons réservé leur service résidentiel bihebdomadaire pour notre maison à Markham. Rentrer dans une maison propre et fraîche est le meilleur moment de notre semaine. Excellent service client !\""
                      : "\"We have booked their bi-weekly residential service for our home in Markham. Coming back to a clean and fresh-smelling home is the best part of our week. Excellent customer service!\""}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200/50 flex items-center gap-3">
                  <div className="bg-primary text-white font-montserrat font-bold text-xs w-10 h-10 rounded-full flex items-center justify-center">
                    RK
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-sm text-text-dark">Rebecca K.</h4>
                    <p className="font-opensans text-text-muted text-xs">
                      {language === "fr" ? "Propriétaire, Markham" : "Homeowner, Markham"}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16 space-y-4">
            <span className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest">
              {t("home.faq.tag")}
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl text-text-dark">
              {t("home.faq.title")}
            </h2>
            <p className="font-opensans text-text-muted text-sm">
              {t("home.faq.desc")}
            </p>
          </Reveal>

          <div className="space-y-4 font-opensans">
            {faqs.map((faq, index) => (
              <Reveal key={index} delay={index * 80} animationType="fade-in-up">
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex items-center justify-between w-full p-6 text-left focus:outline-none cursor-pointer"
                  >
                    <span className="font-montserrat font-bold text-sm sm:text-base text-text-dark">
                      {faq.q}
                    </span>
                    <div className="text-primary ml-4">
                      {openFaq === index ? <Icons.Minus size={18} /> : <Icons.Plus size={18} />}
                    </div>
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      openFaq === index ? "max-h-96 border-t border-gray-100" : "max-h-0"
                    }`}
                  >
                    <p className="p-6 text-text-muted text-sm leading-relaxed bg-brand-light/20">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="bg-primary py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f11582] via-primary to-[#b00a5c] opacity-80"></div>
        <Reveal animationType="scale-up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
            {t("home.cta.title")}
          </h2>
          <p className="font-opensans text-white/90 text-base sm:text-lg max-w-xl mx-auto">
            {t("home.cta.desc")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="secondary" href="/quote">
              {t("home.cta.cta1")}
            </Button>
            <Button variant="white" href="/contact" className="border-2 border-white/10 hover:border-white">
              {t("home.cta.cta2")}
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
