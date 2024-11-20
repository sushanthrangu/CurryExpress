import React from "react";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";
import NavBar from "./Navbar";
import Footer from "./Footer";

const Favorites = () => {
  const menuItems = useSelector((store: any) => store.menu.items).filter(
    (item: any) => item.isFavorite === true
  );

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
