import Script from "next/script";

export const TagManager = () => {
  const gaMeasurementId = process?.env?.NEXT_PUBLIC_GA_ID;

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

        gtag('config', '${gaMeasurementId}');
      `}
      </Script>
    </div>
  );
};
