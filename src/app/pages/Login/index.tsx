import React, { useState } from "react";
import { login } from "../../Slices/authSlice";
import { useAppDispatch } from "../../hooks";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export function LoginPage() {
  const dispatch = useAppDispatch();
  const {
    auth: { isLoggedIn },
  } = useSelector((state: RootState) => state);

  let history = useHistory();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  if (isLoggedIn) {
    history.push("/dashboard");
  }

  const onChangeHandler = (event: any) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(login(formValues));
  };

  const { email, password } = formValues;

  return (
    <div className="loginWrap">
      <div className="loginContent">
        <a href="#" className="signInLogo">
          <img src="../../../images/logo-1.svg" alt="" />
        </a>
        11
        <div className="mainForm">
          <form onSubmit={onSubmit}>
            <div className="heading">
              <h1>Sign In to Metronic</h1>
              <span>
                New Here? <Link to="/signup">Create an Account</Link>
              </span>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={onChangeHandler}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">
                Password <a href="#">Forgot Password ?</a>
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={onChangeHandler}
                className="form-control"
                id="exampleInputPassword1"
                placeholder=""
              />
            </div>
            <div className="form-check">
              <button type="submit">Continue</button>
              <div className="text-center">or</div>
              <div className="social-media">
                <div className="social-items">
                  <img src="../../../images/google-icon.svg" alt="google" />
                  <a href="#"> Continue with Google</a>
                </div>
                <div className="social-items">
                  <img src="../../../images/facebook-4.svg" alt="" />
                  <a href="#"> Continue with Facebook</a>
                </div>
                <div className="social-items">
                  <img src="../../../images/apple-black.svg" alt="" />
                  <a href="#"> Continue with Apple</a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <footer>
        <div className="links">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}
function state(state: any, arg1: (RootState: unknown) => any): {} {
  throw new Error("Function not implemented.");
}
