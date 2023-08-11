import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthProvider";

const StaffProtected = (props) => {
  const {auth} = useContext(AuthContext)
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUserToken = () => {
    const userToken = auth.accessToken
    const userType = auth.userType

    const isValidUserType = ["form master", "admin"].includes(userType);

    if (!userToken || userToken === "undefined" || !isValidUserType) {
      setIsLoggedIn(false);
      navigate("/login");
    } else {
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    checkUserToken();
  }, []); // Run once on component mount

  return isLoggedIn ? props.children : null;
};

export default StaffProtected;
