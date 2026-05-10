import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ログイン | Blooming Bell",
};

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16 bg-stone-50">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <p className="text-center text-gold-400 font-bold text-xl mb-1">✦ Blooming Bell</p>
          <h1 className="text-center text-navy-900 font-bold text-xl mb-1">ログイン</h1>
          <p className="text-center text-navy-900/50 text-sm mb-8">アカウントにログイン</p>

          <form className="space-y-4" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm text-navy-900/70 mb-1">
                メールアドレス
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
                パスワード
              </label>
              <input
                id="password"
                type="password"
                name="password"
                autoComplete="current-password"
                required
                placeholder="••••••••••"
                className="w-full border border-stone-300 rounded-lg px-3 py-2.5 text-sm text-navy-900 placeholder:text-navy-900/30 focus:outline-none focus:border-gold-400"
              />
              <div className="text-right mt-1">
                <Link
                  href="/auth/forgot-password"
                  className="text-xs text-navy-900/50 hover:text-navy-900 underline"
                >
                  パスワードをお忘れですか？
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-navy-900 text-white font-bold rounded-lg text-sm hover:bg-navy-800 transition-colors mt-2"
            >
              ログイン
            </button>
          </form>

          <p className="text-center text-sm text-navy-900/50 mt-6">
            アカウントをお持ちでない方は{" "}
            <Link href="/auth/register" className="text-navy-900 font-bold hover:underline">
              新規登録
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
