import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

import classes from "../styles/components/layout.module.scss";

const Layout = ({
  children,
  title = "default page title ",
  description = "default description",
}) => {
  return (
    <div className={classes.layout}>
      <Head>
        <title>{title}</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header />
      {children}

      <Footer />
    </div>
  );
};

export default Layout;
