import Script from "next/script";

const gtmId = process.env.NEXT_PUBLIC_GTM_ID?.trim();
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
const googleAdsConversionId =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID?.trim();

function isGtmId(value: string | undefined) {
  return Boolean(value && /^GTM-[A-Z0-9]+$/i.test(value));
}

function isGaMeasurementId(value: string | undefined) {
  return Boolean(value && /^G-[A-Z0-9]+$/i.test(value));
}

function isGoogleAdsConversionId(value: string | undefined) {
  return Boolean(value && /^AW-\d+$/i.test(value));
}

export function TrackingScripts() {
  const shouldLoadGtm = isGtmId(gtmId);
  const shouldLoadGa = isGaMeasurementId(gaMeasurementId);
  const shouldLoadAds = isGoogleAdsConversionId(googleAdsConversionId);
  const directTagId = shouldLoadGa ? gaMeasurementId : googleAdsConversionId;

  if (shouldLoadGtm) {
    return (
      <>
        <Script id="limm-gtm-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              'gtm.start': new Date().getTime(),
              event: 'gtm.js'
            });
          `}
        </Script>
        <Script
          id="limm-gtm-script"
          src={`https://www.googletagmanager.com/gtm.js?id=${gtmId}`}
          strategy="afterInteractive"
        />
      </>
    );
  }

  if (!directTagId || (!shouldLoadGa && !shouldLoadAds)) {
    return null;
  }

  return (
    <>
      <Script
        id="limm-gtag-script"
        src={`https://www.googletagmanager.com/gtag/js?id=${directTagId}`}
        strategy="afterInteractive"
      />
      <Script id="limm-gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          ${shouldLoadGa ? `gtag('config', '${gaMeasurementId}');` : ""}
          ${shouldLoadAds ? `gtag('config', '${googleAdsConversionId}');` : ""}
        `}
      </Script>
    </>
  );
}
