'use client';

import React, { useState } from 'react';
import {
  Layers,
  Code2,
  Palette,
  ShoppingBag,
  Database,
  Bot,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { skillCategories } from '@/data/skills';

// Icon map helper
function getCategoryIcon(name: string) {
  switch (name) {
    case 'Layers':
      return <Layers className="w-5 h-5" />;
    case 'Code2':
      return <Code2 className="w-5 h-5" />;
    case 'Palette':
      return <Palette className="w-5 h-5" />;
    case 'ShoppingBag':
      return <ShoppingBag className="w-5 h-5" />;
    case 'Database':
      return <Database className="w-5 h-5" />;
    case 'Bot':
      return <Bot className="w-5 h-5" />;
    default:
      return <CheckCircle2 className="w-5 h-5" />;
  }
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02 // TECHNICAL PROFICIENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Specialized Skills &amp; <span className="text-gradient">Modern Tech Stack</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            A battle-tested repertoire built across 8.5+ years of hands-on software engineering, CMS mastering, and AI workflow exploration.
          </p>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveCategory('all')}
              type="button"
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-400'
              }`}
            >
              All Categories
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                type="button"
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeCategory === cat.category
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-400'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const isAi = cat.category.includes('AI');
            return (
              <div
                key={cat.category}
                className={`group relative rounded-2xl p-6 bg-white dark:bg-slate-900/80 border transition-all duration-300 ${
                  isAi
                    ? 'border-violet-500/50 shadow-lg shadow-violet-500/10'
                    : 'border-slate-200 dark:border-slate-800 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5'
                }`}
              >
                {/* Glow pill */}
                {isAi && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono uppercase bg-violet-500/20 text-violet-600 dark:text-violet-400 border border-violet-500/30">
                      ★ Active Focus
                    </span>
                  </div>
                )}

                {/* Category Icon & Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${cat.gradient} p-2 text-white flex items-center justify-center shadow-md`}
                  >
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">
                      {cat.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80 group-hover:border-blue-500/30 transition-colors"
                    >
                      <span>{skill.name}</span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400">
                        • {skill.level}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* AI Agent Banner Highlight (High contrast in both Light & Dark modes) */}
        <div className="mt-12 rounded-2xl bg-slate-900 dark:bg-slate-900/90 border border-indigo-500/40 p-6 sm:p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-violet-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-violet-600/30">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                Pioneering Intelligent AI Agents
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  NEW
                </span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                Currently expanding into autonomous AI agent architectures. Integrating LLM tool-calling, automated quotation parsing, and customer-assist bots directly into existing web and CRM ecosystems.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 shadow-md shadow-violet-600/30 transition-colors"
          >
            <span>Discuss AI Automation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
