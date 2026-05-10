"use client";

import { useState } from "react";
import Link from "next/link";

export default function AnnouncementBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-gold-400 text-navy-950 px-4 py-3 text-sm relative">
      <div className="max-w-7xl mx-auto flex items-start gap-4 pr-8">
        <span className="font-bold shrink-0">【重要】</span>
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-3">
          <Link href="/start" className="underline hover:no-underline font-medium">
            新規アカウント登録のご案内はこちら
          </Link>
          <span className="hidden sm:inline">/</span>
          <Link href="/vr/worlds" className="underline hover:no-underline font-medium">
            新VRワールドオープンのご案内はこちら
          </Link>
        </div>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-navy-950/60 hover:text-navy-950 text-lg leading-none"
        aria-label="閉じる"
      >
        ×
      </button>
    </div>
  );
}
