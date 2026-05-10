"use client";

import { useState } from "react";
import Link from "next/link";
import { headerNav } from "@/lib/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-navy-950/95 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-gold-400 text-2xl">✦</span>
          <span className="text-white font-bold text-lg tracking-wide">
            Blooming Bell
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {headerNav.map((section) => (
            <div
              key={section.title}
              className="relative"
              onMouseEnter={() => setActiveSection(section.title)}
              onMouseLeave={() => setActiveSection(null)}
            >
              <button className="text-white/70 hover:text-white text-sm transition-colors py-2">
                {section.title}
              </button>

              {activeSection === section.title && (
                <div className="absolute top-full left-0 mt-1 bg-navy-900 border border-white/10 rounded-lg shadow-xl py-2 min-w-44">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="/start"
            className="ml-4 px-4 py-2 bg-gold-400 text-navy-950 text-sm font-bold rounded-full hover:bg-gold-300 transition-colors"
          >
            はじめる
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="メニュー"
        >
          <span className="block w-5 h-0.5 bg-white mb-1.5 transition-all" />
          <span className="block w-5 h-0.5 bg-white mb-1.5 transition-all" />
          <span className="block w-5 h-0.5 bg-white transition-all" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-950 border-t border-white/10 px-4 pb-6">
          {headerNav.map((section) => (
            <div key={section.title} className="pt-4">
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">
                {section.title}
              </p>
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-white/70 hover:text-white text-sm transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
          <Link
            href="/start"
            className="mt-6 block text-center px-4 py-3 bg-gold-400 text-navy-950 text-sm font-bold rounded-full hover:bg-gold-300 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            はじめる
          </Link>
        </div>
      )}
    </header>
  );
}
