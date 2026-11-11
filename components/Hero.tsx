'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Download,
  MapPin,
  Sparkles,
  Terminal,
  ExternalLink,
  Code2,
  CheckCircle2,
  Copy,
  Check,
  Bot,
  Layers,
  ShoppingBag,
  Zap,
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '@/components/Icons';
import { personalInfo } from '@/data/personal';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'agent' | 'contact'>('profile');
  const [copied, setCopied] = useState(false);

  // Mouse hover tilt & spotlight state
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = personalInfo.typingRoles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personalInfo.typingRoles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Mouse move handler for interactive spotlight and 3D card tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    // Calculate tilt relative to right column
    const centerX = rect.width * 0.75;
    const centerY = rect.height / 2;
    const rotateX = -((y - centerY) / (rect.height / 2)) * 8;
    const rotateY = ((x - centerX) / (rect.width / 2)) * 8;
    setTilt({
      rotateX: Math.max(-12, Math.min(12, rotateX)),
      rotateY: Math.max(-12, Math.min(12, rotateY)),
    });
  };

  const handleCopyCode = () => {
    const codeToCopy = JSON.stringify(
      {
        developer: personalInfo.name,
        role: personalInfo.title,
        experienceYears: 8.5,
        location: personalInfo.location,
        linkedin: personalInfo.linkedin,
        specialties: ['MEAN Stack', 'Node.js', 'TypeScript', 'Shopify Liquid & Remix', 'AI Agents'],
        phone: personalInfo.phone,
        status: 'Available for projects',
      },
      null,
      2
    );
    navigator.clipboard.writeText(codeToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setTilt({ rotateX: 0, rotateY: 0 });
      }}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden transition-all"
    >
      {/* Interactive Cursor Spotlight Glow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-60 dark:opacity-40 -z-10"
          style={{
            background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.18), transparent 70%)`,
          }}
          aria-hidden="true"
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Playful Status Pill with Hover Bounce */}
            <div className="group/pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-medium mb-6 hover:scale-105 hover:bg-blue-500/15 transition-all duration-200 cursor-default shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Lead Roles &amp; High-Impact Projects</span>
              <span className="text-[10px] font-mono opacity-70 group-hover/pill:translate-x-0.5 transition-transform">⚡</span>
            </div>

            {/* Main Heading with Waving Hand Hover Animation */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Hi, I&apos;m{' '}
              <span className="text-gradient font-black inline-block hover:scale-[1.02] transition-transform">
                {personalInfo.name}
              </span>{' '}
              <span className="inline-block origin-bottom-right hover:rotate-45 transition-transform duration-300 cursor-pointer select-none" title="Hello there!">
                👋
              </span>
            </h1>

            {/* Typewriter Role */}
            <div className="h-10 sm:h-12 flex items-center mt-3 text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-200">
              <span className="font-mono text-blue-600 dark:text-blue-400 mr-2 text-lg sm:text-2xl">I am a</span>
              <span className="text-slate-900 dark:text-white border-b-2 border-blue-500 pb-0.5 font-bold">
                {displayText}
              </span>
              <span className="animate-pulse ml-1 text-blue-500 font-normal">|</span>
            </div>

            {/* Short Tagline */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {personalInfo.headline} Specializing in robust Node.js / MEAN architectures, high-converting Shopify &amp; WordPress storefronts, and autonomous AI-driven workflows.
            </p>

            {/* Quick Interactive Meta Chips */}
            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-mono">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-400 transition-colors">
                <MapPin className="w-3.5 h-3.5 text-blue-500" />
                {personalInfo.location}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/40">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                8.5+ Years Experience
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/40">
                <Code2 className="w-3.5 h-3.5 text-indigo-500" />
                30+ Production Sites
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-1 transition-all duration-200 active:translate-y-0 group/btn"
              >
                <span>Explore 30+ Projects</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 shadow-sm hover:-translate-y-1 transition-all duration-200"
              >
                <span>Hire Me / Contact</span>
                <ArrowRight className="w-4 h-4 text-blue-500" />
              </a>

              <a
                href="/resume.pdf"
                download="Suraj-Sharma-Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-xs text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 bg-slate-100 dark:bg-slate-900/60 hover:bg-slate-200/80 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:-translate-y-0.5 transition-all"
                title="Download Suraj Sharma's Professional Resume (PDF)"
              >
                <Download className="w-4 h-4 text-indigo-500" />
                <span>Resume (PDF)</span>
              </a>
            </div>

            {/* Direct Channels with Verified LinkedIn */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 w-full flex flex-wrap items-center gap-3 text-xs font-mono">
              <span className="uppercase tracking-wider text-slate-400 font-medium mr-1">
                Connect:
              </span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all font-semibold"
                title="View LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:bg-slate-900 hover:text-white dark:hover:bg-slate-700 transition-all font-semibold"
                title="View GitHub Repositories"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <a
                href="tel:+919205532748"
                className="text-slate-700 dark:text-slate-300 hover:text-emerald-500 flex items-center gap-1.5 transition-colors"
                title="Call Directly"
              >
                +91-9205532748
              </a>
            </div>
          </div>

          {/* Right Column: 3D Interactive Tilt Terminal with Floating Badges */}
          <div className="lg:col-span-5 relative perspective-1000">
            
            {/* Floating Badge 1: Top Right */}
            <div className="hidden sm:flex absolute -top-6 -right-4 z-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-xl text-xs font-mono text-slate-800 dark:text-slate-100 animate-float-slow hover:scale-110 transition-transform cursor-pointer">
              <span className="p-1 rounded-md bg-violet-500 text-white">
                <Bot className="w-3.5 h-3.5" />
              </span>
              <span>AI Agents Focus</span>
            </div>

            {/* Floating Badge 2: Bottom Left */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 z-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-xl text-xs font-mono text-slate-800 dark:text-slate-100 hover:scale-110 transition-transform cursor-pointer">
              <span className="p-1 rounded-md bg-blue-500 text-white">
                <Zap className="w-3.5 h-3.5" />
              </span>
              <span>MEAN • Remix • Shopify</span>
            </div>

            {/* Outer Interactive 3D Container */}
            <div
              style={{
                transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
              }}
              className="relative mx-auto max-w-md lg:max-w-none group"
            >
              {/* Outer atmospheric gradient glow */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-40 blur-xl group-hover:opacity-75 transition duration-500" />

              {/* Developer Terminal Box */}
              <div className="relative rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden font-mono text-xs">
                
                {/* Window Top Bar & Interactive Tabs */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block hover:opacity-80 transition-opacity" />
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block hover:opacity-80 transition-opacity" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block hover:opacity-80 transition-opacity" />
                  </div>

                  {/* Tabs */}
                  <div className="flex items-center gap-1 text-[11px]">
                    <button
                      onClick={() => setActiveTab('profile')}
                      className={`px-2.5 py-1 rounded-md transition-colors ${
                        activeTab === 'profile'
                          ? 'bg-slate-800 text-blue-400 font-semibold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      profile.ts
                    </button>
                    <button
                      onClick={() => setActiveTab('agent')}
                      className={`px-2.5 py-1 rounded-md transition-colors ${
                        activeTab === 'agent'
                          ? 'bg-slate-800 text-violet-400 font-semibold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      ai-agent.sh
                    </button>
                    <button
                      onClick={() => setActiveTab('contact')}
                      className={`px-2.5 py-1 rounded-md transition-colors ${
                        activeTab === 'contact'
                          ? 'bg-slate-800 text-emerald-400 font-semibold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      contact.json
                    </button>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={handleCopyCode}
                    className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="Copy Profile JSON"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Tab 1: Profile View */}
                {activeTab === 'profile' && (
                  <div className="p-5 space-y-2 text-slate-300 leading-relaxed overflow-x-auto min-h-[260px] animate-in fade-in duration-200">
                    <p>
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-blue-300">developer</span> = &#123;
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">name:</span>{' '}
                      <span className="text-emerald-300">&quot;Suraj Sharma&quot;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">role:</span>{' '}
                      <span className="text-emerald-300">&quot;Sr. Full Stack Engineer&quot;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">experienceYears:</span>{' '}
                      <span className="text-amber-300">8.5</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">linkedin:</span>{' '}
                      <span className="text-cyan-300">&quot;in/suraj-sharma-076588178&quot;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">github:</span>{' '}
                      <span className="text-cyan-300">&quot;mymasterpices&quot;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">coreStack:</span> [
                    </p>
                    <p className="pl-8 text-cyan-300">
                      &quot;Node.js&quot;, &quot;Express&quot;, &quot;Angular&quot;, &quot;MongoDB&quot;,
                    </p>
                    <p className="pl-8 text-cyan-300">
                      &quot;Shopify (Remix)&quot;, &quot;WordPress&quot;, &quot;TypeScript&quot;
                    </p>
                    <p className="pl-4">],</p>
                    <p className="pl-4">
                      <span className="text-slate-400">currentFocus:</span>{' '}
                      <span className="text-fuchsia-300">&quot;AI Agents &amp; Enterprise CRM Modernization&quot;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">openToWork:</span>{' '}
                      <span className="text-emerald-400">true</span>
                    </p>
                    <p>&#125;;</p>
                  </div>
                )}

                {/* Tab 2: AI Agent Script View */}
                {activeTab === 'agent' && (
                  <div className="p-5 space-y-2 text-slate-300 leading-relaxed overflow-x-auto min-h-[260px] animate-in fade-in duration-200">
                    <p className="text-slate-500"># Autonomous CRM Agent Workflow</p>
                    <p>
                      <span className="text-violet-400">$</span> init_agent <span className="text-amber-300">--model</span>=gemini-flash
                    </p>
                    <p className="text-emerald-400">✓ Agent initialized with tool calling</p>
                    <p className="text-slate-400 mt-2">
                      &gt; Listening for new incoming client inquiries...
                    </p>
                    <p className="text-slate-400">
                      &gt; Parsing project requirements &amp; budget estimation...
                    </p>
                    <p className="text-cyan-300">
                      &gt; Generating real-time PDF quote &amp; calendar invite
                    </p>
                    <p className="text-emerald-400 mt-3 font-semibold">
                      ✓ Automation pipeline active: 0s manual delay
                    </p>
                  </div>
                )}

                {/* Tab 3: Contact JSON View */}
                {activeTab === 'contact' && (
                  <div className="p-5 space-y-2 text-slate-300 leading-relaxed overflow-x-auto min-h-[260px] animate-in fade-in duration-200">
                    <p>&#123;</p>
                    <p className="pl-4">
                      <span className="text-slate-400">&quot;phone&quot;:</span>{' '}
                      <span className="text-cyan-300">&quot;+91-9205532748&quot;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">&quot;linkedin&quot;:</span>{' '}
                      <span className="text-cyan-300">&quot;https://www.linkedin.com/in/suraj-sharma-076588178/&quot;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">&quot;location&quot;:</span>{' '}
                      <span className="text-emerald-300">&quot;New Delhi, India (UTC+5:30)&quot;</span>,
                    </p>
                    <p>&#125;</p>
                  </div>
                )}

                {/* Card Footer Bar */}
                <div className="px-5 py-2.5 bg-slate-950 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <Sparkles className="w-3.5 h-3.5" /> Ready for deployment
                  </span>
                  <a
                    href="#projects"
                    className="text-blue-400 hover:text-blue-300 hover:underline flex items-center gap-1 transition-colors"
                  >
                    <span>View Projects</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
