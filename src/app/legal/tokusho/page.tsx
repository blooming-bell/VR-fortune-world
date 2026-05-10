import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | Blooming Bell",
};

interface TableRow {
  label: string;
  value: string | React.ReactNode;
}

export default function TokushoPage() {
  return (
    <div className="bg-navy-950 min-h-screen">
      {/* Hero */}
      <section className="bg-navy-900 py-16 text-center border-b border-white/10">
        <div className="px-4">
          <h1 className="text-white font-bold text-3xl md:text-4xl">
            特定商取引法に基づく表記
          </h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-12">
        {/* 基本項目 */}
        <section>
          <h2 className="text-white font-bold text-xl mb-4">基本項目</h2>
          <div className="border border-white/10 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-white/10">
                <tr className="flex">
                  <td className="w-36 shrink-0 bg-navy-900 px-4 py-4 text-white/60 font-bold align-top leading-relaxed">販売業者</td>
                  <td className="flex-1 bg-navy-950 px-4 py-4 text-white/70 leading-relaxed">Blooming Bell</td>
                </tr>
                <tr className="flex">
                  <td className="w-36 shrink-0 bg-navy-900 px-4 py-4 text-white/60 font-bold align-top leading-relaxed">代表者</td>
                  <td className="flex-1 bg-navy-950 px-4 py-4 text-white/70 leading-relaxed">代表取締役</td>
                </tr>
                <tr className="flex">
                  <td className="w-36 shrink-0 bg-navy-900 px-4 py-4 text-white/60 font-bold align-top leading-relaxed">所在地</td>
                  <td className="flex-1 bg-navy-950 px-4 py-4 text-white/70 leading-relaxed">
                    お問い合わせはメールにて承っております。
                    <br />
                    お問い合わせフォームよりご連絡ください。
                  </td>
                </tr>
                <tr className="flex">
                  <td className="w-36 shrink-0 bg-navy-900 px-4 py-4 text-white/60 font-bold align-top leading-relaxed">お問い合わせ</td>
                  <td className="flex-1 bg-navy-950 px-4 py-4 text-white/70 leading-relaxed">
                    <a href="/contact" className="text-gold-400 underline hover:text-gold-300 transition-colors">
                      お問い合わせフォームはこちら
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 料金について */}
        <section>
          <h2 className="text-white font-bold text-xl mb-4">料金について</h2>
          <div className="border border-white/10 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-white/10">
                <tr className="flex">
                  <td className="w-36 shrink-0 bg-navy-900 px-4 py-4 text-white/60 font-bold align-top leading-relaxed">販売価格</td>
                  <td className="flex-1 bg-navy-950 px-4 py-4 text-white/70 leading-relaxed">商品毎に税込表示で掲載</td>
                </tr>
                <tr className="flex">
                  <td className="w-36 shrink-0 bg-navy-900 px-4 py-4 text-white/60 font-bold align-top leading-relaxed">商品等の引き渡し時期及び発送方法</td>
                  <td className="flex-1 bg-navy-950 px-4 py-4 text-white/70 leading-relaxed space-y-3">
                    <div>
                      <p className="font-bold text-white/80 mb-1">VRルーム・ライブ配信セッション、基礎コース等</p>
                      <p>・入金確認後、講座開催日時に受講または開催日に参加可能</p>
                    </div>
                    <div>
                      <p className="font-bold text-white/80 mb-1">録画配信によるセッション・コース</p>
                      <p>・入金確認後、受講期間中に受講可能</p>
                    </div>
                    <div>
                      <p className="font-bold text-white/80 mb-1">LSA認定コース</p>
                      <p>・お申し込み後、事務局より月々のお支払いについてご案内メールを送付。初回決済後、受講生のご希望を伺いながら事務局で配信開始時期を調整。受講期間は標準で2年間を目安とし、受講状況に応じて個別に相談。</p>
                    </div>
                    <div>
                      <p className="font-bold text-white/80 mb-1">アカデミー</p>
                      <p>・入金確認後、即時サービス利用可能</p>
                    </div>
                    <div>
                      <p className="font-bold text-white/80 mb-1">有料版ORACLE</p>
                      <p>・入金確認後、即時サービス利用可能</p>
                    </div>
                    <div>
                      <p className="font-bold text-white/80 mb-1">運勢カレンダー・テキスト・書籍</p>
                      <p>・PDF版は入金確認後、即時サービス利用可能</p>
                      <p>・印刷物、書籍は入金確認後、2週間以内に送付</p>
                    </div>
                  </td>
                </tr>
                <tr className="flex">
                  <td className="w-36 shrink-0 bg-navy-900 px-4 py-4 text-white/60 font-bold align-top leading-relaxed">商品代金以外の必要料金</td>
                  <td className="flex-1 bg-navy-950 px-4 py-4 text-white/70 leading-relaxed space-y-1">
                    <p>・銀行振り込みの際、振込手数料が必要な場合があります。</p>
                    <p>・郵送する商品の場合、国内一律300〜550円（税込）の送料がかかる場合があります。送料が商品代に含まれているもの、送料無料のものもあります。詳しくは各商品の案内ページに記載してあります。</p>
                    <p>・分割ローンの場合は、分割ローン契約に定める手数料が別途かかります。</p>
                  </td>
                </tr>
                <tr className="flex">
                  <td className="w-36 shrink-0 bg-navy-900 px-4 py-4 text-white/60 font-bold align-top leading-relaxed">支払方法</td>
                  <td className="flex-1 bg-navy-950 px-4 py-4 text-white/70 leading-relaxed space-y-3">
                    <div>
                      <p className="font-bold text-white/80 mb-1">VRルーム・ライブ配信セッション・基礎コース等</p>
                      <p>・クレジットカード決済、銀行振込</p>
                    </div>
                    <div>
                      <p className="font-bold text-white/80 mb-1">録画配信によるセッション・コース</p>
                      <p>・クレジットカード決済、銀行振込</p>
                    </div>
                    <div>
                      <p className="font-bold text-white/80 mb-1">アカデミー年会費</p>
                      <p>・クレジットカード決済、銀行振込</p>
                    </div>
                    <div>
                      <p className="font-bold text-white/80 mb-1">有料版ORACLE</p>
                      <p>・クレジットカード決済、銀行振込</p>
                    </div>
                    <div>
                      <p className="font-bold text-white/80 mb-1">運勢カレンダー・テキスト・書籍</p>
                      <p>・クレジットカード決済、銀行振込</p>
                    </div>
                  </td>
                </tr>
                <tr className="flex">
                  <td className="w-36 shrink-0 bg-navy-900 px-4 py-4 text-white/60 font-bold align-top leading-relaxed">支払時期</td>
                  <td className="flex-1 bg-navy-950 px-4 py-4 text-white/70 leading-relaxed space-y-3">
                    <div>
                      <p className="font-bold text-white/80 mb-1">VRルーム・ライブ配信セッション・基礎コース等</p>
                      <p>・申込時（前払い）</p>
                      <p>・但し、クレジットカード決済の場合はクレジットカード利用の承認が下りた日とし、分割ローンの場合は、分割ローン契約に定める時期</p>
                    </div>
                    <div>
                      <p className="font-bold text-white/80 mb-1">録画配信によるセッション・コース</p>
                      <p>・申込時（前払い）</p>
                      <p>・但し、クレジットカード決済の場合はクレジットカード利用の承認が下りた日</p>
                    </div>
                    <div>
                      <p className="font-bold text-white/80 mb-1">アカデミー年会費</p>
                      <p>・お支払い日から1年間（更新時は改めてお申し込みいただきます）</p>
                    </div>
                    <div>
                      <p className="font-bold text-white/80 mb-1">有料版ORACLE</p>
                      <p>・月払いの場合は入会日及び、翌月以降については月初</p>
                      <p>・年払いの場合は、入会日及び、翌年以降については、利用開始日が属する月の翌月初</p>
                    </div>
                    <div>
                      <p className="font-bold text-white/80 mb-1">運勢カレンダー・テキスト・書籍</p>
                      <p>・申込時（前払い）</p>
                      <p>・但し、クレジットカード決済の場合はクレジットカード利用の承認が下りた日</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* キャンセルの取り扱い */}
        <section>
          <h2 className="text-white font-bold text-xl mb-4">キャンセルの取り扱い</h2>
          <div className="border border-white/10 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-white/10">
                <tr className="flex">
                  <td className="w-36 shrink-0 bg-navy-900 px-4 py-4 text-white/60 font-bold align-top leading-relaxed">キャンセル規定</td>
                  <td className="flex-1 bg-navy-950 px-4 py-4 text-white/70 leading-relaxed space-y-4">
                    <div>
                      <p className="font-bold text-white/80 mb-1">VRルーム・ライブ配信セッション等、一日で完了するもの</p>
                      <p>・受講14日前までのキャンセルの場合、全額返金（但し、事務手数料として1,000円差し引かせていただきます）</p>
                      <p>・受講14日前以降のキャンセルの場合、返金不可</p>
                    </div>
                    <div>
                      <p className="font-bold text-white/80 mb-1">VRルーム・ライブ配信による基礎コース等、複数日にわたるもの</p>
                      <p>・初回受講14日前までのキャンセルの場合、全額返金（但し、事務手数料として1,000円差し引かせていただきます）</p>
                      <p>・初回受講14日前以降のキャンセルの場合、返金不可</p>
                      <p>・複数のコースをまとめたセット商品を購入した場合、1つ目のコースの初回受講14日前以降のキャンセルの場合、返金不可</p>
                      <p>・但し、分割ローンの場合は、分割ローン契約に定める通り</p>
                    </div>
                    <div>
                      <p className="font-bold text-white/80 mb-1">録画配信によるセッション・コース</p>
                      <p>・配信開始前のキャンセルの場合、全額返金（但し、事務手数料として1,000円差し引かせていただきます）</p>
                      <p>・配信開始後のキャンセルの場合、返金不可</p>
                      <p>・複数のセッションやコースをまとめたセット商品を購入した場合、1つ目の配信開始後のキャンセルの場合、返金不可</p>
                      <p>・但し、分割ローンの場合は、分割ローン契約に定める通り</p>
                    </div>
                    <div>
                      <p className="font-bold text-white/80 mb-1">LSA認定コース</p>
                      <p>・第1科目の第1回目の配信から1週間以内のご連絡の場合、全額返金</p>
                      <p>・それ以降の途中退会の場合、既に受講された科目分を定価（1科目110,000円（税込））で清算し、残額を返金</p>
                      <p>・他コースへの振替は不可</p>
                      <p>・中途解約の場合、返金は不可</p>
                    </div>
                    <div>
                      <p className="font-bold text-white/80 mb-1">アカデミー</p>
                      <p>・中途解約の場合、返金は不可</p>
                    </div>
                    <div>
                      <p className="font-bold text-white/80 mb-1">有料版ORACLE</p>
                      <p>・中途解約の場合、返金は不可</p>
                    </div>
                    <div>
                      <p className="font-bold text-white/80 mb-1">運勢カレンダー</p>
                      <p>・申込み後、返金不可</p>
                      <p>・郵送版の場合、引き渡された商品が種類又は品質（落丁等体裁上の不備のみをいい、商品の記載内容は含まない。）に関して契約の内容に適合しない場合、交換にて対応いたします。なお、送料は、弊社が負担いたします。</p>
                    </div>
                    <div>
                      <p className="font-bold text-white/80 mb-1">テキスト・書籍</p>
                      <p>・送付後、返金不可</p>
                      <p>・引き渡された商品が種類又は品質（落丁等体裁上の不備のみをいい、商品の記載内容は含まない。）に関して契約の内容に適合しない場合、交換にて対応いたします。なお、送料は、弊社が負担いたします。</p>
                    </div>
                    <div>
                      <p className="font-bold text-white/80 mb-1">その他のイベント</p>
                      <p>・開催初日14日前までのキャンセルの場合、全額返金（但し、事務手数料として1,000円差し引かせていただきます）</p>
                      <p>・開催初日14日前以降のキャンセルの場合、返金不可</p>
                    </div>
                    <div className="pt-2 border-t border-white/10">
                      <p>お客様のご都合によるキャンセルに伴う返金は、キャンセル日より1ヶ月以内にお振込みまたは、クレジットカードの決済金額の変更の形で処理させていただきます。クレジットカードの場合、カード会社の処理のタイミングにより、返金されるのがさらに遅くなる場合がありますのでご了承ください。</p>
                    </div>
                    <div>
                      <p>VRルーム・ライブ配信のセッション・基礎コース等にお申込み後、お客様のご都合が悪くなり、キャンセルされる場合、後日の同等セッション・コースに無料でお振替させていただくことができる場合があります。ただし、キャンセルされたセッション・コースの開催日・開講日から一年以内に限ります。ご希望の方は、お問い合わせフォームよりお申し出ください。</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ソフトウエアの動作環境 */}
        <section>
          <h2 className="text-white font-bold text-xl mb-4">ソフトウエアの動作環境</h2>
          <div className="border border-white/10 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-white/10">
                <tr className="flex">
                  <td className="w-36 shrink-0 bg-navy-900 px-4 py-4 text-white/60 font-bold align-top leading-relaxed">ソフトウエアの動作環境</td>
                  <td className="flex-1 bg-navy-950 px-4 py-4 text-white/70 leading-relaxed space-y-1">
                    <p>以下の環境からご利用いただけます。（バージョン指定がないものは最新版のみ対応となります）</p>
                    <p className="pt-1"><span className="font-bold text-white/80">Windows：</span>Edge、Firefox、Chrome</p>
                    <p><span className="font-bold text-white/80">Mac OS：</span>Safari、Firefox、Chrome</p>
                    <p><span className="font-bold text-white/80">タブレット：</span>iPad、Androidタブレット、Windowsタブレット</p>
                    <p><span className="font-bold text-white/80">スマートフォン：</span>iPhone 6s以降（最新版iOS）、Android（最新版のChrome、Android 6以降）</p>
                    <p className="pt-2"><span className="font-bold text-white/80">VRゴーグル：</span>Meta Quest 2以降、その他OpenXR対応デバイス</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
