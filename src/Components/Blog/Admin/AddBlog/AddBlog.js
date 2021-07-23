import React, { useState, useContext } from "react";
import { useFirestore } from "react-redux-firebase";
import Sidebar from "../Sidebar";
import { Redirect, withRouter } from "react-router";
import { AuthContext } from "../Auth";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { storage } from "../../../../index";
import { auth } from "../../../../index";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./style.css";

const AddBlog = ({ content }) => {
  const firestore = useFirestore();
  const [title, setTitle] = useState("");
  const [miniContent, setMiniContent] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState("");

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeMiniContent = (e) => {
    setMiniContent(e.target.value);
  };
  const handleChangeImg = (e) => {
    if (e.target.files[0]) {
      if (e.target.files[0].size <= 2048000) {
        setImage(e.target.files[0]);
      } else {
        alert("الحد الادني لحجم الصوره 2 ميجا");
      }
    }
  };

  const addPost = (e) => {
    e.preventDefault();
    const uploadTask = storage.ref(`blog/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("blog")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            firestore.collection("blog").add({
              content: draftToHtml(
                convertToRaw(editorState.getCurrentContent())
              ),
              date: Date.now(),
              image: url,
              mini_content: miniContent,
              title: title,
            });
          });
      }
    );
    setTitle("");
    setMiniContent("");
    setEditorState(EditorState.createEmpty());
  };
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <header>
          <div className="social-icons">
            <div></div>
            <p>{auth.currentUser ? auth.currentUser.displayName : null}</p>
          </div>
        </header>
      </div>

      <form className="form-content" onSubmit={addPost}>
        <div className="form-group">
          <label htmlFor="title">
            <strong>اسم المنشور</strong>
            <br />
            <br />
            <span>استخدم اسم شائع وجذاب لتجذب العديد من الناس</span>
          </label>
          <input
            type="text"
            id="title"
            className="form-controll"
            onChange={handleChangeTitle}
            value={title}
            required="required"
          />
        </div>
        <div className="form-group">
          <label htmlFor="caption">
            <strong>نبذه قصيره عن المنشور</strong>
          </label>
          <input
            type="text"
            id="caption"
            className="form-controll"
            onChange={handleChangeMiniContent}
            value={miniContent}
            required="required"
          />
        </div>

        <div className="form-group">
          <label htmlFor="caption">
            <strong>محتوي المنشور</strong>
          </label>
          <div className="editor">
            <Editor
              editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={onEditorStateChange}
            />
          </div>
        </div>

        <div className="form-group file-area">
          <label htmlFor="images">
            <strong>صوره المنشور</strong>
            <br />
            <br />
            <span>
              300xاستخدم صوره معبره عن المنشور مع مراعاه عرض الصوره 400
            </span>
          </label>
          <input
            className="imageInput"
            type="file"
            id="images"
            onChange={handleChangeImg}
            required="required"
            accept="image/*"
          />
          <progress value={progress} max="100" />
          <div className="file-dummy">
            <div className="success">
              مبروك, تم نشر المنشور بنجاح 👌😃
            </div>
            <div className="default">من فضلك اختار صوره مناسبه</div>
          </div>
        </div>

        <div className="form-group">
          <button className="upload" type="submit">
            نشر
          </button>
        </div>
      </form>
    </>
  );
};

export default withRouter(AddBlog);
