import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "星座の分類 | 基礎知識 | Blooming Bell",
  description:
    "西洋占星術の星座（サイン）の分類を解説。三区分（活動宮・不動宮・柔軟宮）と四元素（火・地・風・水）の意味と各星座の対応を紹介します。",
};

const modalities = [
  {
    name: "活動宮",
    english: "Cardinal",
    keyword: "開始・行動・イニシアティブ",
    signs: ["牡羊座", "蟹座", "天秤座", "山羊座"],
    description:
      "各季節の始まりに対応する星座群です。新しいことを始め、変化を起こす力を持っています。積極的で主導的、エネルギッシュに物事を動かす性質があります。",
  },
  {
    name: "不動宮",
    english: "Fixed",
    keyword: "持続・安定・集中",
    signs: ["牡牛座", "獅子座", "蠍座", "水瓶座"],
    description:
      "各季節の中盤に対応する星座群です。物事を持続させ、確立された状態を維持する力を持っています。粘り強く、一度決めたことを最後までやり遂げる意志の強さがあります。",
  },
  {
    name: "柔軟宮",
    english: "Mutable",
    keyword: "適応・変化・柔軟性",
    signs: ["双子座", "乙女座", "射手座", "魚座"],
    description:
      "各季節の終わりに対応する星座群です。変化に適応し、次の段階へと移行する力を持っています。柔軟で順応性が高く、さまざまな状況に対応できる性質があります。",
  },
];

const elements = [
  {
    name: "火",
    english: "Fire",
    keyword: "情熱・直感・行動力",
    signs: ["牡羊座", "獅子座", "射手座"],
    description:
      "エネルギーと情熱の元素です。直感的で行動的、自己表現への強い欲求を持っています。インスピレーションにあふれ、周囲を鼓舞する力があります。感情的な温かさと創造性を持つ一方、衝動的になりやすい面もあります。",
    color: "text-orange-400",
    borderColor: "border-orange-400/30",
    bgColor: "bg-orange-400/5",
  },
  {
    name: "地",
    english: "Earth",
    keyword: "実用性・安定・物質",
    signs: ["牡牛座", "乙女座", "山羊座"],
    description:
      "現実と物質の元素です。実践的で着実、具体的な結果を重視します。五感を通じて世界を把握し、堅実に物事を積み上げていく力があります。安定と安全を求め、信頼性の高い行動をとります。",
    color: "text-green-400",
    borderColor: "border-green-400/30",
    bgColor: "bg-green-400/5",
  },
  {
    name: "風",
    english: "Air",
    keyword: "知性・コミュニケーション・社交",
    signs: ["双子座", "天秤座", "水瓶座"],
    description:
      "思考と知性の元素です。情報の収集・処理・共有に優れ、コミュニケーション能力が高い性質を持ちます。客観的で分析的、アイデアの世界を愛します。社交的で人との繋がりを重視します。",
    color: "text-blue-400",
    borderColor: "border-blue-400/30",
    bgColor: "bg-blue-400/5",
  },
  {
    name: "水",
    english: "Water",
    keyword: "感情・直感・共感",
    signs: ["蟹座", "蠍座", "魚座"],
    description:
      "感情と無意識の元素です。深い感受性と共感力を持ち、目に見えない世界との繋がりを感じ取ります。直感的で感情的な深みがあり、他者の心を読む力に優れています。神秘的なものに引き寄せられる傾向があります。",
    color: "text-cyan-400",
    borderColor: "border-cyan-400/30",
    bgColor: "bg-cyan-400/5",
  },
];

export default function SignsClassificationPage() {
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
            <h2 className="text-white font-bold text-2xl mb-4">星座の分類</h2>
            <p className="text-white/70 text-base leading-relaxed">
              12星座は「三区分」と「四元素」という2つの視点で分類されます。この組み合わせによって、各星座の性質をより深く理解することができます。同じ三区分・同じ四元素を持つ星座同士は、似たような性質の傾向があります。
            </p>
          </div>

          {/* 三区分 */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">三区分（モダリティ）</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              星座を「季節のどの時期に対応するか」で3つに分類したものです。各グループには4つの星座が含まれます。
            </p>
            <div className="space-y-4">
              {modalities.map((m) => (
                <div key={m.name} className="bg-navy-900 border border-white/10 rounded-2xl p-6">
                  <div className="flex items-baseline gap-3 mb-1">
                    <h4 className="text-white font-bold text-lg">{m.name}</h4>
                    <span className="text-gold-400 font-bold text-sm">{m.english}</span>
                  </div>
                  <p className="text-white/40 text-xs italic mb-3">{m.keyword}</p>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">{m.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {m.signs.map((sign) => (
                      <span
                        key={sign}
                        className="border border-white/20 text-white/60 text-xs rounded-full px-3 py-1"
                      >
                        {sign}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 四元素 */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">四元素（エレメント）</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              古代から伝わる「火・地・風・水」の4つの元素で星座を分類したものです。各グループには3つの星座が含まれます。
            </p>
            <div className="space-y-4">
              {elements.map((el) => (
                <div
                  key={el.name}
                  className={`bg-navy-900 border ${el.borderColor} rounded-2xl p-6`}
                >
                  <div className="flex items-baseline gap-3 mb-1">
                    <h4 className={`${el.color} font-bold text-lg`}>{el.name}（{el.english}）</h4>
                  </div>
                  <p className="text-white/40 text-xs italic mb-3">{el.keyword}</p>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">{el.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {el.signs.map((sign) => (
                      <span
                        key={sign}
                        className={`border ${el.borderColor} text-white/60 text-xs rounded-full px-3 py-1`}
                      >
                        {sign}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom navigation */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <Link
              href="/basics/signs"
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              ← 12星座（サイン）
            </Link>
            <Link
              href="/basics/planets"
              className="px-5 py-3 bg-navy-800 border border-gold-400/60 text-white font-bold text-sm rounded-xl hover:bg-navy-700 transition-colors"
            >
              天体・感受点 →
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
