import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blooming Bell - VR占いワールド",
  description:
    "VRで体験する次世代の占いワールド。AI占い・タロット・星座占いなど多彩な占いコンテンツをお楽しみください。",
};

const stats = [
  { label: "ユーザー数", value: "1,200+" },
  { label: "セッション数", value: "8,500+" },
  { label: "占い師数", value: "30+" },
  { label: "稼働年数", value: "1+" },
];

const threeCards = [
  {
    icon: "◎",
    title: "VRで体験する",
    desc: "VRヘッドセットを装着して、没入感のある占いの世界へ。まるでその場にいるような臨場感で鑑定を受けられます。",
    href: "/vr/worlds",
    cta: "VR体験を見る",
  },
  {
    icon: "✦",
    title: "占ってもらう",
    desc: "経験豊富な占い師による本格的なVR鑑定。タロット・星座・手相など多彩な占術からお選びください。",
    href: "/fortune/tellers",
    cta: "占い師を探す",
  },
  {
    icon: "◈",
    title: "ツールを使う",
    desc: "AI占師「ORACLE」を使って、いつでも手軽に占いを体験。毎日の運勢から深層心理まで分析します。",
    href: "/tools/oracle",
    cta: "ツールを使う",
  },
];

const roadmapSteps = [
  {
    num: "01",
    title: "アカウント作成",
    desc: "Blooming Bellのアカウントを無料で作成します。基本機能はすべて無料でご利用いただけます。",
  },
  {
    num: "02",
    title: "VRアプリを入手",
    desc: "お使いのVRヘッドセットに対応したアプリをインストールします。VRChatなどの主要プラットフォームに対応。",
  },
  {
    num: "03",
    title: "ワールドに入場",
    desc: "Blooming BellのVRワールドに入場します。美しい宇宙空間のデザインの中で占いの旅が始まります。",
  },
  {
    num: "04",
    title: "鑑定・体験を楽しむ",
    desc: "占い師の鑑定を受けたり、AI占いツールを使ったり、自分のペースでVR占いを楽しんでください。",
  },
];

const freeContent = [
  {
    icon: "📄",
    title: "VR占い入門ガイド",
    desc: "VR占いを始めるための完全ガイドブック。必要な機材から使い方まで、初心者にもわかりやすく解説します。",
    href: "/resources/vr-guide",
  },
  {
    icon: "⭐",
    title: "今月の星座別運勢レポート",
    desc: "月次の星座別運勢をまとめた無料レポート。全12星座の運勢傾向をご覧いただけます。",
    href: "/resources/horoscope-report",
  },
];

const news = [
  {
    date: "2026-05-01",
    tag: "お知らせ",
    title: "Blooming Bell VRワールドグランドオープンのお知らせ",
    href: "/news/grand-open",
  },
  {
    date: "2026-04-20",
    tag: "サービス",
    title: "AI占師「ORACLE」新機能「未来予測」リリース",
    href: "/news/oracle-update",
  },
  {
    date: "2026-04-10",
    tag: "イベント",
    title: "ゴールデンウィーク特別VRセッション開催のご案内",
    href: "/news/gw-session",
  },
  {
    date: "2026-03-25",
    tag: "お知らせ",
    title: "新プラン「Pro」「Max」の提供開始について",
    href: "/news/new-plans",
  },
  {
    date: "2026-03-01",
    tag: "サービス",
    title: "Blooming Bell β版サービス開始のお知らせ",
    href: "/news/beta-launch",
  },
];

const sessions = [
  {
    tags: ["Lv.入門", "VRルーム", "ライブ配信"],
    title: "タロット入門VR体験セッション",
    desc: "初めての方向けの基本タロット体験。カードの意味から実際の鑑定まで丁寧にご案内します。",
    nextDate: "2026-05-15",
    price: "3,300円〜",
    host: "月詠サクラ",
    href: "/sessions/tarot-intro",
  },
  {
    tags: ["Lv.1", "VRルーム", "ライブ配信"],
    title: "西洋占星術・ホロスコープ鑑定",
    desc: "あなたの生まれた瞬間の星の配置から、人生のテーマや才能を読み解きます。",
    nextDate: "2026-05-20",
    price: "5,500円〜",
    host: "星乃アオイ",
    href: "/sessions/horoscope",
  },
  {
    tags: ["Lv.入門", "バーチャル", "AI鑑定"],
    title: "AI占師ORACLEによる数秘術セッション",
    desc: "生年月日から導き出される数字があなたの本質を明かします。AIが即座に深層を分析。",
    nextDate: "随時",
    price: "無料〜",
    host: "ORACLE AI",
    href: "/tools/oracle",
  },
];

const reasons = [
  {
    title: "VR専用占いプラットフォーム",
    desc: "VR空間に特化した占い体験を提供。没入感のある環境で、普段とは違う深い鑑定を受けることができます。",
  },
  {
    title: "AIと人間の占い師が共存",
    desc: "AI占師「ORACLE」と人間の占い師が連携。あなたのニーズに合わせた最適な鑑定スタイルを選べます。",
  },
  {
    title: "多彩な占術に対応",
    desc: "タロット・西洋占星術・数秘術・手相など、多彩な占術をVR空間でお楽しみいただけます。",
  },
  {
    title: "安心のサポート体制",
    desc: "初めてVR占いを体験する方にも丁寧なサポートを提供。充実したガイドとFAQをご用意しています。",
  },
];

const testimonials = [
  {
    quote:
      "初めてVRで占いを受けましたが、まるでその場にいるような臨場感で、普通の対面鑑定とは違う特別な体験でした。",
    name: "30代女性",
    detail: "タロット鑑定 利用",
  },
  {
    quote:
      "AI占いと人間の占い師の両方を試しましたが、それぞれの良さがあって、毎回楽しんでいます。定期的に利用しています。",
    name: "40代女性",
    detail: "定期利用ユーザー",
  },
  {
    quote:
      "地方在住なので、VRで遠方の占い師に鑑定してもらえるのがとても助かります。移動の心配がなく、自宅でリラックスして受けられます。",
    name: "50代女性",
    detail: "VRセッション利用",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[85vh] text-center px-4 overflow-hidden bg-navy-950">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/50 via-navy-950/80 to-navy-950 pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-gold-400 text-xs tracking-[0.3em] mb-6 uppercase font-bold">
            SINCE 2025
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            VRで占いと、
            <br />
            深く出会う。
          </h1>
          <p className="text-white/60 text-base md:text-lg mb-8 leading-relaxed">
            Blooming Bellは、VR空間で体験する次世代の占いワールドです。
            <br />
            没入感あふれる空間で、あなただけの特別な鑑定体験をお届けします。
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {["タロット", "星座", "数秘術", "手相", "AI占い", "VR体験"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 border border-white/20 rounded-full text-white/60 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/vr/worlds"
              className="px-8 py-3.5 bg-gold-400 text-navy-950 font-bold rounded-lg hover:bg-gold-300 transition-colors text-sm"
            >
              VR体験を探す
            </Link>
            <Link
              href="/about"
              className="px-8 py-3.5 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors text-sm"
            >
              Blooming Bellについて
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-navy-900 border-y border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-white font-bold text-2xl md:text-3xl">{s.value}</p>
              <p className="text-white/40 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3 cards: Blooming Bellでできること */}
      <section className="bg-navy-950 px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-gold-400 text-xs tracking-widest text-center mb-3 uppercase">
            WHAT YOU CAN DO
          </p>
          <h2 className="text-white font-bold text-2xl md:text-3xl text-center mb-2">
            Blooming Bellでできること
          </h2>
          <div className="w-12 h-0.5 bg-gold-400 mx-auto mb-12" />
          <div className="grid md:grid-cols-3 gap-6">
            {threeCards.map((card) => (
              <div
                key={card.title}
                className="bg-navy-900 border border-white/10 rounded-xl p-8 flex flex-col"
              >
                <p className="text-gold-400 text-3xl mb-5">{card.icon}</p>
                <h3 className="text-white font-bold text-lg mb-3">{card.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed flex-1 mb-6">{card.desc}</p>
                <Link
                  href={card.href}
                  className="text-gold-400 text-sm font-bold hover:text-gold-300 transition-colors"
                >
                  {card.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="bg-navy-900 px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold-400 text-xs tracking-widest text-center mb-3 uppercase">
            ROADMAP
          </p>
          <h2 className="text-white font-bold text-2xl md:text-3xl text-center mb-2">
            VR体験のロードマップ
          </h2>
          <div className="w-12 h-0.5 bg-gold-400 mx-auto mb-12" />
          <div className="grid md:grid-cols-2 gap-8">
            {roadmapSteps.map((step) => (
              <div key={step.num} className="flex gap-5">
                <p className="text-gold-400 font-bold text-3xl leading-none shrink-0">{step.num}</p>
                <div>
                  <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/start"
              className="inline-block px-8 py-3.5 border border-gold-400 text-gold-400 font-bold rounded-lg hover:bg-gold-400 hover:text-navy-950 transition-colors text-sm"
            >
              はじめての方へ →
            </Link>
          </div>
        </div>
      </section>

      {/* Free content */}
      <section className="bg-navy-950 px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold-400 text-xs tracking-widest text-center mb-3 uppercase">
            FREE CONTENT
          </p>
          <h2 className="text-white font-bold text-2xl md:text-3xl text-center mb-2">無料コンテンツ</h2>
          <div className="w-12 h-0.5 bg-gold-400 mx-auto mb-12" />
          <div className="grid md:grid-cols-2 gap-6">
            {freeContent.map((item) => (
              <div
                key={item.title}
                className="bg-navy-900 border border-white/10 rounded-xl p-7 flex gap-5"
              >
                <p className="text-3xl shrink-0">{item.icon}</p>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">{item.desc}</p>
                  <Link
                    href={item.href}
                    className="text-gold-400 text-sm font-bold hover:text-gold-300 transition-colors"
                  >
                    無料でダウンロード →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="bg-navy-900 px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold-400 text-xs tracking-widest mb-3 uppercase">NEWS</p>
          <h2 className="text-white font-bold text-2xl md:text-3xl mb-2">お知らせ</h2>
          <div className="w-12 h-0.5 bg-gold-400 mb-10" />
          <ul className="divide-y divide-white/10">
            {news.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 py-4 hover:opacity-80 transition-opacity"
                >
                  <time className="text-white/40 text-xs shrink-0">{item.date}</time>
                  <span className="shrink-0 px-2 py-0.5 bg-gold-400/20 text-gold-400 text-xs rounded font-bold">
                    {item.tag}
                  </span>
                  <span className="text-white text-sm">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link
              href="/news"
              className="text-gold-400 text-sm font-bold hover:text-gold-300 transition-colors"
            >
              すべてのお知らせを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* Sessions */}
      <section className="bg-navy-950 px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold-400 text-xs tracking-widest mb-3 uppercase">SESSIONS</p>
          <h2 className="text-white font-bold text-2xl md:text-3xl mb-2">募集中のVRセッション</h2>
          <div className="w-12 h-0.5 bg-gold-400 mb-10" />
          <div className="space-y-4">
            {sessions.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block bg-navy-900 border border-white/10 rounded-xl overflow-hidden hover:border-gold-400/30 transition-colors"
              >
                <div className="h-40 bg-gradient-to-br from-indigo-900/60 via-navy-800 to-navy-900 flex items-center justify-center">
                  <span className="text-white/20 text-4xl">✦</span>
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-0.5 rounded text-xs font-bold ${
                          tag.startsWith("Lv.")
                            ? "bg-indigo-900 text-indigo-200"
                            : "border border-white/20 text-white/60"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-white font-bold text-base mb-1">{s.title}</h3>
                  <p className="text-white/50 text-sm mb-3 line-clamp-2">{s.desc}</p>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-white/40 text-xs">次回: {s.nextDate}</p>
                      <p className="text-white/40 text-xs">ホスト: {s.host}</p>
                    </div>
                    <p className="text-white font-bold text-base">{s.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/sessions"
              className="inline-block w-full sm:w-auto px-10 py-4 bg-navy-800 border border-white/10 text-white font-bold rounded-lg hover:bg-navy-700 transition-colors text-sm"
            >
              すべてのセッションを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Blooming Bell */}
      <section className="bg-navy-900 px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-white font-bold text-2xl md:text-3xl text-center mb-2">
            Blooming Bellが選ばれる理由
          </h2>
          <div className="w-12 h-0.5 bg-gold-400 mx-auto mb-4" />
          <p className="text-white/50 text-sm text-center mb-12">
            2025年のサービス開始以来、多くのユーザーに選ばれ続けてきた実績があります
          </p>
          <div className="space-y-8">
            {reasons.map((r) => (
              <div key={r.title} className="flex gap-5">
                <div className="w-8 h-8 rounded-full bg-gold-400/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-gold-400 text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-2">{r.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-navy-950 px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-white font-bold text-2xl md:text-3xl text-center mb-2">
            ユーザーの声
          </h2>
          <div className="w-12 h-0.5 bg-gold-400 mx-auto mb-4" />
          <p className="text-white/50 text-sm text-center mb-12">
            実際にご利用いただいた方の感想をご紹介します
          </p>
          <div className="space-y-5">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-navy-900 border border-white/10 rounded-xl p-7">
                <p className="text-gold-400 text-xl font-bold mb-4">&ldquo;</p>
                <p className="text-white/80 text-sm leading-relaxed mb-5">{t.quote}</p>
                <hr className="border-white/10 mb-4" />
                <p className="text-white font-bold text-sm">{t.name}</p>
                <p className="text-white/40 text-xs">{t.detail}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/reviews"
              className="text-gold-400 text-sm font-bold hover:text-gold-300 transition-colors"
            >
              もっと見る →
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-navy-900 px-4 py-20 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-14 h-14 rounded-full bg-gold-400/20 flex items-center justify-center mx-auto mb-6">
            <span className="text-gold-400 text-2xl">✉</span>
          </div>
          <h2 className="text-white font-bold text-2xl mb-4">メールマガジン</h2>
          <p className="text-white/50 text-sm leading-relaxed mb-8">
            新しいVRセッション・イベントの最新情報や、
            <br />
            占いに関するコラムをお届けします。
            <br />
            登録は無料です。
          </p>
          <Link
            href="/auth/register"
            className="inline-block w-full max-w-xs py-4 bg-navy-950 border border-gold-400 text-gold-400 font-bold rounded-lg hover:bg-gold-400 hover:text-navy-950 transition-colors text-sm"
          >
            無料で登録する
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-navy-800 px-4 py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 to-navy-800/80 pointer-events-none" />
        <div className="relative z-10 max-w-lg mx-auto">
          <h2 className="text-white font-bold text-2xl md:text-3xl mb-4 leading-snug">
            VRの世界へ、
            <br />
            一歩を踏み出しましょう
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mb-10">
            まずは気になるVRセッションを覗いてみてください。
            <br />
            あなたに合った占い体験がきっと見つかります。
          </p>
          <div className="flex flex-col gap-3 max-w-xs mx-auto">
            <Link
              href="/sessions"
              className="block py-4 bg-gold-400 text-navy-950 font-bold rounded-lg hover:bg-gold-300 transition-colors text-sm"
            >
              VR体験を探す
            </Link>
            <Link
              href="/faq"
              className="block py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors text-sm"
            >
              よくある質問
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
