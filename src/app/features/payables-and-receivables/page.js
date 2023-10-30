import { FeatureBody } from "@/components/features/feature-body";
import {
  FeatureItemAccountCategories,
  FeatureItemClientRegistration,
  FeatureItemExcelReports,
  FeatureItemFileStorage,
  FeatureItemInteractiveCharts,
  FeatureItemRecurringAccountSetup,
  FeatureItemRegistrationPayablesReceivables,
  FeatureItemReports,
  FeatureItemSimpleIntuitiveRegistration,
  FeatureItemSupplierRegistration,
} from "@/components/features/feature-item";
import { FeatureNav } from "@/components/features/feature-nav";
import { AeroBottom } from "@/components/hero/AeroBottom";
import { AeroMain } from "@/components/hero/AeroMain";

export const metadata = { title: "Payables and Receivables" };

export default function Features() {
  return (
    <main className="relative isolate pt-14">
      <AeroMain>
        <div className="mx-auto max-w-3xl pt-24 sm:pt-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Payables and Receivables
            </h1>
          </div>
        </div>
      </AeroMain>
      <AeroBottom />

      <FeatureBody current="/features/payables-and-receivables">
        <FeatureItemSimpleIntuitiveRegistration />
        <FeatureItemFileStorage />
        <FeatureItemExcelReports />
      </FeatureBody>
    </main>
  );
}
