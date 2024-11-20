import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import homeImg from "../assets/home-img.jpg";

const Body = () => {
  const user = useSelector((store: any) => store.user?.username);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      //console.log(user);
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div className="">
      {user && (
        <div>
          <h1 className="text-4xl font-bold mt-10 ml-40">Hello {user}!</h1>
          <div className="my-16 mx-auto w-[80%] flex flex-row items-center justify-center">
            <div className=" w-1/3 align-middle items-center">
              <img
                className="w-[350px] h-[450px] rounded-xl"
                src={homeImg}
              ></img>
            </div>
            <div className="bg-white bg-opacity-50 rounded-lg hover:shadow-2xl mx-5 p-6  w-2/3">
              <h2 className="text-2xl font-semibold mb-4">
                Welcome to Curry Express
              </h2>
              <p className="text-gray-700">
                At Curry Express, we pride ourselves on offering a dining
                experience that not only satisfies your appetite but also
                immerses you in the rich culinary heritage of India. Our chefs
                bring years of experience and passion to every dish, ensuring
                that the flavors are both authentic and innovative. From the
                aromatic biryanis to our creamy butter chicken, each item on the
                menu is a celebration of India's vibrant food culture.
                <br />
                <br />
                We cater to a variety of palates, with options ranging from mild
                to spicy, and our vegetarian and vegan selections are crafted
                with just as much care and flavor as our meat dishes. Whether
                you're a longtime lover of Indian cuisine or trying it for the
                first time, Curry Express offers something for everyone.
                <br />
                <br />
                Our cozy, inviting atmosphere is perfect for family gatherings,
                casual dinners, or even quick bites during your lunch break. And
                if you're short on time, our convenient takeout and delivery
                options ensure that you can enjoy the flavors of India wherever
                you are.
                <br />
                <br />
                Experience the taste of tradition with a modern twist at Curry
                Express, where every meal is a journey through the heart of
                Indian cuisine!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
