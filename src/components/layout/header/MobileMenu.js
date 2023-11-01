"use client";

import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  LockClosedIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";
import { NavigationLinks } from "./NavigationLinks";

export const MobileMenu = ({ navigation }) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openedInPath, setOpenedInPath] = useState(null);

  if (openedInPath != null && openedInPath !== pathname) {
    setOpenedInPath(null);
  }

  const showMenu = mobileMenuOpen && openedInPath === pathname;

  const openMenu = () => {
    setOpenedInPath(pathname);
    setMobileMenuOpen(true);
  };

  const closeMenu = () => {
    setOpenedInPath(null);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        onClick={openMenu}
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>

      <Dialog
        as="div"
        className="lg:hidden"
        open={showMenu}
        onClose={() => closeMenu()}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={closeMenu}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavigationLinks
                  navigation={navigation}
                  linkClassName="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                />
              </div>
              <div className="py-6">
                <a
                  href={`https://${process.env.NEXT_PUBLIC_APP_DOMAIN}`}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  <LockClosedIcon className="inline w-4" /> Log in{" "}
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};
