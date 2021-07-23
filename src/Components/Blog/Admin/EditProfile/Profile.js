import React, { useState } from "react";
import Sidebar from "../Sidebar";
import { auth, defaultApp } from "../../../../index";
import "./style.css";

const Profile = () => {
  const user = defaultApp.auth().currentUser;
  const [userName, setUserName] = useState(user.displayName);
  const [email, setEmail] = useState(user.email);
  const [AccountUpdated, setAccountUpdated] = useState("");
  const [EmailUpdated, setEmailUpdated] = useState("");

  const handleChangeUser = (e) => {
    setUserName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateAccount = (e) => {
    e.preventDefault();
    user
      .updateProfile({
        displayName: userName,
      })
      .then((res) => setAccountUpdated("تم تحديث اسمك بنجاح"));
  };
  const updateEmail = (e) => {
    e.preventDefault();
    user
      .updateEmail(email)
      .then(() => setEmailUpdated("تم تحديث بريدك الالكتروني بنجاح"))
      .catch((error) => console.log(error));
  };
  console.log(user.ui);
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

      <form className="editAccount" onSubmit={updateAccount}>
        <div className="editAccount-row">
          <h4 className="heading4">Account</h4>
          <div className="input-group input-group-icon">
            <input
              type="text"
              placeholder="Full Name"
              defaultValue={user.displayName}
              onChange={handleChangeUser}
            />
            <div className="input-icon">
              <i className="fa fa-user"></i>
            </div>
          </div>

          {/* <div className="input-group input-group-icon">
            <input
              type="password"
              placeholder="Password"
              defaultValue={user.password}
            />
            <div className="input-icon">
              <i className="fa fa-key"></i>
            </div>
          </div> */}
        </div>

        {/* <div className="editAccount-row">
          <div className="col-half">
            <h4 className="heading4">Date of Birth</h4>
            <div className="input-group">
              <div className="col-third">
                <input type="text" placeholder="DD" />
              </div>
              <div className="col-third">
                <input type="text" placeholder="MM" />
              </div>
              <div className="col-third">
                <input type="text" placeholder="YYYY" />
              </div>
            </div>
          </div>
          <div className="col-half">
            <h4 className="heading4">Gender</h4>
            <div className="input-group">
              <input id="gender-male" type="radio" name="gender" value="male" />
              <label htmlFor="gender-male">Male</label>
              <input
                id="gender-female"
                type="radio"
                name="gender"
                value="female"
              />
              <label htmlFor="gender-female">Female</label>
            </div>
          </div>
        </div> */}
        <button className="updateProfile">Update</button>
        {AccountUpdated ? <div>{AccountUpdated}</div> : null}
      </form>

      <form className="editAccount" onSubmit={updateEmail}>
        <div className="editAccount-row">
          <h4 className="heading4">Email</h4>
          <div className="input-group input-group-icon">
            <input
              type="email"
              placeholder="Email Address"
              defaultValue={user.email}
              onChange={handleChangeEmail}
            />
            <div className="input-icon">
              <i className="fa fa-envelope"></i>
            </div>
          </div>
        </div>

        <button className="updateProfile">Update Email</button>
        {EmailUpdated ? <div>{EmailUpdated}</div> : null}
      </form>
    </>
  );
};

export default Profile;
