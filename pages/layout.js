import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import classes from "../styles/components/layout.module.scss";

const Layout = ({ children, title = "default page title " }) => {
  return (
    <div className={classes.layout}>
      <Head>
        <title>{title}</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      {children}

      <Footer />
    </div>
  );
};

export default Layout;
