'use client';

import React from 'react';
import {
  GraduationCap,
  Award,
  Trophy,
  HeartHandshake,
  BookOpen,
  Code,
  Sparkles,
  Calendar,
  Building,
} from 'lucide-react';
import { educationList, achievements } from '@/data/education';

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05 // CREDENTIALS &amp; RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Academic Background &amp; <span className="text-gradient">Peer Recognitions</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            A solid educational foundation complemented by industry accolades for client empathy and work consistency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Education (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-5">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 mb-2">
              <GraduationCap className="w-5 h-5 text-blue-500" />
              <span>Academic &amp; Professional Education</span>
            </h3>

            {educationList.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl p-6 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 hover:shadow-md transition-all duration-200"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {item.period}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {item.location}
                  </span>
                </div>

                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {item.degree}
                </h4>

                <div className="text-xs font-medium text-slate-600 dark:text-slate-300 flex items-center gap-1.5 mt-1">
                  <Building className="w-3.5 h-3.5 text-slate-400" />
                  <span>{item.institution}</span>
                </div>

                <p className="mt-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.details}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Achievements & Awards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-5">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 mb-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              <span>Industry Honors &amp; Awards</span>
            </h3>

            {achievements.map((award) => (
              <div
                key={award.id}
                className="relative rounded-2xl p-6 bg-gradient-to-br from-white via-white to-amber-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-amber-950/20 border border-amber-300 dark:border-amber-500/30 shadow-md shadow-amber-500/5 hover:border-amber-500/60 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 p-2 text-white flex items-center justify-center shrink-0 shadow-md shadow-amber-500/20">
                    {award.id === 'client-comforter' ? (
                      <HeartHandshake className="w-6 h-6" />
                    ) : (
                      <Trophy className="w-6 h-6" />
                    )}
                  </div>

                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 mb-1.5">
                      {award.badge}
                    </span>

                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {award.title}
                    </h4>

                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {award.organization} • {award.year}
                    </div>

                    <p className="mt-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Testimonial / Work ethic highlight card */}
            <div className="rounded-2xl p-6 bg-blue-50/80 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-500/20 text-xs text-slate-700 dark:text-slate-300 leading-relaxed shadow-sm">
              <strong className="text-blue-700 dark:text-blue-400 block mb-1 font-mono uppercase text-[11px] font-bold">
                Work Ethic &amp; Communication Commitment
              </strong>
              Awarded both for customer comfort and unwavering regular consistency. I treat project commitments with absolute accountability, clear daily updates, and zero surprise delays.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
