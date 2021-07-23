import React, { useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import { withRouter, Redirect } from "react-router";
import Logo from "./images/bg-01.jpg";
import { defaultApp } from "../../../../index";
import { signInWithGoogle } from "../../../../index";
import { signInWithFacebook } from "../../../../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { AuthContext } from "../Auth";
import "./css/main.css";
import "./css/util.css";

const Index = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await defaultApp
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/admin");
      } catch (error) {
        alert(error);
      }
    },
    [history]
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
              onSubmit={handleLogin}
            >
              <span className="login100-form-title p-b-43">
                Login to Royal Cup
              </span>

              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@gmail.com"
              >
                <input className="input100" type="text" name="email" />
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

              <div className="flex-sb-m w-full p-t-3 p-b-32">
                <div>
                  <Link to="/signup" className="txt1">
                    sign up
                  </Link>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faGoogle}
                    onClick={signInWithGoogle}
                    style={{
                      marginRight: "15px",
                      background:
                        "linear-gradient(-120deg, #4285f4, #34a853, #fbbc05, #ea4335)",
                      padding: "3px",
                      fontSize: "18px",
                      color: "#FFF",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    onClick={signInWithFacebook}
                    style={{ color: "#4267B2", cursor: "pointer" }}
                  />
                </div>
              </div>

              <div className="container-login100-form-btn">
                <button className="login100-form-btn">Login</button>
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
