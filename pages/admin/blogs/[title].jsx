import { useMutation } from "api/useMutation";
import { usePost } from "api/usePosts";
import BlogForm from "components/admin/BlogForm";
import AdminLayout from "components/adminLayout";
import { useRouter } from "next/router";
import React from "react";
import { slugify } from "utils/slugify";

const EditBlog = () => {
  const router = useRouter();
  const { title = "" } = router.query;

  const { data, error } = usePost(title);
  const mutateBlog = useMutation(`/posts/${title}`);

  if (!data && !error) {
    return (
      <AdminLayout>
        <p>Loading...</p>
      </AdminLayout>
    );
  }

  const handleSubmit = (state) => {
    mutateBlog({
      data: { ...state, urlTitle: slugify(state.title) },
      method: "PUT",
    }).then((res) => {
      if (!res.message) {
        router.push("/admin");
      } else {
        toast.error(res.message);
      }
    });
  };

  const handleDelete = () => {
    mutateBlog({
      method: "DELETE",
    }).then((res) => {
      if (!res.message) {
        router.push("/admin");
      } else {
        toast.error(res.message);
      }
    });
  };

  return (
    <AdminLayout>
      <div>
        <h2>Edit Blog Post</h2>
        <BlogForm initialState={data} isEdit={true} onSubmit={handleSubmit} />
        <button onClick={handleDelete} className="delete-btn">
          Delete
        </button>
      </div>
    </AdminLayout>
  );
};

export default EditBlog;
