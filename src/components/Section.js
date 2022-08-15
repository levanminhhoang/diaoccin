import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/scss";
import ProductItem from "./ProductItem";

import { project } from "../api/listproduct";
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
          {project.length > 0 &&
            project.map((item, index) => (
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

// export const Section2 = ({
//   title = "Nhà đất bán mới nhất",
//   data: productSaler,
// }) => {
//   return (
//     <div className=" w-full max-w-[1280px] mx-auto px-[10px] md:px-4 lg:px-5 xl:px-8 mt-10">
//       <div className="flex items-center justify-between">
//         <h2 className="text-center text-xl font-bold text-b ">{title}</h2>
//         <button className="bg-[#fff] border border-[#000] rounded-sm px-4 py-1">
//           Xem tất cả
//         </button>
//       </div>
//       <div className=" py-5 grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-10">
//         {project.length > 0 &&
//           project.map((item, index) => <ProductItem key={index} item={item} />)}
//       </div>
//     </div>
//   );
// };
