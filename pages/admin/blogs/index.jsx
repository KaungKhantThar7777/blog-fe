import { usePosts } from "api/usePosts";
import AdminLayout from "components/adminLayout";
import { DateTime } from "luxon";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

import classes from "styles/pages/admin/blogs.module.scss";
const Blogs = () => {
  const router = useRouter();
  const { data, error } = usePosts();
  const [showType, setShowType] = useState("active");

  if (!data && !error) {
    return (
      <AdminLayout>
        <p>Loading...</p>
      </AdminLayout>
    );
  }

  const toShowBlogs = data.filter((blog) => {
    const differenceDay = DateTime.fromSeconds(blog.dateTimestamp)
      .diffNow()

      .as("millisecond");
    return showType === "active" ? differenceDay <= 0 : differenceDay > 0;
  });

  console.log({ toShowBlogs });

  return (
    <AdminLayout>
      <div className={classes.blogs}>
        <div className={classes.blogs__header}>
          <h3>All blog posts</h3>
          <button onClick={() => router.push("/admin/blogs/create")}>
            + Add New Post
          </button>
        </div>
        <div className={classes.blogs__type}>
          <div
            className={showType === "active" ? classes.blogs__type__active : ""}
            onClick={() => setShowType("active")}
          >
            Active
          </div>
          <div
            className={
              showType === "upcoming" ? classes.blogs__type__active : ""
            }
            onClick={() => setShowType("upcoming")}
          >
            Upcoming
          </div>
        </div>
        {toShowBlogs.length > 0 ? (
          <div className={classes.blogs__table}>
            <div className={classes.blogs__table__head}>
              <p>TITLE</p>
              <p>DATE</p>
            </div>
            {toShowBlogs.map((blog) => (
              <div className={classes.blogs__table__row} key={blog._id}>
                <p>{blog.title}</p>
                <p>
                  {DateTime.fromSeconds(blog.dateTimestamp).toFormat(
                    "dd LLLL yyyy"
                  )}
                </p>
                <Link href={`/admin/blogs/${blog.urlTitle}`}>
                  <a>Edit &gt;</a>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>Ooops, you don't have any blogs</p>
        )}
      </div>
    </AdminLayout>
  );
};

export default Blogs;
