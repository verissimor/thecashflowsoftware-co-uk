import { FeatureBody } from "@/components/features/feature-body";
import {
  FeatureItemAccountCategories,
  FeatureItemClientRegistration,
  FeatureItemInteractiveCharts,
  FeatureItemRecurringAccountSetup,
  FeatureItemRegistrationPayablesReceivables,
  FeatureItemReports,
  FeatureItemSupplierRegistration,
} from "@/components/features/feature-item";
import { AeroBottom } from "@/components/hero/AeroBottom";
import { AeroMain } from "@/components/hero/AeroMain";

export const metadata = {
  title: "Powerful Features",
  description:
    "Discover the robust features of our cash flow software tailored for small businesses and startups. Manage accounts payable, receivable, and more with ease.",
  keywords: [
    "cash flow software features",
    "Registration of Payables and Receivables",
    "Interactive Charts",
    "Client Registration",
    "Client Registration",
    "Supplier Registration",
    "Recurring Account Setup",
  ],
};

export default function Features() {
  return (
    <main className="relative isolate pt-14">
      <AeroMain>
        <div className="mx-auto max-w-3xl pt-24 sm:pt-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Cash Flow Software Features
            </h1>
          </div>
        </div>
      </AeroMain>
      <AeroBottom />

      <FeatureBody current="/features">
        <FeatureItemRegistrationPayablesReceivables />
        <FeatureItemInteractiveCharts />
        <FeatureItemClientRegistration />
        <FeatureItemSupplierRegistration />
        <FeatureItemRecurringAccountSetup />
        <FeatureItemAccountCategories />
        <FeatureItemReports />
      </FeatureBody>
    </main>
  );
}
