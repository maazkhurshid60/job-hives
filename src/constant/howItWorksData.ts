import {
  CreateProfileIcon,
  ApplyOneClickIcon,
  GetHiredIcon,
  PostJobIcon,
  GetMatchedIcon,
  UnlockHireIcon,
} from "@/components/icons/HowItWorksIcons";
import type { ComponentType } from "react";

export interface StepItem {
  icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  isDip?: boolean;
}

export const WORKER_STEPS: StepItem[] = [
  {
    icon: CreateProfileIcon,
    title: "Create Your Profile",
    desc: "Build a living profile with your skills, languages and experience — no CV needed.",
  },
  {
    icon: ApplyOneClickIcon,
    title: "Apply in One Click",
    desc: "Browse filtered listings and apply instantly — no repeated forms, no waiting.",
    isDip: true,
  },
  {
    icon: GetHiredIcon,
    title: "Get Hired",
    desc: "Message directly with employers and start working — no bidding wars.",
  },
];

export const EMPLOYER_STEPS: StepItem[] = [
  {
    icon: PostJobIcon,
    title: "Post a Job Free",
    desc: "Publish a listing in minutes with pay, platform and skill requirements.",
  },
  {
    icon: GetMatchedIcon,
    title: "Get Matched Fast",
    desc: "Smart filters surface qualified applicants within minutes of posting.",
    isDip: true,
  },
  {
    icon: UnlockHireIcon,
    title: "Unlock & Hire",
    desc: "Upgrade to unlock contact details and message your shortlist directly.",
  },
];
