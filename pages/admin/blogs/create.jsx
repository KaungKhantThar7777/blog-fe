import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import { javascript } from "@codemirror/lang-javascript";

import AdminLayout from "components/adminLayout";
import TextInput from "components/form/TextInput";

import classes from "styles/pages/admin/create-blog.module.scss";
import TextArea from "components/form/TextArea";
const CreateBlog = () => {
  const [state, setState] = useState({
    title: "",
    date: new Date(),
    imageUrl: "",
    tags: "",
    markdownContent: "",
    seoTitle: "",
    seoMetaDescription: "",
  });

  const code = "const a = 0;";
  const {
    title,
    date,
    imageUrl,
    tags,
    markdownContent,
    seoTitle,
    seoMetaDescription,
  } = state;
  const handleChange = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(state);
  };
  return (
    <AdminLayout>
      <div className={classes.create__blog}>
        <h2>Create New Blog Post</h2>
        <form onSubmit={handleSubmit}>
          <TextInput
            name="title"
            onChange={handleChange}
            value={title}
            label={"Title"}
          />

          <TextInput
            name="date"
            type="datetime-local"
            onChange={handleChange}
            value={date}
            label={"Date"}
          />

          <TextInput
            name="imageUrl"
            onChange={handleChange}
            value={imageUrl}
            label={"Image Url"}
          />

          <TextInput
            name="tags"
            onChange={handleChange}
            value={tags}
            label={"Tags"}
          />

          <div>
            <label>Markdown Content</label>
            <CodeMirror
              className={classes.input}
              value={markdownContent}
              options={{
                theme: "monokai",
                keyMap: "sublime",
                mode: "jsx",
              }}
              theme={okaidia}
              extensions={[javascript({ jsx: true })]}
              name="markdownContent"
              onChange={(value) =>
                setState((prev) => ({
                  ...prev,
                  markdownContent: value,
                }))
              }
            />
          </div>

          <TextInput
            name="seoTitle"
            onChange={handleChange}
            value={seoTitle}
            label={"SEO Title"}
            limit={60}
          />

          <TextArea
            name="seoMetaDescription"
            onChange={handleChange}
            value={seoMetaDescription}
            label={"SEO Description"}
            limit={160}
          />

          <button>Submit</button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default CreateBlog;
