import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import classes from "styles/components/admin/sidebar.module.scss";
const SideBar = () => {
  const router = useRouter();

  return (
    <div className={classes.sidebar}>
      <Link href="/admin/blogs">
        <a
          className={
            router.pathname === "/admin/blogs" ? classes.sidebar__active : ""
          }
        >
          Blog Posts
        </a>
      </Link>

      <Link href="/admin/images">
        <a
          className={
            router.pathname === "/admin/images" ? classes.sidebar__active : ""
          }
        >
          Images
        </a>
      </Link>

      <Link href="/admin/site-maps">
        <a
          className={
            router.pathname === "/admin/site-maps"
              ? classes.sidebar__active
              : ""
          }
        >
          Site maps
        </a>
      </Link>

      <Link href="/admin/change-password">
        <a
          className={
            router.pathname === "/admin/change-password"
              ? classes.sidebar__active
              : ""
          }
        >
          {" "}
          Change Password
        </a>
      </Link>
    </div>
  );
};

export default SideBar;
