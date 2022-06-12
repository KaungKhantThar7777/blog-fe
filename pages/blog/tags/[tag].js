import { useRouter } from "next/router";
import React from "react";
import Layout from "../../../components/layout";

import classes from "styles/pages/blogspage.module.scss";
import BlogCard from "components/BlogCard";
const BlogByTags = () => {
  const router = useRouter();
  const { tag = "" } = router.query;

  return (
    <Layout title={`${tag} Blogs`} description={`All Blogs tagged as ${tag}`}>
      <h1 className={classes.blogs__title}>Blog posts tagged as "{tag}"</h1>
      <ul className={classes.blogs__list}>
        <li>
          <BlogCard />
        </li>
      </ul>
    </Layout>
  );
};

export default BlogByTags;
