import type { ComponentType } from "react";
import {
  LayoutGrid,
  MessagesSquare,
  PenSquare,
  Palette,
  Code2,
  Clapperboard,
  Megaphone,
  UserSearch,
  TrendingUp,
  Bot,
  Wallet,
  FolderKanban,
  Briefcase,
  Share2,
  Laptop,
  Languages as LanguagesIcon,
  AtSign,
  Lock,
  Sparkles,
} from "lucide-react";
import {
  InstagramIcon,
  TikTokIcon,
  XIcon,
  YoutubeIcon,
  DiscordIcon,
  TelegramIcon,
  WhatsAppIcon,
  RedditIcon,
} from "@/components/icons/SocialIcons";

export interface CategoryPill {
  key: string;
  emoji: string;
  label: string;
  bgClass: string;
  textClass: string;
}

export const CATEGORY_PILLS: CategoryPill[] = [
  { key: "all", emoji: "🛠", label: "All Categories", bgClass: "bg-neutral-100", textClass: "text-neutral-600" },
  { key: "chatting", emoji: "💬", label: "Chatting", bgClass: "bg-primary-50", textClass: "text-primary-600" },
  { key: "copywriting", emoji: "✍️", label: "Copywriting", bgClass: "bg-neutral-100", textClass: "text-neutral-600" },
  { key: "graphic-design", emoji: "🎨", label: "Graphic Design", bgClass: "bg-danger-50", textClass: "text-danger-600" },
  { key: "development", emoji: "👨‍💻", label: "Development", bgClass: "bg-success-50", textClass: "text-success-600" },
  { key: "editing", emoji: "🎬", label: "Editing", bgClass: "bg-danger-50", textClass: "text-danger-600" },
  { key: "marketing", emoji: "📈", label: "Marketing", bgClass: "bg-warning-50", textClass: "text-warning-600" },
  { key: "recruitment", emoji: "🧑‍💼", label: "Recruitment", bgClass: "bg-warning-50", textClass: "text-warning-600" },
  { key: "sales", emoji: "💰", label: "Sales", bgClass: "bg-success-50", textClass: "text-success-600" },
  { key: "ai", emoji: "🤖", label: "AI", bgClass: "bg-primary-50", textClass: "text-primary-600" },
  { key: "finance", emoji: "💵", label: "Finance", bgClass: "bg-success-50", textClass: "text-success-600" },
  { key: "general", emoji: "🗂", label: "General", bgClass: "bg-neutral-100", textClass: "text-neutral-600" },
];

/** Accent used for the landing page's job-card left border + price color per category. */
const CATEGORY_ACCENT: Record<string, "primary" | "warning" | "danger" | "success"> = {
  chatting: "primary",
  marketing: "warning",
  sales: "success",
  editing: "danger",
  recruitment: "warning",
  general: "primary",
  copywriting: "primary",
  ai: "success",
  finance: "success",
  "graphic-design": "danger",
  development: "success",
};

export function getAccentForCategory(categoryKey: string): "primary" | "warning" | "danger" | "success" {
  return CATEGORY_ACCENT[categoryKey] ?? "primary";
}

/** Lucide icon per category — used by both the home page's category sidebar and the Find Jobs
 * page's category pills, so the same icon set appears in both places. */
const CATEGORY_ICON: Record<string, ComponentType<{ className?: string }>> = {
  all: LayoutGrid,
  chatting: MessagesSquare,
  copywriting: PenSquare,
  "graphic-design": Palette,
  development: Code2,
  editing: Clapperboard,
  marketing: Megaphone,
  recruitment: UserSearch,
  sales: TrendingUp,
  ai: Bot,
  finance: Wallet,
  general: FolderKanban,
};

export function getCategoryIcon(categoryKey: string): ComponentType<{ className?: string }> {
  return CATEGORY_ICON[categoryKey] ?? FolderKanban;
}

/** Lucide/brand icon per social platform — generic Lucide fallback for platforms with no brand mark. */
const PLATFORM_ICON: Record<string, ComponentType<{ className?: string }>> = {
  Instagram: InstagramIcon,
  TikTok: TikTokIcon,
  "Twitter / X": XIcon,
  YouTube: YoutubeIcon,
  Discord: DiscordIcon,
  Telegram: TelegramIcon,
  WhatsApp: WhatsAppIcon,
  Reddit: RedditIcon,
  Threads: AtSign,
  OnlyFans: Lock,
  Fansly: Sparkles,
};

export function getPlatformIcon(platform: string): ComponentType<{ className?: string }> {
  return PLATFORM_ICON[platform] ?? Share2;
}

export const EMPLOYMENT_TYPE_ICON = Briefcase;
export const SOCIAL_MEDIA_ICON = Share2;
export const SOFTWARE_ICON = Laptop;
export const LANGUAGE_ICON = LanguagesIcon;

export const EMPLOYMENT_TYPES = ["Full-time", "Part-time", "Contract"];

export const SOCIAL_MEDIA_OPTIONS = [
  "Instagram", "TikTok", "Twitter / X", "Threads", "YouTube",
  "Discord", "Telegram", "WhatsApp", "Reddit", "OnlyFans", "Fansly",
];

export const SOFTWARE_OPTIONS = ["Chatting Tools", "CRM Platforms", "Scheduling Tools", "Design Tools"];

export const LANGUAGE_OPTIONS = ["English", "Tagalog", "French", "German", "Chinese"];

export interface JobListing {
  id: string;
  title: string;
  categoryKey: string;
  categoryLabel: string;
  employer: string;
  employerBlurb: string;
  type: string;
  compensation: string;
  compensationShort: string;
  isPremium: boolean;
  applicantCount: number;
  platforms: string[];
  software: string[];
  language: string;
  /** ISO 3166-1 alpha-2 country code for rendering a real SVG flag; null for remote/global roles. */
  countryCode: string | null;
  location: string;
  postedLabel: string;
  postedHoursAgo: number;
  about: string;
  responsibilities: string[];
  requirements: string[];
}

export const JOBS: JobListing[] = [
  {
    id: "live-chat-agent",
    title: "Live Chat Agent — Fan Platform",
    categoryKey: "chatting",
    categoryLabel: "Chatting",
    employer: "Nova Talent Agency",
    employerBlurb: "Nova Talent Agency manages online presence and fan engagement for a roster of independent creators, handling the day-to-day messaging so creators can focus on content.",
    type: "Full-time",
    compensation: "$500 – $800 monthly",
    compensationShort: "$500–$800/mo",
    isPremium: true,
    applicantCount: 42,
    platforms: ["Instagram", "OnlyFans", "Discord"],
    software: ["Chatting Tools", "CRM Platforms"],
    language: "English",
    countryCode: "US",
    location: "United States",
    postedLabel: "Posted 2 hours ago",
    postedHoursAgo: 2,
    about: "We're looking for a friendly, fast-typing chat agent to manage direct-message conversations across our creators' fan platforms. You'll keep conversations warm, upsell where appropriate, and flag anything that needs a creator's personal attention.",
    responsibilities: [
      "Respond to fan messages across Instagram DMs, OnlyFans, and Discord within agreed response times",
      "Maintain each creator's tone of voice and persona guidelines",
      "Track engagement and flag high-value fans to the account manager",
      "Log shift notes and handoffs for the next agent on rotation",
    ],
    requirements: [
      "Fluent written English with strong typing speed",
      "Reliable internet connection and availability for evening shifts (US time zones)",
      "Prior chat, customer support, or community moderation experience preferred",
      "Comfortable working with fan-platform content guidelines",
    ],
  },
  {
    id: "social-media-moderator",
    title: "Social Media Moderator",
    categoryKey: "marketing",
    categoryLabel: "Marketing",
    employer: "Halo Creators Collective",
    employerBlurb: "Halo Creators Collective runs social growth and community management for a network of lifestyle and fan-platform creators.",
    type: "Part-time",
    compensation: "$3 hourly",
    compensationShort: "$3/hr",
    isPremium: false,
    applicantCount: 18,
    platforms: ["TikTok", "Instagram"],
    software: ["Scheduling Tools", "Design Tools"],
    language: "English",
    countryCode: "PH",
    location: "Philippines",
    postedLabel: "Posted 40 minutes ago",
    postedHoursAgo: 0.67,
    about: "Moderate comments and DMs across TikTok and Instagram for a roster of fast-growing creator accounts, keeping communities positive and on-brand.",
    responsibilities: [
      "Monitor and moderate comments across TikTok and Instagram posts daily",
      "Respond to routine DMs and escalate sensitive ones to the creator",
      "Report recurring themes or issues in weekly summaries",
      "Help schedule posts using the team's content calendar",
    ],
    requirements: [
      "Comfortable working across TikTok and Instagram natively and via scheduling tools",
      "Good judgment on what needs escalation vs. routine response",
      "Available for flexible part-time hours",
    ],
  },
  {
    id: "sales-closer-fan-chatting",
    title: "Sales Closer — Fan Chatting",
    categoryKey: "sales",
    categoryLabel: "Sales",
    employer: "Kindred Media Group",
    employerBlurb: "Kindred Media Group specializes in monetization strategy and sales-driven chat operations for fan-platform creators.",
    type: "Contract",
    compensation: "100% commission based on performance",
    compensationShort: "Commission-based",
    isPremium: false,
    applicantCount: 63,
    platforms: ["Fansly", "Telegram"],
    software: ["CRM Platforms", "Chatting Tools"],
    language: "English",
    countryCode: null,
    location: "Remote",
    postedLabel: "Posted 5 hours ago",
    postedHoursAgo: 5,
    about: "Close sales in fan-platform chat conversations, converting warm leads into paying subscribers and upsells across Fansly and Telegram.",
    responsibilities: [
      "Convert warm fan leads into paid subscriptions and custom content sales",
      "Follow proven scripts while adapting tone to each fan's personality",
      "Track conversion rates and report performance weekly",
      "Coordinate handoffs with chat agents during shift changes",
    ],
    requirements: [
      "Proven sales or closing experience, ideally in a chat-based environment",
      "Self-motivated — this role is 100% commission",
      "Comfortable with Fansly and Telegram workflows",
    ],
  },
  {
    id: "short-form-video-editor",
    title: "Short-Form Video Editor",
    categoryKey: "editing",
    categoryLabel: "Editing",
    employer: "Bright Loop Studio",
    employerBlurb: "Bright Loop Studio produces short-form video content for creators across YouTube Shorts and TikTok.",
    type: "Full-time",
    compensation: "$30 – $100 weekly",
    compensationShort: "$30–$100/wk",
    isPremium: false,
    applicantCount: 27,
    platforms: ["YouTube", "TikTok"],
    software: ["Design Tools"],
    language: "English",
    countryCode: "DE",
    location: "Germany",
    postedLabel: "Posted 1 day ago",
    postedHoursAgo: 24,
    about: "Edit fast-paced short-form video content from raw footage into polished, on-brand clips ready for YouTube Shorts and TikTok.",
    responsibilities: [
      "Cut raw footage into short-form videos with captions, pacing, and sound design",
      "Follow each creator's established style and brand guidelines",
      "Deliver a set number of finished clips per week",
      "Suggest trending formats and hooks based on platform trends",
    ],
    requirements: [
      "Portfolio of short-form edits for YouTube Shorts or TikTok",
      "Proficiency with a modern video editor (Premiere, CapCut, or similar)",
      "Strong sense of pacing and trend awareness",
    ],
  },
  {
    id: "talent-recruitment-specialist",
    title: "Talent Recruitment Specialist",
    categoryKey: "recruitment",
    categoryLabel: "Recruitment",
    employer: "Redstar Talent Partners",
    employerBlurb: "Redstar Talent Partners sources and vets remote talent for fan-platform agencies worldwide.",
    type: "Full-time",
    compensation: "$3 – $5 hourly & 8% – 10%",
    compensationShort: "$3–$5/hr + 8–10%",
    isPremium: true,
    applicantCount: 91,
    platforms: ["WhatsApp", "Discord"],
    software: ["CRM Platforms"],
    language: "English",
    countryCode: null,
    location: "Remote",
    postedLabel: "Posted 3 hours ago",
    postedHoursAgo: 3,
    about: "Source, screen, and place remote chatters, editors, and virtual assistants for a growing roster of fan-platform agency clients.",
    responsibilities: [
      "Source candidates across job boards and referral networks",
      "Screen applicants via WhatsApp and Discord interviews",
      "Match qualified candidates to open agency roles",
      "Track placements and follow up on retention",
    ],
    requirements: [
      "Prior recruitment or talent-sourcing experience",
      "Strong communication skills across chat-based interviews",
      "Comfortable working independently in a remote role",
    ],
  },
  {
    id: "virtual-assistant-admin-scheduling",
    title: "Virtual Assistant — Admin & Scheduling",
    categoryKey: "general",
    categoryLabel: "General",
    employer: "Palm & Co. Agency",
    employerBlurb: "Palm & Co. Agency provides administrative and scheduling support for independent creators and small agencies.",
    type: "Part-time",
    compensation: "$400 – $650 monthly",
    compensationShort: "$400–$650/mo",
    isPremium: false,
    applicantCount: 34,
    platforms: ["Instagram", "Twitter / X"],
    software: ["Scheduling Tools"],
    language: "English",
    countryCode: "CA",
    location: "Canada",
    postedLabel: "Posted 6 hours ago",
    postedHoursAgo: 6,
    about: "Handle day-to-day admin and scheduling for a small roster of creators — calendars, content scheduling, and inbox triage.",
    responsibilities: [
      "Manage posting schedules across Instagram and Twitter / X",
      "Triage and organize inboxes, flagging anything time-sensitive",
      "Keep shared calendars and task trackers up to date",
      "Handle light research and admin requests as needed",
    ],
    requirements: [
      "Highly organized with strong attention to detail",
      "Comfortable with scheduling tools and shared calendars",
      "Available for consistent part-time hours",
    ],
  },
  {
    id: "direct-response-copywriter",
    title: "Direct-Response Copywriter",
    categoryKey: "copywriting",
    categoryLabel: "Copywriting",
    employer: "Meridian Fan Media",
    employerBlurb: "Meridian Fan Media writes conversion-focused copy for fan-platform creators' bios, captions, and promo campaigns.",
    type: "Contract",
    compensation: "$500 – $800 monthly",
    compensationShort: "$500–$800/mo",
    isPremium: true,
    applicantCount: 76,
    platforms: ["Reddit", "Threads"],
    software: [],
    language: "English",
    countryCode: null,
    location: "Remote",
    postedLabel: "Posted 12 hours ago",
    postedHoursAgo: 12,
    about: "Write high-converting captions, promo copy, and bios for fan-platform creators, tailored to Reddit and Threads audiences.",
    responsibilities: [
      "Write short-form promotional copy and captions for Reddit and Threads",
      "A/B test hooks and calls-to-action across campaigns",
      "Maintain a consistent brand voice per creator",
      "Turn around requests within agreed deadlines",
    ],
    requirements: [
      "Portfolio of direct-response or social copywriting work",
      "Strong grasp of Reddit and Threads audience tone",
      "Comfortable working to deadlines as a contractor",
    ],
  },
  {
    id: "ai-chat-training-specialist",
    title: "AI Chat Training Specialist",
    categoryKey: "ai",
    categoryLabel: "AI",
    employer: "Lumen Digital Talent",
    employerBlurb: "Lumen Digital Talent builds and trains AI-assisted chat tooling for fan-platform agencies.",
    type: "Full-time",
    compensation: "$4 hourly",
    compensationShort: "$4/hr",
    isPremium: false,
    applicantCount: 12,
    platforms: ["OnlyFans", "TikTok"],
    software: ["Chatting Tools"],
    language: "French",
    countryCode: "FR",
    location: "France",
    postedLabel: "Posted 22 hours ago",
    postedHoursAgo: 22,
    about: "Review and label chat conversations to train AI response models, helping the assistant handle more of the routine fan messaging.",
    responsibilities: [
      "Review sample fan conversations and label response quality",
      "Flag edge cases where the AI assistant needs human review",
      "Suggest tone and phrasing improvements for French-speaking audiences",
      "Collaborate with the product team on model feedback",
    ],
    requirements: [
      "Fluent in French with strong written communication skills",
      "Comfortable reviewing OnlyFans and TikTok chat content",
      "Detail-oriented with an interest in AI tooling",
    ],
  },
  {
    id: "payments-finance-assistant",
    title: "Payments & Finance Assistant",
    categoryKey: "finance",
    categoryLabel: "Finance",
    employer: "Crestline Agency Group",
    employerBlurb: "Crestline Agency Group handles payouts, reconciliation, and financial reporting for a network of fan-platform agencies.",
    type: "Part-time",
    compensation: "$350 – $500 monthly",
    compensationShort: "$350–$500/mo",
    isPremium: false,
    applicantCount: 55,
    platforms: ["Telegram", "WhatsApp"],
    software: ["CRM Platforms"],
    language: "Chinese",
    countryCode: "HK",
    location: "Hong Kong",
    postedLabel: "Posted 2 days ago",
    postedHoursAgo: 48,
    about: "Support payout reconciliation and light bookkeeping for a portfolio of creator accounts, communicating updates via Telegram and WhatsApp.",
    responsibilities: [
      "Reconcile creator payouts against platform statements weekly",
      "Flag discrepancies and follow up with the finance lead",
      "Maintain simple spreadsheets tracking monthly earnings",
      "Communicate payout status updates via Telegram and WhatsApp",
    ],
    requirements: [
      "Comfortable working with spreadsheets and basic reconciliation",
      "Fluent in Chinese with good written English for internal reporting",
      "Trustworthy and detail-oriented with financial data",
    ],
  },
];

export function getJobById(id: string): JobListing | undefined {
  return JOBS.find((job) => job.id === id);
}

export function getSimilarJobs(job: JobListing, limit = 6): JobListing[] {
  const sameCategory = JOBS.filter((j) => j.id !== job.id && j.categoryKey === job.categoryKey);
  const rest = JOBS.filter((j) => j.id !== job.id && j.categoryKey !== job.categoryKey);
  return [...sameCategory, ...rest].slice(0, limit);
}

/** Real per-category job counts, computed from the live JOBS list — no hardcoded numbers. */
export function getCategoryJobCount(categoryKey: string): number {
  return JOBS.filter((job) => job.categoryKey === categoryKey).length;
}

export const TOTAL_JOB_COUNT = JOBS.length;
