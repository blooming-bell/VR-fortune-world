import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "書籍・テキスト | Blooming Bell",
  description:
    "Blooming Bellが取り扱う占星術・占術の専門書籍・テキスト。西洋占星術・タロット・数秘術など各分野の良書をご紹介します。",
};

interface Book {
  id: string;
  coverGradient: string;
  coverLabel: string;
  title: string;
  subtitle?: string;
  author: string;
  pages: number;
  publishedDate: string;
  description: string;
  bbPrice: number;
  listPrice: number;
  isbn: string;
  href: string;
}

const books: Book[] = [
  {
    id: "b1",
    coverGradient: "from-indigo-600 via-violet-700 to-purple-900",
    coverLabel: "占星術の世界",
    title: "占星術の世界",
    author: "月詠サクラ",
    pages: 262,
    publishedDate: "2024年6月",
    description:
      "占星術の基本から始め、ハーフサムやリターン、コンポジットといった専門的な内容にも踏み込んで解説。多くの有名人やイベントチャートを詳しく解説した実践的な教本です。",
    bbPrice: 4000,
    listPrice: 4400,
    isbn: "978-4991054372",
    href: "/books/astrology-world",
  },
  {
    id: "b2",
    coverGradient: "from-amber-500 via-orange-600 to-red-800",
    coverLabel: "ソーラーアーク\nハンドブック",
    title: "ソーラーアークハンドブック",
    author: "フランク・クリフォード（著）　訳: 浦谷計子",
    pages: 310,
    publishedDate: "2023年6月",
    description:
      "世界的に使われているソーラーアーク法の理論と豊富なケーススタディを通じて、未来予測技法の実践的な活用方法を習得できます。ロンドン・スクール・オブ・アストロロジー校長による著作。",
    bbPrice: 5000,
    listPrice: 5500,
    isbn: "978-4991054365",
    href: "/books/solar-arc",
  },
  {
    id: "b3",
    coverGradient: "from-yellow-700 via-stone-600 to-neutral-800",
    coverLabel: "西洋占星術\nハンドブック",
    title: "西洋占星術ハンドブック ホロスコープを深読みする",
    author: "スー・トンプキンズ（著）　訳: 松田有里子、浦谷計子",
    pages: 482,
    publishedDate: "2023年1月",
    description:
      "ロンドン・スクール・オブ・アストロロジーの創設者による現代占星術の解説書。プロの占星家のための手引書とも言える深い内容を網羅した、英語圏で愛読されている名著の日本語版。",
    bbPrice: 5000,
    listPrice: 5500,
    isbn: "978-4991054358",
    href: "/books/western-astrology-handbook",
  },
  {
    id: "b4",
    coverGradient: "from-purple-700 via-fuchsia-800 to-violet-900",
    coverLabel: "心理占星術\nコンサルテーション",
    title: "心理占星術 コンサルテーションの世界",
    subtitle: "復刻版",
    author: "ノエル・ティル（著）　訳: 石塚隆一（監訳）",
    pages: 280,
    publishedDate: "2022年5月",
    description:
      "心理学の欲求理論と占星術を統合した著作。占星家によるクライアント対応の実践的手法を5つのケーススタディを通じて解説しています。",
    bbPrice: 4800,
    listPrice: 5280,
    isbn: "978-4991054341",
    href: "/books/psych-astrology-1",
  },
  {
    id: "b5",
    coverGradient: "from-teal-500 via-cyan-600 to-sky-800",
    coverLabel: "心理占星術2\nクリエイティブな理論と実践",
    title: "心理占星術2 クリエイティブな理論と実践",
    subtitle: "復刻版",
    author: "ノエル・ティル（著）　訳: 石塚隆一",
    pages: 260,
    publishedDate: "2021年8月",
    description:
      "占星術を技術ではなく「クライアントの変容を促すツール」として活用するための理論と実践を解説。最新技術、天体配置と感情、心理療法との接近など多角的に構成。",
    bbPrice: 4800,
    listPrice: 5280,
    isbn: "978-4991054338",
    href: "/books/psych-astrology-2",
  },
  {
    id: "b6",
    coverGradient: "from-lime-600 via-green-700 to-emerald-900",
    coverLabel: "ホロスコープを読む\n7つのメソッド",
    title: "ホロスコープを読む7つのメソッド",
    subtitle: "フランク・クリフォードの英国式占星術",
    author: "フランク・クリフォード（著）　訳: 浦谷計子、坂本貴子",
    pages: 300,
    publishedDate: "2019年11月",
    description:
      "初心者から経験豊富なプロまで、どんなホロスコープからもその重要な要素や特徴、物語の筋書きを素早く見つけ出すための体系的なメソッドを解説。",
    bbPrice: 5800,
    listPrice: 6380,
    isbn: "978-4991054310",
    href: "/books/horoscope-7methods",
  },
  {
    id: "b7",
    coverGradient: "from-emerald-500 via-green-600 to-teal-800",
    coverLabel: "ハーフサム事典",
    title: "ハーフサム事典",
    author: "星乃アオイ",
    pages: 186,
    publishedDate: "2019年10月",
    description:
      "著者が40年の実践研究を経て、エバーティンの解釈に独自の修正を加えた事典。三つの天体・感受点の意味を整理した、ホロスコープ解釈のための参考資料。",
    bbPrice: 8000,
    listPrice: 8800,
    isbn: "978-4991054303",
    href: "/books/half-sum",
  },
];

export default function BooksPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/40 to-navy-900 pointer-events-none" />
        <div className="relative z-10 px-4 max-w-3xl mx-auto text-center">
          <p className="text-gold-400 text-xs tracking-[0.3em] mb-4 uppercase font-bold">BOOKS</p>
          <h1 className="text-white font-bold text-4xl md:text-5xl mb-4">書籍・テキスト</h1>
          <p className="text-white/60 text-base">
            Blooming Bellが取り扱う占術の専門書籍
          </p>
        </div>
      </section>

      <div className="bg-navy-950">
        {/* Intro */}
        <section className="max-w-3xl mx-auto px-4 py-10 text-center">
          <p className="text-white/70 text-base leading-relaxed mb-8">
            占星術・タロット・数秘術など各占術の専門書籍をご紹介します。
            <br />
            Blooming Bell特別価格でご購入いただけます。価格は税込み（国内送料無料）です。
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-navy-800 border border-white/20 text-white font-bold rounded-lg text-sm hover:bg-gold-400 hover:text-navy-950 hover:border-gold-400 transition-colors"
          >
            まとめて購入はこちら
          </Link>
        </section>

        {/* Book list */}
        <section className="px-4 pb-16">
          <div className="max-w-3xl mx-auto space-y-6">
            {books.map((book) => (
              <div
                key={book.id}
                className="bg-navy-900 border border-white/10 rounded-2xl overflow-hidden"
              >
                {/* Cover image placeholder */}
                <div
                  className={`w-full h-56 bg-gradient-to-br ${book.coverGradient} flex items-center justify-center`}
                >
                  <p className="text-white/80 font-bold text-xl text-center px-6 whitespace-pre-line leading-snug drop-shadow">
                    {book.coverLabel}
                  </p>
                </div>

                {/* Book info */}
                <div className="p-6">
                  <h2 className="text-white font-bold text-lg leading-snug mb-1">{book.title}</h2>
                  {book.subtitle && (
                    <p className="text-gold-400/80 text-xs mb-2">{book.subtitle}</p>
                  )}
                  <p className="text-white/40 text-sm mb-1">{book.author}</p>
                  <p className="text-white/40 text-sm mb-4">
                    {book.pages}ページ　{book.publishedDate}
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed mb-5">{book.description}</p>

                  {/* Price */}
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-gold-400 font-bold text-lg">
                      BB価格 {book.bbPrice.toLocaleString()}円
                      <span className="text-sm font-normal ml-1">（税込）</span>
                    </span>
                    <span className="text-white/30 text-sm line-through">
                      定価 {book.listPrice.toLocaleString()}円
                    </span>
                  </div>

                  {/* ISBN + link */}
                  <div className="flex items-center justify-between">
                    <span className="text-white/30 text-xs">ISBN: {book.isbn}</span>
                    <Link
                      href={book.href}
                      className="text-gold-400 text-sm font-bold hover:text-gold-300 transition-colors"
                    >
                      詳細を見る →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-navy-900 border-t border-white/10 px-4 py-12 text-center">
          <p className="text-white/60 text-sm mb-6">複数冊まとめてご購入いただけます。</p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-navy-800 border border-white/20 text-white font-bold rounded-lg text-sm hover:bg-gold-400 hover:text-navy-950 hover:border-gold-400 transition-colors"
          >
            まとめて購入
          </Link>
        </section>
      </div>
    </>
  );
}
