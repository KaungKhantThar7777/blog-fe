import React from "react";
import Layout from "../../components/layout";

import classes from "../../styles/pages/blogspage.module.scss";
import BlogCard from "../../components/BlogCard";

const Blog = () => {
  return (
    <Layout
      title="Blog List"
      description="List of all blogs posts published on the Kaung Khant Thar's coding blog"
    >
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
