"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const TagManager = () => {
  const gaMeasurementId = process?.env?.NEXT_PUBLIC_GA_ID;

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();
    if (gaMeasurementId) {
      window.gtag("config", gaMeasurementId, { page_path: url });
    }
  }, [pathname, searchParams, gaMeasurementId]);

  if (!gaMeasurementId) {
    return <div className="tag-manager-not-found"></div>;
  }

  return (
    <div className="tag-manager">
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
      />
      <Script id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('consent', 'default', {'analytics_storage': 'denied'});

        gtag('config', '${gaMeasurementId}');
      `}
      </Script>
    </div>
  );
};
