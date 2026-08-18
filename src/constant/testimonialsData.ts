export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const AVATAR_PARAMS = "w=100&h=100&fit=crop&crop=faces&auto=format&q=70";

export const TESTIMONIALS_DATA: Testimonial[] = [
  { quote: "Without hesitation the best platform we've used for finding reliable chatters. We've hired three people through it already.", name: "Nova Agency", role: "Agency Owner", avatar: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?${AVATAR_PARAMS}` },
  { quote: "I could filter applicants exactly on the criteria that mattered to us — language, platform experience, availability.", name: "Sunny Peak Agency", role: "Hiring Manager", avatar: `https://images.unsplash.com/photo-1494790108377-be9c29b29330?${AVATAR_PARAMS}` },
  { quote: "Finally a job platform that moves fast. Everything from posting to first applicant took under ten minutes.", name: "Bright Creators", role: "Founder", avatar: `https://images.unsplash.com/photo-1500648767791-00dcc994a43e?${AVATAR_PARAMS}` },
  { quote: "It's helped me find reliable, consistent workers — something I struggled with everywhere else in this space.", name: "Studio Nine", role: "Operations Lead", avatar: `https://images.unsplash.com/photo-1544005313-94ddf0286df2?${AVATAR_PARAMS}` },
  { quote: "A completely different experience from bidding-war freelance sites. No other platform has done matching this well.", name: "Peak Social", role: "Talent Lead", avatar: `https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?${AVATAR_PARAMS}` },
  { quote: "We scaled from two to six chatters in a month, sourced almost entirely through the platform.", name: "Nightshade Media", role: "Agency Owner", avatar: `https://images.unsplash.com/photo-1438761681033-6461ffad8d80?${AVATAR_PARAMS}` },
  { quote: "I use it to find virtual assistants for our whole partner network — quality has been consistently high.", name: "Halcyon Group", role: "Ops Manager", avatar: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?${AVATAR_PARAMS}` },
  { quote: "Got hired within a week for reel editing — no bidding wars, just a direct message from the employer.", name: "Jamie M.", role: "Content Editor", avatar: `https://images.unsplash.com/photo-1552058544-f2b08422138a?${AVATAR_PARAMS}` },
  { quote: "The filters saved me hours — I could find chatters by language and platform instantly.", name: "Alicia R.", role: "Agency Owner", avatar: `https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?${AVATAR_PARAMS}` },
  { quote: "Flexible remote work that actually respects my time zone and gave me the confidence to grow.", name: "Dara K.", role: "Virtual Assistant", avatar: `https://images.unsplash.com/photo-1601412436009-d964bd02edbc?${AVATAR_PARAMS}` },
  { quote: "As a first-time hirer, the onboarding made it easy to know exactly what 'verified' actually meant.", name: "Wren & Co.", role: "Founder", avatar: `https://images.unsplash.com/photo-1607746882042-944635dfe10e?${AVATAR_PARAMS}` },
  { quote: "My leads only come through the platform now — it's saved me an enormous amount of time.", name: "Fanfloww", role: "Agency Owner", avatar: `https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?${AVATAR_PARAMS}` },
];
