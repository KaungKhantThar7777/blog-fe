import { usePost } from "api/usePosts";
import BlogForm from "components/admin/BlogForm";
import AdminLayout from "components/adminLayout";
import { useRouter } from "next/router";
import React from "react";

const EditBlog = () => {
  const router = useRouter();
  const { title = "" } = router.query;

  const { data, error } = usePost(title);

  if (!data && !error) {
    return (
      <AdminLayout>
        <p>Loading...</p>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div>
        <h2>Edit Blog Post</h2>
        <BlogForm initialState={data} isEdit={true} />
        <button className="delete-btn">Delete</button>
      </div>
    </AdminLayout>
  );
};

export default EditBlog;
