import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { updateFavorites } from "../store/menuSlice";
import { v4 as uuidv4 } from "uuid";
import favorite from "../assets/heart.png";
import save from "../assets/save.png";

const MenuItem = (props: any) => {
  const { item, favorites } = props;
  const dispatch = useDispatch();
  //const [isFavorite, setIsFavorite] = React.useState(false);

  const handleAddToCart = () => {
    const uniqueId = uuidv4();
    console.log(uniqueId);
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        description: item.description,
        Image: item.Image,
      })
    );
    //console.log("Item added to cart:", item);
  };

  const handleFavorite = (isFavorite: boolean, id: any) => {
    //const uniqueId = uuidv4();
    if (!isFavorite) {
      dispatch(updateFavorites({ id: id, isFavorite: true }));
    } else {
      dispatch(updateFavorites({ id: id, isFavorite: false }));
    }
  };

  return (
    <div className=" m-5 rounded-xl rounded-lg shadow-slate-400 shadow-lg">
      <div className=" p-2 ">
        <img
          className="m-2 w-[12rem] h-[12rem] rounded-xl mx-auto"
          src={item.Image}
        ></img>
      </div>

      <div className="flex flex-col justify-center  p-2 m-2">
        <h2 className=" m-1 p-1 text-2xl font-bold mb-4 text-center">
          {item.name}
        </h2>
        <p className="m-1 p-1 text-md ">{item.description}</p>
        <p className=" m-1 p-1 text-md ">Price: {item.price}</p>

        <div className="flex items-center">
          <p className="m-1 p-1 text-md">
            {item.type === "veg" ? "Veg " : "Non-veg "}
          </p>
          <svg width="20" height="20" className="ml-1">
            <circle
              cx="10"
              cy="10"
              r="10"
              stroke-width="2"
              fill={item.type === "veg" ? "green" : "red"}
            />
          </svg>
        </div>

        <p className=" m-1 p-1 text-md ">
          ingredients: {item.ingredients.join(", ")}
        </p>
        <div className="flex items-center mx-auto">
          <img
            className="m-1 p-1 mx-2 w-9 h-9 cursor-pointer"
            src={!item.isFavorite ? favorite : save}
            onClick={() => handleFavorite(item.isFavorite, item.id)}
          ></img>

          <button
            className="m-1 p-1 w-36 rounded-lg mx-2  text-md bg-blue-500 bottom-1 text-white hover:bg-blue-800 transition duration-300"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
