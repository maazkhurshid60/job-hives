import React from "react";
import Link from "next/link";
import Container from "@/components/common-layout/Container";
import ButtonSm from "@/components/button/ButtonSm";
import { InstagramIcon, TikTokIcon, FacebookIcon, XIcon } from "@/components/icons/SocialIcons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-400 pt-16 pb-8 mt-0">
      <Container>
        <div className="grid grid-cols-1 min-[421px]:grid-cols-2 min-[981px]:grid-cols-5 gap-8 mb-10 footer-grid">
          <div className="min-[981px]:col-span-2 footer-brand">
            <Link href="/" className="flex items-center gap-2 font-heading font-extrabold text-xl text-neutral-0 mb-3 logo">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-500 dot" />
              JobHive
            </Link>
            <p className="text-sm max-w-[260px] leading-relaxed">
              Remote work done properly. The two-sided marketplace connecting fan-platform creators and agencies with vetted remote talent.
            </p>
            <div className="flex gap-2 mt-3 max-w-[280px] newsletter">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2.5 rounded-md border border-neutral-700 bg-neutral-800 text-white text-xs outline-none focus:border-primary-500 transition-colors"
              />
              <ButtonSm text="Join" isPill={false} className="px-4 py-2" />
            </div>
          </div>
          <div className="footer-col">
            <h5 className="text-neutral-0 text-sm font-bold mb-4">For Workers</h5>
            <Link href="#" className="block text-[13.5px] mb-2.5 hover:text-neutral-0 transition-colors">Find Jobs</Link>
            <Link href="#" className="block text-[13.5px] mb-2.5 hover:text-neutral-0 transition-colors">Create Profile</Link>
            <Link href="#" className="block text-[13.5px] mb-2.5 hover:text-neutral-0 transition-colors">Worker FAQ</Link>
          </div>
          <div className="footer-col">
            <h5 className="text-neutral-0 text-sm font-bold mb-4">For Employers</h5>
            <Link href="#" className="block text-[13.5px] mb-2.5 hover:text-neutral-0 transition-colors">Find Workers</Link>
            <Link href="#" className="block text-[13.5px] mb-2.5 hover:text-neutral-0 transition-colors">Post a Job</Link>
            <Link href="#" className="block text-[13.5px] mb-2.5 hover:text-neutral-0 transition-colors">Pricing</Link>
          </div>
          <div className="footer-col">
            <h5 className="text-neutral-0 text-sm font-bold mb-4">Company</h5>
            <Link href="#" className="block text-[13.5px] mb-2.5 hover:text-neutral-0 transition-colors">About</Link>
            <Link href="#" className="block text-[13.5px] mb-2.5 hover:text-neutral-0 transition-colors">Blog</Link>
            <Link href="#" className="block text-[13.5px] mb-2.5 hover:text-neutral-0 transition-colors">Trust & Safety</Link>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-6 flex flex-wrap justify-between items-center gap-4 text-xs footer-bottom">
          <span>© 2026 JobHive. All rights reserved.</span>
          <div className="flex gap-3 social-icons">
            <Link href="#" aria-label="Instagram" className="w-[34px] h-[34px] rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-500 transition-colors text-white">
              <InstagramIcon className="w-4 h-4" />
            </Link>
            <Link href="#" aria-label="TikTok" className="w-[34px] h-[34px] rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-500 transition-colors text-white">
              <TikTokIcon className="w-4 h-4" />
            </Link>
            <Link href="#" aria-label="Facebook" className="w-[34px] h-[34px] rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-500 transition-colors text-white">
              <FacebookIcon className="w-4 h-4" />
            </Link>
            <Link href="#" aria-label="X (Twitter)" className="w-[34px] h-[34px] rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-500 transition-colors text-white">
              <XIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
