import React from "react";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";
import NavBar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Favorites = () => {
  const menuItems = useSelector((store: any) => store.menu.items).filter(
    (item: any) => item.isFavorite === true
  );

  const navigate = useNavigate();
  const user = useSelector((store: any) => store.user?.username);

  useEffect(() => {
    if (user) {
      //console.log(user);
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div>
        <NavBar />
      </div>
      <div className="my-16 mx-auto w-[90%] min-h-[500px] ">
        <h1
          className="text-4xl font-semibold w-fit m-2 mx-auto"
          style={{ fontFamily: "cursive" }}
        >
          Favorites
        </h1>
        {menuItems.length === 0 && (
          <p className="my-16 text-md font-light w-fit  text-gray-600 m-2 mx-auto">
            No favorites found. Please add some items to your favorites.
          </p>
        )}
        <div className="flex flex-wrap justify-center ">
          {menuItems.map((item: any) => (
            <div className="m-2 p-2 h-[700px] w-[350px]">
              <MenuItem key={item.id} item={item} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Favorites;
