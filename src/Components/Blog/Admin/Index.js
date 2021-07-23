import React, { useContext } from "react";
import { Redirect, withRouter } from "react-router";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import Sidebar from "./Sidebar";
import { AuthContext } from "./Auth";
import { auth } from "../../../index";
import Update from "./Update";
import "./style.css";

const Index = () => {
  useFirestoreConnect(["blog"]); // sync royalCup collection from Firestore into redux
  const posts = useSelector((state) => state.firestore.ordered.blog);
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Redirect to="/login" />;
  }

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

        <main>
          <h2 className="dash-title">Royal Cup</h2>

          <div className="dash-cards">
            <div className="card-single">
              <div className="card-body">
                <span className="ti-reload"></span>
                <div>
                  <h5>عدد المنشورات</h5>
                  <h4>{posts && posts.map((post, key) => key + 1)}</h4>
                </div>
              </div>
            </div>
          </div>

          <section className="recent">
            <div className="activity-grid">
              <div className="activity-card">
                <h3>المنشورات</h3>
                <div className="table-responsive">
                  <form id="edit__form"></form>
                  <table>
                    <thead>
                      <tr>
                        <th>اسم المنشور</th>
                        <th>محتوي المنشور</th>
                        <th>تاريخ النشر</th>
                        <th>مركز القياده</th>
                      </tr>
                    </thead>
                    {posts &&
                      posts.map((post, key) => {
                        return (
                          <React.Fragment key={key}>
                            <tbody>
                              <tr>
                                <Update
                                  id={post.id}
                                  title={post.title}
                                  mini_content={post.mini_content}
                                  content={post.content}
                                  date={post.date}
                                />
                              </tr>
                            </tbody>
                          </React.Fragment>
                        );
                      })}
                  </table>
                </div>
              </div>

              <div
                className="copyright"
                style={{
                  position: "absolute",
                  bottom: "0",
                  textAlign: "center",
                  width: "80%",
                  margin: "auto",
                }}
              >
                Copyright &copy; 2021 Royal Cup Coffee <br /> All rights
                reserved
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default withRouter(Index);
