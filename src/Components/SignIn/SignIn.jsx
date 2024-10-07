import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./SignIn.css";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  const ValidationHandler = (e) => {
    e.preventDefault();

    // Validation checks
    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    // If validation passes, redirect to the dashboard page
    setError("");
    navigate("/dashboard");
  };
  return (
    <div className="loginContainer">
      {/*left side*/}
      <div className="imageContainer">
        <img src="/public/Group.png" alt="group" className="groupImage" />
        <img
          src="/public/pablo-sign-in 1.png"
          alt="sign in"
          className="signInImage"
        />
      </div>
      {/*right side*/}

      <form onSubmit={ValidationHandler} className="form">
        <img src="/public/Group.png" alt="group" className="formImage" />
        <div className="formContainer">
          <h1>Welcome!</h1>
          <p className="loginDetails">Enter details to login.</p>
          {error && (
            <div className="errorContainer">
              <p className="errorStyle">{error}</p>
            </div>
          )}
          <input
            onChange={emailHandler}
            type="text"
            placeholder="Email"
            className="emailInput"
          />
          <div className="container">
            <input
              onChange={passwordHandler}
              type="password"
              placeholder="Password"
              className="passwordInput"
            />
            <h6>SHOW</h6>
          </div>

          <h6>FORGOT PASSWORD ?</h6>
          <button className="formButton">LOG IN</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
