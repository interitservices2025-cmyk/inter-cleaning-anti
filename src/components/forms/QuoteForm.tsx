"use client";

import React, { useState } from "react";
import Button from "../ui/Button";
import { Icons } from "../ui/Icons";

export default function QuoteForm() {
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
    { label: "Residential Cleaning", value: "residential" },
    { label: "Office & Small Business Cleaning", value: "office" },
    { label: "Deep Cleaning", value: "deep" },
    { label: "Move-In / Move-Out Cleaning", value: "move-in-out" },
    { label: "Carpet & Upholstery Cleaning", value: "carpet" },
    { label: "Window & Glass Cleaning", value: "window" },
  ];

  const propertyTypes = [
    { label: "House / Townhouse", value: "house" },
    { label: "Apartment / Condo", value: "condo" },
    { label: "Commercial Office", value: "commercial" },
    { label: "Retail Space", value: "retail" },
  ];

  const frequencies = [
    { label: "One-Time Service", value: "one-time" },
    { label: "Weekly", value: "weekly" },
    { label: "Bi-Weekly (Every 2 weeks)", value: "bi-weekly" },
    { label: "Monthly", value: "monthly" },
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
          Quote Request Received!
        </h3>
        <p className="text-text-muted mb-8 leading-relaxed">
          Thank you for choosing Inter-Cleaning Services. One of our cleaning experts will review
          your details and contact you within the next 2 hours with a customized estimate.
        </p>
        <Button variant="primary" onClick={() => setIsSuccess(false)}>
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-100 rounded-3xl shadow-xl p-8 md:p-12 max-w-3xl mx-auto font-opensans">
      <div className="text-center mb-10">
        <span className="bg-primary/10 text-primary font-montserrat font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full inline-block mb-3">
          Instant Estimate
        </span>
        <h2 className="font-montserrat font-extrabold text-2xl md:text-3xl text-text-dark">
          Request a Free Quote
        </h2>
        <p className="text-text-muted mt-2 text-sm md:text-base">
          Fill out the form below and receive your custom cleaning quote shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-sm font-semibold text-text-dark">
              Full Name *
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
              Email Address *
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
              Phone Number *
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
              Service Needed *
            </label>
            <select
              id="serviceNeeded"
              name="serviceNeeded"
              required
              value={formData.serviceNeeded}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all cursor-pointer"
            >
              <option value="">Select a service</option>
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
              Property Type *
            </label>
            <select
              id="propertyType"
              name="propertyType"
              required
              value={formData.propertyType}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all cursor-pointer"
            >
              <option value="">Select property type</option>
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
              Frequency *
            </label>
            <select
              id="frequency"
              name="frequency"
              required
              value={formData.frequency}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all cursor-pointer"
            >
              <option value="">Select cleaning frequency</option>
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
            Additional Details or Special Instructions
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about the size of your space, specific areas of focus, pets, etc."
            className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
          ></textarea>
        </div>

        {/* Submit button */}
        <div className="pt-4 flex flex-col items-center gap-4">
          <Button variant="primary" type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
            {isSubmitting ? "Submitting Request..." : "Submit Quote Request"}
          </Button>

          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-text-muted pt-4 border-t border-gray-100 w-full">
            <span className="flex items-center gap-1.5">
              <Icons.ShieldCheck className="text-secondary" size={14} /> Safe & Secure
            </span>
            <span className="flex items-center gap-1.5">
              <Icons.Clock className="text-secondary" size={14} /> Response in under 2 hours
            </span>
            <span className="flex items-center gap-1.5">
              <Icons.Sparkles className="text-secondary" size={14} /> 100% Satisfaction Guaranteed
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
