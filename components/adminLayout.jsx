import React, { useEffect } from "react";

import Header from "./admin/Header";
import SideBar from "./admin/Sidebar";

import classes from "styles/components/admin/adminLayout.module.scss";
import { useIsLoggedIn } from "api/fetcher";
import { useRouter } from "next/router";

const AdminLayout = ({ children }) => {
  const { data, error } = useIsLoggedIn();

  const router = useRouter();
  useEffect(() => {
    if (data && !data.isLoggedIn) {
      router.push("/admin/login");
    }
  }, [data]);
  if (!data && !error) {
    return <p>Loading...</p>;
  }
  return (
    <div className={classes.layout}>
      <Header />
      <div className={classes.layout__content__wrapper}>
        <SideBar />
        <div className={classes.layout__content}>{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
