import Link from "next/link";
import { footerNav } from "@/lib/navigation";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/40 via-navy-950 to-navy-950 pointer-events-none" />
        <div className="relative z-10 max-w-2xl">
          <p className="text-gold-400 text-sm tracking-widest mb-4 uppercase">
            VR Fortune World
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            星の導きと
            <br />
            出会う場所
          </h1>
          <p className="text-white/60 text-lg mb-10 leading-relaxed">
            Blooming Bellは、VR空間で体験する次世代の占いワールドです。
            <br />
            AI占い師・タロット・星座占いなど、多彩なコンテンツがあなたを待っています。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/start"
              className="px-8 py-4 bg-gold-400 text-navy-950 font-bold rounded-full hover:bg-gold-300 transition-colors"
            >
              はじめての方はこちら
            </Link>
            <Link
              href="/vr/worlds"
              className="px-8 py-4 border border-white/30 text-white rounded-full hover:bg-white/10 transition-colors"
            >
              ワールドを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-white/40 text-xs tracking-widest uppercase mb-8">
          サービス一覧
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {footerNav.map((section) => (
            <div
              key={section.title}
              className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/8 transition-colors"
            >
              <h3 className="text-white font-bold text-sm mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.slice(0, 4).map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-white/50 hover:text-white text-xs transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                {section.items.length > 4 && (
                  <li className="text-white/30 text-xs">
                    他 {section.items.length - 4} 件...
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
