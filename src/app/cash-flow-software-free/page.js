import { AeroBottom } from "@/components/hero/AeroBottom";
import { AeroHighlightedAkaHome } from "@/components/hero/AeroHighlightedAkaHome";
import { AeroMain } from "@/components/hero/AeroMain";
import { PricingFreeInfo } from "@/components/pricing/pricing-free-info";

export const metadata = {
  title: { absolute: "Cash Flow Free Software" },
  keywords: ["cash flow free software"],
};

export default function Features() {
  return (
    <main className="relative isolate pt-14">
      <AeroMain>
        <AeroHighlightedAkaHome
          title="Cash Flow Free Software"
          info={<PricingFreeInfo />}
        />
      </AeroMain>
      <AeroBottom />

      <div className="bg-white rounded-lg shadow-lg flex my-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* more content here... */}
      </div>
    </main>
  );
}
