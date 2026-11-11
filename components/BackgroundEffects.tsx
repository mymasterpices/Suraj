'use client';

import React from 'react';

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Top electric blue ambient glow */}
      <div 
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/15 to-purple-600/10 rounded-full blur-[120px] dark:opacity-70 opacity-30"
        aria-hidden="true"
      />

      {/* Middle right violet ambient orb */}
      <div 
        className="absolute top-[35%] -right-40 w-[600px] h-[500px] bg-gradient-to-br from-purple-600/10 via-fuchsia-600/10 to-blue-600/10 rounded-full blur-[140px] dark:opacity-60 opacity-20"
        aria-hidden="true"
      />

      {/* Lower left cyan ambient glow */}
      <div 
        className="absolute top-[65%] -left-40 w-[550px] h-[450px] bg-gradient-to-tr from-cyan-600/10 via-blue-600/10 to-indigo-600/10 rounded-full blur-[130px] dark:opacity-50 opacity-20"
        aria-hidden="true"
      />

      {/* Subtle modern dot/grid pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] dark:opacity-40 opacity-30"
        aria-hidden="true"
      />
    </div>
  );
}
