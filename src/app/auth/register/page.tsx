import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "新規登録 | Blooming Bell",
};

export default function RegisterPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16 bg-stone-50">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <p className="text-center text-gold-400 font-bold text-xl mb-1">✦ Blooming Bell</p>
          <h1 className="text-center text-navy-900 font-bold text-xl mb-1">新規登録</h1>
          <p className="text-center text-navy-900/50 text-sm mb-8">アカウントを作成</p>

          <form className="space-y-4" action="#" method="POST">
            <div>
              <label htmlFor="name" className="block text-sm text-navy-900/70 mb-1">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                autoComplete="name"
                required
                placeholder="山田 花子"
                className="w-full border border-stone-300 rounded-lg px-3 py-2.5 text-sm text-navy-900 placeholder:text-navy-900/30 focus:outline-none focus:border-gold-400"
              />
            </div>

            <div>
              <label htmlFor="furigana" className="block text-sm text-navy-900/70 mb-1">
                フリガナ
              </label>
              <input
                id="furigana"
                type="text"
                name="furigana"
                placeholder="ヤマダ ハナコ"
                className="w-full border border-stone-300 rounded-lg px-3 py-2.5 text-sm text-navy-900 placeholder:text-navy-900/30 focus:outline-none focus:border-gold-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-navy-900/70 mb-1">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder="user@example.com"
                className="w-full border border-stone-300 rounded-lg px-3 py-2.5 text-sm text-navy-900 placeholder:text-navy-900/30 focus:outline-none focus:border-gold-400"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm text-navy-900/70 mb-1">
                パスワード <span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                type="password"
                name="password"
                autoComplete="new-password"
                required
                placeholder="8文字以上"
                className="w-full border border-stone-300 rounded-lg px-3 py-2.5 text-sm text-navy-900 placeholder:text-navy-900/30 focus:outline-none focus:border-gold-400"
              />
            </div>

            <div>
              <label htmlFor="password_confirm" className="block text-sm text-navy-900/70 mb-1">
                パスワード（確認） <span className="text-red-500">*</span>
              </label>
              <input
                id="password_confirm"
                type="password"
                name="password_confirm"
                autoComplete="new-password"
                required
                placeholder="もう一度入力"
                className="w-full border border-stone-300 rounded-lg px-3 py-2.5 text-sm text-navy-900 placeholder:text-navy-900/30 focus:outline-none focus:border-gold-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-navy-900 text-white font-bold rounded-lg text-sm hover:bg-navy-800 transition-colors mt-2"
            >
              新規登録
            </button>
          </form>

          <p className="text-center text-sm text-navy-900/50 mt-6">
            既にアカウントをお持ちの方は{" "}
            <Link href="/auth/login" className="text-navy-900 font-bold hover:underline">
              ログイン
            </Link>
          </p>
        </div>

        <p className="text-center text-xs text-navy-900/40 mt-6">
          登録方法のご案内は{" "}
          <Link href="/start" className="underline hover:text-navy-900/60">
            はじめての方へ
          </Link>
          {" "}をご覧ください。
        </p>
      </div>
    </div>
  );
}
