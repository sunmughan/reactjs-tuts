import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

const Login = () => {
  const [user, setUser] = useState();
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  let redirectPath;
  if (location.state) {
    redirectPath = location.state.path;
  } else {
    redirectPath = "/";
  }
  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };

  return (
    <>
      <div>
        <label>UserName : </label>
        <input
          type={"text"}
          name="userName"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={handleLogin}>Submit</button>
      </div>
    </>
  );
};

export default Login;
