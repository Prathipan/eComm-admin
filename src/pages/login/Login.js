import "./login.css";
import Vector from "../../assets/vector.png";
import { Lock, Person } from "@mui/icons-material";
import { useContext, useState } from "react";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import { CircularProgress } from "@mui/material";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const { dispatch, isFetching } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(loginDetails, dispatch);
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-right">
          <img src={Vector} className="vector-image" alt="" />
        </div>
        <div className="login-left">
          <h2>Login as admin</h2>
          <span style={{color : "red"}}>Email : admin@gmail.com || passsword : 123456</span>
          <form className="login-form">
            <div className="input-field">
              <input
                type="email"
                name="email"
                value={loginDetails.email}
                placeholder="Email Address"
                onChange={handleChange}
              />
              <Person />
            </div>
            <div className="input-field">
              <input
                type="password"
                name="password"
                value={loginDetails.password}
                placeholder="Password"
                onChange={handleChange}
              />
              <Lock />
            </div>
            {isFetching ? (
              <CircularProgress />
            ) : (
              <button className="login-button" onClick={handleSubmit}>
                Login
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
