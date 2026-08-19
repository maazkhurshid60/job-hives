"use client";

import React, { useState } from "react";
import Navbar from "@/components/pages/navbar/Navbar";
import Footer from "@/components/pages/footer/Footer";
import Link from "next/link";
import ButtonSm from "@/components/button/ButtonSm";

interface LandingPageWrapperProps {
  children: React.ReactNode;
}

const LandingPageWrapper: React.FC<LandingPageWrapperProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onHamburgerClick={() => setMobileMenuOpen((prev) => !prev)} isMenuOpen={mobileMenuOpen} />
      
      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-neutral-0 z-40 p-6 flex flex-col gap-1 overflow-y-auto min-[861px]:hidden">
          <Link
            href="/find-jobs"
            onClick={() => setMobileMenuOpen(false)}
            className="py-3.5 px-2 text-base font-semibold text-neutral-800 border-b border-neutral-100"
          >
            Find Jobs
          </Link>
          <Link
            href="/#find-workers"
            onClick={() => setMobileMenuOpen(false)}
            className="py-3.5 px-2 text-base font-semibold text-neutral-800 border-b border-neutral-100"
          >
            Find Workers
          </Link>
          <Link
            href="/#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="py-3.5 px-2 text-base font-semibold text-neutral-800 border-b border-neutral-100"
          >
            How It Works
          </Link>
          <Link
            href="/#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="py-3.5 px-2 text-base font-semibold text-neutral-800 border-b border-neutral-100"
          >
            Pricing
          </Link>
          <Link
            href="/#login"
            onClick={() => setMobileMenuOpen(false)}
            className="py-3.5 px-2 text-base font-semibold text-neutral-800 border-b border-neutral-100"
          >
            Log in
          </Link>
          <ButtonSm
            text="Sign Up"
            url="/#signup"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 w-full py-3"
          />
        </div>
      )}

      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default LandingPageWrapper;
