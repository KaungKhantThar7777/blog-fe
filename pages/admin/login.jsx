import { useMutation } from "api/useMutation";
import { useRouter } from "next/router";
import React from "react";

import classes from "styles/pages/admin/login.module.scss";
const Login = () => {
  const login = useMutation("/login");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    login({
      data: {
        email: e.target.elements[0].value,
        password: e.target.elements[1].value,
      },
    })
      .then((res) => {
        router.push("/admin");
      })
      .catch((e) => {
        console.log(e.message);
      });
    console.log(e.target.elements[2]);
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
