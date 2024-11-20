import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/userSlice";
import { useSelector } from "react-redux";
import Logo from "../assets/logo.avif";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.cartItems);
  //console.log(cartItems.length);
  // if (cartItems) {
  //   console.log(cartItems.length);
  // }

  const handleMenuClick = () => {
    console.log("Menu clicked");
    navigate("/home");
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    dispatch(removeUser());
    navigate("/");
  };

  useEffect(() => {
    // Fetch menu items from the backend API
    console.log("useEffect hook in NavBar is being called");
  }, [cartItems]);

  return (
    <div className="p-3 flex flex-row justify-between bg-blue-950  text-white">
      <div className="ml-6">
        {/* <h2 className="text-3xl font-bold cursor-pointer">Curry Express</h2> */}
        <img
          onClick={() => navigate("/home")}
          className="w-[100px] h-[100px] cursor-pointer"
          src={Logo}
        ></img>
      </div>
      <div className="m-2 p-2">
        <ul className="flex flex-row   h-10">
          <li className="mx-2 p-2 px-2 ">
            <Link to="/home">Home</Link>
          </li>
          <li
            className="mx-2 p-2 px-2 cursor-pointer hover:font-bold"
            onClick={() => navigate("/favorites")}
          >
            Favorites
          </li>
          <li
            className="mx-2 p-2 px-2 cursor-pointer hover:font-bold"
            onClick={() => navigate("/cart")}
          >
            <span>Cart </span>
          </li>
          <li
            className="mx-2 p-2 px-2 cursor-pointer hover:font-bold"
            onClick={handleLogout}
          >
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
