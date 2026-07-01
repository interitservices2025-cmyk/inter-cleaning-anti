"use client";

import React, { useState } from "react";
import Button from "../ui/Button";
import { Icons } from "../ui/Icons";
import { useTranslation } from "@/hooks/useTranslation";

export default function ContactForm() {
  const { t, language } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "contact",
          ...formData,
        }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Failed to send email");
      }

      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert(
        language === "fr"
          ? "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer ultérieurement."
          : "An error occurred while sending your message. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-xl text-center max-w-lg mx-auto animate-fadeIn font-opensans">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 rounded-full mb-4">
          <Icons.Check className="text-green-500" size={32} />
        </div>
        <h3 className="font-montserrat font-bold text-xl text-text-dark mb-2">
          {t("forms.contactSuccess")}
        </h3>
        <p className="text-text-muted mb-6 text-sm">
          {t("forms.contactSuccessDesc")}
        </p>
        <Button variant="primary" onClick={() => setIsSuccess(false)}>
          {language === "fr" ? "Envoyer un autre message" : "Send Another Message"}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-white border border-gray-100 rounded-3xl shadow-lg p-8 font-opensans">
      <h3 className="font-montserrat font-extrabold text-xl text-text-dark mb-4">
        {t("forms.contactTitle")}
      </h3>
      <div className="space-y-4">
        {/* Name */}
        <div className="space-y-1">
          <label htmlFor="name" className="text-xs font-semibold text-text-dark">
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
            className="w-full px-4 py-2.5 bg-brand-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
          />
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label htmlFor="email" className="text-xs font-semibold text-text-dark">
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
              className="w-full px-4 py-2.5 bg-brand-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="phone" className="text-xs font-semibold text-text-dark">
              {language === "fr" ? "Numéro de téléphone" : "Phone"}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(416) 871-9045"
              className="w-full px-4 py-2.5 bg-brand-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="space-y-1">
          <label htmlFor="subject" className="text-xs font-semibold text-text-dark">
            {t("forms.subject")}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            placeholder={t("forms.subjectPlaceholder")}
            className="w-full px-4 py-2.5 bg-brand-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
          />
        </div>

        {/* Message */}
        <div className="space-y-1">
          <label htmlFor="message" className="text-xs font-semibold text-text-dark">
            {language === "fr" ? "Message *" : "Message *"}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder={language === "fr" ? "Écrivez votre message ici..." : "Type your message here..."}
            className="w-full px-4 py-2.5 bg-brand-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none text-sm"
          ></textarea>
        </div>

        <Button variant="primary" type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? t("forms.contactSubmitting") : t("forms.contactBtn")}
        </Button>
      </div>
    </form>
  );
}

