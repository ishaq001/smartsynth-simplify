import React, { useState } from "react";
import { signup } from "../../Slices/authSlice";
import { useAppDispatch } from "../../hooks";
import { useHistory } from "react-router-dom";
import "./signup.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export function Signup() {
  const dispatch = useAppDispatch();
  let history = useHistory();
  const {
    auth: { isLoggedIn },
  } = useSelector((state: RootState) => state);

  if (isLoggedIn) {
    history.push("/dashboard");
  }

  interface FormValuesType {
    email: string;
    first_name: string;
    last_name: string;
    password: string;
  }

  const [formValues, setFormValues] = useState<FormValuesType>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event: any) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    dispatch(signup(formValues));
  };

  const { email, first_name, last_name, password } = formValues;

  return (
    <div className="loginWrap">
      <div className="form-button">
        <button onClick={onSubmit}>Submit</button>
      </div>
      <div className="loginContent signin">
        <a href="#" className="signInLogo">
          <img src="images/logo-1.svg" alt="" />
        </a>
        <div className="mainForm">
          <form onSubmit={onSubmit}>
            <div className="heading">
              <h1>Create an Account</h1>
              <span>
                Already have an account? <a href="/login">Sign in here</a>
              </span>
            </div>
            <button type="submit">
              <img src="images/google-icon.svg" alt="" /> Sign in with Google
            </button>
            <div className="textCenter">
              <div className="border"></div>
              <div className="center">or</div>
              <div className="border"></div>
            </div>
            <div className="form-group">
              <div className="group">
                <label htmlFor="exampleInputEmail1">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  className="form-control"
                  id="first_name"
                  value={first_name}
                  onChange={onChangeHandler}
                  aria-describedby="emailHelp"
                  placeholder="First Name!"
                />
              </div>
              <div className="group">
                <label htmlFor="exampleInputEmail1">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="last_name"
                  name="last_name"
                  value={last_name}
                  onChange={onChangeHandler}
                  aria-describedby="emailHelp"
                  placeholder=""
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1"> Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={onChangeHandler}
                aria-describedby="emailHelp"
                placeholder=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1"> Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={onChangeHandler}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder=""
              />
              <i className="fa fa-eye-slash" aria-hidden="true"></i>
              <div className="slide">
                <div className="slideItems"></div>
                <div className="slideItems"></div>
                <div className="slideItems"></div>
                <div className="slideItems"></div>
              </div>
              <span>
                Use 8 or more characters with a mix of letters, numbers &
                symbols.
              </span>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Confirm Password</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder=""
              />
            </div>

            <div className="form-check">
              <input type="text" />
              {/* <!-- <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            /> --> */}
              <label className="form-check-label" htmlFor="exampleCheck1">
                I Agree
              </label>
              <a href="#">Terms and conditions</a>
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
