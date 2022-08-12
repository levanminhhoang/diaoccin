import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/scss";

import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";
const Section = ({ title, data: productSaler }) => {
  return (
    <div className=" w-full max-w-[1280px] mx-auto px-[10px] md:px-4 lg:px-5 xl:px-8 mt-10 mb-10 lg:mb-20">
      <h2 className="text-center text-3xl  xl:text-4xl font-bold text-b ">
        {title}
      </h2>
      <div className=" py-10">
        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={6}
          breakpoints={{
            1240: {
              minWidth: 1240,
              slidesPerView: 6,
            },
            1000: {
              minWidth: 1000,
              slidesPerView: 5,
            },

            678: {
              minWidth: 678,
              slidesPerView: 4,
            },
            320: {
              minWidth: 300,
              slidesPerView: 2,
            },
            500: {
              minWidth: 500,
              slidesPerView: 3,
            },
          }}
        >
          {productSaler.length > 0 &&
            productSaler.map((item, index) => (
              <SwiperSlide key={index}>
                <ProductItem item={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <Link
        to="/san-pham"
        className="w-full cursor-pointer max-w-[148px] flex items-center justify-center mx-auto bg-d text-w rounded-md py-[6px]"
      >
        Xem thêm
      </Link>
    </div>
  );
};

export default Section;

export const Section2 = ({ title, data: productSaler }) => {
  return (
    <div className=" w-full max-w-[1280px] mx-auto px-[10px] md:px-4 lg:px-5 xl:px-8 mt-10">
      <h2 className="text-center text-4xl  xl:text-5xl font-bold text-b ">
        {title}
      </h2>
      <div className=" py-10 grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-10">
        {productSaler.length > 0 &&
          productSaler.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
      </div>
    </div>
  );
};
