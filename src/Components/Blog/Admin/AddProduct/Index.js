import React, { useState, useContext } from "react";
import { useFirestore } from "react-redux-firebase";
import Sidebar from "../Sidebar";
import { Redirect, withRouter } from "react-router";
import { AuthContext } from "../Auth";
import { storage } from "../../../../index";
import { auth } from "../../../../index";
import "../AddBlog/style.css";

const AddBlog = ({ content }) => {
  const firestore = useFirestore();
  const [title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [url1, setUrl1] = useState("");
  let [url, setUrl] = useState("");

  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };
  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };
  const handleChangeImg1 = (e) => {
    if (e.target.files[0]) {
      if (e.target.files[0].size <= 2048000) {
        setImage1(e.target.files[0]);
      } else {
        alert("الحد الادني لحجم الصوره 2 ميجا");
      }
    }
  };
  const handleChangeImg2 = (e) => {
    if (e.target.files[0]) {
      if (e.target.files[0].size <= 2048000) {
        setImage2(e.target.files[0]);
      } else {
        alert("الحد الادني لحجم الصوره 2 ميجا");
      }
    }
  };

  const addPost = (e) => {
    e.preventDefault();
    const uploadTask1 = storage.ref(`products/${image1.name}`).put(image1);
    const uploadTask2 = storage.ref(`products/${image2.name}`).put(image2);
    uploadTask1.on("state_changed", (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setProgress1(progress);
      storage
        .ref("products")
        .child(image2.name)
        .getDownloadURL()
        .then((urlImg) => {
          setUrl1(urlImg);
        });
    });
    uploadTask2.on("state_changed", (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setProgress2(progress);
      storage
        .ref("products")
        .child(image2.name)
        .getDownloadURL()
        .then((urlImg) => {
          setUrl(urlImg);
          console.log(url);
        });
    });

    firestore.collection("royalCup").add({
      name: title,
      category: category,
      date: new Date(),
      firstImg: url1,
      secondImg: url,
      description: Content,
      price: price,
    });
    console.log(url1, url);

    setTitle("");
    setContent("");
    setCategory("");
    setPrice("");
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
            <strong>اسم البن</strong>
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
          <label htmlFor="category">
            <strong>القسم</strong>
          </label>
          <input
            type="text"
            id="category"
            className="form-controll"
            onChange={handleChangeCategory}
            value={category}
            required="required"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">
            <strong>السعر</strong>
          </label>
          <input
            type="number"
            id="price"
            className="form-controll"
            onChange={handleChangePrice}
            value={price}
            required="required"
          />
        </div>

        <div className="form-group">
          <label htmlFor="desc">
            <strong>الوصف</strong>
          </label>
          <div className="editor">
            <textarea
              id="desc"
              className="form-controll"
              onChange={handleChangeContent}
              value={Content}
              required="required"
            ></textarea>
          </div>
        </div>

        <div className="form-group file-area">
          <label htmlFor="images">
            <strong>الصوره الاولي للمنتج</strong>
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
            onChange={handleChangeImg1}
            required="required"
            accept="image/*"
          />
          <progress value={progress1} max="100" />
          <div className="file-dummy">
            <div className="success">مبروك, تم نشر المنتج بنجاح 👌😃</div>
            <div className="default">من فضلك اختار صوره مناسبه</div>
          </div>
        </div>

        <div className="form-group file-area">
          <label htmlFor="images">
            <strong>الصوره الثانيه للمنتج</strong>
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
            onChange={handleChangeImg2}
            required="required"
            accept="image/*"
          />
          <progress value={progress2} max="100" />
          <div className="file-dummy">
            <div className="success">مبروك, تم نشر المنتج بنجاح 👌😃</div>
            <div className="default">من فضلك اختار صوره مناسبه</div>
          </div>
        </div>

        <div className="form-group">
          <button className="upload" type="submit">
            Upload images
          </button>
        </div>
      </form>
    </>
  );
};

export default withRouter(AddBlog);
