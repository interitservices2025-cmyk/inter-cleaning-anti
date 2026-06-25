"use client";

import React, { useState } from "react";
import Button from "../ui/Button";
import { Icons } from "../ui/Icons";

export default function CareerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    coverLetter: "",
  });

  const [resumeName, setResumeName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const positions = [
    { label: "Residential Cleaning Specialist (Full-Time)", value: "residential-ft" },
    { label: "Commercial Cleaning Crew (Part-Time)", value: "commercial-pt" },
    { label: "Deep Cleaning & Carpet Expert (Full-Time)", value: "carpet-expert" },
    { label: "Cleaning Supervisor (Full-Time)", value: "supervisor" },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        coverLetter: "",
      });
      setResumeName(null);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-xl text-center max-w-lg mx-auto animate-fadeIn font-opensans">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 rounded-full mb-4">
          <Icons.Check className="text-green-500" size={32} />
        </div>
        <h3 className="font-montserrat font-bold text-xl text-text-dark mb-2">
          Application Submitted!
        </h3>
        <p className="text-text-muted mb-6 text-sm">
          Thank you for your interest in joining Inter-Cleaning Services. Our recruitment team will
          review your application and contact you if your profile matches our needs.
        </p>
        <Button variant="primary" onClick={() => setIsSuccess(false)}>
          Apply for Another Role
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-white border border-gray-100 rounded-3xl shadow-lg p-8 font-opensans">
      <h3 className="font-montserrat font-extrabold text-xl text-text-dark mb-4">
        Apply Now
      </h3>
      <div className="space-y-4">
        {/* Name */}
        <div className="space-y-1">
          <label htmlFor="name" className="text-xs font-semibold text-text-dark">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Doe"
            className="w-full px-4 py-2.5 bg-brand-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
          />
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label htmlFor="email" className="text-xs font-semibold text-text-dark">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="jane@example.com"
              className="w-full px-4 py-2.5 bg-brand-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="phone" className="text-xs font-semibold text-text-dark">
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
              className="w-full px-4 py-2.5 bg-brand-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
            />
          </div>
        </div>

        {/* Position */}
        <div className="space-y-1">
          <label htmlFor="position" className="text-xs font-semibold text-text-dark">
            Position of Interest *
          </label>
          <select
            id="position"
            name="position"
            required
            value={formData.position}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-brand-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm cursor-pointer"
          >
            <option value="">Select a role</option>
            {positions.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        {/* Resume upload */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-text-dark block">
            Upload CV / Resume *
          </label>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="resume"
              className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-200 border-dashed rounded-2xl cursor-pointer bg-brand-light hover:bg-gray-100 transition-colors"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Icons.Sparkles className="w-8 h-8 text-primary mb-2" />
                <p className="text-xs text-text-dark font-semibold">
                  {resumeName ? resumeName : "Click to upload CV (PDF or DOCX)"}
                </p>
                <p className="text-xxs text-text-muted mt-1">Max file size: 5MB</p>
              </div>
              <input
                id="resume"
                type="file"
                accept=".pdf,.docx,.doc"
                required
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>

        {/* Cover Letter */}
        <div className="space-y-1">
          <label htmlFor="coverLetter" className="text-xs font-semibold text-text-dark">
            Cover Letter / Why work with us?
          </label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            rows={4}
            value={formData.coverLetter}
            onChange={handleChange}
            placeholder="Tell us about your cleaning experience and availability..."
            className="w-full px-4 py-2.5 bg-brand-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none text-sm"
          ></textarea>
        </div>

        <Button variant="primary" type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting Application..." : "Submit Application"}
        </Button>
      </div>
    </form>
  );
}
