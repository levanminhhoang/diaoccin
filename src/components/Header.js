import React from "react";
import { BiPhone } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";

import { FiMail } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import HeaderBottom from "./HeaderBottom";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="hidden w-full   h-10 leading-10  bg-[#eec346] md:flex  text-w">
        <div className="flex items-center justify-between w-full px-[15px]  md:px-4  xl:px-5  max-w-[1170px] mx-auto">
          <div className="cursor-pointer flex gap-x-5">
            <div className="flex items-center gap-x-2">
              <BiPhone />
              <a href="tel:+0935523636">093 552 3636</a>
            </div>
            <div className="flex items-center gap-x-2">
              <FiMail />
              <a href="mailto:tinhdauthaiviet@gmail.com">
                ctcpwesternhomes@gmail.com
              </a>
            </div>
          </div>

          <div className="flex  gap-x-4 ">
            <Link to="/login" className="flex items-center">
              <AiOutlineUser />
              <span className="text-base leading-[16px] ml-2">đăng nhập</span>
            </Link>
            <Link
              to="/thanh-toan"
              className="flex w-5 h-5 items-center justify-center"
            >
              <img
                src="tin.jpg"
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </Link>
          </div>
        </div>
      </div>

      <HeaderBottom />
    </>
  );
};

export default Header;
