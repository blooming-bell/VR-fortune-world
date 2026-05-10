"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

type DeliveryTag = "VRルーム" | "ライブ配信" | "録画配信" | "ライブ配信+録画配信" | "AI鑑定";
type Level = "入門" | "1" | "2" | "3";

interface Session {
  id: string;
  date: string;
  time: string;
  duration: string;
  delivery: DeliveryTag[];
  level: Level;
  title: string;
  instructor: string;
  price: string;
  category: string;
  href: string;
}

const categories = ["すべて", "タロット", "星座占い", "数秘術", "手相", "AI鑑定"];

const allSessions: Session[] = [
  {
    id: "s1",
    date: "2026/5/24(土)",
    time: "14:00〜17:00",
    duration: "約3時間",
    delivery: ["VRルーム", "ライブ配信"],
    level: "2",
    title: "タロット実践研究会 ─ 実例ケーススタディ",
    instructor: "月詠サクラ",
    price: "6,600円〜",
    category: "タロット",
    href: "/about/academy/sessions/tarot-research",
  },
  {
    id: "s2",
    date: "2026/5/31(土)",
    time: "11:00〜13:00",
    duration: "約2時間",
    delivery: ["VRルーム", "ライブ配信", "録画配信"],
    level: "入門",
    title: "はじめてのタロット入門 ─ 大アルカナ22枚を知る",
    instructor: "月詠サクラ",
    price: "4,400円",
    category: "タロット",
    href: "/sessions/tarot-intro",
  },
  {
    id: "s3",
    date: "2026/6/7(日)",
    time: "13:00〜16:00",
    duration: "約3時間",
    delivery: ["VRルーム", "ライブ配信"],
    level: "1",
    title: "西洋占星術 基礎講座 ─ ホロスコープの読み方",
    instructor: "星乃アオイ",
    price: "6,600円",
    category: "星座占い",
    href: "/sessions/astrology-basic",
  },
  {
    id: "s4",
    date: "2026/6/14(日)",
    time: "13:00〜18:00",
    duration: "約5時間",
    delivery: ["VRルーム", "ライブ配信", "録画配信"],
    level: "3",
    title: "ホロスコープ上級講座 ─ ハウスシステムと惑星アスペクト",
    instructor: "星乃アオイ",
    price: "8,800円〜",
    category: "星座占い",
    href: "/about/academy/sessions/horoscope-advanced",
  },
  {
    id: "s5",
    date: "2026/6/21(日)",
    time: "10:00〜12:30",
    duration: "約2.5時間",
    delivery: ["VRルーム", "ライブ配信"],
    level: "入門",
    title: "数秘術入門 ─ 誕生数と運命数を読む",
    instructor: "花月みつき",
    price: "4,400円",
    category: "数秘術",
    href: "/sessions/numerology-intro",
  },
  {
    id: "s6",
    date: "2026/6/25(水)",
    time: "19:00〜21:20",
    duration: "約2時間20分",
    delivery: ["VRルーム", "ライブ配信"],
    level: "2",
    title: "西洋占星術 実例研究 ─ 実際のホロスコープを読み解く",
    instructor: "星乃アオイ",
    price: "5,500円",
    category: "星座占い",
    href: "/about/academy/sessions/astrology-case",
  },
  {
    id: "s7",
    date: "2026/7/5(日)",
    time: "13:00〜15:30",
    duration: "約2.5時間",
    delivery: ["VRルーム", "ライブ配信", "録画配信"],
    level: "1",
    title: "手相入門 ─ 生命線・感情線・運命線を読む",
    instructor: "花月みつき",
    price: "5,500円",
    category: "手相",
    href: "/sessions/palmistry-intro",
  },
  {
    id: "s8",
    date: "2026/7/12(日)",
    time: "14:00〜17:00",
    duration: "約3時間",
    delivery: ["VRルーム", "ライブ配信"],
    level: "2",
    title: "九星気学と西洋占星術の融合リーディング",
    instructor: "紫苑カナ",
    price: "6,600円",
    category: "星座占い",
    href: "/sessions/fusion-reading",
  },
  {
    id: "s9",
    date: "2026/7/20(月)",
    time: "13:00〜18:00",
    duration: "約5時間",
    delivery: ["VRルーム", "ライブ配信", "録画配信"],
    level: "3",
    title: "数秘術 専門講座 ─ 高度な応用とVRリーディング実践",
    instructor: "花月みつき",
    price: "8,800円〜",
    category: "数秘術",
    href: "/about/academy/sessions/numerology",
  },
  {
    id: "s10",
    date: "随時",
    time: "24時間対応",
    duration: "制限なし",
    delivery: ["AI鑑定"],
    level: "入門",
    title: "AI鑑定 ORACLE ─ あなただけのパーソナル鑑定",
    instructor: "ORACLE (AI)",
    price: "プランにより異なる",
    category: "AI鑑定",
    href: "/tools/oracle",
  },
];

function deliveryTagClass(tag: DeliveryTag): string {
  if (tag === "ライブ配信" || tag === "ライブ配信+録画配信") {
    return "text-rose-400 border border-rose-400/50";
  }
  if (tag === "VRルーム") {
    return "text-amber-400 border border-amber-400/50";
  }
  if (tag === "AI鑑定") {
    return "text-indigo-300 border border-indigo-400/50";
  }
  return "text-white/50 border border-white/20";
}

function levelBadgeClass(level: Level): string {
  switch (level) {
    case "入門": return "bg-green-800/60 text-green-300";
    case "1":   return "bg-teal-800/60 text-teal-300";
    case "2":   return "bg-blue-800/60 text-blue-300";
    case "3":   return "bg-purple-800/60 text-purple-300";
  }
}

function levelLabel(level: Level): string {
  if (level === "入門") return "入門";
  return `Lv.${level}`;
}

export default function SessionsClient() {
  const [activeCategory, setActiveCategory] = useState("すべて");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    return allSessions.filter((s) => {
      const matchCat = activeCategory === "すべて" || s.category === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        !q ||
        s.title.toLowerCase().includes(q) ||
        s.instructor.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-20 text-center">
        <div className="px-4">
          <p className="text-gold-400 text-xs tracking-[0.3em] mb-4 uppercase font-bold">SESSIONS</p>
          <h1 className="text-white font-bold text-4xl md:text-5xl mb-4">VRセッションスケジュール</h1>
          <p className="text-white/60 text-base">
            VRルーム・ライブ配信・録画配信から受講方法を選べます
          </p>
        </div>
      </section>

      {/* Filter + Search */}
      <div className="bg-navy-950 border-b border-white/10 sticky top-0 z-10">
        {/* Category tabs */}
        <div className="overflow-x-auto">
          <div className="px-4 pt-4 pb-0">
            <div className="max-w-4xl mx-auto flex gap-2 min-w-max">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-t-lg text-sm font-bold transition-colors whitespace-nowrap border-b-2 ${
                    activeCategory === cat
                      ? "text-gold-400 border-gold-400"
                      : "text-white/50 border-transparent hover:text-white/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="px-4 py-3">
          <div className="max-w-4xl mx-auto">
            <input
              type="text"
              placeholder="キーワードで検索（講座名・講師名など）"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-navy-900 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold-400/60 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Session list */}
      <section className="bg-navy-950 px-4 py-10">
        <div className="max-w-4xl mx-auto">
          {filtered.length === 0 ? (
            <p className="text-white/40 text-sm text-center py-16">
              該当するセッションが見つかりませんでした。
            </p>
          ) : (
            <div className="space-y-4">
              {filtered.map((session) => (
                <div
                  key={session.id}
                  className="bg-navy-900 border border-white/10 rounded-xl overflow-hidden"
                >
                  <div className="flex">
                    {/* Gold accent bar */}
                    <div className="w-1 shrink-0 bg-gold-400" />

                    <div className="flex-1 p-5">
                      {/* Top row: date + time + duration + first delivery tag */}
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-gold-400 font-bold text-sm">{session.date}</span>
                        <span className="text-white/50 text-sm">{session.time}</span>
                        <span className="text-white/30 text-xs">({session.duration})</span>
                        <span
                          className={`px-2 py-0.5 rounded text-xs ${deliveryTagClass(session.delivery[0])}`}
                        >
                          {session.delivery[0]}
                        </span>
                      </div>

                      {/* Remaining delivery tags + level badge */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        {session.delivery.slice(1).map((tag) => (
                          <span
                            key={tag}
                            className={`px-2 py-0.5 rounded text-xs ${deliveryTagClass(tag)}`}
                          >
                            {tag}
                          </span>
                        ))}
                        <span
                          className={`px-2 py-0.5 rounded text-xs font-bold ${levelBadgeClass(session.level)}`}
                        >
                          {levelLabel(session.level)}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-white font-bold text-base leading-snug mb-3">
                        {session.title}
                      </h3>

                      {/* Footer row: instructor + price + link */}
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-4">
                          <span className="text-white/50 text-xs">{session.instructor}</span>
                          <span className="text-white font-bold text-sm">{session.price}</span>
                        </div>
                        <Link
                          href={session.href}
                          className="text-gold-400 text-sm font-bold hover:text-gold-300 transition-colors"
                        >
                          詳細 →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Past recordings link */}
          <div className="mt-10 text-center">
            <p className="text-white/40 text-sm mb-4">過去のセッション録画もご購入いただけます</p>
            <Link
              href="/about/academy/recordings"
              className="inline-block px-6 py-3 border border-white/20 rounded-lg text-white/70 text-sm font-bold hover:border-gold-400 hover:text-gold-400 transition-colors"
            >
              録画カタログを見る →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
