import Head from "next/head";

const GoogleAnalytics = () => {
  return (
    <>
      {process.env.NODE_ENV === "production" &&
      typeof window !== "undefined" ? (
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-5LD2MPH727"
          ></script>
          <script>
            window.dataLayer = window.dataLayer || []; function gtag()
            {dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', 'G-5LD2MPH727');
          </script>
        </Head>
      ) : null}
    </>
  );
};

export default GoogleAnalytics;
