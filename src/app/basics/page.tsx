import type { Metadata } from "next";
import BasicsClient from "./BasicsClient";

export const metadata: Metadata = {
  title: "基礎知識 | Blooming Bell",
  description:
    "西洋占星術の基本を学ぶ。占星術とは何か、ホロスコープの構成要素、3種類のチャートなどを分かりやすく解説します。",
};

export default function BasicsPage() {
  return <BasicsClient />;
}
