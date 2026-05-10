import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "はじめての方へ | Blooming Bell",
  description:
    "Blooming BellのVRワールドをはじめるためのアカウント登録方法をご案内します。",
};

type Step = {
  number: number;
  title: string;
  body: React.ReactNode;
};

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-gold-400 shrink-0" />
      <span className="text-navy-900 leading-relaxed">{children}</span>
    </li>
  );
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 text-sm text-navy-900/70 leading-relaxed mt-4">
      {children}
    </div>
  );
}

function ScreenMockup({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="mt-4">
      <div className="border border-stone-200 rounded-xl overflow-hidden shadow-sm">
        {children}
      </div>
      <p className="text-center text-sm text-navy-900/50 mt-2">{label}</p>
    </div>
  );
}

const steps: Step[] = [
  {
    number: 1,
    title: "新規登録",
    body: (
      <div className="space-y-4">
        <p className="text-navy-900 leading-relaxed">
          まずは、Blooming Bellでご利用いただくアカウントを作成します。
        </p>
        <p className="text-navy-900 leading-relaxed">
          登録画面にて、以下の項目を入力し、登録ボタンを押してください。
        </p>
        <ul className="space-y-2">
          <BulletItem>お名前</BulletItem>
          <BulletItem>フリガナ</BulletItem>
          <BulletItem>メールアドレス</BulletItem>
          <BulletItem>パスワード（今後ログインする際に使用します）</BulletItem>
          <BulletItem>パスワード（確認）</BulletItem>
        </ul>
        <ScreenMockup label="登録画面の例：各項目を入力して登録ボタンを押してください。">
          <div className="bg-white p-6">
            <p className="text-center text-gold-400 font-bold text-lg mb-1">✦ Blooming Bell</p>
            <h3 className="text-center text-navy-900 font-bold mb-0.5">新規登録</h3>
            <p className="text-center text-navy-900/50 text-xs mb-5">アカウントを作成</p>
            <div className="space-y-3">
              {[
                { label: "お名前", required: true, placeholder: "山田 花子" },
                { label: "フリガナ", required: false, placeholder: "ヤマダ ハナコ" },
                { label: "メールアドレス", required: true, placeholder: "user@example.com" },
                { label: "パスワード", required: true, placeholder: "••••••••••" },
                { label: "パスワード（確認）", required: true, placeholder: "••••••••••" },
              ].map((f) => (
                <div key={f.label}>
                  <label className="text-xs text-navy-900/70 mb-1 flex gap-1">
                    {f.label}
                    {f.required && <span className="text-red-500">*</span>}
                  </label>
                  <div className="border border-stone-300 rounded px-3 py-2 text-sm text-navy-900/40">
                    {f.placeholder}
                  </div>
                </div>
              ))}
              <Link
                href="/auth/register"
                className="block w-full text-center py-3 bg-navy-900 text-white text-sm font-bold rounded-lg mt-2 hover:bg-navy-800 transition-colors"
              >
                新規登録
              </Link>
              <p className="text-center text-xs text-navy-900/50">
                既にアカウントをお持ちの方は{" "}
                <Link href="/auth/login" className="text-navy-900 font-bold">
                  ログイン
                </Link>
              </p>
            </div>
          </div>
        </ScreenMockup>
      </div>
    ),
  },
  {
    number: 2,
    title: "メール認証",
    body: (
      <div className="space-y-4">
        <p className="text-navy-900 leading-relaxed">
          ご本人様確認のため、入力したメールアドレス宛に認証メールが送信されます。
        </p>
        <p className="text-navy-900 leading-relaxed">
          件名が「[Blooming Bell] メールアドレスの認証」というメールが届きます。メール本文内のリンクをクリックすると、認証が完了します。
        </p>
        <InfoBox>
          メールが届かない場合は、以下のポイントをご確認ください。
          <ul className="mt-2 space-y-1">
            <li>・迷惑メールフォルダや「プロモーション」タブなどに振り分けられていないか</li>
            <li>・入力したメールアドレスに誤り（空白が入っている等）がないか</li>
            <li>・ドメイン指定受信を設定されている場合は、「@blooming-bell.jp」からのメールが受信できるように設定をお願いいたします</li>
          </ul>
        </InfoBox>
        <ScreenMockup label="認証メールの例：件名「[Blooming Bell] メールアドレスの認証」のメールをご確認ください。">
          <div className="bg-white p-4 text-xs text-navy-900/80 space-y-2 font-mono">
            <p className="text-navy-900 font-bold text-sm">[Blooming Bell] メールアドレスの認証</p>
            <p className="text-navy-900/50">Blooming Bell事務局 &lt;noreply@blooming-bell.jp&gt;</p>
            <hr className="border-stone-200" />
            <p>ユーザー 様</p>
            <p>お世話になります。Blooming Bell事務局です。</p>
            <p>アカウント登録のお申し込みをいただきありがとうございます。</p>
            <p>以下のリンクをクリックして、メールアドレスの認証を完了してください。</p>
            <p className="text-blue-600 underline">https://blooming-bell.jp/verify-email?token=xxxxxxxxxxxxxxxx</p>
            <p className="text-navy-900/50">※このリンクは24時間有効です。</p>
          </div>
        </ScreenMockup>
        <ScreenMockup label="認証完了後の画面例：表示された案内に従ってログインへ進みます。">
          <div className="bg-white p-8 text-center">
            <p className="text-gold-400 font-bold text-lg mb-4">✦ Blooming Bell</p>
            <h3 className="text-navy-900 font-bold mb-3">メール認証</h3>
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
              <span className="text-green-600 text-xl">✓</span>
            </div>
            <p className="text-navy-900/60 text-sm mb-4">Email verified successfully</p>
            <Link
              href="/auth/login"
              className="text-navy-900 font-bold text-sm underline"
            >
              ログインへ
            </Link>
          </div>
        </ScreenMockup>
      </div>
    ),
  },
  {
    number: 3,
    title: "ログインと基本情報の確認",
    body: (
      <div className="space-y-4">
        <p className="text-navy-900 leading-relaxed">
          認証完了後、いよいよマイページをご利用いただけます。
        </p>
        <p className="text-navy-900 leading-relaxed">
          ログイン画面にて、手順1で設定した「メールアドレス」と「パスワード」を入力してログインしてください。
        </p>
        <p className="text-navy-900 leading-relaxed">
          ログイン後、画面右上にご登録いただいたお名前が表示されます。
        </p>
        <ScreenMockup label="ログイン画面の例：登録したメールアドレスとパスワードを入力します。">
          <div className="bg-white p-6">
            <p className="text-center text-gold-400 font-bold text-lg mb-1">✦ Blooming Bell</p>
            <h3 className="text-center text-navy-900 font-bold mb-0.5">ログイン</h3>
            <p className="text-center text-navy-900/50 text-xs mb-5">アカウントにログイン</p>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-navy-900/70 mb-1 block">メールアドレス</label>
                <div className="border border-stone-300 rounded px-3 py-2 text-sm text-navy-900/40">user@example.com</div>
              </div>
              <div>
                <label className="text-xs text-navy-900/70 mb-1 block">パスワード</label>
                <div className="border border-gold-400 rounded px-3 py-2 text-sm text-navy-900/40">••••••••••</div>
                <p className="text-right text-xs text-navy-900/50 mt-1">パスワードをお忘れですか？</p>
              </div>
              <div className="py-2.5 bg-navy-900 text-white text-sm font-bold rounded-lg text-center">ログイン</div>
              <p className="text-center text-xs text-navy-900/50">
                アカウントをお持ちでない方は{" "}
                <span className="text-navy-900 font-bold">新規登録</span>
              </p>
            </div>
          </div>
        </ScreenMockup>
        <ScreenMockup label="マイページ画面の例：お名前や電話番号はマイページからいつでも変更できます。">
          <div className="bg-white p-4">
            <p className="text-sm font-bold text-navy-900 mb-3">マイページ</p>
            <div className="border border-stone-200 rounded-lg p-3 text-xs space-y-2">
              <p className="font-bold text-navy-900 text-sm mb-2">アカウント情報</p>
              {[
                { label: "お名前", value: "Blooming ユーザー", action: "変更" },
                { label: "メールアドレス", value: "user@example.com", action: null },
                { label: "電話番号", value: "未登録", action: "登録", actionStyle: "text-blue-600" },
                { label: "メール認証", value: null, badge: "認証済み" },
                { label: "登録日", value: "2026年4月19日", action: null },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between">
                  <span className="text-navy-900/50 w-24 shrink-0">{row.label}</span>
                  <div className="flex items-center gap-2">
                    {row.badge ? (
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">{row.badge}</span>
                    ) : (
                      <span className={row.actionStyle ?? "text-navy-900"}>{row.value}</span>
                    )}
                    {row.action && <span className={`text-xs ${row.actionStyle ?? "text-navy-900/40"}`}>{row.action}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScreenMockup>
      </div>
    ),
  },
  {
    number: 4,
    title: "お支払い情報・ご契約内容の確認",
    body: (
      <div className="space-y-4">
        <p className="text-navy-900 leading-relaxed">
          マイページでは、現在ご利用中のサービス内容やお支払いに関する情報をご確認いただけます。
        </p>
        <ul className="space-y-2">
          <BulletItem>
            お支払い情報の登録：クレジットカード情報をあらかじめご登録いただくことで、次回以降のお申込み手続きがスムーズになります。「カードを登録する」のボタンから、カード情報をご登録ください。
          </BulletItem>
          <BulletItem>
            ご契約プランの確認：現在ご利用中のVRプランやサービスが表示されます。
          </BulletItem>
          <BulletItem>
            チケットの確認：VR体験チケット等の残数がある場合、その内容と枚数をご確認いただけます。
          </BulletItem>
        </ul>
        <ScreenMockup label="お支払い情報の例：クレジットカードを登録しておくと、次回以降のお手続きがスムーズです。">
          <div className="bg-white p-4 text-xs space-y-2">
            <p className="font-bold text-navy-900 text-sm">クレジットカード</p>
            <div className="bg-blue-50 text-blue-800 p-2 rounded text-xs leading-relaxed">
              カード情報は国際セキュリティ基準（PCI DSS）に準拠した決済サービスが安全に管理します。カード番号などの機密情報が当サイトのサーバーに保存されることはありません。
            </div>
            <p className="text-navy-900/60">クレジットカードを登録すると、VRサービスのお支払いがスムーズになります。</p>
            <button className="px-4 py-2 bg-navy-900 text-white text-xs rounded-lg">カードを登録する</button>
          </div>
        </ScreenMockup>
        <ScreenMockup label="ご契約プランの表示例：ご利用中のプランが表示されます。">
          <div className="bg-white p-4 text-xs space-y-3">
            <div className="border border-stone-200 rounded-lg p-3">
              <p className="font-bold text-navy-900 text-sm mb-1">ご利用中のサービス</p>
              <p className="text-navy-900/40">現在ご利用中のサービスはありません。</p>
            </div>
            <div className="border border-stone-200 rounded-lg p-3">
              <p className="font-bold text-navy-900 text-sm mb-2">チケット残高</p>
              <span className="bg-stone-100 text-navy-900 px-3 py-1 rounded-full text-xs font-medium">
                VR体験チケット　5枚
              </span>
            </div>
          </div>
        </ScreenMockup>
      </div>
    ),
  },
  {
    number: 5,
    title: "体験履歴・購入情報の確認",
    body: (
      <div className="space-y-4">
        <p className="text-navy-900 leading-relaxed">
          マイページでは、ご購入・ご利用の履歴や、今後のVR体験に必要な情報をご確認いただけます。
        </p>
        <ul className="space-y-2">
          <BulletItem>
            購入履歴と領収書：VR体験やサービスのご購入履歴が表示され、該当画面から領収書の発行・確認が可能です。
          </BulletItem>
          <BulletItem>
            体験情報の確認：「体験情報」のボタンから、VRセッションのアクセスコードや、配布資料（ある場合のみ）をご確認いただけます。
          </BulletItem>
        </ul>
        <InfoBox>
          VRセッションのアクセスコードや配布資料（該当がある場合のみ）は、各セッション開始日の3日前以降にシステム上に更新されます。更新されましたら開催案内のメールもお送りいたしますので、開催日が近づくまでお待ちください。
        </InfoBox>
        <ScreenMockup label="購入・体験履歴の表示例：日付・サービス名・金額・支払方法・領収書発行ボタンが並びます。">
          <div className="bg-white p-4">
            <p className="font-bold text-navy-900 text-sm mb-3">購入・体験履歴</p>
            <p className="text-xs text-navy-900/50 mb-2">VR体験・サービス等</p>
            <div className="text-xs">
              <div className="grid grid-cols-3 gap-2 text-navy-900/50 border-b border-stone-200 pb-1 mb-2">
                <span>日付</span><span>サービス名</span><span>金額・支払方法</span>
              </div>
              <div className="grid grid-cols-3 gap-2 items-start">
                <span className="text-navy-900/70">2026年4月19日</span>
                <span className="text-navy-900">タロット占いVRセッション</span>
                <span>3,300円 クレジット <span className="text-blue-600 underline">体験情報</span> <span className="text-blue-600 underline">領収書</span></span>
              </div>
            </div>
          </div>
        </ScreenMockup>
      </div>
    ),
  },
  {
    number: 6,
    title: "パスワードの変更",
    body: (
      <div className="space-y-4">
        <p className="text-navy-900 leading-relaxed">
          セキュリティのため、パスワードはいつでも変更可能です。
        </p>
        <p className="text-navy-900 leading-relaxed">
          マイページのメニューよりパスワードの変更が行えます。現在のパスワードと新しいパスワードを入力し、変更ボタンを押してください。
        </p>
        <Link
          href="/mypage"
          className="inline-block mt-2 px-6 py-3 bg-navy-900 text-white text-sm font-bold rounded-full hover:bg-navy-800 transition-colors"
        >
          マイページへ
        </Link>
      </div>
    ),
  },
];

export default function StartPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero */}
      <section className="bg-navy-950 text-center py-20 px-4">
        <p className="text-gold-400 text-xs tracking-widest uppercase mb-4">
          GETTING STARTED
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
          アカウント登録方法
        </h1>
        <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          新システムへのご登録手順とマイページのご確認方法をご案内いたします。
          本ページに沿って初期設定をお進めください。
        </p>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-12 space-y-6">
        {/* Can-do summary */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-navy-900 font-bold text-lg mb-4">
            このページでできること
          </h2>
          <ul className="space-y-3">
            <BulletItem>Blooming BellアカウントへのVRワールドアクセス登録とメール認証</BulletItem>
            <BulletItem>マイページへのログインとご登録情報の確認・変更</BulletItem>
            <BulletItem>VR体験履歴・お支払い情報・サービスの確認方法</BulletItem>
          </ul>
        </div>

        {/* Prerequisites */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-navy-900 font-bold text-lg mb-4">
            事前にご準備いただくもの
          </h2>
          <ul className="space-y-3">
            <BulletItem>
              メールアドレス（これまでにBlooming Bellのサービスをご購入くださった方は、以前にご登録いただいたものと同じメールアドレス）
            </BulletItem>
            <BulletItem>
              上記メールアドレスの受信確認ができる環境（スマートフォンやパソコン）
            </BulletItem>
          </ul>
        </div>

        {/* Steps */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-navy-900 font-bold text-xl text-center mb-8">
            ご利用開始の手順
          </h2>
          <div className="space-y-10">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-gold-400 flex items-center justify-center text-navy-950 font-bold text-lg">
                  {step.number}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-navy-900 font-bold text-lg mb-3">
                    {step.title}
                  </h3>
                  {step.body}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-6">
          <Link
            href="/auth/register"
            className="inline-block px-10 py-4 bg-navy-950 text-white font-bold rounded-full hover:bg-navy-800 transition-colors text-lg"
          >
            アカウントを登録する
          </Link>
          <p className="text-navy-900/40 text-sm mt-4">
            既にアカウントをお持ちの方は{" "}
            <Link href="/auth/login" className="text-navy-900 underline">
              ログイン
            </Link>
          </p>
        </div>

        {/* Post-setup checklist */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-navy-900 font-bold text-xl mb-6 text-center">
            設定完了後にご確認いただきたいこと
          </h2>
          <div className="border border-gold-400/30 bg-gold-400/5 rounded-xl p-5 space-y-4">
            {[
              "マイページのお名前や電話番号が最新の情報になっているか",
              "これまでにBlooming Bellのサービスをご購入いただいた場合は、それらが購入履歴に表示されているか",
            ].map((item) => (
              <div key={item} className="flex gap-3">
                <span className="text-gold-400 font-bold mt-0.5 shrink-0">✓</span>
                <span className="text-navy-900 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Troubleshooting FAQ */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-navy-900 font-bold text-xl mb-6">
            困ったときの確認ポイント
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "ログインができません",
                a: "入力したメールアドレスやパスワードが半角になっているか、前後に不要なスペースが入っていないかをご確認ください。",
              },
              {
                q: "過去の購入履歴やチケット残高が表示されません",
                a: "新規登録時に、過去のお申込み時と異なるメールアドレスをご入力された可能性があります。過去のメールアドレスがお分かりになる場合は、そちらで再度ご登録をお試しください。上記でも解決しない場合は、お問い合わせフォームよりご連絡ください。",
              },
              {
                q: "登録メールアドレスを変更したい",
                a: "現在、マイページからメールアドレスの変更はできません。ご変更をご希望の場合は、お問い合わせフォームよりご連絡いただけますようお願いいたします。",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-stone-50 rounded-xl p-5">
                <p className="font-bold text-navy-900 mb-2">
                  <span className="text-gold-400 mr-1">Q.</span>
                  {faq.q}
                </p>
                <p className="text-navy-900 leading-relaxed text-sm">
                  <span className="text-gold-400 font-bold mr-1">A.</span>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center py-4">
          <p className="text-navy-900/60 mb-4">
            ご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
          <Link
            href="/support/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-navy-950 text-white font-bold rounded-xl hover:bg-navy-800 transition-colors"
          >
            お問い合わせフォームへ →
          </Link>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-navy-900/40 pb-8 leading-relaxed">
          ※本ページに記載している画面表示や名称は、システムの更新により一部異なる場合がございます。あらかじめご了承ください。
        </p>
      </div>
    </div>
  );
}
