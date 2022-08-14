import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiMenu, BiPhone, BiSearch } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const HeaderBottom = () => {
  const [show, setShow] = useState(false);

  const [scroll, SetScroll] = useState(false);
  const menuRef = useRef(null);
  const hanldeSetShow = () => {
    setShow(true);
  };
  useEffect(() => {
    const hanldeScroll = () => {
      if (window.scrollY > 300) {
        SetScroll(true);
      } else {
        SetScroll(false);
      }
    };
    const hanldeClickSideOut = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !e.target.matches("button")
      ) {
        // setShow(false);
      }
    };
    window.addEventListener("scroll", hanldeScroll);
    window.addEventListener("click", hanldeClickSideOut);

    return () => {
      window.removeEventListener("scroll", hanldeScroll);
      window.removeEventListener("click", hanldeClickSideOut);
    };
  }, []);

  return (
    <div
      className={`
       h-[70px] w-full  max-w-[1170px] mx-auto  flex items-center xl:px-5 md:px-4 px-[10px] mb-5 bg-w md:justify-start  border-b `}
    >
      <button onClick={hanldeSetShow} className="text-2xl md:hidden z-10">
        <BiMenu />
      </button>
      <Link
        to="/"
        className=" mx-auto w-[60px] h-[60px] rounded-full flex items-center justify-center  md:justify-start md:flex-none md:mx-0"
      >
        <img src="/logo-primary.jpg" alt="" className="h-full p-2" />
      </Link>
      <Link
        to="/thanh-toan"
        className="cart text-xl relative  rounded-full w-6 h-6 flex items-center justify-center text-w bg-d md:hidden"
      >
        <HiOutlineShoppingBag />
        <div className="absolute bg-d -top-[6px] -right-[6px] w-[16px] h-[16px] text-xs flex items-center justify-center rounded-full">
          {/* <span className="text-w">{cartNumber.length || 0}</span> */}
        </div>
      </Link>
      <div
        ref={menuRef}
        className={`${show ? "translate-x-0" : "-translate-x-full"} 
          fixed inset-0  md:-translate-x-0 transition-all duration-150 bg-w text-[#5d5c56]  z-10 gap-y-5 pt-5  flex flex-col md:text-b md:flex-row md:pt-0 md:bg-[#fff]  md:static items-center md:gap-x-4 md:flex md:text-lg font-bold md:ml-5 lg:ml-6 xl:ml-10 lg:text-xl  lg:gap-x-5`}
      >
        <NavLink
          to="/"
          onClick={() => setShow(false)}
          className={" header-menu-item"}
        >
          Trang chủ
        </NavLink>
        <NavLink
          to="/gioi-thieu"
          onClick={() => setShow(false)}
          className={" header-menu-item"}
        >
          Giới Thiệu
        </NavLink>
        <NavLink
          to="/san-pham"
          onClick={() => setShow(false)}
          className={" header-menu-item"}
        >
          Sản Phẩm
        </NavLink>

        <NavLink
          to="/bai-viet"
          onClick={() => setShow(false)}
          className={" header-menu-item"}
        >
          Bài viết
        </NavLink>
        <NavLink
          to="/thanh-toan"
          onClick={() => setShow(false)}
          className={" header-menu-item"}
        >
          Giỏ Hàng
        </NavLink>
        <NavLink
          to="/lien-he"
          onClick={() => setShow(false)}
          className={"text-c cursor-pointer header-menu-item"}
        >
          Liên Hệ
        </NavLink>
        <button
          onClick={() => setShow(false)}
          className="md:hidden absolute top-2 right-2 px-2 py-2"
        >
          X
        </button>
      </div>
      <div className=" items-center hidden md:flex border input-wrapper border-[#ccc] px-2 py-2  text-xl md:rounded-lg ld:rounded-xl md:ml-auto">
        <input
          type="text"
          className="px-2 hidden lg:flex outline-none border-none text-base inputelement "
          placeholder="Tìm kiếm..."
        />
        <Link to="/san-pham">
          <BiSearch />
        </Link>
      </div>
    </div>
  );
};

export default HeaderBottom;
