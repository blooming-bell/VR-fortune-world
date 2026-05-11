import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ハウスシステム | 基礎知識 | Blooming Bell",
  description:
    "西洋占星術のハウスシステム（ハウスの分割方法）を解説。プラシーダス、コッホ、イコールハウス、ホールサインハウスなど代表的なシステムの特徴と違いを紹介します。",
};

const categories = [
  {
    name: "不等分割（時間分割）方式",
    description:
      "天体の日周運動（時間的な動き）に基づいてハウスを分割する方法です。MCとASCを基準として、その間の時間を分割します。各ハウスの大きさは不均等になりますが、天体の実際の動きを反映するため、多くの現代占星術師に支持されています。",
    examples: ["プラシーダス", "コッホ"],
  },
  {
    name: "空間分割方式",
    description:
      "天球上の空間を幾何学的に分割し、黄道上に投影する方法です。空間そのものの均等分割を重視しますが、黄道上に投影すると各ハウスの大きさは不均等になります。",
    examples: ["キャンパナス", "レジオモンタナス"],
  },
  {
    name: "等分割方式",
    description:
      "黄道を均等に30度ずつ分割する方法です。計算がシンプルで高緯度地方でも問題なく使えますが、MCとASCの関係が反映されない場合があります。",
    examples: ["イコールハウス", "ホールサインハウス", "ソーラーシステム", "ソーラーサインハウス"],
  },
];

const systems = [
  {
    name: "プラシーダス",
    english: "Placidus",
    type: "不等分割",
    origin: "17世紀 / プラシーダス・デ・ティティス（イタリア）",
    description:
      "現代占星術の父と呼ばれるアラン・レオが用いたことなどから、日本では最も人気が高い分割法です。MCとASCの間の日周運動に基づいた時間的分割を行います。多くの占星術ソフトのデフォルト設定として採用されており、世界的に最も広く使われています。",
    pros: ["最も普及しており、書籍や資料が豊富", "時間的分割により、天体の日周運動を反映", "MCが必ず10ハウスカスプに一致する"],
    cons: ["高緯度地方（北緯66度以上）では、ハウスのサイズが極端に偏る", "北極圏・南極圏では計算不能になる場合がある"],
  },
  {
    name: "コッホ",
    english: "Koch",
    type: "不等分割",
    origin: "20世紀 / ヴァルター・コッホ（ドイツ）",
    description:
      "コッホによって考案された分割方法で、出生地の地理的緯度が重要な役割を果たします。プラシーダスの欠点（高緯度地方ではハウスの大きさが偏る）を改善しており、ヨーロッパを中心に支持者が増えています。ASCの度数を基準に、出生地の緯度に応じた時間的分割を行うのが特徴です。",
    pros: ["出生地の緯度を重視し、場所性を反映", "プラシーダスの高緯度問題を一部改善", "MCが必ず10ハウスカスプに一致する"],
    cons: ["高緯度地方での問題が完全に解消されるわけではない", "プラシーダスほど普及していない"],
  },
  {
    name: "イコールハウス",
    english: "Equal House",
    type: "等分割",
    origin: "古代 / ヘレニズム時代",
    description:
      "上昇点（ASC）から黄道上を30度ずつ12等分する分割法です。最も古いハウスシステムの一つで、作図が簡単なため初心者向けに紹介されることが多く、シンプルでわかりやすい方法です。古代の占星術ではこの方式が主流でした。",
    pros: ["計算が単純で理解しやすい", "高緯度地方でも問題なく使える", "すべてのハウスが均等な30度"],
    cons: ["MCが10ハウスのカスプに入らないことがある", "ASCとMCの関係が反映されにくい"],
  },
  {
    name: "ホールサインハウス",
    english: "Whole Sign House",
    type: "等分割",
    origin: "古代 / ヘレニズム時代",
    description:
      "ASCが位置する星座（サイン）全体を第1ハウスとし、以降の各星座をそのまま各ハウスに対応させる方法です。最も古いハウスシステムとされ、ヘレニズム時代の伝統的占星術で広く用いられていました。近年、古典占星術の復興とともに再評価が進んでいます。",
    pros: ["計算が最もシンプル", "星座とハウスが一致するため解釈が明快", "高緯度でも問題なし", "古典占星術との整合性が高い"],
    cons: ["ASCの正確な度数がハウスカスプに反映されない", "MCとの関連が切り離される", "現代占星術の多くの技法と互換性がない場合がある"],
  },
  {
    name: "キャンパナス",
    english: "Campanus",
    type: "空間分割",
    origin: "13世紀 / カンパヌス（イタリア）",
    description:
      "地平線上の空間（主垂直圏）を30度ずつ12等分し、それを黄道上に投影する空間分割方式です。空間的な分割を重視するため、天球上の実際の空間配分を反映するという理論的な利点があります。ハンブルク学派などで支持されています。",
    pros: ["天球空間の均等分割という理論的な美しさ", "MCが必ず10ハウスカスプに一致する", "空間的な意味合いを重視する解釈に適する"],
    cons: ["ハウスサイズの不均等が大きくなることがある", "使用者が少なく参考資料が限られる"],
  },
  {
    name: "レジオモンタナス",
    english: "Regiomontanus",
    type: "空間分割",
    origin: "15世紀 / レギオモンタヌス（ドイツ）",
    description:
      "天の赤道を30度ずつ12等分し、それを黄道上に投影する空間分割方式です。中世ヨーロッパで広く使われ、ホラリー占星術（卜術）では現在でも標準的なハウスシステムとして採用されることが多いです。",
    pros: ["ホラリー占星術での標準的な方式", "MCが必ず10ハウスカスプに一致する", "歴史的な伝統と実績がある"],
    cons: ["高緯度地方でハウスサイズに偏りが出る", "ネイタル占星術ではあまり使われない"],
  },
  {
    name: "ソーラーシステム",
    english: "Solar House",
    type: "等分割",
    origin: "近代",
    description:
      "上昇点（ASC）に太陽の位置をそのまま使う等分法です。1ハウスのスタートと太陽の度数が同じになるのが特徴で、太陽を中心に据えた解釈を行う場合に使用されます。出生時間が不明な場合の代替手法として用いられることもあります。",
    pros: ["太陽を軸にした解釈が可能", "出生時間が不明でも使用できる", "計算が簡単"],
    cons: ["実際のASCを反映しない", "出生時間がわかる場合は他の方式が推奨される"],
  },
  {
    name: "ソーラーサインハウス",
    english: "Solar Sign House",
    type: "等分割",
    origin: "近代",
    description:
      "上昇点（ASC）を太陽のある星座（サイン）の0度にする等分法です。出生時間がわからない場合に用いることが多い方法で、雑誌やメディアの「星座占い」の基本となっている方式でもあります。太陽星座の0度から30度ずつ均等にハウスを割り当てます。",
    pros: ["出生時間不明でも利用可能", "一般的な星座占いとの整合性がある", "理解しやすい"],
    cons: ["個人の正確なASCを反映しない", "本格的なネイタル読みには不向き"],
  },
];

export default function HouseSystemsPage() {
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
            <h2 className="text-white font-bold text-2xl mb-4">ハウスシステム（ハウスの分割方法）</h2>
            <p className="text-white/70 text-base leading-relaxed mb-3">
              ホロスコープにおける12ハウスの分割方法には、数多くの方式が存在します。どのハウスシステムを用いるかによって、天体が入るハウスやハウスカスプの位置が変わるため、解釈にも影響を与えます。
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              ハウスシステムの選択に「唯一の正解」はありません。それぞれの方式には理論的背景と長所・短所があり、占星術の流派や目的によって使い分けられています。ここでは代表的なハウスシステムの特徴と違いを解説します。
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">分割方式の3つの分類</h3>
            <div className="space-y-3">
              {categories.map((cat) => (
                <div key={cat.name} className="bg-navy-900 border border-white/10 rounded-xl p-5">
                  <h4 className="text-gold-400 font-bold text-base mb-2">{cat.name}</h4>
                  <p className="text-white/70 text-sm leading-relaxed mb-3">{cat.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.examples.map((ex) => (
                      <span
                        key={ex}
                        className="border border-white/20 text-white/60 text-xs rounded-full px-3 py-1"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Individual systems */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">主要なハウスシステム</h3>
            <div className="space-y-4">
              {systems.map((sys) => (
                <div key={sys.name} className="bg-navy-900 border border-white/10 rounded-2xl p-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h4 className="text-white font-bold text-xl">{sys.name}</h4>
                    <span className="text-gold-400 font-bold text-sm">{sys.english}</span>
                  </div>
                  <div className="flex gap-4 text-sm mb-3">
                    <span>
                      <span className="text-white font-bold">分割方式:</span>{" "}
                      <span className="text-white/70">{sys.type}</span>
                    </span>
                  </div>
                  <div className="text-sm mb-3">
                    <span className="text-white font-bold">起源:</span>{" "}
                    <span className="text-white/70">{sys.origin}</span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">{sys.description}</p>

                  <div className="space-y-3">
                    <div className="bg-navy-950/50 rounded-xl p-4">
                      <p className="text-white font-bold text-xs mb-2">長所</p>
                      <ul className="space-y-1">
                        {sys.pros.map((pro) => (
                          <li key={pro} className="text-white/60 text-xs flex gap-2">
                            <span className="text-green-400 flex-shrink-0">+</span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-navy-950/50 rounded-xl p-4">
                      <p className="text-white font-bold text-xs mb-2">短所</p>
                      <ul className="space-y-1">
                        {sys.cons.map((con) => (
                          <li key={con} className="text-white/60 text-xs flex gap-2">
                            <span className="text-red-400 flex-shrink-0">-</span>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How to choose */}
          <div className="bg-navy-900 border border-gold-400/20 rounded-2xl p-6">
            <h3 className="text-white font-bold text-lg mb-3">ハウスシステムの選び方</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              どのハウスシステムを使うべきかは、占星術を学ぶ上で多くの方が悩むポイントです。以下のような観点で選択することをお勧めします。
            </p>
            <ul className="space-y-3 text-sm">
              <li className="text-white/70">
                <span className="text-gold-400 font-bold">初学者の方:</span> まずはプラシーダスから始めるのが無難です。最も普及しているため参考資料が豊富で、多くのソフトウェアのデフォルト設定にもなっています。
              </li>
              <li className="text-white/70">
                <span className="text-gold-400 font-bold">高緯度地域の出生:</span> コッホやイコールハウスなど、高緯度でも安定したハウスサイズを保てるシステムが適しています。
              </li>
              <li className="text-white/70">
                <span className="text-gold-400 font-bold">古典占星術を学ぶ方:</span> ホールサインハウスが伝統的な技法との相性が良く、近年再評価が進んでいます。
              </li>
              <li className="text-white/70">
                <span className="text-gold-400 font-bold">ホラリー占星術:</span> レジオモンタナスが伝統的に標準とされています。
              </li>
              <li className="text-white/70">
                <span className="text-gold-400 font-bold">出生時間が不明な場合:</span> ソーラーシステムやソーラーサインハウスが代替として有用です。
              </li>
            </ul>
            <p className="text-white/50 text-xs mt-4 leading-relaxed">
              大切なのは、一つのシステムを選んだら一貫して使い続けることです。複数のシステムを併用すると解釈が混乱する原因になります。経験を積む中で、自分に合ったシステムを見つけていきましょう。
            </p>
          </div>

          {/* Bottom navigation */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <Link
              href="/basics/houses"
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              ← 12ハウス
            </Link>
            <Link
              href="/basics/aspects"
              className="px-5 py-3 bg-navy-800 border border-gold-400/60 text-white font-bold text-sm rounded-xl hover:bg-navy-700 transition-colors"
            >
              アスペクト →
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
