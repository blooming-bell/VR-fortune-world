import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "占い師・セッション | Blooming Bell",
  description:
    "VRで体験する本格占い鑑定。タロット・星座占い・数秘術など、経験豊富な占い師やAIによるVRセッションをご予約ください。",
};

type FeeRow = { label: string; price: string };

interface SubLink {
  label: string;
  href: string;
  external?: boolean;
}

interface TellerCard {
  id: string;
  name: string;
  subtitle: string;
  bio?: string;
  description: string;
  fees?: FeeRow[];
  fee?: string;
  format: string;
  ctaLabel: string;
  ctaHref: string;
  subLinks?: SubLink[];
  iconChar?: string;
}

const categories = [
  { label: "タロット鑑定", href: "#tarot" },
  { label: "ホロスコープ鑑定", href: "#horoscope" },
  { label: "Blooming Bell占いの部屋", href: "#bb-room" },
  { label: "AI鑑定 - ORACLE", href: "#oracle" },
  { label: "運勢カレンダー", href: "#calendar" },
  { label: "ORACLEツール", href: "#tool" },
];

const cards: TellerCard[] = [
  {
    id: "tarot",
    name: "月詠サクラのタロット鑑定",
    subtitle: "タロット・直感リーディング（VRルーム）",
    bio: `タロットと直感を融合させた独自のリーディングスタイルで、10年以上の鑑定経験を持つ。VR空間でのリーディングにいち早く対応し、没入感のある鑑定体験を提供することで定評がある。

VR空間の特性を活かし、カードを3Dで展開するなど、現実では体験できない演出で鑑定を行う。直感的でわかりやすい言葉で、あなたの現状と進むべき道を丁寧に読み解きます。`,
    description:
      "VR空間でカードが目の前に広がる、没入感あふれる体験をお届けします。初めてVR占いを体験する方にも丁寧にご案内します。",
    fee: "60分 5,500円（税込）",
    format: "VRルーム / オンライン（Zoom）",
    ctaLabel: "日時を選んで予約する",
    ctaHref: "/sessions/tarot-intro",
    subLinks: [{ label: "お客様の声を見る", href: "/reviews?teller=sakura" }],
    iconChar: "✦",
  },
  {
    id: "horoscope",
    name: "星乃アオイのホロスコープ鑑定",
    subtitle: "西洋占星術・ホロスコープ鑑定（VRルーム）",
    bio: `西洋占星術師。占星術を独学で学び始め、その後国際的な占星術資格を取得。現在はVR空間での鑑定を中心に、多くのクライアントの人生相談に応じている。

生まれた瞬間の天体配置から、人生のテーマや才能・課題を読み解くホロスコープ鑑定を専門とする。VR空間に星図を立体的に展開し、わかりやすく丁寧に解説します。`,
    description:
      "あなたの生まれた瞬間の星の配置から、人生のテーマや才能を読み解きます。VR空間に浮かぶ星図を一緒に眺めながら、あなただけの物語を紐解きます。",
    fees: [
      { label: "初回 45分", price: "5,500円" },
      { label: "初回 90分", price: "9,900円" },
      { label: "2回目以降 45分", price: "7,700円" },
      { label: "2回目以降 90分", price: "13,200円" },
      { label: "延長 15分", price: "2,200円" },
      { label: "延長 30分", price: "4,400円" },
    ],
    format: "VRルーム / オンライン（Zoom）",
    ctaLabel: "日時を選んで予約する",
    ctaHref: "/sessions/horoscope",
    subLinks: [{ label: "お客様の声を見る", href: "/reviews?teller=aoi" }],
    iconChar: "◎",
  },
  {
    id: "bb-room",
    name: "Blooming Bell占いの部屋",
    subtitle: "登録占い師による個別鑑定",
    description:
      "Blooming Bellに登録する信頼できる占い師が、VR空間で直接鑑定を行います。西洋占星術・タロット・数秘術・手相など、それぞれの得意分野を活かした多角的なリーディングが特徴です。事前に占い師のプロフィールを確認してからご予約いただけます。",
    fee: "占い師・メニューにより異なる",
    format: "VRルーム / オンライン（Zoom）",
    ctaLabel: "占い師を選んで予約する",
    ctaHref: "/fortune/tellers/room",
    iconChar: "◈",
  },
  {
    id: "oracle",
    name: "AI鑑定 - ORACLE",
    subtitle: "AIと占術の融合による精密鑑定",
    description:
      "Blooming Bell独自開発のAI占師「ORACLE」は、最先端のAI技術と本格的な占術の知見を融合させた新しい形の鑑定サービスです。生年月日や生まれた時間をもとに、AIが精密な分析を行い、パーソナライズされた鑑定結果をお届けします。24時間いつでも、繰り返し利用できます。",
    format: "VR / ブラウザ（24時間対応）",
    ctaLabel: "ORACLEで鑑定する ↗",
    ctaHref: "/tools/oracle",
    iconChar: "AI",
  },
  {
    id: "calendar",
    name: "あなただけの運勢カレンダー",
    subtitle: "星の巡りを可視化した1年間の運勢手帳",
    description: `あなただけの毎日の運気を厳密に計算し、1年間の運勢をカラーでわかりやすく表示しました。誰にでも同じ星の情報だけでなく、あなたにとって、いつ恋愛運や仕事運がアップするか、いつは気を付けた方がいいかが一目瞭然！

毎月の新月図とあなたの出生図を重ね、新月のあなたへの影響をお知らせする「新月カレンダー」ページも収録しています。`,
    format: "PDFダウンロード / 郵送",
    ctaLabel: "詳しく見る",
    ctaHref: "/fortune/calendar",
    iconChar: "📅",
  },
  {
    id: "tool",
    name: "ORACLEツール",
    subtitle: "占いツール・レポート",
    description:
      "VR空間でも、ブラウザでも使えるBlooming Bell独自の占いツール。タロット・星座占い・数秘術・手相など多彩な占術に対応しています。初心者から上級者まで、あなたの占いをAIがサポートします。",
    format: "VR / ブラウザ",
    ctaLabel: "ORACLEを使う ↗",
    ctaHref: "/tools/oracle",
    iconChar: "✦",
  },
];

export default function FortuneTellersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/40 to-navy-900 pointer-events-none" />
        <div className="relative z-10 px-4">
          <p className="text-gold-400 text-xs tracking-[0.3em] mb-4 uppercase font-bold">FORTUNE</p>
          <h1 className="text-white font-bold text-4xl md:text-5xl mb-4">占ってもらう</h1>
          <p className="text-white/60 text-base">プロの占い師やAIによる鑑定サービス</p>
        </div>
      </section>

      {/* Filter chips */}
      <nav className="bg-navy-950 border-b border-white/10 overflow-x-auto">
        <div className="px-4 py-5">
          <div className="max-w-4xl mx-auto flex gap-3 min-w-max">
            {categories.map((cat) => (
              <a
                key={cat.href}
                href={cat.href}
                className="px-4 py-2 border border-white/20 rounded-full text-white/70 text-sm hover:border-gold-400 hover:text-gold-400 transition-colors whitespace-nowrap"
              >
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Cards */}
      <section className="bg-navy-950 px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {cards.map((card) => (
            <div
              key={card.id}
              id={card.id}
              className="bg-navy-900 border border-white/10 rounded-2xl overflow-hidden"
            >
              <div className="p-7 md:p-10">
                <h2 className="text-white font-bold text-2xl mb-1">{card.name}</h2>
                <p className="text-gold-400 font-bold text-sm mb-6">{card.subtitle}</p>

                {/* Image placeholder */}
                <div className="w-full h-52 rounded-xl overflow-hidden bg-gradient-to-br from-indigo-900/60 via-navy-800 to-navy-900 flex items-center justify-center mb-6">
                  <span
                    className={`font-bold text-white/20 ${
                      card.iconChar === "AI" ? "text-3xl tracking-tight" : "text-5xl"
                    }`}
                  >
                    {card.iconChar}
                  </span>
                </div>

                {/* Bio */}
                {card.bio && (
                  <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line mb-5">{card.bio}</p>
                )}

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed whitespace-pre-line mb-6">
                  {card.description}
                </p>

                {/* Fee table */}
                {card.fees && (
                  <div className="mb-6">
                    <p className="text-white font-bold text-sm mb-3">料金（税込）：</p>
                    <table className="w-full text-sm">
                      <tbody className="divide-y divide-white/10">
                        {card.fees.map((row) => (
                          <tr key={row.label}>
                            <td className="py-2.5 text-white/60">{row.label}</td>
                            <td className="py-2.5 text-white font-bold text-right">{row.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Single fee */}
                {card.fee && (
                  <p className="text-sm mb-2">
                    <span className="text-white font-bold mr-3">料金:</span>
                    <span className="text-white/60">{card.fee}</span>
                  </p>
                )}

                {/* Format */}
                <p className="text-sm mb-6">
                  <span className="text-white font-bold mr-3">形式:</span>
                  <span className="text-white/60">{card.format}</span>
                </p>

                {/* CTA */}
                <Link
                  href={card.ctaHref}
                  className="block w-full py-4 bg-navy-800 text-white font-bold rounded-lg text-sm text-center hover:bg-gold-400 hover:text-navy-950 transition-colors mb-4"
                >
                  {card.ctaLabel}
                </Link>

                {/* Sub links */}
                {card.subLinks?.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-center text-gold-400/70 text-sm hover:text-gold-400 underline transition-colors mt-2"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
