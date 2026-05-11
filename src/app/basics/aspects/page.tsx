import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "アスペクト（座相） | 基礎知識 | Blooming Bell",
  description:
    "西洋占星術のアスペクト（座相）を解説。コンジャンクション・オポジション・スクエアなどのメジャーアスペクトから複合アスペクトまで詳しく紹介します。",
};

const majorAspects = [
  {
    degree: "0度",
    name: "コンジャンクション",
    english: "Conjunction",
    symbol: "合",
    type: "ハード・アスペクト",
    orb: "+/-6〜8度",
    description:
      "二つの天体が同じ位置に重なるアスペクトです。互いの性質を強調し合い、新しい力を生み出します。関わる天体の性質によって吉凶が変化するため、ハード・アスペクトに分類されますが、最も強力な影響力を持つアスペクトです。融合と集中のエネルギーを表します。",
  },
  {
    degree: "180度",
    name: "オポジション",
    english: "Opposition",
    symbol: "衝",
    type: "ハード・アスペクト",
    orb: "+/-6〜8度",
    description:
      "二つの天体が正反対の位置に向かい合うアスペクトです。対立や緊張、葛藤を生みますが、同時に物事を客観的に見る視点をもたらします。二つの相反する要素の間でバランスを取ることが求められ、その統合が成長の鍵となります。",
  },
  {
    degree: "90度",
    name: "スクエア",
    english: "Square",
    symbol: "矩",
    type: "ハード・アスペクト",
    orb: "+/-4〜5度",
    description:
      "二つの天体が直角の位置関係にあるアスペクトです。困難や障害、摩擦をもたらしますが、それを克服することで大きな成長が得られます。人生の転機や試練を示すことが多く、行動へと駆り立てる強い動機づけとなります。",
  },
  {
    degree: "120度",
    name: "トライン",
    english: "Trine",
    symbol: "三合",
    type: "ソフト・アスペクト",
    orb: "+/-4〜5度",
    description:
      "二つの天体が120度の角度をなすアスペクトで、最も調和的な関係です。幸運のアスペクトとも呼ばれ、天体同士が自然に協力し合い、順調な発展をもたらします。同じ四元素（エレメント）のサイン間で形成されることが多く、才能や恵まれた資質を示します。",
  },
  {
    degree: "60度",
    name: "セクスタイル",
    english: "Sextile",
    symbol: "六合",
    type: "ソフト・アスペクト",
    orb: "+/-3〜4度",
    description:
      "二つの天体が60度の角度をなすアスペクトです。トラインほど強力ではありませんが、才能や成長の機会を示し、問題解決の方向性を指し示します。意識的な努力によって活かすことができるチャンスのアスペクトで、建設的な発展を促します。",
  },
];

const minorAspects2 = [
  {
    degree: "150度",
    name: "クインカンクス（インコンジャンクト）",
    english: "Quincunx",
    type: "ハード・アスペクト",
    orb: "+/-2〜3度",
    description:
      "共通点のないサイン同士を結ぶアスペクトで、調整や適応を求められます。健康面への影響が指摘されることもあり、意識的な修正が必要な関係を示します。",
  },
  {
    degree: "45度",
    name: "セミスクエア",
    english: "Semisquare",
    type: "ハード・アスペクト",
    orb: "+/-2〜3度",
    description:
      "スクエアの半分の角度で、軽度の摩擦やいらだちを生みます。日常的な小さな困難や調整の必要性を示しますが、意識すれば克服しやすいアスペクトです。",
  },
  {
    degree: "135度",
    name: "セスキコードレート（セスキスクエア）",
    english: "Sesquiquadrate",
    type: "ハード・アスペクト",
    orb: "+/-2〜3度",
    description:
      "スクエアとセミスクエアを合わせた角度で、持続的な緊張や不満を表します。外的な状況への対応を迫られることが多く、忍耐と工夫が求められます。",
  },
  {
    degree: "30度",
    name: "セミ・セクスタイル",
    english: "Semisextile",
    type: "ソフト・アスペクト",
    orb: "+/-1〜2度",
    description:
      "隣り合うサイン同士を結ぶアスペクトで、穏やかな協力関係を示します。影響は微細ですが、異なる性質を少しずつ統合していく作用があります。",
  },
];

const minorAspects3 = [
  {
    degree: "72度",
    name: "クインタイル",
    english: "Quintile",
    type: "ソフト",
    orb: "+/-1以内度",
    description:
      "円を5等分した角度で、創造性や特殊な才能を示すアスペクトです。芸術的な能力や独自の表現力と関連し、個性的な資質を表します。",
  },
  {
    degree: "144度",
    name: "バイ・クインタイル",
    english: "Biquintile",
    type: "ソフト",
    orb: "+/-1以内度",
    description:
      "クインタイルの2倍の角度で、同様に創造的な才能を示します。芸術・技術分野での卓越した能力や、独創的なビジョンとの関連が指摘されています。",
  },
  {
    degree: "165度",
    name: "クインデチレ",
    english: "Quindecile",
    type: "特殊",
    orb: "+/-2〜3度",
    description:
      "強い執着や集中力を示すアスペクトです。特定の分野への強烈な関心やこだわりを表し、それが才能として発揮されることもあります。",
  },
];

const declinationAspects = [
  {
    name: "パラレル",
    english: "Parallel",
    description:
      "二つの天体が同一の赤緯（天の赤道からの角距離）にある状態です。黄経上のアスペクトとは異なる次元の関係で、基本的にコンジャンクションと同様の作用をもたらします。",
  },
  {
    name: "コントラ・パラレル",
    english: "Contra-Parallel",
    description:
      "二つの天体が赤緯において正反対の位置にある状態です。オポジションと同様の作用をもたらし、対立と補完の関係を示します。",
  },
];

const complexAspects = [
  {
    name: "グランド・トライン",
    description:
      "3つの天体が互いに120度（トライン）で結ばれ、正三角形を形成するパターンです。大きな幸運や才能を示しますが、恵まれた環境に甘えて努力を怠る傾向もあります。同じ四元素のサインで形成されることが多く、その元素の性質が強調されます。",
  },
  {
    name: "カイト",
    description:
      "グランド・トラインの一角にオポジションが加わった凧型のパターンです。グランド・トラインの調和に適度な緊張感が加わることで、才能を具体的な行動に結びつける力が生まれます。",
  },
  {
    name: "グランド・クロス",
    description:
      "4つの天体が互いにスクエアとオポジションで結ばれ、十字形を形成するパターンです。波乱や困難が多い配置ですが、それらを乗り越えることで大きな成長と達成が得られます。",
  },
  {
    name: "Tスクエア",
    description:
      "2つの天体のオポジションに、第3の天体がスクエアで加わるT字型のパターンです。闘争的なエネルギーが生まれ、頂点の天体に集中的な力が注がれます。社会的成功への強い動機づけとなることがあります。",
  },
  {
    name: "ミスティック・レクタングル",
    description:
      "2組のオポジション、2つのトライン、2つのセクスタイルで構成される長方形のパターンです。内面的な創造性が豊かで、芸術やクリエイティブな分野で力を発揮します。",
  },
  {
    name: "ヨード（神の指）",
    description:
      "2つの天体のセクスタイルから、第3の天体にクインカンクスが伸びる二等辺三角形のパターンです。宿命的な困難や使命を暗示しますが、それを受け入れることで大きな才能が開花する可能性を秘めています。",
  },
  {
    name: "調停",
    description:
      "オポジションの2天体に対して、第3の天体がそれぞれトラインとセクスタイルを形成するパターンです。オポジションの緊張を和らげ、建設的な解決策を見出す力をもたらします。",
  },
];

export default function AspectsPage() {
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
        <div className="max-w-2xl mx-auto space-y-8">

          {/* Section intro */}
          <div>
            <h2 className="text-white font-bold text-2xl mb-4">アスペクト（座相）</h2>
            <p className="text-white/70 text-base leading-relaxed">
              「アスペクト」とは、ホロスコープ上で天体間に成立する特定の角度関係のことで、「座相」とも呼ばれます。各アスペクトには固有の意味があり、天体がアスペクトを形成することでその天体の特質が引き出され、具体的な事象として現れます。アスペクトの解読は、ホロスコープリーディングにおいて最も重要な要素の一つです。
            </p>
          </div>

          {/* Orb note */}
          <div className="bg-navy-900 border border-white/10 rounded-xl p-5 space-y-3">
            <h3 className="text-gold-400 font-bold text-base">オーブ（許容範囲）について</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              アスペクトの影響は、正確な角度のときだけでなく、「オーブ」と呼ばれる許容範囲内であれば作用します。オーブが狭い（正確な角度に近い）ほど影響は強力になり、広くなるほど影響は弱まります。オーブの許容範囲はアスペクトの種類によって異なり、メジャー・アスペクトほど広いオーブが認められます。
            </p>
            <div className="bg-navy-950/50 rounded-lg p-4">
              <h4 className="text-white font-bold text-xs mb-2">アプライとセパレート</h4>
              <p className="text-white/60 text-xs leading-relaxed">
                アスペクトが正確な角度に向かって近づいている状態を「アプライ（接近）」、正確な角度から離れていく状態を「セパレート（離散）」と呼びます。一般にアプライ中のアスペクトはセパレート中のものより影響が強く、これから起こる出来事を暗示します。セパレートは過去に経験した事象や、徐々に薄れていく影響を示します。
              </p>
            </div>
          </div>

          {/* Major aspects */}
          <div>
            <h3 className="text-white font-bold text-xl mb-2">メジャー・アスペクト</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              最も基本的で影響力の強い5つのアスペクトです。ホロスコープの解読において最優先で確認されます。ハード・アスペクトは緊張や葛藤をもたらしますが成長の原動力となり、ソフト・アスペクトは調和や才能を示します。
            </p>
            <div className="space-y-4">
              {majorAspects.map((asp) => (
                <div key={asp.name} className="bg-navy-900 border border-white/10 rounded-2xl p-6">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-white font-bold text-xl">{asp.degree}</span>
                    <h4 className="text-white font-bold text-lg">{asp.name}</h4>
                    <span className="text-gold-400 font-bold text-sm">{asp.symbol}</span>
                  </div>
                  <div className="flex gap-4 text-xs mb-3">
                    <span>
                      <span className="text-white/50">種別:</span>{" "}
                      <span className="text-white/70">{asp.type}</span>
                    </span>
                    <span>
                      <span className="text-white/50 font-bold">オーブ:</span>{" "}
                      <span className="text-gold-400">{asp.orb}</span>
                    </span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{asp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Minor aspects 2nd type */}
          <div>
            <h3 className="text-white font-bold text-xl mb-2">マイナー・アスペクト（第二種）</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              メジャー・アスペクトに次いで重要なアスペクトです。オーブはメジャー・アスペクトより狭く設定されますが、ホロスコープの詳細な分析には欠かせません。
            </p>
            <div className="space-y-4">
              {minorAspects2.map((asp) => (
                <div key={asp.name} className="bg-navy-900 border border-white/10 rounded-2xl p-5">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-white font-bold text-base">{asp.degree}</span>
                    <h4 className="text-white font-bold text-base">{asp.name}</h4>
                  </div>
                  <div className="flex gap-4 text-xs mb-3">
                    <span className="text-white/50">種別: <span className="text-white/70">{asp.type}</span></span>
                    <span className="text-white/50 font-bold">オーブ: <span className="text-gold-400">{asp.orb}</span></span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{asp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Minor aspects 3rd type */}
          <div>
            <h3 className="text-white font-bold text-xl mb-2">マイナー・アスペクト（第三種）</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              さらに細かな角度関係を表すアスペクトです。オーブは非常に狭く、より専門的なリーディングで用いられます。
            </p>
            <div className="space-y-4">
              {minorAspects3.map((asp) => (
                <div key={asp.name} className="bg-navy-900 border border-white/10 rounded-2xl p-5">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-white font-bold text-base">{asp.degree}</span>
                    <h4 className="text-white font-bold text-base">{asp.name}</h4>
                  </div>
                  <div className="flex gap-4 text-xs mb-3">
                    <span className="text-white/50">種別: <span className="text-white/70">{asp.type}</span></span>
                    <span className="text-white/50 font-bold">オーブ: <span className="text-gold-400">{asp.orb}</span></span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{asp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Declination aspects */}
          <div>
            <h3 className="text-white font-bold text-xl mb-2">赤緯のアスペクト</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              黄経上の角度ではなく、赤緯（天の赤道からの南北方向の角距離）に基づくアスペクトです。通常のアスペクトとは異なる次元で天体間の関係を表します。
            </p>
            <div className="space-y-4">
              {declinationAspects.map((asp) => (
                <div key={asp.name} className="bg-navy-900 border border-white/10 rounded-2xl p-5">
                  <div className="flex items-baseline gap-3 mb-3">
                    <h4 className="text-gold-400 font-bold text-base">{asp.name}</h4>
                    <span className="text-white/50 text-sm">{asp.english}</span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{asp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Complex aspects */}
          <div>
            <h3 className="text-white font-bold text-xl mb-2">複合アスペクト</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              複数のアスペクトが組み合わさって形成される幾何学的なパターンです。個々のアスペクト以上に強い影響を持ち、人生のテーマや重要な資質を示すことがあります。
            </p>
            <div className="space-y-4">
              {complexAspects.map((asp) => (
                <div key={asp.name} className="bg-navy-900 border border-white/10 rounded-2xl p-5">
                  <h4 className="text-gold-400 font-bold text-base mb-3">{asp.name}</h4>
                  <p className="text-white/70 text-sm leading-relaxed">{asp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom navigation */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <Link
              href="/basics/house-systems"
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              ← ハウスシステム
            </Link>
            <Link
              href="/basics"
              className="px-5 py-3 bg-navy-800 border border-gold-400/60 text-white font-bold text-sm rounded-xl hover:bg-navy-700 transition-colors"
            >
              基礎知識トップ →
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
