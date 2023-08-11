import { useEffect, useState , useContext} from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../utils/AuthProvider";


const StudentProtected = (props) => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUserToken = () => {
    const userToken = auth.accessToken
    const userType = auth.userType

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
