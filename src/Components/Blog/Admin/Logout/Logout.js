import React, { useEffect ,useContext } from "react";
import { useHistory } from "react-router-dom";
import { defaultApp } from "../../../../index";
import { AuthContext } from "../Auth";

const Logout = () => {
  const { currentUser } = useContext(AuthContext);
  let history = useHistory();

  useEffect(() => {
    defaultApp.auth().signOut()
    history.push("/");
  }, [history])
  
  console.log(currentUser);
  

  return <></>;
};

export default Logout;
