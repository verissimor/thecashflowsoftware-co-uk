import { FeatureBody } from "@/components/features/feature-body";
import {
  FeatureItemAccountsProjectionChart,
  FeatureItemPayablesCategoryChart,
  FeatureItemTop10Clients,
} from "@/components/features/feature-item";
import { AeroBottom } from "@/components/hero/AeroBottom";
import { AeroMain } from "@/components/hero/AeroMain";

export const metadata = { title: "Interactive Charts" };

export default function Features() {
  return (
    <main className="relative isolate pt-14">
      <AeroMain>
        <div className="mx-auto max-w-3xl pt-24 sm:pt-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Interactive Charts
            </h1>
          </div>
        </div>
      </AeroMain>
      <AeroBottom />

      <FeatureBody current="/features/interactive-charts">
        <FeatureItemAccountsProjectionChart />
        <FeatureItemPayablesCategoryChart />
        <FeatureItemTop10Clients />
      </FeatureBody>
    </main>
  );
}
