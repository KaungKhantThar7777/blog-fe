import React from "react";
import Layout from "../layout";

import classes from "../../styles/pages/blogspage.module.scss";
import BlogCard from "../../components/BlogCard";

const Blog = () => {
  return (
    <Layout title="Blog">
      <div className={classes.blogs}>
        <h1 className={classes.blogs__title}>Blog posts</h1>
        <ul className={classes.blogs__list}>
          <li>
            <BlogCard />
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Blog;
