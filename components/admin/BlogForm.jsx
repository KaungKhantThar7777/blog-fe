import React, { useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import { javascript } from "@codemirror/lang-javascript";

import TextInput from "components/form/TextInput";

import classes from "styles/components/admin/blogform.module.scss";
import TextArea from "components/form/TextArea";
import { DateTime } from "luxon";
const BlogForm = ({ isEdit, initialState, onSubmit }) => {
  const [state, setState] = useState({
    title: "",
    dateTimestamp: DateTime.now().toISO().slice(0, 19),
    thumbnailImageUrl: "",
    tags: "",
    markdownContent: "",
    seoTitleTag: "",
    seoMetaDescription: "",
  });

  const {
    title,
    dateTimestamp,
    thumbnailImageUrl,
    tags,
    markdownContent,
    seoTitleTag,
    seoMetaDescription,
  } = state;
  const handleChange = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (isEdit && initialState) {
      setState({
        ...initialState,
        dateTimestamp: DateTime.fromSeconds(initialState.dateTimestamp)
          .toISO()
          .slice(0, 19),
      });
    }
  }, [isEdit]);
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(state);
  };
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextInput
        name="title"
        onChange={handleChange}
        value={title}
        label={"Title"}
      />

      <TextInput
        name="dateTimestamp"
        type="datetime-local"
        onChange={handleChange}
        value={dateTimestamp}
        label={"Date"}
      />

      <TextInput
        name="thumbnailImageUrl"
        onChange={handleChange}
        value={thumbnailImageUrl}
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
        name="seoTitleTag"
        onChange={handleChange}
        value={seoTitleTag}
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
  );
};

export default BlogForm;
