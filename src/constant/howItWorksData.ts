import { IdCard, CheckCircle2, Headset, FilePlus2, ListChecks, Unlock } from "lucide-react";
import type { ComponentType } from "react";

export interface StepItem {
  icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  isDip?: boolean;
}

export const WORKER_STEPS: StepItem[] = [
  {
    icon: IdCard,
    title: "Create Your Profile",
    desc: "Build a living profile with your skills, languages and experience — no CV needed.",
  },
  {
    icon: CheckCircle2,
    title: "Apply in One Click",
    desc: "Browse filtered listings and apply instantly — no repeated forms, no waiting.",
    isDip: true,
  },
  {
    icon: Headset,
    title: "Get Hired",
    desc: "Message directly with employers and start working — no bidding wars.",
  },
];

export const EMPLOYER_STEPS: StepItem[] = [
  {
    icon: FilePlus2,
    title: "Post a Job Free",
    desc: "Publish a listing in minutes with pay, platform and skill requirements.",
  },
  {
    icon: ListChecks,
    title: "Get Matched Fast",
    desc: "Smart filters surface qualified applicants within minutes of posting.",
    isDip: true,
  },
  {
    icon: Unlock,
    title: "Unlock & Hire",
    desc: "Upgrade to unlock contact details and message your shortlist directly.",
  },
];
