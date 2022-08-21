import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/scss";
import ProductItem from "./ProductItem";

import { project } from "../api/listproduct";
import { jobCityLand } from "../api/jobCityLand";
const Section = ({ title = "Nhà đất bán mới nhất", data: productSaler }) => {
  return (
    <div className=" w-full max-w-[1170px] mx-auto px-[10px] md:px-4 lg:px-5 xl:px-8 mt-10 mb-10 lg:mb-20">
      <div className="flex items-center justify-between">
        <h2 className="text-center text-2xl font-[400] text-[#5d5c56] ">
          {title}
        </h2>
        <button className="bg-[#fff] border text-[#eec346] border-[#eec346] rounded-sm px-4 py-1">
          Xem tất cả
        </button>
      </div>
      <div className=" py-5">
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
              slidesPerView: 4,
            },
            1000: {
              minWidth: 1000,
              slidesPerView: 4,
            },

            678: {
              minWidth: 678,
              slidesPerView: 3,
            },
            320: {
              minWidth: 300,
              slidesPerView: 2,
            },
            400: {
              minWidth: 400,
              slidesPerView: 2,
            },
          }}
        >
          {jobCityLand.length > 0 &&
            jobCityLand.slice(0, 10).map((item, index) => (
              <SwiperSlide key={index}>
                <ProductItem item={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Section;
