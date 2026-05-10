import Link from "next/link";
import { footerNav, companyInfo } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/10 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Company info */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-gold-400 text-2xl">✦</span>
            <span className="text-white font-bold text-lg tracking-wide">
              {companyInfo.name}
            </span>
          </div>
          <p className="text-white/50 text-sm">{companyInfo.tagline}</p>

          {/* Social icons */}
          <div className="flex gap-4 mt-4">
            <Link
              href={companyInfo.socialLinks.twitter}
              className="text-white/40 hover:text-white transition-colors text-sm"
              aria-label="X (Twitter)"
            >
              𝕏
            </Link>
            <Link
              href={companyInfo.socialLinks.instagram}
              className="text-white/40 hover:text-white transition-colors text-sm"
              aria-label="Instagram"
            >
              ◎
            </Link>
            <Link
              href={companyInfo.socialLinks.youtube}
              className="text-white/40 hover:text-white transition-colors text-sm"
              aria-label="YouTube"
            >
              ▶
            </Link>
            <Link
              href={companyInfo.socialLinks.tiktok}
              className="text-white/40 hover:text-white transition-colors text-sm"
              aria-label="TikTok"
            >
              ♪
            </Link>
          </div>
        </div>

        {/* 4-column nav grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerNav.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-bold text-sm mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-white/50 hover:text-white text-sm transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Blooming Bell. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
