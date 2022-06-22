import Link from "next/link";
import React from "react";
import { DateTime } from "luxon";

import classes from "../styles/components/blog_card.module.scss";

const BlogCard = ({ blog }) => {
  return (
    <Link href={`/blog/${blog.urlTitle}`}>
      <div className={classes.blog_card}>
        <div className={classes.blog_card__thumbnail}>
          <img src={blog.thumbnailImageUrl} alt="blog post thumbnail" />
        </div>
        <div className={classes.blog_card__content}>
          <h3>{blog.title}</h3>

          <p>
            Posted on{" "}
            {DateTime.fromSeconds(blog.dateTimestamp).toFormat("dd LLLL yyyy")}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
