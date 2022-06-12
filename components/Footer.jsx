import Link from "next/link";
import React from "react";

import classes from "../styles/components/footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__links}>
        <Link href="/blog">Blog</Link>
        {/* <Link href="/about">About</Link> */}
        <Link href="/contact">Contact</Link>
      </div>
      <div className={classes.footer__copyright}>
        <p>&copy; Copyright 2022. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
