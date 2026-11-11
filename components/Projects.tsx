'use client';

import React, { useState, useMemo } from 'react';
import {
  ExternalLink,
  Search,
  Sparkles,
  Layers,
  ShoppingBag,
  Globe,
  FileText,
  Filter,
} from 'lucide-react';
import { projects, projectCategories, ProjectCategory, Project } from '@/data/projects';

// Helper to extract domain and 2-letter initials
function getDomainInitials(url: string): { initials: string; host: string } {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, '');
    const parts = host.split('.');
    let initials = 'PJ';
    if (parts.length >= 2) {
      const main = parts[parts.length - 2];
      initials = main.substring(0, 2).toUpperCase();
    }
    return { initials, host };
  } catch {
    return { initials: 'WEB', host: url };
  }
}

// Individual Project Card with Live Screenshot Preview & Gradient Fallback
function ProjectCard({ project }: { project: Project }) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { initials, host } = getDomainInitials(project.url);

  // Live screenshot preview API (11ty open screenshot service)
  const previewUrl =
    project.image ||
    `https://v1.screenshot.11ty.dev/${encodeURIComponent(project.url)}/opengraph/`;

  return (
    <div className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 overflow-hidden">
      
      {/* Top Banner / Screenshot Preview */}
      <div
        className={`relative h-48 w-full bg-gradient-to-br ${project.gradient} flex flex-col justify-between p-4 text-white overflow-hidden`}
      >
        {/* Real Live Website Screenshot */}
        {!imageError && (
          <img
            src={previewUrl}
            alt={`${project.title} live website preview`}
            loading="lazy"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Gradient shadow overlay over screenshot for readability */}
        {!imageError && imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-slate-950/40 pointer-events-none" />
        )}

        {/* Gradient Initial Fallback when loading or if website screenshot is unavailable */}
        {(!imageLoaded || imageError) && (
          <>
            <div
              className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"
              aria-hidden="true"
            />
            <div className="relative z-10 flex flex-col items-center justify-center my-auto">
              <div className="w-16 h-16 rounded-2xl bg-black/25 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-black font-mono tracking-wider">
                  {initials}
                </span>
              </div>
            </div>
          </>
        )}

        {/* Top Badges */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase bg-black/50 backdrop-blur-md text-white border border-white/20">
            {project.categoryLabel}
          </span>
          <div className="flex items-center gap-1.5">
            {project.featured && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase bg-amber-400 text-slate-950 shadow-sm">
                ★ Featured
              </span>
            )}
            {!imageError && imageLoaded && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase bg-emerald-600/90 text-white backdrop-blur-md flex items-center gap-1 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Live Preview
              </span>
            )}
          </div>
        </div>

        {/* Bottom Host indicator */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-white">
          <span className="truncate max-w-[200px] bg-black/50 px-2 py-0.5 rounded backdrop-blur-md border border-white/10">
            {host}
          </span>
          <span className="text-[10px] bg-black/50 px-2 py-0.5 rounded backdrop-blur-md border border-white/10 opacity-90">
            {!imageError && imageLoaded ? 'Website Snapshot' : 'Live Site'}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Visit Site Button (target="_blank" rel="noopener noreferrer") */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-100 bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-200 group/btn"
          >
            <span>Visit Live Website</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

    </div>
  );
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter projects by category and search term
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'all' || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.url.toLowerCase().includes(q) ||
        project.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 // PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects &amp; <span className="text-gradient">Production Work</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            A comprehensive catalog of {projects.length}+ production applications, e-commerce storefronts, business portals, and bespoke CRM engines with live visual previews.
          </p>

          {/* Search bar & Category Tabs */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {projectCategories.map((cat) => {
                const isSelected = selectedCategory === cat.key;
                const count =
                  cat.key === 'all'
                    ? projects.length
                    : projects.filter((p) => p.category === cat.key).length;

                return (
                  <button
                    key={cat.key}
                    onClick={() => setSelectedCategory(cat.key)}
                    type="button"
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-400'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isSelected
                          ? 'bg-blue-700 text-blue-100'
                          : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Live Search Input */}
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search projects or stack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-full text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  ✕
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Results Counter if search active */}
        {searchQuery && (
          <div className="text-center text-xs font-mono text-slate-500 dark:text-slate-400 mb-6">
            Showing {filteredProjects.length} of {projects.length} projects matching &quot;{searchQuery}&quot;
          </div>
        )}

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty Search Fallback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 p-8">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              No projects found matching &quot;{searchQuery}&quot; in this category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
