import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import Logo from "./images/bg-01.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth";
import { storage } from "../../../../index";
import { auth, defaultApp } from "../../../../index";
import "./css/main.css";

const Index = ({ history }) => {
  const [image, setImage] = useState("");
  const [userName, setUserName] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleChangeName = (e) => {
    setUserName(e.target.value);
  };

  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await defaultApp
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value)
          .then((auth) => {
            const uploadTask = storage
              .ref(`users/images/${auth.user.uid}/${image.name}`)
              .put(image);
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
                  .ref(`users/images/${auth.user.uid}`)
                  .child(image.name)
                  .getDownloadURL();
              }
            );
          });
        await auth.currentUser.updateProfile({ displayName: userName });
        history.push("/login");
      } catch (error) {
        alert(error);
      }
    },
    [history, image, userName]
  );
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/admin" />;
  }

  return (
    <>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form
              className="login100-form validate-form"
              onSubmit={handleSignUp}
            >
              <span className="login100-form-title p-b-43">
                Signup to Royal Cup
              </span>

              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@gmail.com"
              >
                <input className="input100" type="email" name="email" />
                <span className="focus-input100"></span>
                <span className="label-input100">Email</span>
              </div>

              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input className="input100" type="password" name="password" />
                <span className="focus-input100"></span>
                <span className="label-input100">Password</span>
              </div>

              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input
                  className="input100"
                  type="text"
                  name="name"
                  onChange={handleChangeName}
                />
                <span className="focus-input100"></span>
                <span className="label-input100">Name</span>
              </div>

              <div className="wrap-input100 validate-input">
                <input
                  className="input100"
                  type="file"
                  name="img"
                  onChange={handleChange}
                />
                <span className="focus-input100"></span>
                <span className="label-input100">Choose Image</span>
              </div>
              <progress value={progress} max="100" />

              <div className="flex-sb-m w-full p-t-3 p-b-32">
                <div>
                  <Link to="/login" className="txt1">
                    Login
                  </Link>
                </div>
              </div>

              <div className="container-login100-form-btn">
                <button className="login100-form-btn">Signup</button>
              </div>
            </form>

            <div
              className="login100-more"
              style={{ backgroundImage: `url(${Logo})` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Index);
