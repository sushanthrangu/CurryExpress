import React from "react";

const OrderSuccessful = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center w-[90%] md:w-[50%]">
        <h2 className="text-2xl font-bold mb-4">Order Successful!</h2>
        <p className="text-lg text-gray-600 mb-6">
          Your order has been placed successfully. Thank you for shopping with
          us!
        </p>
        <button
          onClick={onClose}
          className="bg-green-500 text-white px-4 py-2 rounded-lg text-lg hover:bg-green-600 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default OrderSuccessful;
