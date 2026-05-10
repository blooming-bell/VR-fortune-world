import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blooming Bell アカデミー | Blooming Bell",
  description:
    "VR占い師を目指す方のための認定・育成プログラム。実践スキルを磨き、Blooming Bell認定占い師としてのキャリアをサポートします。",
};

const features = [
  {
    title: "占術の垣根がなくなります",
    desc: "基礎コースを1つでも修了したメンバーは、占術の種類を問わず全てのアカデミー講座に参加できます。",
  },
  {
    title: "受講方法が自由に選べます",
    desc: "VRルーム・ライブ配信・録画配信のどの受講方法でも自由に選択できます。",
  },
  {
    title: "研究会に参加できます",
    desc: "専門セッション・実例研究の前後に、アカデミーメンバー限定の研究会があります。事例研究→ディスカッション→フィードバックの実践的な形式です（録画なし）。",
  },
  {
    title: "教材を継続利用できます",
    desc: "アカデミー在籍中は、修了した基礎コースの動画教材を引き続き閲覧できます。",
  },
];

const benefits = [
  "在籍中、過去に受講された基礎コースの動画教材を引き続きご利用可能",
  "月1回の専門セッション（各約2〜3時間）をアカデミー特別料金で受講可能",
  "Blooming Bellサイトへのプロフィール・記事掲載の機会",
  "Blooming Bellサイトに写真・氏名・連絡先等を掲載可能（希望者）",
  "Blooming Bell占いの部屋への鑑定士登録の機会（別途審査・契約が必要）",
  "Blooming Bell公式イベント・セッションへの出演機会（条件あり）",
];

interface SessionCard {
  title: string;
  subtitle: string;
  nextDate?: string;
  tags: string[];
  price: string;
  href: string;
}

const sessions: SessionCard[] = [
  {
    title: "タロット実践研究会",
    subtitle: "タロットカードを使った実例研究とVR鑑定実践",
    nextDate: "2026/5/24(土) 14:00〜17:00",
    tags: ["VRルーム", "ライブ配信"],
    price: "6,600円〜",
    href: "/about/academy/sessions/tarot-research",
  },
  {
    title: "ホロスコープ上級講座",
    subtitle: "ハウスシステムと惑星アスペクトの高度な読み方",
    nextDate: "2026/6/14(日) 13:00〜18:00 （他1件）",
    tags: ["VRルーム", "ライブ配信", "録画配信", "星乃アオイ"],
    price: "8,800円〜",
    href: "/about/academy/sessions/horoscope-advanced",
  },
  {
    title: "西洋占星術 実例研究",
    subtitle: "実際のホロスコープを題材にした実践的な読み解き",
    nextDate: "2026/6/25(水) 19:00〜21:20",
    tags: ["VRルーム", "ライブ配信", "星乃アオイ"],
    price: "5,500円",
    href: "/about/academy/sessions/astrology-case",
  },
  {
    title: "数秘術 専門講座",
    subtitle: "数秘術の高度な応用とVRでのリーディング実践",
    nextDate: "2026/7/20(月) 13:00〜18:00 （他1件）",
    tags: ["VRルーム", "ライブ配信", "録画配信"],
    price: "8,800円〜",
    href: "/about/academy/sessions/numerology",
  },
  {
    title: "録画",
    subtitle: "過去のアカデミーセッションの録画配信（他24件）",
    tags: ["録画配信"],
    price: "3,300円〜",
    href: "/about/academy/recordings",
  },
];

const careerPaths = [
  {
    title: "鑑定士登録",
    steps: [
      "実例研究に一定期間参加し、VR鑑定スキルとコミュニケーション力を養成",
      "登録申請後、占い師・アカデミーメンバーからのフィードバック",
      "Blooming Bellスタッフとの模擬VR鑑定テスト",
      "基準合格後、業務委託契約を締結し、Blooming Bell占いの部屋に登録",
    ],
  },
  {
    title: "VR占い師への道",
    steps: [
      "VR占師育成コースに受講生として参加",
      "アシスタントとして繰り返しセッションに参加",
      "VRリーディングスキル訓練、研究セッション共同開催",
      "基準到達後、業務委託契約を締結",
    ],
  },
];

export default function AcademyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/40 to-navy-900 pointer-events-none" />
        <div className="relative z-10 px-4 max-w-3xl mx-auto text-center">
          <nav className="text-white/40 text-xs mb-6 space-x-1">
            <Link href="/" className="hover:text-white transition-colors">ホーム</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-white transition-colors">Blooming Bellについて</Link>
            <span>/</span>
            <span>アカデミー</span>
          </nav>
          <p className="text-gold-400 text-xs tracking-[0.3em] mb-4 uppercase font-bold">ACADEMY</p>
          <h1 className="text-white font-bold text-4xl md:text-5xl mb-4">
            Blooming Bell アカデミー
          </h1>
          <p className="text-white/60 text-base">VR占い師を目指す方のための認定・育成プログラム</p>
        </div>
      </section>

      <div className="bg-navy-950">
        {/* Intro */}
        <section className="max-w-3xl mx-auto px-4 py-12">
          <p className="text-white/70 text-base leading-relaxed">
            Blooming Bell基礎コースの修了者が入会できるアカデミーです。専門セッションや実例研究で実践力を積み、研究実績の蓄積を通じてVR占いの発展に寄与します。講師や鑑定士としてのキャリアも支援しています。
          </p>
        </section>

        {/* Feature cards */}
        <section className="max-w-3xl mx-auto px-4 pb-12 space-y-4">
          {features.map((f) => (
            <div key={f.title} className="bg-navy-900 border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-bold text-base mb-2">{f.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </section>

        {/* Benefits */}
        <section className="bg-navy-900 border-y border-white/10 px-4 py-14">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-white font-bold text-2xl text-center mb-10">アカデミーの特典</h2>
            <ul className="space-y-5">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-white/70 leading-relaxed">
                  <span className="text-gold-400 shrink-0 mt-0.5">★</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Annual fee */}
        <section className="max-w-3xl mx-auto px-4 py-14 text-center">
          <h2 className="text-white font-bold text-2xl mb-6">年会費</h2>
          <div className="bg-navy-900 border border-white/10 rounded-xl p-8 mb-6 inline-block w-full">
            <p className="text-white font-bold text-5xl mb-2">
              33,000円
              <span className="text-xl font-normal ml-1">（税込）</span>
            </p>
            <p className="text-white/40 text-sm mt-2">アカデミー講座の受講料は別途</p>
          </div>
          <p className="text-white/50 text-sm mb-8 leading-relaxed">
            会員期間はお支払い日から1年間です
            <br />
            更新時期に届くご案内に従ってお手続きいただくことで継続できます
          </p>
          <Link
            href="/about/academy/payment"
            className="inline-block w-full max-w-xs py-4 bg-gold-400 text-navy-950 font-bold rounded-lg text-sm hover:bg-gold-300 transition-colors"
          >
            年会費のお支払いはこちらから
          </Link>
          <p className="text-white/30 text-xs mt-4 max-w-xs mx-auto leading-relaxed">
            ※ 基礎コース修了後1年以上経過後の入会、または退会後1年以上経過後の再入会の場合、過去のコース動画視聴権は失われます。
          </p>
        </section>

        {/* Sessions */}
        <section className="bg-navy-900 border-y border-white/10 px-4 py-14">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-white font-bold text-2xl text-center mb-2">開講中のセッション</h2>
            <p className="text-white/50 text-sm text-center mb-8">
              各セッションの詳細・開催日程はカードをクリックしてご確認ください。
            </p>
            <div className="space-y-4">
              {sessions.map((s) => (
                <div key={s.href} className="bg-navy-950 border border-white/10 rounded-xl p-5">
                  <h3 className="text-white font-bold text-base mb-1">{s.title}</h3>
                  <p className="text-white/50 text-sm mb-3">{s.subtitle}</p>
                  {s.nextDate && (
                    <p className="text-white/60 text-sm mb-3">次回: {s.nextDate}</p>
                  )}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 border border-white/20 rounded text-white/60 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-white font-bold">{s.price}</p>
                    <Link
                      href={s.href}
                      className="text-gold-400 text-sm font-bold hover:text-gold-300 transition-colors"
                    >
                      詳細・申込 →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past recordings */}
        <section className="max-w-3xl mx-auto px-4 py-14 text-center">
          <h2 className="text-white font-bold text-2xl mb-4">過去のアカデミー録画</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            過去に開催されたアカデミーセッションの録画をご購入いただけます。
            <br />
            実例研究や専門講座のアーカイブをお好きなテーマから選んで学べます。
          </p>
          <Link
            href="/about/academy/recordings"
            className="inline-block px-8 py-4 bg-gold-400 text-navy-950 font-bold rounded-lg text-sm hover:bg-gold-300 transition-colors"
          >
            アカデミー録画カタログを見る
          </Link>
        </section>

        {/* Career paths */}
        <section className="bg-navy-900 border-y border-white/10 px-4 py-14">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-white font-bold text-2xl text-center mb-10">キャリアパス</h2>
            <div className="space-y-6">
              {careerPaths.map((path) => (
                <div key={path.title} className="bg-navy-950 border border-white/10 rounded-xl p-6">
                  <h3 className="text-white font-bold text-base mb-5">{path.title}</h3>
                  <ol className="space-y-4">
                    {path.steps.map((step, i) => (
                      <li key={i} className="flex gap-4 text-sm text-white/70 leading-relaxed">
                        <span className="text-gold-400 font-bold shrink-0 text-base leading-none mt-0.5">
                          {i + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Members CTA */}
        <section className="max-w-3xl mx-auto px-4 py-14 text-center">
          <h2 className="text-white font-bold text-2xl mb-2">認定占い師メンバー紹介</h2>
          <p className="text-white/50 text-sm mb-8">
            Blooming Bellアカデミーに在籍するメンバーをご紹介します
          </p>
          <Link
            href="/about/academy/members"
            className="inline-block px-8 py-4 bg-navy-900 border border-white/20 text-white font-bold rounded-lg text-sm hover:bg-navy-800 transition-colors"
          >
            メンバー一覧を見る
          </Link>
        </section>
      </div>

      {/* Final CTA */}
      <section className="bg-navy-800 px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-white font-bold text-2xl mb-4">アカデミーへの入会</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            Blooming Bellの基礎コースを修了された方は、アカデミーに入会いただけます。
          </p>
          <div className="flex flex-col gap-3 max-w-xs mx-auto">
            <Link
              href="/about/academy/payment"
              className="block py-4 bg-gold-400 text-navy-950 font-bold rounded-lg text-sm hover:bg-gold-300 transition-colors"
            >
              年会費のお支払いはこちらから
            </Link>
            <Link
              href="/contact"
              className="block py-4 border border-white/30 text-white rounded-lg text-sm hover:bg-white/10 transition-colors"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
