import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/cartSlice";
import NavBar from "./Navbar";
import CartItem from "./CartItem";
import OrderSuccessful from "./OrderSuccessful";
import { useLocation } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store: any) => store.cart.items);
  const user = useSelector((store: any) => store.user?.username);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [isOrderSuccessful, setIsOrderSuccessful] = useState(false);

  const totalPrice = cartItems.reduce(
    (total: number, item: any) => total + item.price,
    0
  );

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleCheckout = () => {
    // Show the success popup
    setIsOrderSuccessful(true);

    // Clear the cart after checkout
    dispatch(clearCart());
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCloseSuccessPopup = () => {
    setIsOrderSuccessful(false);
  };

  const handleClick = () => {
    navigate("/home/#menu");
  };

  return (
    <div className="relative">
      <NavBar />
      <div
        className={`items-center flex flex-col my-10 ${
          isOrderSuccessful ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <h1 className="text-3xl font-bold mb-8">Cart</h1>
        <button
          onClick={handleClearCart}
          className="bg-black text-white px-4 py-2 rounded-lg text-lg hover:bg-red-600 transition duration-300"
        >
          Clear Cart
        </button>
        {cartItems.length === 0 ? (
          <p
            className="mt-36 text-lg text-gray-500 hover:text-gray-600 cursor-pointer"
            onClick={handleClick}
          >
            Your cart is empty. Add items to it.
          </p>
        ) : (
          <div className="my-10 w-[50%]">
            <ul>
              {cartItems.map((item: any) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>
            <div className="flex my-5 items-center w-full">
              <p className="ml-auto m-2 p-2 text-lg font-semibold">
                Total Price: ${totalPrice}
              </p>
              <button
                onClick={handleCheckout}
                className="m-2 p-2 bg-green-500 border border-green-500 text-white px-4 py-2 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-500 transition duration-300"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>

      {isOrderSuccessful && (
        <OrderSuccessful onClose={handleCloseSuccessPopup} />
      )}
    </div>
  );
};

export default Cart;
