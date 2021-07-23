import { GET_PRODUCTS, GET_POSTS } from "./Type";
import firebase from "firebase/app";

export const getProducts = () => {
  return (dispatch) => {
    firebase
      .firestore()
      .collection("royalCup")
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          dispatch({ type: GET_PRODUCTS, data });
          console.log("exist");
        } else {
          console.log("does not exist");
        }
      });
  };
};

export const getPosts = () => {
  return (dispatch) => {
    firebase
      .firestore()
      .collection("blog")
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          dispatch({ type: GET_POSTS, data });
          console.log("exist");
        } else {
          console.log("does not exist");
        }
      });
  };
};
