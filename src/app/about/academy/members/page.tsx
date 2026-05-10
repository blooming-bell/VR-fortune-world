import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "認定占い師メンバー | Blooming Bell アカデミー",
  description: "Blooming Bellアカデミーに在籍する認定占い師メンバーをご紹介します。",
};

interface SocialLink {
  label: string;
  href: string;
}

interface Member {
  name: string;
  studio?: string;
  specialties: string[];
  bio: string;
  links: SocialLink[];
}

const members: Member[] = [
  {
    name: "月詠サクラ",
    studio: "月詠タロット工房",
    specialties: ["タロット", "西洋占星術", "数秘術"],
    bio: "タロットと直感を融合させた独自のリーディングスタイルで、10年以上の鑑定経験を持つ。Blooming Bellアカデミー設立当初からのメンバー。VR空間でのリーディングにいち早く対応し、没入感のある鑑定体験を提供することで定評がある。現在はタロット実践研究会の進行を担当。",
    links: [
      { label: "HP", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Blooming Bell占いの部屋", href: "/fortune/tellers#tarot" },
    ],
  },
  {
    name: "星乃アオイ",
    studio: "星読みスタジオ Aoi",
    specialties: ["西洋占星術", "ホロスコープ鑑定", "ホラリー占星術"],
    bio: "西洋占星術師。生まれた瞬間の天体配置から、人生のテーマや才能を読み解くホロスコープ鑑定を専門とする。VR空間での星図展開に独自の演出を持ち、多くのリピーターから支持されている。アカデミーではホロスコープ上級講座と実例研究を担当している。",
    links: [
      { label: "HP", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Blooming Bell占いの部屋", href: "/fortune/tellers#horoscope" },
    ],
  },
  {
    name: "花月みつき",
    studio: "月夜の占い館",
    specialties: ["数秘術", "手相術", "西洋占星術"],
    bio: "数秘術と手相を組み合わせた独自の鑑定スタイルを確立。VRのインタラクティブな環境を活かし、手相を3D空間でリアルタイムに解説するセッションが好評。2024年よりBlooming Bellアカデミーに参加し、数秘術専門講座の企画・運営を担当している。",
    links: [
      { label: "Blog", href: "#" },
      { label: "Instagram", href: "#" },
    ],
  },
  {
    name: "紫苑カナ",
    studio: "紫苑アストロロジー",
    specialties: ["西洋占星術", "九星気学", "手相術"],
    bio: "西洋占星術と東洋の九星気学を融合させたリーディングを得意とする。1000名以上への鑑定経験を持ち、特に人生の転機・キャリア・対人関係の相談を得意としている。VR空間ならではの没入感を活かした星座図解説が人気。",
    links: [
      { label: "HP", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Blooming Bell占いの部屋", href: "/fortune/tellers#bb-room" },
    ],
  },
  {
    name: "瀬戸ルカ",
    studio: "ルーナ・リーディング",
    specialties: ["西洋占星術", "数秘術", "西洋占星術と併用する手相術"],
    bio: "西洋占星術と数秘術を中心に活動。「自分自身を深く理解したい」「人生のタイミングを知りたい」という方々に向けてのVRセッションや研究会を精力的に展開している。2025年よりBlooming Bellアカデミーに参加。",
    links: [
      { label: "HP", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Blooming Bell占いの部屋", href: "/fortune/tellers#bb-room" },
    ],
  },
];

export default function AcademyMembersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-20 text-center">
        <div className="px-4">
          <p className="text-gold-400 text-xs tracking-[0.3em] mb-4 uppercase font-bold">MEMBERS</p>
          <h1 className="text-white font-bold text-4xl md:text-5xl mb-4">認定占い師メンバー</h1>
          <p className="text-white/60 text-base">
            Blooming Bellアカデミーに在籍するメンバーをご紹介します
          </p>
        </div>
      </section>

      {/* Members list */}
      <section className="bg-navy-950 px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-6">
          {members.map((member) => (
            <div key={member.name} className="bg-navy-900 border border-white/10 rounded-xl p-6">
              {/* Header: photo + name + specialties */}
              <div className="flex gap-5 mb-5">
                <div className="w-20 h-20 shrink-0 rounded-lg bg-gradient-to-br from-indigo-900/60 via-navy-800 to-navy-900 flex items-center justify-center">
                  <span className="text-white/20 text-2xl">✦</span>
                </div>
                <div className="min-w-0">
                  <h2 className="text-white font-bold text-lg mb-0.5">{member.name}</h2>
                  {member.studio && (
                    <p className="text-white/40 text-xs mb-1.5">{member.studio}</p>
                  )}
                  <p className="text-gold-400 text-xs leading-relaxed">
                    {member.specialties.join("、")}
                  </p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-white/60 text-sm leading-relaxed mb-5">{member.bio}</p>

              {/* Links */}
              <div className="flex flex-wrap gap-4">
                {member.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-gold-400/70 text-xs hover:text-gold-400 underline transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-10 text-center">
          <Link
            href="/about/academy"
            className="text-gold-400 text-sm font-bold hover:text-gold-300 transition-colors"
          >
            ← アカデミーページへ戻る
          </Link>
        </div>
      </section>
    </>
  );
}
