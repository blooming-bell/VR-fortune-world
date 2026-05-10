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
  tagline: "VR占いワールド",
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
    title: "VR体験",
    items: [
      { label: "VR体験案内", href: "/vr" },
      { label: "ワールド一覧", href: "/vr/worlds" },
      { label: "キャラクター占い師", href: "/vr/characters" },
      { label: "スペシャルイベント", href: "/vr/events" },
      { label: "体験ログ（会員）", href: "/mypage/logs" },
    ],
  },
  {
    title: "占いツール・サービス",
    items: [
      { label: "AI占い - ORACLE", href: "/tools/oracle" },
      { label: "タロット占い", href: "/tools/tarot" },
      { label: "星座占い", href: "/tools/horoscope" },
      { label: "数秘術", href: "/tools/numerology" },
      { label: "手相診断", href: "/tools/palmistry" },
      { label: "運勢カレンダー", href: "/tools/calendar" },
      { label: "占いの教科書", href: "/learn" },
      { label: "ショップ", href: "/shop" },
    ],
  },
  {
    title: "Blooming Bellについて",
    items: [
      { label: "ミッション", href: "/about/mission" },
      { label: "開発チーム", href: "/about/team" },
      { label: "世界観・ロア", href: "/about/lore" },
      { label: "ユーザーの声", href: "/about/reviews" },
    ],
  },
  {
    title: "サポート",
    items: [
      { label: "よくある質問", href: "/support/faq" },
      { label: "お問い合わせ", href: "/support/contact" },
      { label: "特定商取引法表記", href: "/legal/tokusho" },
      { label: "プライバシーポリシー", href: "/legal/privacy" },
      { label: "利用規約", href: "/legal/terms" },
    ],
  },
];

export const headerNav: NavSection[] = [
  {
    title: "VR体験",
    items: [
      { label: "VR体験案内", href: "/vr" },
      { label: "ワールド一覧", href: "/vr/worlds" },
      { label: "キャラクター占い師", href: "/vr/characters" },
      { label: "スペシャルイベント", href: "/vr/events" },
    ],
  },
  {
    title: "占いツール",
    items: [
      { label: "AI占い - ORACLE", href: "/tools/oracle" },
      { label: "タロット占い", href: "/tools/tarot" },
      { label: "星座占い", href: "/tools/horoscope" },
      { label: "数秘術", href: "/tools/numerology" },
      { label: "手相診断", href: "/tools/palmistry" },
      { label: "運勢カレンダー", href: "/tools/calendar" },
    ],
  },
  {
    title: "学ぶ・購入",
    items: [
      { label: "占いの教科書", href: "/learn" },
      { label: "ショップ", href: "/shop" },
    ],
  },
  {
    title: "Blooming Bellについて",
    items: [
      { label: "ミッション", href: "/about/mission" },
      { label: "開発チーム", href: "/about/team" },
      { label: "世界観・ロア", href: "/about/lore" },
      { label: "ユーザーの声", href: "/about/reviews" },
    ],
  },
];
