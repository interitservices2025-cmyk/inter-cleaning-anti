"use client";

import React, { useState } from "react";
import Button from "../ui/Button";
import { Icons } from "../ui/Icons";
import { useTranslation } from "@/hooks/useTranslation";

export default function QuoteForm() {
  const { t, language } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceNeeded: "",
    propertyType: "",
    frequency: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const services = [
    { label: t("services.residential.title"), value: "residential" },
    { label: t("services.office.title"), value: "office" },
    { label: t("services.deep.title"), value: "deep" },
    { label: t("services.move.title"), value: "move-in-out" },
    { label: t("services.carpet.title"), value: "carpet" },
    { label: t("services.window.title"), value: "window" },
  ];

  const propertyTypes = [
    { label: language === "fr" ? "Maison / Maison de ville" : "House / Townhouse", value: "house" },
    { label: language === "fr" ? "Appartement / Condo" : "Apartment / Condo", value: "condo" },
    { label: language === "fr" ? "Bureau commercial" : "Commercial Office", value: "commercial" },
    { label: language === "fr" ? "Espace commercial" : "Retail Space", value: "retail" },
  ];

  const frequencies = [
    { label: language === "fr" ? "Service unique / Ponctuel" : "One-Time Service", value: "one-time" },
    { label: language === "fr" ? "Hebdomadaire" : "Weekly", value: "weekly" },
    { label: language === "fr" ? "Toutes les deux semaines" : "Bi-Weekly (Every 2 weeks)", value: "bi-weekly" },
    { label: language === "fr" ? "Mensuel" : "Monthly", value: "monthly" },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceNeeded: "",
        propertyType: "",
        frequency: "",
        message: "",
      });
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="bg-white border border-gray-100 p-8 md:p-12 rounded-3xl shadow-xl text-center max-w-xl mx-auto animate-fadeIn font-opensans">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-50 rounded-full mb-6">
          <Icons.Check className="text-green-500" size={40} />
        </div>
        <h3 className="font-montserrat font-bold text-2xl text-text-dark mb-4">
          {t("forms.successTitle")}
        </h3>
        <p className="text-text-muted mb-8 leading-relaxed">
          {t("forms.successDesc")}
        </p>
        <Button variant="primary" onClick={() => setIsSuccess(false)}>
          {t("forms.anotherRequest")}
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-100 rounded-3xl shadow-xl p-8 md:p-12 max-w-3xl mx-auto font-opensans">
      <div className="text-center mb-10">
        <span className="bg-primary/10 text-primary font-montserrat font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full inline-block mb-3">
          {language === "fr" ? "Estimation Gratuite" : "Instant Estimate"}
        </span>
        <h2 className="font-montserrat font-extrabold text-2xl md:text-3xl text-text-dark">
          {language === "fr" ? "Demander un Devis Gratuit" : "Request a Free Quote"}
        </h2>
        <p className="text-text-muted mt-2 text-sm md:text-base">
          {language === "fr"
            ? "Remplissez le formulaire ci-dessous et recevez rapidement votre estimation personnalisée."
            : "Fill out the form below and receive your custom cleaning quote shortly."}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-sm font-semibold text-text-dark">
              {t("forms.name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-sm font-semibold text-text-dark">
              {t("forms.email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <label htmlFor="phone" className="text-sm font-semibold text-text-dark">
              {t("forms.phone")}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="(416) 871-9045"
              className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>

          {/* Service Needed */}
          <div className="space-y-1.5">
            <label htmlFor="serviceNeeded" className="text-sm font-semibold text-text-dark">
              {t("forms.serviceNeeded")}
            </label>
            <select
              id="serviceNeeded"
              name="serviceNeeded"
              required
              value={formData.serviceNeeded}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all cursor-pointer"
            >
              <option value="">{t("forms.selectService")}</option>
              {services.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          {/* Property Type */}
          <div className="space-y-1.5">
            <label htmlFor="propertyType" className="text-sm font-semibold text-text-dark">
              {t("forms.propertyType")}
            </label>
            <select
              id="propertyType"
              name="propertyType"
              required
              value={formData.propertyType}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all cursor-pointer"
            >
              <option value="">{t("forms.selectProperty")}</option>
              {propertyTypes.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          {/* Frequency */}
          <div className="space-y-1.5">
            <label htmlFor="frequency" className="text-sm font-semibold text-text-dark">
              {t("forms.frequency")}
            </label>
            <select
              id="frequency"
              name="frequency"
              required
              value={formData.frequency}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all cursor-pointer"
            >
              <option value="">{t("forms.selectFrequency")}</option>
              {frequencies.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label htmlFor="message" className="text-sm font-semibold text-text-dark">
            {t("forms.message")}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder={t("forms.messagePlaceholder")}
            className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
          ></textarea>
        </div>

        {/* Submit button */}
        <div className="pt-4 flex flex-col items-center gap-4">
          <Button variant="primary" type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
            {isSubmitting ? t("forms.submitting") : t("forms.submit")}
          </Button>

          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-text-muted pt-4 border-t border-gray-100 w-full">
            <span className="flex items-center gap-1.5">
              <Icons.ShieldCheck className="text-secondary" size={14} /> {t("forms.safeSecure")}
            </span>
            <span className="flex items-center gap-1.5">
              <Icons.Clock className="text-secondary" size={14} /> {t("forms.fastResponse")}
            </span>
            <span className="flex items-center gap-1.5">
              <Icons.Sparkles className="text-secondary" size={14} /> {t("forms.guarantee")}
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}

