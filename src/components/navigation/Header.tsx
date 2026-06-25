"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "../ui/Icons";
import Button from "../ui/Button";

interface NavLink {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[];
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/home" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    submenu: [
      { label: "Residential Cleaning", href: "/services/residential-cleaning" },
      { label: "Office & Small Business", href: "/services/office-cleaning" },
      { label: "Deep Cleaning", href: "/services/deep-cleaning" },
      { label: "Move-In / Move-Out", href: "/services/move-in-move-out" },
      { label: "Carpet & Upholstery", href: "/services/carpet-upholstery-cleaning" },
      { label: "Window & Glass", href: "/services/window-glass-cleaning" },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  const isLinkActive = (href: string) => {
    if (href === "/home" && pathname === "/") return true;
    if (href === "/services") {
      return pathname.startsWith("/services");
    }
    return pathname === href;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-white/90 backdrop-blur-sm py-5 border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/home" className="flex items-center">
            <img
              src="/logo.png"
              alt="Inter-Cleaning Services Logo"
              width="240"
              height="65"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.submenu && setActiveDropdown(link.label)}
                onMouseLeave={() => link.submenu && setActiveDropdown(null)}
              >
                {link.submenu ? (
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className={`flex items-center gap-1 font-montserrat font-semibold text-sm tracking-wide transition-colors cursor-pointer py-2 ${
                      isLinkActive(link.href)
                        ? "text-primary"
                        : "text-text-dark hover:text-primary"
                    }`}
                  >
                    {link.label}
                    <Icons.ChevronDown size={16} className={`transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`font-montserrat font-semibold text-sm tracking-wide transition-colors py-2 ${
                      isLinkActive(link.href)
                        ? "text-primary border-b-2 border-primary"
                        : "text-text-dark hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Submenu Dropdown */}
                {link.submenu && activeDropdown === link.label && (
                  <div className="absolute left-0 mt-1 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl py-3 transform origin-top transition-all duration-200 animate-fadeIn">
                    {link.submenu.map((subitem) => (
                      <Link
                        key={subitem.label}
                        href={subitem.href}
                        className={`block px-5 py-2.5 font-opensans text-sm transition-colors ${
                          pathname === subitem.href
                            ? "bg-brand-light text-primary font-semibold"
                            : "text-text-dark hover:bg-brand-light hover:text-primary"
                        }`}
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden lg:block">
            <Button variant="primary" href="/quote">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-text-dark hover:text-primary focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <Icons.X size={28} /> : <Icons.Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out lg:hidden border-l border-gray-100 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-between p-6 pt-24 overflow-y-auto">
          <div className="space-y-6">
            {navLinks.map((link) => (
              <div key={link.label} className="border-b border-gray-50 pb-4">
                {link.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(link.label)}
                      className="flex items-center justify-between w-full font-montserrat font-bold text-lg text-text-dark hover:text-primary py-2 text-left"
                    >
                      {link.label}
                      <Icons.ChevronDown
                        size={20}
                        className={`transition-transform duration-200 ${
                          activeDropdown === link.label ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`mt-2 ml-4 space-y-2 overflow-hidden transition-all duration-300 ${
                        activeDropdown === link.label
                          ? "max-h-96 opacity-100 mt-3"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {link.submenu.map((subitem) => (
                        <Link
                          key={subitem.label}
                          href={subitem.href}
                          onClick={() => setIsOpen(false)}
                          className={`block py-2 font-opensans text-sm transition-colors ${
                            pathname === subitem.href
                              ? "text-primary font-semibold"
                              : "text-text-muted hover:text-primary"
                          }`}
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block font-montserrat font-bold text-lg py-2 ${
                      isLinkActive(link.href)
                        ? "text-primary"
                        : "text-text-dark hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            <Button variant="primary" href="/quote" className="w-full">
              Get a Quote
            </Button>
            <div className="flex items-center gap-3 justify-center text-text-muted text-sm pt-4 border-t border-gray-100">
              <Icons.Phone size={16} className="text-secondary" />
              <a href="tel:+14168719045" className="font-semibold text-text-dark hover:text-primary">
                +1 (416) 871-9045
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
