import { FeatureBody } from "@/components/features/feature-body";
import {
  FeatureItemContactInformation,
  FeatureItemIndividualsBusinesses,
  FeatureItemWhatsApp,
} from "@/components/features/feature-item";
import { AeroBottom } from "@/components/hero/AeroBottom";
import { AeroMain } from "@/components/hero/AeroMain";

export const metadata = { title: "Client and Supplier Management" };

export default function Features() {
  return (
    <main className="relative isolate pt-14">
      <AeroMain>
        <div className="mx-auto max-w-3xl pt-24 sm:pt-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Client and Supplier Management
            </h1>
          </div>
        </div>
      </AeroMain>
      <AeroBottom />

      <FeatureBody current="/features/client-management">
        <FeatureItemIndividualsBusinesses />
        <FeatureItemContactInformation />
        <FeatureItemWhatsApp />
      </FeatureBody>
    </main>
  );
}
