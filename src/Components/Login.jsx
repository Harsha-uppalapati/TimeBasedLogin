import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  let [handleForm, setHandleForm] = useState({ err: true });
  let navigate = useNavigate();
  let handleValid = e => {
    let { name, value } = e.target;
    setHandleForm({ ...handleForm, [name]: value });
  };
  let passwordMatch = e => {
    e.preventDefault();
    let pass = new Date().getMinutes();
    pass += new Date().getHours();
    pass += new Date().getFullYear();
    if (parseInt(handleForm.password) == pass) {
      setHandleForm({ ...handleForm, err: true });
      navigate("/home");
    } else {
      setHandleForm({ ...handleForm, err: false });
    }
  };
  return (
    <>
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <form className="login">
              <div>Time Based Login</div>
              {/* <div className="login__field">
                <i className="login__icon fas fa-user" />
                <input
                  type="text"
                  name="email"
                  className="login__input"
                  placeholder="User name / Email"
                />
              </div>
              <div style={{ color: "red", fontSize: "14px" }}>err</div> */}
              <div className="login__field">
                <i className="login__icon fas fa-lock" />
                <input
                  type="password"
                  name="password"
                  className="login__input"
                  placeholder="Password"
                  onChange={e => handleValid(e)}
                />
              </div>
              {handleForm.err == false ? (
                <div style={{ color: "red", fontSize: "14px" }}>
                  Wrong Password
                </div>
              ) : (
                ""
              )}

              <button
                className="button login__submit"
                onClick={e => passwordMatch(e)}
              >
                <span className="button__text">Log In Now</span>
                <i className="button__icon fas fa-chevron-right" />
              </button>
            </form>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4" />
            <span className="screen__background__shape screen__background__shape3" />
            <span className="screen__background__shape screen__background__shape2" />
            <span className="screen__background__shape screen__background__shape1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
