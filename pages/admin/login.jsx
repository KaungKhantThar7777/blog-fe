import { useIsLoggedIn } from "api/fetcher";
import { useMutation } from "api/useMutation";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import classes from "styles/pages/admin/login.module.scss";
import { API_URL } from "utils/constants";
const Login = () => {
  const login = useMutation("/login");
  const { data } = useIsLoggedIn();
  const router = useRouter();

  useEffect(() => {
    if (data && data.isLoggedIn) {
      router.push("/admin");
    }
  }, [data]);
  const handleSubmit = (e) => {
    e.preventDefault();

    login({
      data: {
        email: e.target.elements[0].value,
        password: e.target.elements[1].value,
      },
      validateUrl: `${API_URL}/isLoggedIn`,
    })
      .then((res) => {
        console.log("success", res);
        if (res.success) {
          console.log("here");
          router.push("/admin");
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  return (
    <div className={classes.login}>
      <div className={classes.login__fields}>
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <input type="email" name="email" aria-label="Email" />
          </div>

          <div>
            <label>Password</label>
            <input type="password" name="password" aria-label="Password" />
          </div>

          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
