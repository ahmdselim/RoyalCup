import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import parse from "html-react-parser";
import Nav from "../Home/Nav";
import Footer from "../Home/Footer";
import Social from "../Home/Social";

const Index = () => {
  useFirestoreConnect(["blog"]); // sync royalCup collection from Firestore into redux
  const posts = useSelector((state) => state.firestore.ordered.blog);
  const { id } = useParams();
  return (
    <>
      <Nav />
      {posts &&
        posts.map((post, key) => {
          if (post.id === id) {
            return (
              <div key={id} className="blog-post">
                <h3>{post.title}</h3>
                <div>{parse(post.content)}</div>
              </div>
            );
          } else {
            return null;
          }
        })}
      <Social />
      <Footer />
    </>
  );
};

export default Index;
