import React, { useState } from "react";
import Body from "./Body";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Body2 from "./Body2";
import homeBg from "../assets/home-bg.jpg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState([]);
  const user = useSelector((store: any) => store.user?.username);

  useEffect(() => {
    if (user) {
      //console.log(user);
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div>
      {/* <div className="fixed -z-20">
        <img className="w-screen h-screen" src={homeBg}></img>
      </div> */}
      <Navbar />
      <Body />
      <div>
        <div id="menu">
          <Body2 />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
