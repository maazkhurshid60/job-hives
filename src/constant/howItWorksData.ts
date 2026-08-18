import type { ComponentType } from "react";
import {
  ProfileDocIcon,
  CheckCircleIcon,
  HeadsetIcon,
  PlusIcon,
  ClipboardIcon,
  LockDotIcon,
} from "@/components/icons/HowItWorksIcons";

export interface StepItem {
  icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  isDip?: boolean;
}

export const WORKER_STEPS: StepItem[] = [
  {
    icon: ProfileDocIcon,
    title: "Create Your Profile",
    desc: "Build a living profile with your skills, languages and experience — no CV needed.",
  },
  {
    icon: CheckCircleIcon,
    title: "Apply in One Click",
    desc: "Browse filtered listings and apply instantly — no repeated forms, no waiting.",
    isDip: true,
  },
  {
    icon: HeadsetIcon,
    title: "Get Hired",
    desc: "Message directly with employers and start working — no bidding wars.",
  },
];

export const EMPLOYER_STEPS: StepItem[] = [
  {
    icon: PlusIcon,
    title: "Post a Job Free",
    desc: "Publish a listing in minutes with pay, platform and skill requirements.",
  },
  {
    icon: ClipboardIcon,
    title: "Get Matched Fast",
    desc: "Smart filters surface qualified applicants within minutes of posting.",
    isDip: true,
  },
  {
    icon: LockDotIcon,
    title: "Unlock & Hire",
    desc: "Upgrade to unlock contact details and message your shortlist directly.",
  },
];
