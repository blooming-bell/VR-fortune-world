import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "12ハウス | 基礎知識 | Blooming Bell",
  description:
    "西洋占星術の12ハウスを解説。第1ハウスから第12ハウスまで、各ハウスの意味・対応星座・支配星・関連する人生領域を詳しく紹介します。",
};

interface House {
  number: number;
  title: string;
  keyword: string;
  sign: string;
  ruler: string;
  description: string;
  lifeAreas: string[];
}

const houses: House[] = [
  {
    number: 1,
    title: "自己のハウス",
    keyword: "I am（私は存在する）",
    sign: "牡羊座",
    ruler: "火星",
    description:
      "第1ハウスはASC（上昇点）に対応し、自己、外見、第一印象を表します。生まれ持った気質や体質、社会への自己提示の仕方が示されます。第1ハウスの天体は、その人の外見や自己表現に強い影響を与えます。",
    lifeAreas: ["外見・体型", "第一印象", "自己表現", "生まれ持った気質", "新しい始まり"],
  },
  {
    number: 2,
    title: "所有のハウス",
    keyword: "I have（私は所有する）",
    sign: "牡牛座",
    ruler: "金星",
    description:
      "第2ハウスは物質的な資源と価値観を表します。収入、財産、お金の稼ぎ方と使い方が示されます。物質的な安定への欲求、自己価値感、才能の活用方法にも関わります。",
    lifeAreas: ["収入・財産", "物質的安定", "自己価値感", "才能・資質", "食べ物・感覚的快楽"],
  },
  {
    number: 3,
    title: "コミュニケーションのハウス",
    keyword: "I think（私は考える）",
    sign: "双子座",
    ruler: "水星",
    description:
      "第3ハウスはコミュニケーションと日常的な思考を表します。兄弟姉妹との関係、近所付き合い、短距離の移動が示されます。学習スタイル、書くこと・話すことの能力、日常的な情報交換にも関わります。",
    lifeAreas: ["コミュニケーション", "兄弟姉妹", "短距離移動", "初等教育", "日常的思考"],
  },
  {
    number: 4,
    title: "家庭のハウス",
    keyword: "I feel（私は感じる）",
    sign: "蟹座",
    ruler: "月",
    description:
      "第4ハウスはIC（天底）に対応し、家庭、ルーツ、心の拠り所を表します。家族関係、特に両親（主に父親）との関係、不動産、晩年の生活が示されます。心理的な基盤や安心感、プライベートな領域を司ります。",
    lifeAreas: ["家庭・家族", "ルーツ・先祖", "不動産・住居", "心の拠り所", "晩年の生活", "プライベート"],
  },
  {
    number: 5,
    title: "創造のハウス",
    keyword: "I will（私は志す）",
    sign: "獅子座",
    ruler: "太陽",
    description:
      "第5ハウスは自己表現、創造性、喜びを表します。趣味、恋愛、子供、芸術活動、レジャーなど、人生を楽しむことに関わる領域です。投機やギャンブル、創造的な冒険もこのハウスに含まれます。",
    lifeAreas: ["自己表現", "創造性・芸術", "恋愛", "子供", "趣味・娯楽", "投機・ギャンブル"],
  },
  {
    number: 6,
    title: "勤労のハウス",
    keyword: "I analyze（私は分析する）",
    sign: "乙女座",
    ruler: "水星",
    description:
      "第6ハウスは日々の労働、健康管理、奉仕を表します。職場環境、雇用関係、日常のルーティン、健康状態や病気への対処が示されます。自己改善や技能の訓練、ペットとの関係もこのハウスの領域です。",
    lifeAreas: ["日常の労働", "健康・病気", "奉仕・貢献", "雇用関係", "日常のルーティン", "ペット"],
  },
  {
    number: 7,
    title: "対人関係のハウス",
    keyword: "I balance（私は均衡を保つ）",
    sign: "天秤座",
    ruler: "金星",
    description:
      "第7ハウスはディセンダント（DSC）に対応し、一対一の人間関係を表します。結婚、ビジネスパートナー、契約関係、公然の敵との対立が示されます。第1ハウスの対極にあり、自分が他者にどのように関わるかを映し出します。",
    lifeAreas: ["結婚・配偶者", "パートナーシップ", "契約・協定", "対人関係", "裁判・訴訟", "公然の敵"],
  },
  {
    number: 8,
    title: "変容のハウス",
    keyword: "I desire（私は欲求する）",
    sign: "蠍座",
    ruler: "冥王星",
    description:
      "第8ハウスは死と再生、深い変容を表します。他者の資産（遺産、配偶者の財産）、共有財産、税金、保険など他者を通じた財が示されます。心理的な深層、性、オカルト的な事柄もこのハウスの管轄です。",
    lifeAreas: ["遺産・共有財産", "死と再生", "深層心理", "性・親密さ", "他者の資産", "変容・再生"],
  },
  {
    number: 9,
    title: "探究のハウス",
    keyword: "I see（私は理解する）",
    sign: "射手座",
    ruler: "木星",
    description:
      "第9ハウスは高等教育、哲学、海外を表します。大学などの高等学問、宗教、法律、出版、長距離の旅行が示されます。人生の意味を探究し、精神的な成長を目指す領域です。異文化体験や思想の拡大もここに含まれます。",
    lifeAreas: ["高等教育・学問", "哲学・宗教", "海外・長距離旅行", "法律", "出版", "精神的成長"],
  },
  {
    number: 10,
    title: "社会的達成のハウス",
    keyword: "I use（私は利用する）",
    sign: "山羊座",
    ruler: "土星",
    description:
      "第10ハウスはMC（天頂）に対応し、社会的な地位、キャリア、人生の目標を表します。職業、社会的評価、名声、権威が示されます。第4ハウスの対極にあり、公的な場面での自分の在り方や、社会への貢献の形を映し出します。",
    lifeAreas: ["キャリア・職業", "社会的地位", "名声・評判", "人生の目標", "権威・責任", "公的な役割"],
  },
  {
    number: 11,
    title: "友愛のハウス",
    keyword: "I know（私は知る）",
    sign: "水瓶座",
    ruler: "天王星",
    description:
      "第11ハウスは友人、グループ活動、未来の希望を表します。交友関係、サークルや団体への参加、社会的なネットワークが示されます。理想やビジョン、人道的な活動、そして人生における願望や長期的な目標もこのハウスの領域です。",
    lifeAreas: ["友人・交友関係", "グループ活動", "未来の希望・願望", "人道的活動", "ネットワーク", "理想・ビジョン"],
  },
  {
    number: 12,
    title: "秘密のハウス",
    keyword: "I believe（私は信じる）",
    sign: "魚座",
    ruler: "海王星",
    description:
      "第12ハウスは12ハウスの最後に位置し、目に見えない世界、潜在意識、秘密を表します。隠された敵、自己犠牲、隠遁、霊的な体験が示されます。病院や刑務所など隔離された場所との関わり、カルマや前世の記憶もこのハウスに含まれます。",
    lifeAreas: ["潜在意識・無意識", "秘密・隠された事柄", "霊的体験", "自己犠牲", "隔離・隠遁", "カルマ・前世"],
  },
];

export default function HousesPage() {
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
            <h2 className="text-white font-bold text-2xl mb-4">12ハウス</h2>
            <p className="text-white/70 text-base leading-relaxed">
              ホロスコープは、出生地から見た空間を12分割した「ハウス」で構成されています。各ハウスは人生の特定の分野を司り、そこに位置する天体がどの分野で働くかを示します。ハウスの分割には正確な出生時間と出生地が必要です。
            </p>
          </div>

          {/* House cards */}
          <div className="space-y-4">
            {houses.map((house) => (
              <div
                key={house.number}
                className="bg-navy-900 border border-white/10 rounded-2xl p-6"
              >
                {/* Header */}
                <div className="flex items-baseline gap-3 mb-1">
                  <h3 className="text-white font-bold text-xl">第{house.number}ハウス</h3>
                  <span className="text-gold-400 font-bold text-base">{house.title}</span>
                </div>
                <p className="text-white/40 text-sm italic mb-4">{house.keyword}</p>

                {/* Attributes */}
                <div className="flex gap-6 text-sm mb-4">
                  <span>
                    <span className="text-white font-bold">対応星座:</span>{" "}
                    <span className="text-white/70">{house.sign}</span>
                  </span>
                  <span>
                    <span className="text-white font-bold">支配星:</span>{" "}
                    <span className="text-white/70">{house.ruler}</span>
                  </span>
                </div>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed mb-4">{house.description}</p>

                {/* Life areas */}
                <div>
                  <p className="text-white font-bold text-sm mb-2">関連する人生領域</p>
                  <div className="flex flex-wrap gap-2">
                    {house.lifeAreas.map((area) => (
                      <span
                        key={area}
                        className="border border-white/20 text-white/60 text-xs rounded-full px-3 py-1"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom navigation */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <Link
              href="/basics/planets"
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              ← 天体・感受点
            </Link>
            <Link
              href="/basics/house-systems"
              className="px-5 py-3 bg-navy-800 border border-gold-400/60 text-white font-bold text-sm rounded-xl hover:bg-navy-700 transition-colors"
            >
              ハウスシステム →
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
