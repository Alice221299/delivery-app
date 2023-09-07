import React from "react";
import { useForm } from "react-hook-form";
import logo from "../../assets/Logo.png";
import "./login.scss";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, loginWithEmailAndPassword } from "../../redux/authActions";
import google from "../../assets/google.svg";
// import { useAuth } from "../../context/authContext";
import { async } from "@firebase/util";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { error } = useSelector((store) => store.auth);

  const signIn = (data) => {
    dispatch(loginWithEmailAndPassword(data));
  }
  if (error) {
    Swal.fire({
      text: "Login failed",
      confirmButtonColor: "#FFE031",
    });
  }
  if (error === false) {
    Swal.fire({
      text: `Welcome back!`,
      confirmButtonColor: "#FFE031",
    }).then(() => {
      setTimeout(() => {
        navigate("/home");
      }, 100);
    });
  }

  const loginWithGoogle = () => {
    dispatch(login());
  };

  return (
    <div className="login">
      <div className="login__header">
        <img src={logo} alt="" />
        <h1>Sign in</h1>
        <p className="login-text">
          Login or create an account with your phone number to start ordering
        </p>
      </div>

      <form className="login__form" onSubmit={handleSubmit(signIn)}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email format",
              },
            })}
            className="login__input"
          />
          {errors.email && (
            <span className="error" style={{ color: "red", fontSize: "10px" }}>
              {errors.email.message}
            </span>
          )}
        </div>
        <div>
          <label className="login__label">Password</label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: "Password is required",
            })}
            className="login__input"
          />
          {errors.password && (
            <span className="error" style={{ color: "red", fontSize: "10px" }}>
              {errors.password.message}
            </span>
          )}
        </div>
        <p className="login__link">
          Don't have an account?
          <br />
          <Link to={"/register"}>Sign Up</Link>
        </p>
        <button className="login__button" type="submit">
          Login
        </button>
      </form>
      <button type="button" className="login__button google" onClick={loginWithGoogle}>
        Sign in with Google
        <img src={google} alt="google icon" />
      </button>
    </div>
  );
};

export default Login;
