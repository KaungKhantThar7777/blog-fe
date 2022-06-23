import React from "react";
import Header from "./admin/Header";
import SideBar from "./admin/Sidebar";

import classes from "styles/components/admin/adminLayout.module.scss";

const AdminLayout = ({ children }) => {
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
