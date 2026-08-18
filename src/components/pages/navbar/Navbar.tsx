import React from "react";
import Container from "@/components/common-layout/Container";
import Link from "next/link";
import ButtonSm from "@/components/button/ButtonSm";

interface NavbarProps {
  onHamburgerClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHamburgerClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-neutral-0 border-b border-solid border-neutral-200 navbar">
      <Container className="flex items-center justify-between h-[72px]">
        <Link href="/" className="flex items-center gap-2 font-heading font-extrabold text-xl text-neutral-900 logo">
          <span className="w-2.5 h-2.5 rounded-full bg-primary-500 dot" />
          JobHive
        </Link>
        <nav className="hidden min-[861px]:flex items-center gap-8 links">
          <Link href="#find-jobs" className="text-sm font-semibold text-neutral-600 hover:text-primary-600 transition-colors duration-150">
            Find Jobs
          </Link>
          <Link href="#find-workers" className="text-sm font-semibold text-neutral-600 hover:text-primary-600 transition-colors duration-150">
            Find Workers
          </Link>
          <Link href="#how-it-works" className="text-sm font-semibold text-neutral-600 hover:text-primary-600 transition-colors duration-150">
            How It Works
          </Link>
          <Link href="#pricing" className="text-sm font-semibold text-neutral-600 hover:text-primary-600 transition-colors duration-150">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-3 nav-actions">
          <ButtonSm
            url="#login"
            text="Log in"
            bgColor="bg-transparent hover:bg-neutral-100 text-neutral-700"
          />
          <ButtonSm
            url="#signup"
            text="Sign Up"
            bgColor="bg-transparent hover:bg-primary-50 text-primary-600 border-[1.5px] border-primary-500"
            isBorder
            className="hidden sm:inline-flex"
          />
          <button
            onClick={onHamburgerClick}
            className="flex flex-col gap-[5px] p-2 bg-none border-none cursor-pointer min-[861px]:hidden hamburger"
            aria-label="Open menu"
          >
            <span className="w-[22px] h-[2px] bg-neutral-800 rounded-sm" />
            <span className="w-[22px] h-[2px] bg-neutral-800 rounded-sm" />
            <span className="w-[22px] h-[2px] bg-neutral-800 rounded-sm" />
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
