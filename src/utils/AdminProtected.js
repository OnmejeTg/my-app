import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthProvider";

const AdminProtected = (props) => {
  const {auth} = useContext(AuthContext)
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUserToken = () => {
    const userToken = auth.accessToken
    const userType = auth.userType

    if (!userToken || userToken === "undefined" || userType !== "admin") {
      setIsLoggedIn(false);
      return navigate("/login");
    }
    setIsLoggedIn(true);
  };

  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);


  return isLoggedIn ? props.children : null;
};

export default AdminProtected;
