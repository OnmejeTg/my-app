import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  // Check if isAuthenticated prop is not provided or is undefined
  const isUserAuthenticated = isAuthenticated !== undefined ? isAuthenticated : false;

  return (
    <Route
      {...rest}
      render={(props) =>
        isUserAuthenticated ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
};

// Set a default value for the isAuthenticated prop (optional)
ProtectedRoute.defaultProps = {
  isAuthenticated: false,
};

export default ProtectedRoute;
