import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState("try");
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

  // const getAuthUser = () => {
  //   const authUserUrl = `http://127.0.0.1:8000/student/get-student/${credentials.username}`;
  //   fetch(authUserUrl)
  //     .then((response) => response.json())
  //     .then((data) =>
  //       {console.log(data)
  //       setAuthUser(data)}
  //     )
  //     .catch((error) => console.log("Error", error));
  // };

  const handleLogin = (e) => {
    e.preventDefault();
    const loginUrl = "http://127.0.0.1:8000/setup/general-login";
    fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        if (data.status === "success") {
          
          localStorage.clear();
          localStorage.setItem("access_token", data.access);
          localStorage.setItem("refresh_token", data.refresh);
          localStorage.setItem("user_type", data.user_type);

          if (data.user_type == "form master"){
            navigate("/result");
          }else if (data.user_type == "admin") {
            navigate("/");
          } else if( data.user_type == "student")  {
            navigate("/student")
          }
          
          // navigate("/");
        } else {
          toast.error("Invalid Credentials");
        }
      });
  };

  return (
    <div className="container">
      {/* <!-- Outer Row --> */}
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* <!-- Nested Row within Card Body --> */}
              <div className="row">
                <div className="col-lg-3 d-none d-lg-block "></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form className="user" onSubmit={handleLogin}>
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
                      <button
                        type="submit"
                        className="btn btn-primary btn-user btn-block"
                      >
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
