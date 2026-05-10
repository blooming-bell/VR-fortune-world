import type { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "よくあるご質問 | Blooming Bell",
  description:
    "Blooming Bellに関するよくあるご質問をまとめています。VRセッション・ORACLE・お申込・お支払いなどカテゴリ別にご確認いただけます。",
};

export default function FaqPage() {
  return <FaqClient />;
}
