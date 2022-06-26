import React from "react";
import toast, { Toaster } from "react-hot-toast";

import AdminLayout from "components/adminLayout";
import BlogForm from "components/admin/BlogForm";
import { useMutation } from "api/useMutation";
import { useRouter } from "next/router";
import { slugify } from "utils/slugify";

const CreateBlog = () => {
  const createBlog = useMutation("/posts");
  const router = useRouter();

  const handleSubmit = (state) => {
    createBlog({ data: { ...state, urlTitle: slugify(state.title) } }).then(
      (res) => {
        if (!res.message) {
          router.push("/admin");
        } else {
          toast.error(res.message);
        }
      }
    );
  };
  return (
    <AdminLayout>
      <Toaster />
      <div>
        <h2>Create New Blog Post</h2>
        <BlogForm onSubmit={handleSubmit} />
      </div>
    </AdminLayout>
  );
};

export default CreateBlog;
