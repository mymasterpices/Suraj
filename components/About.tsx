'use client';

import React from 'react';
import {
  Briefcase,
  Layers,
  Sparkles,
  Trophy,
  CheckCircle,
  Code,
  Laptop,
} from 'lucide-react';
import { personalInfo } from '@/data/personal';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-100/50 dark:bg-slate-900/30 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering High-Performance Web Systems for Over <span className="text-gradient">8.5 Years</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            From fast-growing D2C e-commerce brands to mission-critical enterprise CRMs, I build reliable, accessible, and maintainable software.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Avatar Card & Badges */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
              
              <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xl text-center">
                
                {/* Styled Avatar Placeholder */}
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-1 shadow-lg">
                  <div className="w-full h-full rounded-full bg-slate-900 flex flex-col items-center justify-center text-white">
                    <span className="text-4xl font-black font-mono tracking-tighter">SS</span>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-blue-400 mt-1">Dev</span>
                  </div>
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                  {personalInfo.name}
                </h3>
                <p className="text-xs font-mono text-blue-600 dark:text-blue-400 mt-1">
                  {personalInfo.title}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  📍 {personalInfo.location}
                </p>

                {/* Key Pillars */}
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 text-left space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>8.5+ years production engineering</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>30+ live production websites</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Shopify (Liquid + Remix) &amp; WordPress</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Node.js, Express &amp; Modern TypeScript</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Stats */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 text-base leading-relaxed space-y-4">
              <p>
                {personalInfo.summary}
              </p>
              <p>
                Over the course of nearly a decade, I have transitioned from hand-crafting responsive HTML/CSS designs and WordPress portals to architecting enterprise-grade CRM platforms and custom e-commerce engines.
              </p>
              <p>
                I thrive at the intersection of business requirements and technical execution—whether that means refactoring legacy PHP systems into modern TypeScript/Node.js services, writing custom Remix apps for Shopify merchants, or integrating intelligent AI agents to automate time-consuming manual workflows.
              </p>
            </div>

            {/* Stat Counters Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {personalInfo.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="rounded-xl p-4 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 shadow-sm text-center group hover:border-blue-500/50 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
