import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "天体・小惑星・感受点 | 基礎知識 | Blooming Bell",
  description:
    "西洋占星術の天体・小惑星・感受点を解説。太陽から冥王星までの10天体、カイロンなどの小惑星、ASC・MCなどの感受点の意味と特徴を紹介します。",
};

interface Planet {
  name: string;
  english: string;
  symbol: string;
  keyword: string;
  cycle: string;
  description: string;
  rules: string[];
}

const mainPlanets: Planet[] = [
  {
    name: "太陽",
    english: "Sun",
    symbol: "☉",
    keyword: "自己・意識・生命力",
    cycle: "約1年（1星座に約1ヶ月）",
    description:
      "ホロスコープで最も重要な天体です。その人の本質、自己実現の方向性、意識的な自我を示します。父親像や権威者との関係、社会的な役割も表します。太陽が位置する星座（太陽星座）が一般的な「星座占い」で使われる星座です。",
    rules: ["獅子座"],
  },
  {
    name: "月",
    english: "Moon",
    symbol: "☽",
    keyword: "感情・無意識・母性",
    cycle: "約28日（1星座に約2.5日）",
    description:
      "感情、本能、無意識の反応を示します。幼少期の体験、母親との関係、安心感を求める場所も表します。感情的なニーズや習慣的な行動パターン、記憶力にも関わります。月は最も速く動く天体で、日々の感情の波に影響します。",
    rules: ["蟹座"],
  },
  {
    name: "水星",
    english: "Mercury",
    symbol: "☿",
    keyword: "知性・コミュニケーション・学習",
    cycle: "約1年（1星座に約3週間）",
    description:
      "思考、コミュニケーション、学習能力を示します。情報の収集・処理・伝達の仕方、言語能力、日常的な移動や取引も表します。太陽から最大28度しか離れないため、常に太陽の近くに位置します。",
    rules: ["双子座", "乙女座"],
  },
  {
    name: "金星",
    english: "Venus",
    symbol: "♀",
    keyword: "愛・美・調和",
    cycle: "約1年（1星座に約3〜4週間）",
    description:
      "愛情表現、美意識、価値観を示します。恋愛や対人関係のスタイル、何に喜びを感じるか、芸術的センスも表します。太陽から最大48度しか離れないため、常に太陽の近くに位置します。",
    rules: ["牡牛座", "天秤座"],
  },
  {
    name: "火星",
    english: "Mars",
    symbol: "♂",
    keyword: "行動力・意欲・情熱",
    cycle: "約2年（1星座に約2ヶ月）",
    description:
      "行動力、欲求、積極性を示します。目標に向かう推進力、競争心、性的エネルギーも表します。怒りの表現方法や、欲しいものを手に入れるための行動パターンにも関わります。",
    rules: ["牡羊座"],
  },
  {
    name: "木星",
    english: "Jupiter",
    symbol: "♃",
    keyword: "拡大・発展・幸運",
    cycle: "約12年（1星座に約1年）",
    description:
      "拡大、発展、幸運を示します。成長の機会、哲学的・宗教的な信念、高等教育も表します。木星が位置するハウスや星座は、人生で恵まれやすい分野を示します。一方で過度な楽観や浪費の傾向も持ちます。",
    rules: ["射手座"],
  },
  {
    name: "土星",
    english: "Saturn",
    symbol: "♄",
    keyword: "制限・規律・責任",
    cycle: "約29年（1星座に約2.5年）",
    description:
      "制限、規律、責任を示します。試練を通じた成長、社会的な義務、時間の流れにも関わります。土星が位置する分野は努力が必要ですが、継続的な努力によって大きな達成をもたらします。「土星回帰」（約29年周期）は人生の転機とされます。",
    rules: ["山羊座"],
  },
  {
    name: "天王星",
    english: "Uranus",
    symbol: "♅",
    keyword: "革新・自由・変革",
    cycle: "約84年（1星座に約7年）",
    description:
      "革新、変革、自由への衝動を示します。既存の秩序を打ち破る力、独創性、テクノロジーへの関心も表します。天王星が動く分野では、予期せぬ変化や革命的な出来事が起きやすくなります。世代の特徴を表す外惑星の一つです。",
    rules: ["水瓶座"],
  },
  {
    name: "海王星",
    english: "Neptune",
    symbol: "♆",
    keyword: "夢・幻想・スピリチュアル",
    cycle: "約165年（1星座に約14年）",
    description:
      "理想、夢、幻想、スピリチュアルな感受性を示します。境界の溶解、芸術的インスピレーション、自己犠牲の精神も表します。海王星が強調される分野では、現実と幻想の境界が曖昧になりやすく、理想化や幻滅が起きやすくなります。",
    rules: ["魚座"],
  },
  {
    name: "冥王星",
    english: "Pluto",
    symbol: "♇",
    keyword: "変容・再生・権力",
    cycle: "約248年（1星座に約12〜31年）",
    description:
      "根本的な変容、死と再生、隠れた権力を示します。深層心理、トラウマの変容、社会的な権力構造も表します。冥王星が動く分野では、古いものが崩壊し、より深いレベルでの再生が促されます。世代を超えた変革の力を持ちます。",
    rules: ["蠍座"],
  },
];

const asteroids = [
  {
    name: "カイロン",
    english: "Chiron",
    symbol: "⚷",
    keyword: "癒し・傷・教師",
    description:
      "「傷ついた癒し人」とも呼ばれる小惑星です。癒しきれない傷と、その傷を通じて得られる知恵を示します。カイロンが位置する分野は、繰り返し痛みを経験する一方で、他者を癒す力を発揮できる領域です。",
  },
  {
    name: "ケレス",
    english: "Ceres",
    symbol: "⚳",
    keyword: "養育・収穫・喪失",
    description:
      "養育、世話、豊かさへの欲求を示します。食べ物や体の世話との関係、分離と再結合のテーマも表します。母性的な愛情の与え方と受け取り方、喪失体験からの回復にも関わります。",
  },
  {
    name: "パラス",
    english: "Pallas Athene",
    symbol: "⚴",
    keyword: "知恵・戦略・創造性",
    description:
      "知恵、戦略的思考、創造的なパターン認識を示します。芸術と知性の統合、社会的公正への関心も表します。パラスが強調される人は、直感的な洞察力と問題解決能力に優れています。",
  },
  {
    name: "ジュノー",
    english: "Juno",
    symbol: "⚵",
    keyword: "パートナーシップ・対等・公正",
    description:
      "婚姻関係、パートナーシップのテーマを示します。対等な関係への欲求、関係における公正さと不公正も表します。ジュノーが位置する分野では、重要なパートナーシップの経験が示されます。",
  },
  {
    name: "ベスタ",
    english: "Vesta",
    symbol: "⚶",
    keyword: "献身・集中・神聖",
    description:
      "献身、集中、神聖な火を守る力を示します。特定の目的や使命への集中力、精神的な純粋さも表します。ベスタが強調される人は、何かに完全に献身する能力を持ちますが、過度になると孤立しやすい傾向もあります。",
  },
];

const sensitivePoints = [
  {
    name: "アセンダント（ASC）",
    english: "Ascendant",
    keyword: "上昇点・出生時の東の地平線",
    description:
      "出生時に東の地平線から昇っていた星座の度数です。外見、第一印象、社会への自己提示の仕方を示します。ASCの星座は「ライジングサイン」とも呼ばれ、他者から見たその人の印象に強く影響します。正確な出生時間が必要です。",
  },
  {
    name: "MC（天頂）",
    english: "Midheaven",
    keyword: "キャリア・社会的地位・人生目標",
    description:
      "出生時に真南の天頂にある黄道上の点です。社会的な使命、キャリア、公的な役割を示します。人生で目指す方向性や、世界に貢献する形を表します。MCは第10ハウスのカスプに対応します。",
  },
  {
    name: "ディセンダント（DSC）",
    english: "Descendant",
    keyword: "パートナーシップ・対人関係",
    description:
      "ASCの対極（180度反対）の点です。パートナーシップや対人関係の傾向を示します。自分が惹かれるタイプの人物像や、関係性において投影しやすい性質を表します。第7ハウスのカスプに対応します。",
  },
  {
    name: "IC（天底）",
    english: "Imum Coeli",
    keyword: "家庭・ルーツ・心の基盤",
    description:
      "MCの対極（180度反対）の点です。家庭環境、ルーツ、心理的な基盤を示します。幼少期の環境や、人生の晩年の在り方も表します。第4ハウスのカスプに対応します。",
  },
  {
    name: "ドラゴンヘッド（☊）",
    english: "North Node",
    keyword: "魂の成長方向・カルミックゴール",
    description:
      "月の軌道が黄道と交わる北の交点です。魂の成長方向、今世で獲得すべき経験や資質を示します。ドラゴンヘッドが位置する星座・ハウスは、挑戦を伴いますが、そこに向かうことで魂の成長が促されます。",
  },
  {
    name: "ドラゴンテイル（☋）",
    english: "South Node",
    keyword: "過去世の資質・慣れ親しんだ領域",
    description:
      "ドラゴンヘッドの対極（180度反対）の点です。過去世から持ち込んだ資質や、慣れ親しんだ行動パターンを示します。安心感を覚える一方で、そこに留まり続けると成長が滞る傾向があります。",
  },
];

export default function PlanetsPage() {
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
            <h2 className="text-white font-bold text-2xl mb-4">天体・小惑星・感受点</h2>
            <p className="text-white/70 text-base leading-relaxed">
              ホロスコープには10個の主要天体が用いられます。各天体は「何が」作用するかを示し、それぞれ固有のテーマと支配星座を持っています。近年は小惑星や感受点も読み解きに活用されます。
            </p>
          </div>

          {/* 主要10天体 */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">主要10天体</h3>
            <div className="space-y-4">
              {mainPlanets.map((planet) => (
                <div key={planet.name} className="bg-navy-900 border border-white/10 rounded-2xl p-6">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-gold-400 text-2xl">{planet.symbol}</span>
                    <h4 className="text-white font-bold text-xl">{planet.name}</h4>
                    <span className="text-gold-400 font-bold text-sm">{planet.english}</span>
                  </div>
                  <p className="text-white/40 text-xs italic mb-3">{planet.keyword}</p>
                  <div className="text-sm mb-3">
                    <span className="text-white font-bold">公転周期:</span>{" "}
                    <span className="text-white/70">{planet.cycle}</span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mb-3">{planet.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold text-xs">支配星座:</span>
                    {planet.rules.map((sign) => (
                      <span
                        key={sign}
                        className="border border-gold-400/40 text-gold-400 text-xs rounded-full px-3 py-1"
                      >
                        {sign}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 小惑星 */}
          <div>
            <h3 className="text-white font-bold text-xl mb-2">主要小惑星</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              火星と木星の間の小惑星帯に位置する天体群です。10天体に次ぐ副次的な要素として、ホロスコープ解読に活用されます。
            </p>
            <div className="space-y-4">
              {asteroids.map((a) => (
                <div key={a.name} className="bg-navy-900 border border-white/10 rounded-2xl p-6">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-gold-400 text-xl">{a.symbol}</span>
                    <h4 className="text-white font-bold text-lg">{a.name}</h4>
                    <span className="text-white/50 text-sm">{a.english}</span>
                  </div>
                  <p className="text-white/40 text-xs italic mb-3">{a.keyword}</p>
                  <p className="text-white/70 text-sm leading-relaxed">{a.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 感受点 */}
          <div>
            <h3 className="text-white font-bold text-xl mb-2">感受点</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              天体ではなく、特定の計算によって導き出された仮想の点です。ホロスコープ上で天体と同様に重要な意味を持ちます。
            </p>
            <div className="space-y-4">
              {sensitivePoints.map((sp) => (
                <div key={sp.name} className="bg-navy-900 border border-white/10 rounded-2xl p-6">
                  <h4 className="text-white font-bold text-lg mb-1">{sp.name}</h4>
                  <p className="text-white/40 text-xs italic mb-3">{sp.keyword}</p>
                  <p className="text-white/70 text-sm leading-relaxed">{sp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom navigation */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <Link
              href="/basics/signs/classification"
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              ← 星座の分類
            </Link>
            <Link
              href="/basics/houses"
              className="px-5 py-3 bg-navy-800 border border-gold-400/60 text-white font-bold text-sm rounded-xl hover:bg-navy-700 transition-colors"
            >
              12ハウス →
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
