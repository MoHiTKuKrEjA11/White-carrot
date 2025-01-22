import React from "react";
import { GoogleLogin } from "@react-oauth/google";

const Login = ({ onSuccess }) => {
  const handleLoginSuccess = (credentialResponse) => {
    const { credential } = credentialResponse;
    onSuccess(credential); // Send the JWT to the parent for further use
  };

  const handleLoginError = () => {
    console.error("Login Failed");
  };

  return (
    <div>
      <h2>Login with Google</h2>
      <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginError} />
    </div>
  );
};

export default Login;
