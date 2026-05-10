import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "基礎コース | Blooming Bell",
  description:
    "Blooming Bellの基礎コース一覧。VR空間で学ぶ本格的な占術カリキュラム。タロット・西洋占星術・数秘術・手相など、初心者から上級者まで対応したコースをご用意しています。",
};

const features = [
  {
    icon: "📚",
    title: "体系的なカリキュラム",
    desc: "初心者でも安心して学べるよう、基礎から応用まで段階的に構成されたカリキュラムです。各コースは独立していますが、複数コースを組み合わせることでより深い理解が得られます。",
  },
  {
    icon: "🎓",
    title: "3つの受講形態",
    desc: "VRルームでの没入型体験・ライブ配信・録画配信から、ライフスタイルに合わせて自由に選択できます。同じコースを異なる形態で受講することも可能です。",
  },
  {
    icon: "✦",
    title: "修了認定制度",
    desc: "各コースの修了要件を満たすと、Blooming Bell認定の修了証を発行します。修了証はアカデミー入会や鑑定士登録の申請に活用できます。",
  },
  {
    icon: "🔄",
    title: "再受講制度",
    desc: "修了後もコース動画を閲覧し続けられます。アカデミー在籍中はいつでも振り返り学習が可能。知識を定着させながら自分のペースで学べます。",
  },
];

interface CourseCard {
  id: string;
  accentColor: string;
  headerBg: string;
  label: string;
  title: string;
  sessions: number;
  description: string;
  level: string;
  levelColor: string;
  href: string;
}

const courses: CourseCard[] = [
  {
    id: "tarot",
    accentColor: "from-violet-700 to-purple-900",
    headerBg: "bg-gradient-to-r from-violet-700 to-purple-900",
    label: "TAROT",
    title: "タロット基礎コース",
    sessions: 6,
    description:
      "大アルカナ22枚・小アルカナ56枚の意味とリーディング手法を体系的に学びます。VR空間でカードを3D展開しながら、直感と象徴の読み方を実践的に習得。",
    level: "入門〜Lv.2",
    levelColor: "bg-green-800/60 text-green-300",
    href: "/vr/courses/tarot",
  },
  {
    id: "astrology",
    accentColor: "from-indigo-700 to-blue-900",
    headerBg: "bg-gradient-to-r from-indigo-700 to-blue-900",
    label: "ASTROLOGY",
    title: "西洋占星術 基礎コース",
    sessions: 8,
    description:
      "12星座・10天体・12ハウスの基礎から、ホロスコープチャートの総合的な読み方まで。VR空間に浮かぶ立体的な星図を使いながら、惑星の動きを視覚的に学びます。",
    level: "入門〜Lv.3",
    levelColor: "bg-blue-800/60 text-blue-300",
    href: "/vr/courses/astrology",
  },
  {
    id: "psychological-astrology",
    accentColor: "from-sky-700 to-cyan-900",
    headerBg: "bg-gradient-to-r from-sky-700 to-cyan-900",
    label: "PSYCH ASTRO",
    title: "心理占星術 基礎コース",
    sessions: 6,
    description:
      "ユング心理学と占星術を融合した現代的アプローチ。出生図から心の深層パターンを読み解き、自己理解とクライアントサポートのスキルを身につけます。",
    level: "Lv.2〜Lv.3",
    levelColor: "bg-teal-800/60 text-teal-300",
    href: "/vr/courses/psychological-astrology",
  },
  {
    id: "horary",
    accentColor: "from-amber-700 to-orange-900",
    headerBg: "bg-gradient-to-r from-amber-700 to-orange-900",
    label: "HORARY",
    title: "ホラリー占星術 基礎コース",
    sessions: 5,
    description:
      "「いつ・どうなる？」という具体的な問いに答えるホラリー占星術。質問が生まれた瞬間のチャートを読み、具体的な予測と的中率の高いリーディングを学びます。",
    level: "Lv.2〜Lv.3",
    levelColor: "bg-amber-800/60 text-amber-300",
    href: "/vr/courses/horary",
  },
  {
    id: "kyusei",
    accentColor: "from-emerald-700 to-green-900",
    headerBg: "bg-gradient-to-r from-emerald-700 to-green-900",
    label: "KYUSEI",
    title: "九星気学 基礎コース",
    sessions: 5,
    description:
      "日本の伝統的な九星気学を、現代的な視点でわかりやすく解説。本命星・月命星・方位・年盤の基礎から、実際の鑑定に使える吉方位の取り方まで習得します。",
    level: "入門〜Lv.2",
    levelColor: "bg-green-800/60 text-green-300",
    href: "/vr/courses/kyusei",
  },
  {
    id: "numerology",
    accentColor: "from-rose-700 to-pink-900",
    headerBg: "bg-gradient-to-r from-rose-700 to-pink-900",
    label: "NUMEROLOGY",
    title: "数秘術 基礎コース",
    sessions: 4,
    description:
      "生年月日と名前から導き出す数字が持つ意味を探る数秘術。ライフパスナンバー・ソウルナンバーなど主要な数字の読み方と、組み合わせによる総合鑑定を学びます。",
    level: "入門〜Lv.2",
    levelColor: "bg-green-800/60 text-green-300",
    href: "/vr/courses/numerology",
  },
  {
    id: "palmistry",
    accentColor: "from-teal-700 to-cyan-900",
    headerBg: "bg-gradient-to-r from-teal-700 to-cyan-900",
    label: "PALMISTRY",
    title: "手相術 基礎コース",
    sessions: 5,
    description:
      "生命線・感情線・頭脳線・運命線など主要な手相の読み方を、VR空間でリアルな3Dハンドモデルを使って視覚的に学習。基礎から実践的なリーディングまで習得します。",
    level: "入門〜Lv.2",
    levelColor: "bg-green-800/60 text-green-300",
    href: "/vr/courses/palmistry",
  },
  {
    id: "lsa",
    accentColor: "from-gold-400/80 to-yellow-700",
    headerBg: "bg-gradient-to-r from-yellow-600 to-amber-800",
    label: "LSA",
    title: "LSA認定コース",
    sessions: 10,
    description:
      "Blooming Bell最上位の認定プログラム。複数占術の統合的リーディング・クライアントコミュニケーション・VR鑑定スキルを包括的に習得。修了者はアカデミー上級メンバーとして活動できます。",
    level: "Lv.3",
    levelColor: "bg-purple-800/60 text-purple-300",
    href: "/vr/courses/lsa",
  },
];

export default function CoursesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/40 to-navy-900 pointer-events-none" />
        <div className="relative z-10 px-4 max-w-3xl mx-auto text-center">
          <nav className="text-white/40 text-xs mb-6 space-x-1">
            <Link href="/" className="hover:text-white transition-colors">ホーム</Link>
            <span>/</span>
            <span>基礎コース</span>
          </nav>
          <p className="text-gold-400 text-xs tracking-[0.3em] mb-4 uppercase font-bold">COURSES</p>
          <h1 className="text-white font-bold text-4xl md:text-5xl mb-4">基礎コース</h1>
          <p className="text-white/60 text-base">VR空間で学ぶ、本格的な占術カリキュラム</p>
        </div>
      </section>

      <div className="bg-navy-950">
        {/* What is 基礎コース */}
        <section className="max-w-3xl mx-auto px-4 py-12">
          <h2 className="text-white font-bold text-2xl mb-6 text-center">基礎コースとは</h2>
          <p className="text-white/70 text-base leading-relaxed">
            Blooming Bell基礎コースは、VR空間ならではの没入型学習で占術の本質を身につけるプログラムです。初心者から経験者まで段階的に学べる構成で、各コースの修了後はBlooming Bellアカデミーへの入会資格が得られます。
          </p>
        </section>

        {/* Feature cards */}
        <section className="max-w-3xl mx-auto px-4 pb-14 grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((f) => (
            <div key={f.title} className="bg-navy-900 border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-bold text-base mb-2">{f.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </section>

        {/* Course list */}
        <section className="bg-navy-900 border-y border-white/10 px-4 py-14">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-white font-bold text-2xl text-center mb-2">コース一覧</h2>
            <p className="text-white/50 text-sm text-center mb-10">
              各コースのカードをクリックすると詳細をご確認いただけます。
            </p>

            <div className="space-y-5">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-navy-950 border border-white/10 rounded-xl overflow-hidden"
                >
                  {/* Colored header */}
                  <div className={`${course.headerBg} px-6 py-4`}>
                    <p className="text-white/70 text-xs tracking-widest font-bold uppercase mb-0.5">
                      {course.label}
                    </p>
                    <h3 className="text-white font-bold text-lg">{course.title}</h3>
                  </div>

                  {/* Body */}
                  <div className="px-6 py-5">
                    <p className="text-white/30 text-xs mb-3">{course.sessions}セッション</p>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">{course.description}</p>

                    <div className="flex items-center justify-between">
                      <span
                        className={`px-2.5 py-1 rounded text-xs font-bold ${course.levelColor}`}
                      >
                        {course.level}
                      </span>
                      <Link
                        href={course.href}
                        className="text-gold-400 text-sm font-bold hover:text-gold-300 transition-colors"
                      >
                        詳細を見る →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Academy CTA */}
        <section className="max-w-3xl mx-auto px-4 py-14 text-center">
          <h2 className="text-white font-bold text-2xl mb-4">基礎コース修了後は</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            いずれかの基礎コースを修了した方は、Blooming Bellアカデミーに入会いただけます。
            <br />
            アカデミーでは専門セッション・研究会・鑑定士キャリアパスなど、さらに深い学びの場をご用意しています。
          </p>
          <div className="flex flex-col gap-3 max-w-xs mx-auto">
            <Link
              href="/about/academy"
              className="block py-4 bg-gold-400 text-navy-950 font-bold rounded-lg text-sm hover:bg-gold-300 transition-colors"
            >
              アカデミーについて →
            </Link>
            <Link
              href="/sessions"
              className="block py-4 border border-white/30 text-white rounded-lg text-sm hover:bg-white/10 transition-colors"
            >
              セッションスケジュールを見る
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
