'use client';

import React from 'react';
import { ArrowUp, Heart, Mail, Phone } from 'lucide-react';
import { LinkedinIcon } from '@/components/Icons';
import { personalInfo } from '@/data/personal';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#060910] text-slate-600 dark:text-slate-400 text-xs py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Brand & Title */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 dark:text-white text-base">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                Full Stack Developer
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-500 max-w-sm">
              Designing, building, and maintaining modern web applications, e-commerce storefronts, and AI workflows.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <a href="#about" className="hover:text-blue-500 transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-blue-500 transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">
              Projects
            </a>
            <a href="#services" className="hover:text-blue-500 transition-colors">
              Services
            </a>
            <a href="#education" className="hover:text-blue-500 transition-colors">
              Education
            </a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">
              Contact
            </a>
          </div>

          {/* Back to top & LinkedIn */}
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-all shadow-sm"
              aria-label="Suraj Sharma LinkedIn Profile"
              title="Connect on LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              type="button"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-all hover:-translate-y-0.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Scroll back to top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-3 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Built with Next.js, TypeScript &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
