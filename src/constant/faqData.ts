export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How do I create a worker profile?",
    answer:
      "Sign up, add your skills, languages, and experience, then submit for review. Most profiles are approved within a few hours and go live automatically once verified.",
  },
  {
    question: "How do employers unlock contact details?",
    answer:
      "Employers subscribe to a plan that includes a set number of unlock credits. Spending one credit reveals a worker's phone and email so you can message them directly.",
  },
  {
    question: "Is there a fee to apply for jobs?",
    answer:
      "No — browsing listings and applying is always free for workers. You only pay if you choose to upgrade for extra visibility on your profile.",
  },
  {
    question: "How do I get my skills verified?",
    answer:
      "Submit proof of past work or a short screening task for the skill you'd like verified. Once approved, a verified badge appears next to that skill on your profile.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "Workers can list PayPal, Wise, bank transfer, crypto, or Payoneer as preferred payment methods — employers pay workers directly, outside the platform.",
  },
];
