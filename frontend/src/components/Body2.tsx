import React, { useEffect } from "react";
import home2Bg from "../assets/home2-bg.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";

const Body2 = () => {
  const menuItems = useSelector((store: any) => store.menu.items);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  // Custom arrow components
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }

  return menuItems.length == 0 ? (
    <div>Loading...</div>
  ) : (
    <div>
      <div>
        <div className="my-24 mb-32">
          {/* I want this span to be a line */}
          <h1 className="text-3xl font-serif mb-4 text-center text-gray-800">
            {" "}
            Menu
          </h1>
          <Slider {...settings} className=" w-[90%] mx-auto">
            {menuItems.map((item: any) => (
              <div className="h-[600px]">
                <MenuItem key={item.id} item={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Body2;
