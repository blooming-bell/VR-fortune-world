"use client";

import { useState } from "react";
import Link from "next/link";

const tocItems = [
  { id: "what-is-astrology", label: "西洋占星術とは" },
  { id: "what-is-horoscope", label: "ホロスコープとは" },
  { id: "four-elements", label: "ホロスコープの4つの構成要素" },
  { id: "three-charts", label: "3種類のホロスコープ" },
];

const fourElements = [
  {
    title: "天体・感受点",
    description: "太陽、月、水星など10天体と、ASC・MCなどの感受点。「何が」作用するかを示します。",
  },
  {
    title: "星座（サイン）",
    description: "黄道を12等分した領域。天体が「どのような性質で」作用するかを示します。",
  },
  {
    title: "ハウス",
    description: "出生地から見た空間を12分割した領域。天体が「どの分野で」活躍するかを示します。",
  },
  {
    title: "アスペクト（座相）",
    description: "天体同士が作る角度。天体間の力の「関係性」を示します。",
  },
];

const threeCharts = [
  {
    title: "出生図（ネイタルチャート）",
    description:
      "生まれた瞬間の天体配置を示した基本チャート。その人の性格、才能、人生のテーマなど、生涯を通じて変わらない「設計図」のようなものです。",
  },
  {
    title: "進行図（プログレスチャート）",
    description:
      "出生図を基に「1日=1年」の法則で天体を進めたチャート。内面の成長や人生の転機など、ゆっくりと訪れる変化を読み取ります。",
  },
  {
    title: "経過図（トランシットチャート）",
    description:
      "現在（または特定の日時）の実際の天体配置を示したチャート。出生図と重ね合わせることで、今どのような影響を受けているかを読み取ります。",
  },
  {
    title: "三重円の活用",
    description:
      "実際の鑑定では、出生図（内円）・進行図（中円）・経過図（外円）の3つを重ね合わせた「三重円」を用いて、総合的にホロスコープを読み解きます。過去・現在・未来を立体的に把握できるため、より深い分析が可能になります。",
  },
];

export default function BasicsClient() {
  const [tocOpen, setTocOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/40 to-navy-900 pointer-events-none" />
        <div className="relative z-10 px-4 max-w-3xl mx-auto text-center">
          <p className="text-gold-400 text-xs tracking-[0.3em] mb-4 uppercase font-bold">BASICS</p>
          <h1 className="text-white font-bold text-4xl md:text-5xl mb-4">基礎知識</h1>
          <p className="text-white/60 text-base">西洋占星術の基本を学ぶ</p>
        </div>
      </section>

      <div className="bg-navy-950 px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-12">

          {/* ToC */}
          <div className="bg-navy-900 border border-white/10 rounded-xl overflow-hidden">
            <button
              onClick={() => setTocOpen((v) => !v)}
              className="w-full flex items-center justify-between px-5 py-4 text-white font-bold text-base"
            >
              <span>目次</span>
              <span
                className={`text-white/50 transition-transform duration-200 ${tocOpen ? "rotate-180" : ""}`}
              >
                ▼
              </span>
            </button>
            {tocOpen && (
              <ul className="px-5 pb-4 space-y-2 border-t border-white/10 pt-3">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-gold-400 text-sm hover:text-gold-300 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* 西洋占星術とは */}
          <section id="what-is-astrology" className="scroll-mt-20">
            <h2 className="text-white font-bold text-2xl mb-5">西洋占星術とは</h2>
            <div className="space-y-4 text-white/70 text-base leading-relaxed">
              <p>
                古代の人々は夜空の星に法則性を発見し、バビロニア時代に占星学が発祥しました。ギリシャ・ローマ時代に基本体系が整い、現代まで発展を続けています。
              </p>
              <p>
                占星術（Astrology）は「Astro（天体）」と「logy（学）」の結合で、天体と人間社会の関わりを追究する学問です。
              </p>
              <p>
                西洋占星術の基盤は「ホロスコープ」というチャートで、出生時の10個の天体の位置を示す星図です。ホロスコープには天体のほか、星座（サイン）、ハウス、アスペクト（座相）が描かれています。
              </p>
              <p>
                近年の12星座占いは太陽の星座のみを対象とするため、本来の占星術とは異なります。占星術では、太陽だけでなく月や水星、金星など10の天体すべての配置を総合的に読み解きます。
              </p>
              <p>
                占星術は天動説に基づき、地球を中心に太陽やその他の天体が周回するモデルを使用します。太陽の通り道は「黄道」と呼ばれ、この黄道上を12等分したものが12星座（サイン）です。
              </p>
            </div>
          </section>

          {/* ホロスコープとは */}
          <section id="what-is-horoscope" className="scroll-mt-20">
            <h2 className="text-white font-bold text-2xl mb-5">ホロスコープとは</h2>
            <div className="space-y-4 text-white/70 text-base leading-relaxed">
              <p>
                ホロスコープはギリシア語の「Hora（時間）」と「Skopos（見張り）」を語源とし、「時の見張り番」という意味を持ちます。特定の瞬間の天体配置を図式化したチャートです。
              </p>
              <p>
                正確なホロスコープを作成するには、
                <strong className="text-white font-bold">生年月日、出生時間、出生場所</strong>
                の3つの情報が必要です。出生時間が不明な場合は、レクティフィケーション（出生時間の割り出し・修正）という技法を用いることがあります。
              </p>
            </div>
          </section>

          {/* ホロスコープの4つの構成要素 */}
          <section id="four-elements" className="scroll-mt-20">
            <h2 className="text-white font-bold text-2xl mb-5">ホロスコープの4つの構成要素</h2>
            <div className="space-y-3">
              {fourElements.map((el) => (
                <div key={el.title} className="bg-navy-900 border border-white/10 rounded-xl p-5">
                  <h3 className="text-gold-400 font-bold text-base mb-2">{el.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{el.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3種類のホロスコープ */}
          <section id="three-charts" className="scroll-mt-20">
            <h2 className="text-white font-bold text-2xl mb-5">3種類のホロスコープ</h2>
            <div className="space-y-3">
              {threeCharts.map((chart) => (
                <div key={chart.title} className="bg-navy-900 border border-white/10 rounded-xl p-5">
                  <h3 className="text-gold-400 font-bold text-base mb-2">{chart.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{chart.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 次に学ぶ */}
          <section className="border-t border-white/10 pt-8">
            <p className="text-white/40 text-xs mb-4">次に学ぶ</p>
            <div className="space-y-3">
              <Link
                href="/basics/signs"
                className="block w-full py-3 px-5 bg-navy-800 border border-gold-400/60 text-white font-bold text-sm rounded-xl hover:bg-navy-700 transition-colors"
              >
                12星座（サイン）
              </Link>
              <Link
                href="/basics/planets"
                className="block w-full py-3 px-5 bg-transparent border border-white/20 text-white font-bold text-sm rounded-xl hover:border-white/40 transition-colors"
              >
                天体・小惑星・感受点
              </Link>
              <Link
                href="/basics/houses"
                className="block w-full py-3 px-5 bg-transparent border border-white/20 text-white font-bold text-sm rounded-xl hover:border-white/40 transition-colors"
              >
                12ハウス
              </Link>
              <Link
                href="/basics/house-systems"
                className="block w-full py-3 px-5 bg-transparent border border-white/20 text-white font-bold text-sm rounded-xl hover:border-white/40 transition-colors"
              >
                ハウスシステム
              </Link>
              <Link
                href="/basics/aspects"
                className="block w-full py-3 px-5 bg-transparent border border-white/20 text-white font-bold text-sm rounded-xl hover:border-white/40 transition-colors"
              >
                アスペクト（座相）
              </Link>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
