import React, { useState } from "react";
import { firestore } from "../../../index";
import { defaultApp } from "../../../index";

const Update = ({ id, title, mini_content, content, date }) => {
  const [titlePost, setTitle] = useState(title);
  const [mini_contentPost, setMiniContent] = useState(mini_content);
  const [contentPost, setContent] = useState(content);
  const [Edit, setEdit] = useState(false);

  const handleChangeTitle = (e) => {
    const value = e.target.value;
    if (value) {
      setTitle(e.target.value);
    } else {
      setTitle(title);
    }
  };
  const handleChangeMini_contentPost = (e) => {
    const value = e.target.value;
    if (value) {
      setMiniContent(e.target.value);
    } else {
      setMiniContent(mini_contentPost);
    }
  };
  const handleChangeContentPost = (e) => {
    const value = e.target.value;
    if (value) {
      setContent(e.target.value);
    } else {
      setContent(contentPost);
    }
  };

  const deletePost = (id) => {
    defaultApp
      .firestore()
      .collection("blog")
      .doc(id)
      .delete()
      .then(() => {
        console.log("successfully deleted! ");
      })
      .catch((error) => {
        console.log("Error removing document:", error);
      });
  };

  const updatePost = (id) => {
    firestore.collection("blog").doc(id).update({
      title: titlePost,
      mini_content: mini_contentPost,
      content: contentPost,
      date: Date.now(),
    });
    setEdit(!Edit);
  };

  // render form
  const handleEdit = (id, title, mini_content) => {
    setEdit(!Edit);
    renderEditForm(id, title, mini_content);
  };

  //renderEditForm
  const renderEditForm = (id) => (
    <>
      <th>
        <input
          type="text"
          defaultValue={titlePost}
          onChange={(e) => handleChangeTitle(e, titlePost)}
        />
      </th>
      <th>
        <input
          type="text"
          defaultValue={mini_contentPost}
          onChange={(e) => handleChangeMini_contentPost(e, mini_contentPost)}
        />
      </th>
      <th>
        <input
          type="text"
          defaultValue={content}
          onChange={(e) => handleChangeContentPost(e, contentPost)}
        />
      </th>
      <th>
        <button className="badge success" onClick={() => updatePost(id)}>
          تعديل
        </button>
        <button className="badge warning" onClick={() => setEdit(!Edit)}>
          رجوع
        </button>
      </th>
      {/* </form> */}
    </>
  );

  // renderPosts
  const renderPosts = () => (
    <>
      <td>{title}</td>
      <td>{mini_content.substring(0, 20)}</td>
      <td>{new Date(date).toLocaleString()}</td>
      <td>
        <button
          className="badge success"
          style={{ marginRight: "10px" }}
          onClick={() => handleEdit(id, title, mini_content, content)}
        >
          تعديل
        </button>
        <button className="badge warning" onClick={() => deletePost(id)}>
          مسح
        </button>
      </td>
    </>
  );

  return <>{Edit ? renderEditForm(id) : renderPosts()}</>;
};

export default Update;
