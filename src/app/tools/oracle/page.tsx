import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI占い - ORACLE | Blooming Bell",
  description:
    "登録なしで今すぐ使える本格AI占いツール。タロット・星座・数秘術など多彩な占いをVR空間で体験。",
};

type Plan = {
  id: string;
  tier: string;
  tagColor: string;
  heading: string;
  price: string;
  annualNote?: string;
  tagline: string;
  features: { text: string; bold?: boolean }[];
  cta: string;
  recommended?: boolean;
};

const plans: Plan[] = [
  {
    id: "guest",
    tier: "登録なし",
    tagColor: "bg-stone-200 text-stone-700",
    heading: "まず試してみる",
    price: "0",
    tagline: "登録なしで今すぐ使える",
    features: [
      { text: "タロット1枚引き" },
      { text: "今日の星座運勢" },
      { text: "数字占い（無料版）" },
    ],
    cta: "今すぐ使う",
  },
  {
    id: "free",
    tier: "Free",
    tagColor: "bg-green-100 text-green-700",
    heading: "占い結果を保存する",
    price: "0",
    tagline: "メール登録でデータ保存",
    features: [
      { text: "登録なしの全機能 +" },
      { text: "占い結果の保存（10件まで）" },
      { text: "相性占い（シナストリー）" },
      { text: "どのデバイスからでもアクセス" },
    ],
    cta: "無料登録",
  },
  {
    id: "basic",
    tier: "Basic",
    tagColor: "bg-blue-100 text-blue-700",
    heading: "あなたを深く知る",
    price: "330",
    annualNote: "年払い 3,630円/年（約1ヶ月分お得）",
    tagline: "AIで毎日の運勢をパーソナライズ",
    features: [
      { text: "Freeの全機能 +" },
      { text: "今日の運勢エネルギー（毎日更新）", bold: true },
      { text: "詳細鑑定レポート（大幅強化）", bold: true },
      { text: "ORACLE AIチャット *", bold: true },
      { text: "全占いタイプ対応" },
      { text: "占いデータ50件 + フォルダ管理" },
      { text: "結果のPDF出力・印刷" },
    ],
    cta: "Basicを始める",
    recommended: true,
  },
  {
    id: "plus",
    tier: "Plus",
    tagColor: "bg-purple-100 text-purple-700",
    heading: "未来を知る",
    price: "550",
    annualNote: "年払い 6,050円/年（約1ヶ月分お得）",
    tagline: "成功期・恋愛期・転機を先取り",
    features: [
      { text: "Basicの全機能 +" },
      { text: "未来予測（T/P/SA、ハーフサム対応）", bold: true },
      { text: "プリセット検出（成功期・恋愛期・転機）", bold: true },
      { text: "AI鑑定レポート *", bold: true },
      { text: "相性占い（詳細版）" },
      { text: "占いデータ無制限" },
      { text: "カレンダーPDF出力" },
    ],
    cta: "Plusを始める",
  },
  {
    id: "pro",
    tier: "Pro",
    tagColor: "bg-amber-100 text-amber-700",
    heading: "プロ鑑定ツールを使う",
    price: "1,100",
    annualNote: "年払い 11,000円/年（2ヶ月分お得）",
    tagline: "本格VR占いルーム + プロツール",
    features: [
      { text: "Plusの全機能 +" },
      { text: "VR占いルームフルアクセス", bold: true },
      { text: "複合チャート（コンポジット）" },
      { text: "龍頭/龍尾図（ドラコニック）" },
      { text: "ハーモニック占い" },
      { text: "アストロマップ" },
      { text: "ステップアニメーション" },
    ],
    cta: "Proを始める",
  },
  {
    id: "max",
    tier: "Max",
    tagColor: "bg-orange-100 text-orange-700",
    heading: "全機能 + クレジット付き",
    price: "2,200",
    annualNote: "年払い 22,000円/年（2ヶ月分お得）",
    tagline: "全機能 + クレジット付きで実質お得",
    features: [
      { text: "Proの全機能 +" },
      { text: "月3クレジット付き（1,500円相当）", bold: true },
      { text: "タイムマップ" },
      { text: "イレクション（吉日選択）" },
      { text: "マルチ占い比較" },
      { text: "ダビソンチャート" },
    ],
    cta: "Maxを始める",
  },
];

const uniqueFeatures = [
  {
    tier: "Basic",
    tierColor: "bg-blue-100 text-blue-700",
    title: "今日の運勢エネルギー",
    description:
      "あなたの出生データに基づく今日のエネルギーを毎日リアルタイム計算。一般的な星座占いとは全く違う、あなただけの本物の占術。",
  },
  {
    tier: "Basic",
    tierColor: "bg-blue-100 text-blue-700",
    title: "ORACLE AIチャット",
    description:
      "あなたの占いデータを読み込んだAI占い師。一般的なAIに「占って」と聞くのとは根本的に違います。",
  },
  {
    tier: "Plus",
    tierColor: "bg-purple-100 text-purple-700",
    title: "未来予測",
    description:
      "成功期・恋愛期・転機をワンタッチで自動検出。トランジット・プログレス・ソーラーアークをハーフサムまで分析。",
  },
  {
    tier: "Plus",
    tierColor: "bg-purple-100 text-purple-700",
    title: "AI鑑定レポート",
    description:
      "今後5年間の重要アスペクトをAIが選び出し詳しく分析。プロの鑑定準備に使える超本格レポート。",
  },
];

const gettingStartedSteps = [
  {
    title: "まずそのまま使う",
    desc: "登録なしでタロット・星座占い・今日の運勢が使えます。今すぐここで体験を。",
  },
  {
    title: "メールアドレスで登録",
    desc: "30秒で完了。カード不要。相性占い・データ保存ができ、どのデバイスからでもアクセスできます。",
  },
  {
    title: "気に入ったらプランを選ぶ",
    desc: "今日の運勢エネルギーやORACLE AIチャットが欲しくなったら、月330円から。いつでもキャンセルできます。",
  },
];

const faqs = [
  {
    q: "登録しなくても使えますか？",
    a: "はい。タロット占い・星座運勢・今日の数字占いは、登録なし・無料でお使いいただけます。メールアドレスを登録すると、相性占い・データ保存が追加されます。",
  },
  {
    q: "「今日の運勢エネルギー」は一般的な星座占いと何が違いますか？",
    a: "一般的な星座占いは太陽星座だけで判断しますが、Blooming BellのORACLEは、あなたの出生データの全天体に対する今日のトランジットアスペクトを実際に計算します。一人ひとり異なる、本物の占術に基づいた結果です。",
  },
  {
    q: "スマートフォンで使えますか？",
    a: "はい。PC・スマートフォン・タブレットのすべてに完全対応しています。同じアカウントで、どのデバイスからでもご利用いただけます。",
  },
  {
    q: "途中でプランを変更・解約できますか？",
    a: "はい。プランのアップグレード・ダウングレード・解約はいつでも可能です。解約後もFreeプランとして引き続きご利用いただけます。",
  },
];

const featureTable = [
  {
    category: "占いツール",
    rows: [
      { name: "タロット占い（1枚引き）", guest: true, free: true, basic: true, plus: true, pro: true },
      { name: "星座運勢（今日・週・月）", guest: true, free: true, basic: true, plus: true, pro: true },
      { name: "相性占い（シナストリー）", guest: false, free: true, basic: true, plus: true, pro: true },
      { name: "数秘術（詳細版）", guest: false, free: false, basic: true, plus: true, pro: true },
      { name: "手相診断", guest: false, free: false, basic: true, plus: true, pro: true },
      { name: "複合チャート", guest: false, free: false, basic: false, plus: false, pro: true },
    ],
  },
  {
    category: "AI機能",
    rows: [
      { name: "ORACLE AIチャット", guest: false, free: false, basic: "cr消費", plus: "cr消費", pro: "cr消費" },
      { name: "AI鑑定レポート", guest: false, free: false, basic: false, plus: "cr消費", pro: "cr消費" },
      { name: "今日の運勢エネルギー（毎日更新）", guest: false, free: false, basic: true, plus: true, pro: true },
    ],
  },
  {
    category: "データ管理・出力",
    rows: [
      { name: "占い結果の保存", guest: false, free: "10件", basic: "50件", plus: "無制限", pro: "無制限" },
      { name: "フォルダ管理", guest: false, free: false, basic: true, plus: true, pro: true },
      { name: "PDF出力・印刷", guest: false, free: false, basic: true, plus: true, pro: true },
    ],
  },
];

function CellValue({ val }: { val: boolean | string }) {
  if (val === true) return <span className="text-green-600 text-lg">✓</span>;
  if (val === false) return <span className="text-stone-300">—</span>;
  return <span className="text-gold-400 text-xs font-bold">{val}</span>;
}

export default function OraclePage() {
  return (
    <div className="bg-stone-50">
      {/* Hero */}
      <section className="relative bg-navy-950 text-white min-h-[85vh] flex flex-col justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1e2d4a_0%,_#0b1120_70%)]" />
        <div className="relative max-w-2xl mx-auto text-center">
          <p className="text-gold-400 text-xs tracking-widest uppercase mb-4">
            2026.5.19 NEW RELEASE
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            占いが、
            <br />
            <span className="text-gold-400">もっと深く読める</span>
          </h1>
          <p className="text-white/70 text-lg mb-2">
            本格AIが開発した次世代占いツール
          </p>
          <p className="text-white/50 text-sm mb-2">タロット・星座占いは登録なしで無料</p>
          <p className="text-white/50 text-sm mb-10">
            メールアドレス登録で相性占いも無料
          </p>
          <div className="flex flex-col gap-3 max-w-xs mx-auto">
            <Link
              href="#plans"
              className="block py-4 bg-gold-400 text-navy-950 font-bold rounded-xl text-center hover:bg-gold-300 transition-colors"
            >
              2026.5.19 公開予定
            </Link>
            <Link
              href="#plans"
              className="block py-4 border border-white/40 text-white rounded-xl text-center hover:bg-white/10 transition-colors"
            >
              プランと機能を見る
            </Link>
          </div>
        </div>
      </section>

      {/* Quick-start callout */}
      <section className="bg-amber-50 border-b border-amber-200 px-4 py-6 text-center">
        <p className="text-navy-900 font-bold mb-1">今すぐORACLEを試したい方へ</p>
        <p className="text-navy-900/60 text-sm mb-4">
          現行版は本日からご利用いただけます。新バージョン（5/19リリース）へはデータを引き継ぎます。
        </p>
        <div className="flex gap-3 justify-center">
          <Link
            href="/tools/oracle/trial"
            className="px-5 py-2.5 bg-amber-500 text-white font-bold rounded-lg text-sm hover:bg-amber-600 transition-colors"
          >
            現行版に申し込む
          </Link>
          <Link
            href="/tools/oracle/trial"
            className="px-5 py-2.5 border border-amber-500 text-amber-700 font-bold rounded-lg text-sm hover:bg-amber-50 transition-colors"
          >
            現行版を使う
          </Link>
        </div>
      </section>

      {/* Feature badges */}
      <div className="bg-navy-900 px-4 py-5">
        <div className="max-w-lg mx-auto flex justify-around text-white/70 text-sm">
          {["登録なしでも使える", "スマホ対応", "広告なし"].map((f) => (
            <div key={f} className="flex items-center gap-1.5">
              <span className="text-gold-400">✓</span>
              <span>{f}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing overview */}
      <section id="plans" className="max-w-2xl mx-auto px-4 py-16">
        <h2 className="text-navy-900 font-bold text-2xl text-center mb-2">
          あなたに合った使い方で
        </h2>
        <div className="w-12 h-0.5 bg-gold-400 mx-auto mb-2" />
        <p className="text-navy-900/50 text-center mb-10">
          まずは無料で。必要な機能だけ、あとから追加。
        </p>
        <div className="space-y-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-2xl p-6 shadow-sm relative ${
                plan.recommended ? "border-2 border-gold-400" : "border border-stone-200"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-400 text-navy-950 text-xs font-bold px-4 py-1 rounded-full">
                  おすすめ
                </div>
              )}
              <div className="flex items-start justify-between mb-3">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${plan.tagColor}`}>
                  {plan.tier}
                </span>
              </div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-bold text-navy-900">{plan.price}</span>
                {plan.price !== "0" && (
                  <span className="text-navy-900/60 text-sm">円/月</span>
                )}
                {plan.price === "0" && (
                  <span className="text-navy-900/60 text-sm">円</span>
                )}
              </div>
              {plan.annualNote && (
                <p className="text-gold-400 text-xs mb-2">{plan.annualNote}</p>
              )}
              <p className="text-navy-900/60 text-sm mb-4">{plan.tagline}</p>
              <ul className="space-y-1.5 mb-5">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex gap-2 text-sm">
                    <span className="text-green-600 shrink-0">✓</span>
                    <span className={f.bold ? "font-bold text-navy-900" : "text-navy-900/70"}>
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/auth/register"
                className={`block text-center py-3 rounded-xl font-bold text-sm transition-colors ${
                  plan.recommended
                    ? "bg-gold-400 text-navy-950 hover:bg-gold-300"
                    : "border border-stone-300 text-navy-900/60 hover:bg-stone-50"
                }`}
              >
                {plan.recommended ? plan.cta : "5/19から申し込み開始"}
              </Link>
            </div>
          ))}
          <p className="text-xs text-navy-900/40 text-center leading-relaxed">
            * ORACLE AIチャット・AI鑑定レポートの利用にはクレジットが必要です（別途購入またはMaxプランに付属）
          </p>
        </div>
      </section>

      {/* Unique features */}
      <section className="bg-stone-100 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-navy-900 font-bold text-2xl text-center mb-2">
            他にはない機能
          </h2>
          <div className="w-12 h-0.5 bg-gold-400 mx-auto mb-2" />
          <p className="text-navy-900/50 text-center mb-10">ORACLEだけの体験</p>
          <div className="space-y-8">
            {uniqueFeatures.map((feat) => (
              <div key={feat.title}>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${feat.tierColor}`}>
                  {feat.tier}
                </span>
                <h3 className="text-navy-900 font-bold text-xl mt-3 mb-2">{feat.title}</h3>
                <p className="text-navy-900/70 leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting started */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-navy-900 font-bold text-2xl text-center mb-2">
            始め方はかんたん
          </h2>
          <div className="w-12 h-0.5 bg-gold-400 mx-auto mb-2" />
          <p className="text-navy-900/50 text-center mb-10">3ステップで新しいORACLEへ</p>
          <div className="space-y-8">
            {gettingStartedSteps.map((step, i) => (
              <div key={step.title} className="flex gap-4">
                <div className="shrink-0 w-14 h-14 rounded-full bg-navy-900 flex flex-col items-center justify-center text-white">
                  <span className="text-gold-400 text-xs font-bold leading-none">STEP</span>
                  <span className="text-xl font-bold leading-none">{i + 1}</span>
                </div>
                <div className="pt-2">
                  <h3 className="text-navy-900 font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-navy-900/60 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="bg-stone-100 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-navy-900 font-bold text-2xl text-center mb-2">
            全プランの機能一覧
          </h2>
          <div className="w-12 h-0.5 bg-gold-400 mx-auto mb-10" />
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-navy-900 text-white">
                    <th className="text-left px-4 py-3 font-medium">機能</th>
                    <th className="px-3 py-3 font-medium text-center">Free</th>
                    <th className="px-3 py-3 font-medium text-center bg-blue-700">Basic</th>
                    <th className="px-3 py-3 font-medium text-center bg-purple-700">Plus</th>
                    <th className="px-3 py-3 font-medium text-center bg-amber-600">Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {featureTable.map((cat) => (
                    <>
                      <tr key={cat.category} className="bg-stone-50">
                        <td
                          colSpan={5}
                          className="px-4 py-2 text-xs font-bold text-navy-900/50 uppercase tracking-wider"
                        >
                          {cat.category}
                        </td>
                      </tr>
                      {cat.rows.map((row, i) => (
                        <tr
                          key={row.name}
                          className={i % 2 === 0 ? "bg-white" : "bg-stone-50/50"}
                        >
                          <td className="px-4 py-3 text-navy-900">{row.name}</td>
                          <td className="px-3 py-3 text-center">
                            <CellValue val={row.free} />
                          </td>
                          <td className="px-3 py-3 text-center bg-blue-50">
                            <CellValue val={row.basic} />
                          </td>
                          <td className="px-3 py-3 text-center bg-purple-50">
                            <CellValue val={row.plus} />
                          </td>
                          <td className="px-3 py-3 text-center bg-amber-50">
                            <CellValue val={row.pro} />
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 py-4 border-t border-stone-200 text-xs text-navy-900/40 space-y-1">
              <p>* 上位プランには下位プランの全機能が含まれます</p>
              <p>* cr消費 ＝ クレジット消費制（Maxプランには毎月3cr付与）</p>
              <p>* 価格は全て税込</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-navy-900 font-bold text-2xl text-center mb-2">
            よくある質問
          </h2>
          <div className="w-12 h-0.5 bg-gold-400 mx-auto mb-10" />
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-5 shadow-sm">
                <p className="font-bold text-navy-900 mb-2">{faq.q}</p>
                <p className="text-navy-900/70 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy-950 py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          占いを、もっと自由に
        </h2>
        <p className="text-white/50 mb-10">登録なしでも無料で使えます</p>
        <div className="flex flex-col gap-3 max-w-xs mx-auto">
          <Link
            href="#plans"
            className="block py-4 bg-gold-400 text-navy-950 font-bold rounded-xl text-center hover:bg-gold-300 transition-colors"
          >
            2026.5.19 公開予定
          </Link>
          <Link
            href="#plans"
            className="block py-4 border border-white/40 text-white rounded-xl text-center hover:bg-white/10 transition-colors"
          >
            プランを見る
          </Link>
        </div>
      </section>
    </div>
  );
}
