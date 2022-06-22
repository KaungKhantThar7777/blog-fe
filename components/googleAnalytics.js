import Script from "next/script";

const GoogleAnalytics = () => {
  return process.env.NODE_ENV === "production" &&
    typeof window !== "undefined" ? (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-5LD2MPH727"
      />

      <Script
        async
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag("js", new Date());

                gtag("config", "${process.env.GOOGLE_ANALYTICS_ID}");`,
        }}
      />
    </>
  ) : null;
};

export default GoogleAnalytics;
