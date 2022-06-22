import { useRouter } from "next/router";
import React from "react";
import Layout from "../../../components/layout";

import classes from "styles/pages/blogspage.module.scss";
import BlogCard from "components/BlogCard";
import { usePosts } from "api/usePosts";
const BlogByTags = () => {
  const router = useRouter();
  const { tag = "" } = router.query;

  const { data, error } = usePosts({ tag });

  if (!data && !error) {
    return (
      <Layout title={`${tag} Blogs`}>
        <p>Loading...</p>
      </Layout>
    );
  }

  return (
    <Layout title={`${tag} Blogs`} description={`All Blogs tagged as ${tag}`}>
      <h1 className={classes.blogs__title}>Blog posts tagged as "{tag}"</h1>
      <ul className={classes.blogs__list}>
        {data.map((blog) => (
          <li key={blog._id}>
            <BlogCard blog={blog} />
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default BlogByTags;
