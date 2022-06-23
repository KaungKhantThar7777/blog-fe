import Link from "next/link";
import React from "react";

import classes from "styles/components/admin/header.module.scss";

const Header = () => {
  return (
    <div className={classes.header}>
      <Link href="/admin">Admin dashboard</Link>

      <button>Logout</button>
    </div>
  );
};

export default Header;
