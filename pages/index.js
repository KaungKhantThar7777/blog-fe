import React from "react";
import Layout from "../components/layout";

import classes from "../styles/pages/homepage.module.scss";
import Link from "next/link";
import BlogCard from "../components/BlogCard";

import { usePosts } from "../api/usePosts";

const Index = () => {
  const { data, error } = usePosts({
    limit: 5,
  });

  if (!data && !error) {
    return (
      <Layout title="loading">
        <p>Loading...</p>
      </Layout>
    );
  }
  return (
    <Layout
      title="Coding Blog"
      description="Kaung Khant Thar is a frontend developer who love to share knowledge about coding"
    >
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
            {data.map((blog) => (
              <li key={blog._id}>
                <BlogCard blog={blog} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
