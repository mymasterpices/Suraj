'use client';

import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  Sparkles,
  CheckCircle2,
  Building,
} from 'lucide-react';
import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-100/50 dark:bg-slate-900/30 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02 // CAREER MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experience &amp; <span className="text-gradient">Leadership Roles</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            A progressive journey of 8.5+ years scaling web infrastructure, leading front-end teams, and driving enterprise digital transformations.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central vertical line */}
          <div
            className="absolute left-4 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-slate-700/30"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline node icon */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-1.5 z-10 flex items-center justify-center">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 ${
                        exp.isCurrent
                          ? 'bg-blue-600 text-white ring-4 ring-blue-500/30'
                          : 'bg-slate-800 text-slate-300 border border-slate-700'
                      }`}
                    >
                      <Briefcase className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      isEven ? 'md:pl-10' : 'md:pr-10'
                    }`}
                  >
                    <div
                      className={`rounded-2xl p-6 bg-white dark:bg-slate-900/90 border transition-all duration-300 hover:shadow-xl ${
                        exp.isCurrent
                          ? 'border-blue-500/50 shadow-md shadow-blue-500/5'
                          : 'border-slate-200 dark:border-slate-800 hover:border-blue-500/30'
                      }`}
                    >
                      {/* Top Meta info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-600 dark:text-blue-400">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        {exp.isCurrent && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono uppercase bg-emerald-500/10 text-emerald-500 border border-emerald-500/30">
                            Current Role
                          </span>
                        )}
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5 mt-0.5">
                        <Building className="w-3.5 h-3.5 text-slate-400" />
                        <span>{exp.company}</span>
                        {exp.affiliation && (
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            ({exp.affiliation})
                          </span>
                        )}
                      </div>

                      {/* Summary */}
                      <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {exp.summary}
                      </p>

                      {/* Bullet Highlights */}
                      <ul className="mt-4 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Tags */}
                      <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
