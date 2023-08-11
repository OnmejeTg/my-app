import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../utils/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userResponse = await axios.get(`/student/get-student/${credentials.username}`);
      const user = userResponse?.data;

      const loginResponse = await axios.post("/setup/general-login", JSON.stringify(credentials), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      const { access: accessToken, user_type: userType } = loginResponse?.data;

      setAuth({ user, userType, accessToken });

      if (userType === "form master") {
        navigate("/result");
      } else if (userType === "admin") {
        navigate("/");
      } else if (userType === "student") {
        navigate("/student");
      }

      setCredentials({
        username: "",
        password: "",
      });
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle error display or toast messages here
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-3 d-none d-lg-block "></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form className="user" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Username"
                          name="username"
                          value={credentials.username}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                          name="password"
                          value={credentials.password}
                          onChange={handleInputChange}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary btn-user btn-block">
                        Login
                      </button>
                    </form>
                    <hr />
                    <div className="text-center">
                      <a className="small" href="#">
                        Forgot Password?
                      </a>
                    </div>
                    <div className="text-center">
                      <a className="small" href="#">
                        Create an Account!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;