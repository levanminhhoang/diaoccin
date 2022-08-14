import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ item }) => {
  const { area, bedroom, bathroom } = item?.infoProject;
  const information = [
    {
      image: "/icon/icon-small/area.jpg",
      content: `${area} m²`,
    },
    {
      image: "/icon/icon-small/giuong.jpg",
      content: bedroom,
    },
    {
      image: "/icon/icon-small/bon-tam.jpg",
      content: bathroom,
    },
  ];
  return (
    <div className="flex relative flex-col  rounded-lg shadow-lg hover:-translate-y-[1px]  cursor-pointer ">
      <div className="pt-[76%] relative border__t">
        <img
          src={item?.image}
          alt=""
          className="absolute inset-0 object-cover w-full h-full border__t"
        />
      </div>
      <div className="p-2 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-[#e21948] font-bold text-[15px]">
            {item?.price.value} {item?.price?.current}
          </span>
          <div className="flex items-center gap-1 text-[13px] justify-between">
            {information.map((info, index) => (
              <div key={index} className="flex items-center gap-1">
                <img
                  className="w-[18px] h-[18px] object-cover"
                  src={info?.image}
                  alt="icon"
                />
                <span>{info?.content}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="text-[#dc2626] text-sm uppercase text__over-2 font-bold">
          {item?.title}
        </div>
        <div className="flex float-right items-center ">
          <div className="w-[34px] h-[18px] ml-1 mr-1 flex item-center justify-center">
            <img
              className="w-[18px] h-[18px] object-cover"
              src="/icon/icon-small/location-primary.jpg"
              alt=""
            />
          </div>
          <span className="text__over-1">{item?.address}</span>
        </div>
      </div>
    </div>
  );
};

ProductItem.prototype = {
  item: PropTypes.object.isRequired,
};

export default ProductItem;
