import { useMutation } from "api/useMutation";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import classes from "styles/components/admin/header.module.scss";
import { API_URL } from "utils/constants";

const Header = () => {
  const router = useRouter();
  const logout = useMutation("/logout");

  const handleLogout = () => {
    logout({
      validateUrl: `${API_URL}/isLoggedIn`,
    }).then((res) => {
      router.push("/admin/login");
    });
  };
  return (
    <div className={classes.header}>
      <Link href="/admin">Admin dashboard</Link>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Header;
