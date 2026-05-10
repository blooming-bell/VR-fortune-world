import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "メール認証完了 | Blooming Bell",
};

export default function VerifyEmailPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16 bg-stone-50">
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-2xl shadow-sm p-10 text-center">
          <p className="text-gold-400 font-bold text-xl mb-6">✦ Blooming Bell</p>
          <h1 className="text-navy-900 font-bold text-xl mb-4">メール認証</h1>
          <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <span className="text-green-600 text-2xl">✓</span>
          </div>
          <p className="text-navy-900/60 text-sm mb-6">Email verified successfully</p>
          <Link
            href="/auth/login"
            className="text-navy-900 font-bold text-sm underline hover:no-underline"
          >
            ログインへ
          </Link>
        </div>
      </div>
    </div>
  );
}
