import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | Blooming Bell",
  description:
    "VRセッション・鑑定・ORACLEに関するご質問など、お気軽にお問い合わせください。",
};

const subjects = [
  "VRセッション・講座について",
  "基礎コースについて",
  "アカデミーについて",
  "お申込・お支払・キャンセルについて",
  "ORACLEについて",
  "運勢カレンダーについて",
  "ログイン・マイページについて",
  "取材・メディア掲載",
  "占い師・講師登録について",
  "その他",
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-20 text-center">
        <div className="px-4">
          <p className="text-gold-400 text-xs tracking-[0.3em] mb-4 uppercase font-bold">CONTACT</p>
          <h1 className="text-white font-bold text-4xl md:text-5xl mb-4">お問い合わせ</h1>
          <p className="text-white/60 text-base">
            VRセッション・鑑定に関するご質問など、お気軽にお問い合わせください。
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-navy-950 border-b border-white/10 px-4 py-3">
        <nav className="max-w-3xl mx-auto text-white/40 text-xs space-x-1">
          <Link href="/" className="hover:text-white transition-colors">ホーム</Link>
          <span>/</span>
          <span className="text-white/70">お問い合わせ</span>
        </nav>
      </div>

      {/* Form section */}
      <section className="bg-navy-950 px-4 py-12">
        <div className="max-w-xl mx-auto">
          {/* FAQ link */}
          <div className="bg-navy-900 border border-white/10 rounded-xl p-5 mb-8 text-center">
            <p className="text-white/60 text-sm mb-3">
              よくあるご質問で解決する場合があります。まずこちらをご確認ください。
            </p>
            <Link
              href="/faq"
              className="text-gold-400 text-sm font-bold hover:text-gold-300 underline transition-colors"
            >
              よくあるご質問を見る →
            </Link>
          </div>

          {/* Form card */}
          <div className="bg-navy-900 border border-white/10 rounded-2xl p-8">
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              以下のフォームにご記入の上、送信してください。
              <span className="text-red-400"> *</span> は必須項目です。
            </p>

            <form className="space-y-5" action="#" method="POST">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm text-white/70 mb-1.5 font-bold">
                  お名前 <span className="text-red-400">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  placeholder="山田 花子"
                  className="w-full bg-navy-950 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-gold-400/60 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm text-white/70 mb-1.5 font-bold">
                  メールアドレス <span className="text-red-400">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="example@email.com"
                  className="w-full bg-navy-950 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-gold-400/60 transition-colors"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm text-white/70 mb-1.5 font-bold">
                  件名 <span className="text-red-400">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full bg-navy-950 border border-white/20 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-400/60 transition-colors appearance-none"
                >
                  <option value="" disabled selected className="text-white/30">
                    -- 選択してください --
                  </option>
                  {subjects.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm text-white/70 mb-1.5 font-bold">
                  お問い合わせ内容 <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="お問い合わせ内容をご記入ください"
                  className="w-full bg-navy-950 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-gold-400/60 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gold-400 text-navy-950 font-bold rounded-lg text-sm hover:bg-gold-300 transition-colors mt-2"
              >
                送信する
              </button>
            </form>
          </div>

          <p className="text-white/30 text-xs text-center mt-6 leading-relaxed">
            ご返信は通常3営業日以内を目安としております。
            <br />
            お急ぎの場合は、よくあるご質問もご確認ください。
          </p>
        </div>
      </section>
    </>
  );
}
