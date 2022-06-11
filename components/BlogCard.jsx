import Link from "next/link";
import React from "react";

import classes from "../styles/components/blog_card.module.scss";

const BlogCard = () => {
  return (
    <Link href="/blog/post-title">
      <div className={classes.blog_card}>
        <div className={classes.blog_card__thumbnail}>
          <img
            src="https://assets.coderrocketfuel.com/coding-blog-nodejs-thumbnail.png"
            alt="blog post thumbnail"
          />
        </div>
        <div className={classes.blog_card__content}>
          <h3>Your Blog Post Title</h3>

          <p>Posted on 5/1/2020</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
