import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentProtected = (props) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUserToken = () => {
    const userToken = localStorage.getItem("access_token");
    const userType = localStorage.getItem("user_type");

    const isValidUserType = ["student", "admin"].includes(userType);

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

export default StudentProtected;
