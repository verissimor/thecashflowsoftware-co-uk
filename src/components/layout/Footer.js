import Link from "next/link";
import { Logo } from "./header/Logo";
import { TagManager } from "./footer/TagManager";
import CookieBanner from "./footer/CookieBanner";

export const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="mx-auto mt-32 w-full max-w-container px-4 sm:px-6 lg:px-8 bg-white">
      <div className="border-t border-slate-900/5 py-10">
        <div className="flex items-center">
          <div className="mx-auto">
            <Logo />
          </div>
        </div>

        <p className="mt-5 text-center text-sm leading-6 text-slate-500">
          © {currentYear} The Cash Flow Software. All rights reserved.
        </p>

        <div className="mt-16 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
          <Link href="/privacy-policy">Privacy policy</Link>
          <div className="h-4 w-px bg-slate-500/20"></div>
          <Link href="/terms-of-service">Terms of Service</Link>
          <div className="h-4 w-px bg-slate-500/20"></div>
          <Link href="/cash-flow-software-free">Cash Flow Software Free</Link>
        </div>
      </div>

      <TagManager />
      <CookieBanner/>
    </footer>
  );
};
