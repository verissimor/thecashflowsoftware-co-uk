import {  FeatureItemAccountCategories, FeatureItemClientRegistration, FeatureItemInteractiveCharts, FeatureItemRecurringAccountSetup, FeatureItemRegistrationPayablesReceivables, FeatureItemReports, FeatureItemSupplierRegistration } from "@/components/features/feature-item";
import { FeatureNav } from "@/components/features/feature-nav";
import { AeroBottom } from "@/components/hero/AeroBottom";
import { AeroMain } from "@/components/hero/AeroMain";
import { PricingTable } from "@/components/pricing/pricing-table";

export const metadata = {
  title: "Pricing",
  keywords: [
    "cash flow software pricing",
  ],
};

export default function Features() {
  return (
    <main className="relative isolate pt-14">
      <AeroMain>
        <div className="mx-auto max-w-3xl pt-24 sm:pt-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Pricing
            </h1>
          </div>
        </div>
      </AeroMain>
      <AeroBottom />

      <div className="bg-white rounded-lg shadow-lg flex my-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PricingTable includeHeader={false} />
      </div>
    </main>
  );
}
