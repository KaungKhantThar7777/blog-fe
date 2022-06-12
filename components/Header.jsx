import React from "react";
import Link from "next/link";

import classes from "../styles/components/header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__container}>
        <div className={classes.header__logo}>
          <Link href="/">
            <a>
              <span className={classes.header__logo__icon}>💾</span>
              <span className={classes.header__logo__text}>
                Kaung Khant Thar
              </span>
            </a>
          </Link>
        </div>
        <div className={classes.header__links}>
          <Link href="/blog">Blog</Link>
          {/* <Link href="/about">About</Link> */}
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
