"use client";

import React from "react";
import Link from "next/link";
import { Icons } from "../ui/Icons";
import { useTranslation } from "@/hooks/useTranslation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const services = [
    { label: t("services.residential.title"), href: "/services/residential-cleaning" },
    { label: t("services.office.title"), href: "/services/office-cleaning" },
    { label: t("services.deep.title"), href: "/services/deep-cleaning" },
    { label: t("services.move.title"), href: "/services/move-in-move-out" },
    { label: t("services.carpet.title"), href: "/services/carpet-upholstery-cleaning" },
    { label: t("services.window.title"), href: "/services/window-glass-cleaning" },
  ];

  const quickLinks = [
    { label: t("nav.home"), href: "/home" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.careers"), href: "/careers" },
    { label: t("nav.contact"), href: "/contact" },
    { label: t("nav.quote"), href: "/quote" },
  ];

  const serviceAreas = [
    "Toronto",
    "Mississauga",
    "Brampton",
    "Vaughan",
    "Markham",
    "Richmond Hill",
    "Oakville",
    "Burlington",
  ];

  return (
    <footer className="bg-brand-light border-t border-gray-200">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About Info */}
          <div className="space-y-6">
            <Link href="/home" className="inline-block">
              <img
                src="/logo.png"
                alt="Inter-Cleaning Services Logo"
                width="280"
                height="75"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-text-muted text-sm leading-relaxed font-opensans">
              {t("footer.desc")}
            </p>
            <div className="space-y-3 font-opensans text-sm">
              <div className="flex items-center gap-3 text-text-dark">
                <Icons.Phone size={18} className="text-primary flex-shrink-0" />
                <a href="tel:+14168719045" className="hover:text-primary transition-colors">
                  +1 (416) 871-9045
                </a>
              </div>
              <div className="flex items-center gap-3 text-text-dark">
                <Icons.Mail size={18} className="text-primary flex-shrink-0" />
                <a href="mailto:contact@inter-cleaningservices.com" className="hover:text-primary transition-colors">
                  contact@inter-cleaningservices.com
                </a>
              </div>
              <div className="flex items-start gap-3 text-text-dark">
                <Icons.MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span>
                  Brampton, Ontario, L6W 3L3, Canada
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-base text-text-dark tracking-wide uppercase mb-6">
              {t("footer.company")}
            </h3>
            <ul className="space-y-3 font-opensans text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-primary transition-colors flex items-center gap-1.5"
                  >
                    <Icons.ChevronRight size={14} className="text-secondary" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-montserrat font-bold text-base text-text-dark tracking-wide uppercase mb-6">
              {t("footer.ourServices")}
            </h3>
            <ul className="space-y-3 font-opensans text-sm">
              {services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-primary transition-colors flex items-center gap-1.5"
                  >
                    <Icons.ChevronRight size={14} className="text-secondary" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas & Hours */}
          <div className="space-y-6">
            <div>
              <h3 className="font-montserrat font-bold text-base text-text-dark tracking-wide uppercase mb-4">
                {t("footer.serviceAreas")}
              </h3>
              <p className="text-text-muted text-xs leading-relaxed mb-3">
                {t("footer.serviceAreasDesc")}
              </p>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="bg-white border border-gray-200 text-text-dark font-opensans font-medium text-xs px-2.5 py-1 rounded-full shadow-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-montserrat font-bold text-base text-text-dark tracking-wide uppercase mb-3">
                {t("footer.workingHours")}
              </h3>
              <p className="text-text-muted text-sm font-opensans">
                {t("footer.hoursValue")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-gray-200 py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 font-opensans text-xs text-text-muted">
          <div>
            &copy; {currentYear} Inter-Cleaning Services. {t("footer.rights")}
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              {t("footer.terms")}
            </Link>
            <Link href="/sitemap" className="hover:text-primary transition-colors">
              {t("footer.sitemap")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

