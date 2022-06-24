import React, { useState } from "react";

import AdminLayout from "components/adminLayout";
import BlogForm from "components/admin/BlogForm";
const CreateBlog = () => {
  const handleSubmit = (state) => {
    console.log("updated", state);
  };
  return (
    <AdminLayout>
      <div className={classes.create__blog}>
        <h2>Create New Blog Post</h2>
        <BlogForm onSubmit={handleSubmit} />
      </div>
    </AdminLayout>
  );
};

export default CreateBlog;
