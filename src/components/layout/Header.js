import { LockClosedIcon } from "@heroicons/react/24/outline";
import { Logo } from "./header/Logo";
import { MobileMenu } from "./header/MobileMenu";
import { NavigationLinks } from "./header/NavigationLinks";

// used in sitemaps.xml
export const navigation = [
  // !! head above
  { name: "Features", href: "/features" },
  { name: "Reports", href: "/features/reports" },
  { name: "Pricing", href: "/pricing" },
  { name: "Cash Flow Free", href: "/cash-flow-software-free" },
  {
    name: "Help Center",
    href: "https://newaccount1633732545779.freshdesk.com/support/solutions",
  },
];

export const Header = () => {
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="max-w-7xl w-full mx-auto px-4 flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <h2>
              <Logo />
            </h2>
          </div>
          <div className="flex lg:hidden">
            <MobileMenu navigation={navigation} />
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <NavigationLinks
              navigation={navigation}
              linkClassName="text-sm font-semibold leading-6 text-gray-900"
            />
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href={`https://${process.env.NEXT_PUBLIC_APP_DOMAIN}`}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              <LockClosedIcon className="inline w-4" /> Log in{" "}
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};
