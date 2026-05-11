import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "12星座（サイン） | 基礎知識 | Blooming Bell",
  description:
    "西洋占星術の12星座（サイン）を解説。牡羊座から魚座まで、各星座の性質・四元素・支配星・特徴を詳しく紹介します。",
};

interface Sign {
  name: string;
  english: string;
  keyword: string;
  sanKubun: string;
  element: string;
  ruler: string;
  description: string;
  traits: string[];
}

const signs: Sign[] = [
  {
    name: "牡羊座",
    english: "Aries",
    keyword: "I am（私は存在する）",
    sanKubun: "活動宮",
    element: "火",
    ruler: "火星",
    description:
      "12星座の始まりに位置する牡羊座は、新しいことを切り拓くパイオニア精神に溢れています。春分点からスタートするこの星座は、生命力と行動力の象徴です。直感的で情熱的、自分の信じた道を迷わず突き進む強さを持っています。",
    traits: ["開拓精神", "勇気と行動力", "率直さ", "独立心", "瞬発力", "情熱的"],
  },
  {
    name: "牡牛座",
    english: "Taurus",
    keyword: "I have（私は所有する）",
    sanKubun: "不動宮",
    element: "地",
    ruler: "金星",
    description:
      "牡牛座は五感を通じて世界を味わい、物質的な安定と美を追求します。忍耐強く着実に目標に向かう粘り強さを持ち、一度決めたことは最後までやり遂げます。芸術的センスに優れ、美しいものや心地よいものを大切にします。",
    traits: ["忍耐力", "安定志向", "五感の鋭さ", "芸術的センス", "堅実さ", "所有欲"],
  },
  {
    name: "双子座",
    english: "Gemini",
    keyword: "I think（私は考える）",
    sanKubun: "柔軟宮",
    element: "風",
    ruler: "水星",
    description:
      "双子座は知性とコミュニケーションの星座です。好奇心旺盛で多方面に興味を持ち、情報の収集・伝達に優れています。機敏な思考力と適応力で、さまざまな状況に柔軟に対応します。言葉を操る才能があり、文筆や教育の分野で力を発揮します。",
    traits: ["知的好奇心", "コミュニケーション力", "適応力", "多才さ", "機敏さ", "情報収集力"],
  },
  {
    name: "蟹座",
    english: "Cancer",
    keyword: "I feel（私は感じる）",
    sanKubun: "活動宮",
    element: "水",
    ruler: "月",
    description:
      "蟹座は感情と家庭の星座です。深い感受性と優れた共感力を持ち、大切な人を守り育てる母性的な愛情に溢れています。家族や仲間との絆を何よりも重視し、安心できる居場所づくりに力を注ぎます。記憶力に優れ、過去を大切にします。",
    traits: ["感受性", "母性・養育力", "共感力", "防衛本能", "記憶力", "家庭的"],
  },
  {
    name: "獅子座",
    english: "Leo",
    keyword: "I will（私は志す）",
    sanKubun: "不動宮",
    element: "火",
    ruler: "太陽",
    description:
      "獅子座は自己表現と創造性の星座です。太陽を支配星に持ち、堂々とした存在感とカリスマ性で周囲を魅了します。自分らしく輝くことを人生のテーマとし、創造的な活動や自己表現に情熱を燃やします。寛大でドラマティックな性質を持っています。",
    traits: ["創造力", "リーダーシップ", "自己表現", "寛大さ", "プライド", "ドラマティック"],
  },
  {
    name: "乙女座",
    english: "Virgo",
    keyword: "I analyze（私は分析する）",
    sanKubun: "柔軟宮",
    element: "地",
    ruler: "水星",
    description:
      "乙女座は分析と奉仕の星座です。細部にまで目が行き届く観察力と、物事を整理・改善する能力に優れています。実務的で勤勉、完璧を目指す向上心を持っています。健康や日常生活の管理に関心が高く、人のために尽くすことに喜びを感じます。",
    traits: ["分析力", "実務能力", "勤勉さ", "奉仕精神", "完璧主義", "観察力"],
  },
  {
    name: "天秤座",
    english: "Libra",
    keyword: "I balance（私は均衡を保つ）",
    sanKubun: "活動宮",
    element: "風",
    ruler: "金星",
    description:
      "天秤座は調和と美の星座です。バランス感覚に優れ、対人関係において公平さと調和を重視します。洗練された美意識とセンスを持ち、優雅で社交的な性質が特徴です。パートナーシップを大切にし、他者との関わりの中で自分を見出します。",
    traits: ["バランス感覚", "社交性", "美意識", "公平さ", "協調性", "外交的"],
  },
  {
    name: "蠍座",
    english: "Scorpio",
    keyword: "I desire（私は欲求する）",
    sanKubun: "不動宮",
    element: "水",
    ruler: "冥王星",
    description:
      "蠍座は変容と深層の星座です。物事の本質を見抜く洞察力と、深い情念を持っています。表面的なことには満足せず、人生の深淵まで探究する力を持っています。一度決めた目標には執念を持って取り組み、根本的な変容をもたらします。",
    traits: ["洞察力", "集中力", "変容力", "探究心", "意志の強さ", "再生力"],
  },
  {
    name: "射手座",
    english: "Sagittarius",
    keyword: "I see（私は理解する）",
    sanKubun: "柔軟宮",
    element: "火",
    ruler: "木星",
    description:
      "射手座は探究と拡大の星座です。哲学的な視野と冒険心を持ち、真理の探究と自由を愛します。楽観的で開放的な性質で、異文化や高等学問への関心が高く、精神的な成長を何よりも重視します。理想を追い求め、遠くの目標に向かって矢を放ちます。",
    traits: ["冒険心", "哲学的思考", "楽観性", "自由への渇望", "向学心", "理想主義"],
  },
  {
    name: "山羊座",
    english: "Capricorn",
    keyword: "I use（私は利用する）",
    sanKubun: "活動宮",
    element: "地",
    ruler: "土星",
    description:
      "山羊座は達成と責任の星座です。社会的な成功と地位を目指し、計画的かつ着実に目標を達成する力を持っています。責任感が強く、自律的で組織運営に優れています。伝統と権威を重んじ、長期的な視野で物事に取り組みます。",
    traits: ["責任感", "計画性", "野心", "自律心", "組織力", "現実主義"],
  },
  {
    name: "水瓶座",
    english: "Aquarius",
    keyword: "I know（私は知る）",
    sanKubun: "不動宮",
    element: "風",
    ruler: "天王星",
    description:
      "水瓶座は革新と博愛の星座です。独創的な発想と先進的なビジョンを持ち、既存の枠組みにとらわれない自由な思考が特徴です。個人よりも全体の利益を考え、人類の進歩に貢献しようとします。友愛精神に溢れ、独自の理想を追い求めます。",
    traits: ["独創性", "革新性", "博愛精神", "客観性", "自由な発想", "未来志向"],
  },
  {
    name: "魚座",
    english: "Pisces",
    keyword: "I believe（私は信じる）",
    sanKubun: "柔軟宮",
    element: "水",
    ruler: "海王星",
    description:
      "魚座は12星座の最後に位置し、すべてを包み込む慈悲と共感の星座です。豊かな想像力と直感力を持ち、目に見えない世界との繋がりを感じ取ります。境界を越えて他者と深く共鳴する力があり、芸術やスピリチュアルな分野で才能を発揮します。",
    traits: ["共感力", "想像力", "直感力", "慈悲深さ", "芸術性", "自己犠牲"],
  },
];

export default function SignsPage() {
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
            <h2 className="text-white font-bold text-2xl mb-4">12星座（サイン）</h2>
            <p className="text-white/70 text-base leading-relaxed">
              黄道を30度ずつ12等分した領域を「星座（サイン）」と呼びます。各星座には固有の性質があり、そこに位置する天体の表現方法に影響を与えます。一般的な「星座占い」は太陽星座のみを扱いますが、本来の占星術では全天体の星座配置を総合的に読み解きます。
            </p>
          </div>

          {/* Sign cards */}
          <div className="space-y-4">
            {signs.map((sign) => (
              <div
                key={sign.name}
                className="bg-navy-900 border border-white/10 rounded-2xl p-6"
              >
                {/* Header */}
                <div className="flex items-baseline gap-3 mb-1">
                  <h3 className="text-white font-bold text-xl">{sign.name}</h3>
                  <span className="text-gold-400 font-bold text-base">{sign.english}</span>
                </div>
                <p className="text-white/40 text-sm italic mb-4">{sign.keyword}</p>

                {/* Attributes */}
                <div className="space-y-1 mb-4">
                  <div className="flex gap-6 text-sm">
                    <span>
                      <span className="text-white font-bold">三区分:</span>{" "}
                      <span className="text-white/70">{sign.sanKubun}</span>
                    </span>
                    <span>
                      <span className="text-white font-bold">四元素:</span>{" "}
                      <span className="text-white/70">{sign.element}</span>
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="text-white font-bold">支配星:</span>{" "}
                    <span className="text-white/70">{sign.ruler}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed mb-4">{sign.description}</p>

                {/* Traits */}
                <div>
                  <p className="text-white font-bold text-sm mb-2">特性</p>
                  <div className="flex flex-wrap gap-2">
                    {sign.traits.map((trait) => (
                      <span
                        key={trait}
                        className="border border-white/20 text-white/60 text-xs rounded-full px-3 py-1"
                      >
                        {trait}
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
              href="/basics"
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              ← 西洋占星術とは
            </Link>
            <Link
              href="/basics/signs/classification"
              className="px-5 py-3 bg-navy-800 border border-gold-400/60 text-white font-bold text-sm rounded-xl hover:bg-navy-700 transition-colors"
            >
              星座の分類 →
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
