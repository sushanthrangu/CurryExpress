import React, { useRef } from "react";
import { useState, useEffect } from "react";
import bgImage from "../assets/bg-img.jpeg";
import Logo from "../assets/logo.avif";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { GoogleLogin } from "@react-oauth/google";
import { addMenuItems } from "../store/menuSlice";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUpForm, setIsSignUpForm] = useState(false);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickSignUp = () => {
    setIsSignUpForm(!isSignUpForm);
  };

  useEffect(() => {
    // Fetch menu items from the backend API
    // console.log("useEffect hook is being called");
    getMenuItems();
  }, []);

  const getMenuItems = async () => {
    console.log("getMenuItems function is being called");
    axios
      .get("http://127.0.0.1:5001/getmenu")
      .then((response) => {
        //console.log(response?.data[0]);
        dispatch(addMenuItems(response?.data));
      })
      .catch((error) => {
        console.error("Error fetching menu items:", error);
      });
  };

  const handleClick = () => {
    if (!isSignUpForm) {
      //console.log(usernameRef, passwordRef);
      if (usernameRef.current === null || passwordRef.current === null) {
        alert("Please enter usernameRef and passwordRef");
        return;
      }
      const usernameRefValue = (usernameRef.current as HTMLInputElement).value;
      const passwordRefValue = (passwordRef.current as HTMLInputElement).value;
      //console.log(usernameRefValue, passwordRefValue);
      axios
        .post("http://localhost:5001/login", {
          Password: passwordRefValue,
          Name: usernameRefValue,
        })
        .then((res) => {
          // If login successful, redirect to OrderPizza page
          if (res.data.data === 1) {
            // adding the username to the redux store
            //console.log(usernameRefValue);
            dispatch(addUser({ username: usernameRefValue }));
            navigate("/home");
          } else {
            // If login failed, show alert and stay on Login page
            alert("Invalid Username or password");
            navigate("/");
          }
          //console.log(res);
        })
        .catch((err) => {
          // If there's an error, show alert and stay on Login page
          console.log("in error");
          console.log(err);
          alert("Something is wrong check the console");
          navigate("/");
        });
    } else {
      if (
        usernameRef.current === null ||
        passwordRef.current === null ||
        emailRef.current === null ||
        phoneRef.current === null
      ) {
        alert("Please enter all the fields");

        return;
      }
      const usernameRefValue = (usernameRef.current as HTMLInputElement).value;
      const passwordRefValue = (passwordRef.current as HTMLInputElement).value;
      const emailRefValue = (emailRef.current as HTMLInputElement).value;
      const phoneRefValue = (phoneRef.current as HTMLInputElement).value;
      console.log(
        usernameRefValue,
        passwordRefValue,
        emailRefValue,
        phoneRefValue
      );
      // Sending registration data to the server
      axios
        .post("http://localhost:5001/register", {
          mob: phoneRefValue,
          name: usernameRefValue,
          email: emailRefValue,
          password: passwordRefValue,
        })
        .then((res) => {
          console.log(res);
          alert("You have successfully registered " + usernameRefValue);
          window.location.reload(); // Redirect to login page after successful registration
        })
        .catch((err) => {
          if (err.response) {
            // The request was made and the server responded with a status code
            console.log("Error Response:", err.response.data);
          } else if (err.request) {
            // The request was made but no response was received
            console.log("No Response Received:", err.request);
          } else {
            // Something else caused the error
            console.log("Error Message:", err.message);
          }
        });
    }
  };

  return (
    <div className="flex justify-between">
      <div className="w-[50%] h-screen bg-blue-950">
        <img
          className="mx-auto w-[300px] my-[30%]  h-[300px] "
          src={Logo}
          alt="login"
        />
      </div>

      <div className="w-[50%]">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-[9%] my-[8%] absolute flex flex-col p-12 w-[30%] shadow-2xl rounded-2xl "
        >
          <h1 className="text-3xl font-bold mb-8 text-center font-serif font-bold">
            Login
          </h1>
          <input
            ref={usernameRef}
            type="text"
            className="w-full rounded-lg p-2 m-4 mx-auto border-2 border-gray-300"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <div>
            {isSignUpForm ? (
              <input
                ref={emailRef}
                type="text"
                placeholder="Email Address"
                className="w-full rounded-lg p-2 m-4 mx-auto border-2 border-gray-300"
              ></input>
            ) : null}
          </div>
          <div>
            {isSignUpForm ? (
              <input
                ref={phoneRef}
                type="text"
                placeholder="Phone Number"
                className="w-full rounded-lg p-2 m-4 mx-auto border-2 border-gray-300"
              ></input>
            ) : null}
          </div>
          <input
            ref={passwordRef}
            type="password"
            className="w-full rounded-lg p-2 m-4 mx-auto border-gray-300 border-2"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="p-2 m-4 mx-auto w-full rounded-lg bg-blue-500 text-white hover:bg-blue-800 hover:text-gray-200"
            type="submit"
            onClick={handleClick}
          >
            {!isSignUpForm ? "Login" : "Sign Up"}
          </button>
          <p
            onClick={handleClickSignUp}
            className="mt-4 hover:cursor-pointer hover:text-blue-400"
          >
            {!isSignUpForm
              ? "Do not have an account? Sign Up Now"
              : "Already have an account? Sign In Now"}
          </p>
          {/* <hr className="my-4 w-full border-t-2 border-gray-300">or</hr> */}
          <p className="my-4 w-full border-t-2 border-gray-300"></p>

          {/* Google Login */}
          <div className="mx-auto">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const credentialResponseDecoded = jwtDecode(
                  credentialResponse.credential ?? ""
                );
                console.log(credentialResponseDecoded);
                dispatch(
                  addUser({ username: (credentialResponseDecoded as any).name })
                );
                navigate("/home");
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
