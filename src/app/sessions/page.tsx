import type { Metadata } from "next";
import SessionsClient from "./SessionsClient";

export const metadata: Metadata = {
  title: "VRセッションスケジュール | Blooming Bell",
  description:
    "Blooming BellのVRセッション・講座スケジュール。タロット・西洋占星術・数秘術・手相など、各種セッションをVRルームやライブ配信でご受講いただけます。",
};

export default function SessionsPage() {
  return <SessionsClient />;
}
