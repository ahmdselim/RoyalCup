import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
const Content = () => {
  useFirestoreConnect(["blog"]); // sync royalCup collection from Firestore into redux
  const posts = useSelector((state) => state.firestore.ordered.blog);
  return (
    <>
      {/* Start content posts area */}
      <div className="posts-area">
        <div className="row">
          {posts &&
            posts.map((data, key) => (
              <div key={key} className="post">
                <div className="image-post">
                  <Link to={`/post/${data.id}`}>
                    <img src={data.image} alt="blog post" />
                  </Link>
                </div>
                <div className="content-post">
                  <Link to={`/post/${data.id}`}>
                    <h3>{data.title}</h3>
                  </Link>
                  <p>{data.mini_content}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* End content posts area */}
    </>
  );
};

export default Content;
