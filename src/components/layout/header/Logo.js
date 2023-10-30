import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link className="-m-1.5 p-1.5" href="/" aria-label="Brand">
      <span className="sr-only">The Cash Flow Software</span>
      <Image
        className="w-auto"
        src="/cash-flow-logo.png"
        width={120}
        height={1}
        alt="The cash flow software logo"
      />
    </Link>
  );
};
