'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Clock,
  ShieldCheck,
  ExternalLink,
} from 'lucide-react';
import { LinkedinIcon } from '@/components/Icons';
import { personalInfo } from '@/data/personal';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  _hp_gotcha: string; // Honeypot field
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

const SERVICE_OPTIONS = [
  'Custom Web App (Full Stack / MEAN)',
  'Shopify Theme & Custom Remix App',
  'WordPress Theme / Plugin Development',
  'E-Commerce Storefront Development',
  'CRM & Business Automation Tools',
  'AI Agent Integration & Workflow Tools',
  'Other / Technical Consultation',
];

const BUDGET_OPTIONS_INR = [
  'Under ₹50,000',
  '₹50,000 – ₹1,00,000',
  '₹1,00,000 – ₹2,50,000',
  '₹2,50,000 – ₹5,00,000',
  '₹5,00,000+',
  'Flexible / Open to Discussion',
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: 'Custom Web App (Full Stack / MEAN)',
    budget: '₹50,000 – ₹1,00,000',
    message: '',
    _hp_gotcha: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Validate fields client-side
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please describe your project or inquiry.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: '' });

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: 'success',
          message:
            data.message ||
            'Thank you for reaching out! Your inquiry has been sent to Suraj Sharma. I will reply within 24 hours.',
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'Custom Web App (Full Stack / MEAN)',
          budget: '₹50,000 – ₹1,00,000',
          message: '',
          _hp_gotcha: '',
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message:
            data.error ||
            'Unable to process your inquiry. Please try again or email directly to sooraj.sharma222@gmail.com.',
        });
      }
    } catch (err: any) {
      setSubmitStatus({
        type: 'error',
        message:
          'Network connection error. Please verify your connection or email me directly at sooraj.sharma222@gmail.com.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>06 // START A CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Have a Project in Mind? <span className="text-gradient">Let&apos;s Build It</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Whether you need a custom web application, an e-commerce platform revamp, or an AI agent integration, send your inquiry below. Every submission delivers directly to my primary inbox.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Details & Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Direct Channel Cards */}
            <div className="rounded-2xl p-6 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Direct Contact Channels
              </h3>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-800/40">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 font-medium">
                    Email Address
                  </div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Click to send an email anytime
                  </p>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-100 dark:border-emerald-800/40">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 font-medium">
                    Direct Phone / WhatsApp
                  </div>
                  <a
                    href={`tel:${personalInfo.phoneRaw}`}
                    className="text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Available Mon–Sat, 10:00 AM – 8:00 PM IST
                  </p>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-800/40">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 font-medium">
                    Professional Network
                  </div>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Connect on LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    in/suraj-sharma-076588178
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 border border-purple-100 dark:border-purple-800/40">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 font-medium">
                    Location &amp; Time Zone
                  </div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {personalInfo.location}
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Indian Standard Time (UTC+5:30) • Remote Worldwide
                  </p>
                </div>
              </div>
            </div>

            {/* Rapid Response Guarantee CTA Card (High-Contrast in Light & Dark Mode) */}
            <div className="rounded-2xl p-6 bg-blue-50/90 dark:bg-slate-900/90 border border-blue-200 dark:border-blue-500/30 text-xs shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-blue-950 dark:text-white font-bold text-sm">
                <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Rapid Response Guarantee</span>
              </div>
              <p className="leading-relaxed text-slate-800 dark:text-slate-200 font-normal">
                I actively monitor all portfolio submissions. You will receive an automated confirmation and a personalized reply within <strong className="font-bold text-blue-900 dark:text-blue-300">12 to 24 hours</strong>.
              </p>
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 text-[11px] font-semibold pt-1">
                <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <span>Protected with spam honeypot &amp; strict rate limiting</span>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xl">
              
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Send Project Details
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Fill in the details below to request a quote, schedule a technical consultation, or discuss your requirements.
              </p>

              {/* Status Banner */}
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-xl mb-6 flex items-start gap-3 text-xs leading-relaxed ${
                    submitStatus.type === 'success'
                      ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300'
                      : 'bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300'
                  }`}
                  role="alert"
                >
                  {submitStatus.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-500" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0 text-rose-500" />
                  )}
                  <div>
                    <strong className="block font-semibold mb-0.5">
                      {submitStatus.type === 'success' ? 'Inquiry Sent!' : 'Submission Notice'}
                    </strong>
                    <span>{submitStatus.message}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                
                {/* Honeypot Spam Field (Hidden from real users) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="_hp_gotcha">Do not fill this field</label>
                  <input
                    type="text"
                    id="_hp_gotcha"
                    name="_hp_gotcha"
                    value={formData._hp_gotcha}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800/80 border ${
                        errors.name
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-300 dark:border-slate-700 focus:ring-blue-500'
                      } text-slate-900 dark:text-white focus:outline-none focus:ring-2`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[11px] text-rose-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. client@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800/80 border ${
                        errors.email
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-300 dark:border-slate-700 focus:ring-blue-500'
                      } text-slate-900 dark:text-white focus:outline-none focus:ring-2`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-rose-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Phone & Budget (INR) Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Phone Number <span className="text-slate-500 dark:text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91-9876543210"
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Budget (in INR) */}
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Budget Range (INR) <span className="text-slate-500 dark:text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {BUDGET_OPTIONS_INR.map((b) => (
                        <option key={b} value={b} className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Service Dropdown */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Service Interested In <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s} className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      Project Description &amp; Scope <span className="text-rose-500">*</span>
                    </label>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400">Min 10 characters</span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project goals, timelines, current tech stack, or any specific challenges you want solved..."
                    className={`w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800/80 border ${
                      errors.message
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-slate-300 dark:border-slate-700 focus:ring-blue-500'
                    } text-slate-900 dark:text-white focus:outline-none focus:ring-2 resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-[11px] text-rose-500">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-600/25 transition-all duration-200 active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Inquiry to Suraj...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry Now</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-slate-500 dark:text-slate-400 mt-3">
                    🔒 Submissions are delivered with SMTP encryption and backed up securely.
                  </p>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
