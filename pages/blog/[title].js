import React, { useEffect } from "react";
import Prism from "prismjs";

import { useRouter } from "next/router";
import Layout from "components/layout";

import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js";

import classes from "styles/pages/blogpost.module.scss";
import Link from "next/link";
import { API_URL } from "utils/constants";
import { DateTime } from "luxon";
const BlogPost = ({ blog }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);

  return (
    <Layout
      title={`${blog.title} | Coding Blog`}
      description={blog.seoMetaDescription}
    >
      <div className={classes.blog_post}>
        <div className={classes.blog_post__top__section}>
          <h1>{blog.title}</h1>
          <div className={classes.blog_post__top__media}>
            <span>
              {DateTime.fromSeconds(blog.dateTimestamp).toFormat(
                "dd LLLL yyyy"
              )}
            </span>

            {blog.tags.map((tag) => (
              <Link href={`/blog/tags/${tag}`} key={tag}>
                <span className={classes.blog_post__top__tag_btn}>{tag}</span>
              </Link>
            ))}
          </div>
        </div>

        <div
          className={classes.blog_post__body__content}
          dangerouslySetInnerHTML={{ __html: blog.markdownContent }}
        ></div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  let paths = [];
  try {
    const res = await fetch(`${API_URL}/posts`).then((res) => res.json());
    paths = res.map((blog) => ({
      params: {
        title: blog.urlTitle,
      },
    }));
  } catch (error) {
    console.log(error);
  }

  return {
    paths,
    fallback: "blocking",
  };
}
export async function getStaticProps(context) {
  try {
    const res = await fetch(`${API_URL}/posts/${context.params.title}`).then(
      (res) => res.json()
    );

    if (!res) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        blog: res,
      },
      revalidate: 30,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
export default BlogPost;
