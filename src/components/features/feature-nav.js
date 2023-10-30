import Link from "next/link";

// used in sitemaps as well
export const features = [
  // !! read above
  { name: "Software Features", href: "/features" },
  {
    name: "Payables and Receivables",
    href: "/features/payables-and-receivables",
  },
  { name: "Interactive Charts", href: "/features/interactive-charts" },
  { name: "Client and Supplier Management", href: "/features/client-management" },
  {
    name: "Recurring Payment Setup",
    href: "/features/recurring-payment-setup",
  },
  { name: "Categories and Tags", href: "/features/categories-and-tags" },
  { name: "Reports", href: "/features/reports" },
];

export const FeatureNav = ({ current }) => {
  return (
    <nav className="space-y-2">
      {features.map((el) => (
        <Link
        key={el.href}
          href={el.href}
          className={
            current !== el.href
              ? "inline-block sm:block px-3 py-2 rounded-md text-gray-900 hover:bg-gray-100 hover:text-gray-600"
              : "inline-block sm:block px-3 py-2 rounded-md bg-gray-100 text-gray-600"
          }
        >
          {el.name}
        </Link>
      ))}

    </nav>
  );
};
