import React from "react";
import Layout from "./layout";

import classes from "../styles/pages/homepage.module.scss";
import Link from "next/link";
import BlogCard from "../components/BlogCard";

const Index = () => {
  return (
    <Layout title="Homepage">
      <div className={classes.homepage}>
        <h1>
          Halo guys, I was a university student from Myanmar and currently
          working as a frontend developer.{" "}
        </h1>
        <p>I will share from my learning experience</p>

        <div className={classes.homepage__latest__blogs}>
          <div className={classes.homepage__latest__blogs__title}>
            <h3>Latest Blog Posts </h3>
            <Link href="/blog">
              <a className={classes.homepage__latest__blogs__view__all}>
                View All
              </a>
            </Link>
          </div>

          <ul className={classes.blogs}>
            <li>
              <BlogCard />
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
