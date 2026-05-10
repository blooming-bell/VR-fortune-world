"use client";

import Link from "next/link";

export default function FloatingCta() {
  return (
    <div className="fixed bottom-6 right-4 left-4 md:left-auto z-40">
      <Link
        href="/start"
        className="flex items-center justify-center gap-2 px-6 py-4 bg-navy-800 border border-gold-400/60 text-white font-bold text-sm rounded-full shadow-2xl hover:bg-navy-700 transition-colors md:w-auto"
      >
        <span className="text-gold-400">⚠</span>
        はじめての方はこちら
      </Link>
    </div>
  );
}
