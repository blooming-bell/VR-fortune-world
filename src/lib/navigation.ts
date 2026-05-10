export type NavItem = {
  label: string;
  href: string;
};

export type NavSection = {
  title: string;
  items: NavItem[];
};

export const companyInfo = {
  name: "Blooming Bell",
  tagline: "VRで占いと、深く出会う。",
  address: "",
  tel: "",
  socialLinks: {
    twitter: "#",
    instagram: "#",
    youtube: "#",
    tiktok: "#",
  },
};

export const footerNav: NavSection[] = [
  {
    title: "講座案内",
    items: [
      { label: "VRセッションスケジュール", href: "/sessions" },
      { label: "基礎コース", href: "/vr/courses" },
      { label: "アカデミー", href: "/about/academy" },
      { label: "録画アーカイブ", href: "/about/academy/recordings" },
      { label: "認定占い師メンバー", href: "/about/academy/members" },
    ],
  },
  {
    title: "ツール・サービス",
    items: [
      { label: "AI鑑定 - ORACLE", href: "/tools/oracle" },
      { label: "占いの部屋", href: "/fortune/tellers/room" },
      { label: "鑑定サービス", href: "/fortune/tellers" },
      { label: "運勢カレンダー", href: "/fortune/calendar" },
      { label: "書籍・テキスト", href: "/books" },
    ],
  },
  {
    title: "Blooming Bellについて",
    items: [
      { label: "VRで始める", href: "/start" },
      { label: "よくある質問", href: "/faq" },
      { label: "お問い合わせ", href: "/contact" },
      { label: "特定商取引法表記", href: "/legal/tokusho" },
      { label: "プライバシーポリシー", href: "/legal/privacy" },
      { label: "利用規約", href: "/legal/terms" },
    ],
  },
];

export const headerNav: NavSection[] = [
  {
    title: "VR体験・講座",
    items: [
      { label: "VRで始める", href: "/start" },
      { label: "セッションスケジュール", href: "/sessions" },
      { label: "基礎コース", href: "/vr/courses" },
      { label: "アカデミー", href: "/about/academy" },
    ],
  },
  {
    title: "占う・鑑定",
    items: [
      { label: "占い師・サービス一覧", href: "/fortune/tellers" },
      { label: "タロット鑑定", href: "/fortune/tellers#tarot" },
      { label: "ホロスコープ鑑定", href: "/fortune/tellers#horoscope" },
      { label: "Blooming Bell占いの部屋", href: "/fortune/tellers#bb-room" },
    ],
  },
  {
    title: "ツール",
    items: [
      { label: "AI鑑定 - ORACLE", href: "/tools/oracle" },
      { label: "運勢カレンダー", href: "/fortune/calendar" },
      { label: "書籍・テキスト", href: "/books" },
    ],
  },
  {
    title: "サポート",
    items: [
      { label: "よくある質問", href: "/faq" },
      { label: "お問い合わせ", href: "/contact" },
    ],
  },
];
