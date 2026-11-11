import { Clock, ExternalLink, MapPin, Phone, Sparkles } from 'lucide-react';
import { LinkedinIcon } from '@/components/Icons';
import { personalInfo } from '@/data/personal';

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>06 // START A CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Have a Project in Mind? <span className="text-gradient">Let&apos;s Build It</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            For project discussions and collaboration, get in touch by phone or connect with me on LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6 lg:col-start-4 flex flex-col space-y-6">
            <div className="rounded-2xl p-6 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Direct Contact Channels
              </h3>

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

            <div className="rounded-2xl p-6 bg-blue-50/90 dark:bg-slate-900/90 border border-blue-200 dark:border-blue-500/30 text-xs shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-blue-950 dark:text-white font-bold text-sm">
                <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Let&apos;s Talk About Your Project</span>
              </div>
              <p className="leading-relaxed text-slate-800 dark:text-slate-200 font-normal">
                Call or message me on WhatsApp, or connect on LinkedIn. I&apos;m typically available Mon–Sat, 10:00 AM – 8:00 PM IST.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
