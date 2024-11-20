import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";

const CartItem = (props: any) => {
  const { item } = props;
  const dispatch = useDispatch();

  const handleRemoveItem = (id: any) => {
    // Implement the logic to remove the item from the cart
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <li className="border-b border-gray-300 p-4">
        <div className="flex items-center justify-between mx-auto ">
          <img
            src={item.Image}
            alt={item.name}
            className="w-28 h-28 object-cover m-2 p-2"
          />
          <div className="m-1 p-1 w-[30%]">
            <h3 className="text-lg">{item.name}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
          <div className="m-1 p-1 ">
            <p className="text-gray-600">${item.price}</p>
          </div>
          <div className="m-1 p-1 ">
            <button
              onClick={() => handleRemoveItem(item.id)}
              className="bg-black text-white px-4 py-1 rounded-lg text-md hover:bg-red-600 transition duration-300"
            >
              Remove
            </button>
          </div>
        </div>
      </li>
    </div>
  );
};

export default CartItem;
