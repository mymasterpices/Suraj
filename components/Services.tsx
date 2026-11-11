'use client';

import React from 'react';
import {
  Code2,
  ShoppingBag,
  Globe,
  CreditCard,
  Cpu,
  Bot,
  Check,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { services, ServiceItem } from '@/data/services';

function getServiceIcon(iconName: string) {
  switch (iconName) {
    case 'Code2':
      return <Code2 className="w-6 h-6" />;
    case 'ShoppingBag':
      return <ShoppingBag className="w-6 h-6" />;
    case 'Globe':
      return <Globe className="w-6 h-6" />;
    case 'CreditCard':
      return <CreditCard className="w-6 h-6" />;
    case 'Cpu':
      return <Cpu className="w-6 h-6" />;
    case 'Bot':
      return <Bot className="w-6 h-6" />;
    default:
      return <Code2 className="w-6 h-6" />;
  }
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-100/50 dark:bg-slate-900/30 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04 // SERVICES OFFERED</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Comprehensive Web &amp; <span className="text-gradient">E-Commerce Engineering</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            End-to-end consulting, modern development, and AI automation tailored to high-growth startups and established enterprises.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl p-7 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Service Icon with gradient */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${service.gradient} p-2.5 text-white flex items-center justify-center shadow-lg mb-5 group-hover:scale-105 transition-transform`}
                >
                  {getServiceIcon(service.iconName)}
                </div>

                <div className="text-[11px] font-mono font-semibold uppercase text-blue-600 dark:text-blue-400 tracking-wider mb-1">
                  {service.shortTag}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80 space-y-2.5">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry CTA */}
              <div className="mt-8 pt-4">
                <a
                  href={`#contact?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group-hover:translate-x-1 transition-all"
                >
                  <span>Request this service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
