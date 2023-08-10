import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminProtected = (props) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUserToken = () => {
    const userToken = localStorage.getItem("access_token");
    const user_type = localStorage.getItem("user_type")
    if (!userToken || userToken === "undefined" || user_type !== "admin") {
      setIsLoggedIn(false);
      return navigate("/login");
    }
    setIsLoggedIn(true);
  };

  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);


  return <React.Fragment>{isLoggedIn ? props.children : null}</React.Fragment>;
};

export default AdminProtected;
