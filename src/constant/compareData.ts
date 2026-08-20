export interface CompareItem {
  title: string;
  desc: string;
}

export interface CompareStat {
  label: string;
  value: string;
}

export interface ComparePanelData {
  variant: "old" | "new";
  badgeLabel: string;
  speedBadge?: string;
  items: CompareItem[];
  stats: CompareStat[];
}

export const COMPARE_OLD: ComparePanelData = {
  variant: "old",
  badgeLabel: "Hiring the old way",
  items: [
    { title: "Unverified profiles", desc: "No ID or portfolio checks — you're guessing who you're actually hiring." },
    { title: "Scattered across DMs", desc: "Deals lost across Telegram, Discord, and email threads." },
    { title: "Manual screening", desc: "Hours of interviews before you land on one decent fit." },
    { title: "No safety net", desc: "No dispute support if a hire disappears mid-project." },
  ],
  stats: [
    { label: "Avg. time to hire", value: "3–5 weeks" },
    { label: "The real cost", value: "Missed deadlines, wasted budget." },
  ],
};

export const COMPARE_NEW: ComparePanelData = {
  variant: "new",
  badgeLabel: "With JobHive",
  speedBadge: "5x faster",
  items: [
    { title: "Verified & tested talent", desc: "ID checks plus skill assessments, completed before a profile ever reaches you." },
    { title: "One dashboard, every hire", desc: "Post, message, track and pay — nothing scattered across five different apps." },
    { title: "Verified agencies & anti-scam checks", desc: "Every agency is ID-checked, and our team is on hand for dispute support if something goes wrong." },
    { title: "A pipeline that never runs dry", desc: "Thousands of vetted workers and new signups join daily." },
  ],
  stats: [
    { label: "Avg. time to hire", value: "3–5 days" },
    { label: "The result", value: "Faster hires, lower turnover." },
  ],
};
