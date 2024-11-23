import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="">
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full lg:w-1/4 px-4">
            <ul className="list-none m-0 p-0 lg:flex justify-center">
              <li className="mb-2 mx-2 lg:mx-5">
                <a className="text-white hover:text-gray-300" href="#">
                  About
                </a>
              </li>
              <li className="mb-2 mx-2 lg:mx-5">
                <a className="text-white hover:text-gray-300" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-1/4 px-4 text-center">
            <p>Copyright &copy; 2024</p>
          </div>

          <div className="w-full lg:w-1/4 px-4  ">
            {/* <h2 className="text-xl font-bold mb-4 text-center">Social</h2> */}
            <ul className="list-none m-0 p-0 flex flex-row items-center justify-center">
              <li className="mb-2 mx-2">
                <div>
                  <p className="text-white hover:text-gray-300 mb-2">Git hub</p>
                  <div className="text-center">
                    <SocialIcon
                      url="https://github.com/rohanvarma29/curry-express"
                      target="_blank"
                      style={{ width: 30, height: 30 }}
                    />
                  </div>
                </div>
              </li>
              <li className="mb-2 mx-2">
                <div>
                  <p className="text-white hover:text-gray-300 mb-2">
                    Portfolio
                  </p>
                  <div className="text-center">
                    <SocialIcon
                      url="https://rohan-varma.vercel.app/"
                      target="_blank"
                      style={{ width: 30, height: 30 }}
                    />
                  </div>
                </div>
              </li>
              <li className="mb-2 mx-2">
                <div>
                  <p className="text-white hover:text-gray-300 mb-2 ">
                    LinkedIn
                  </p>
                  <div className="text-center">
                    <SocialIcon
                      url="https://www.linkedin.com/in/rgaddam5/"
                      target="_blank"
                      style={{ width: 30, height: 30 }}
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
