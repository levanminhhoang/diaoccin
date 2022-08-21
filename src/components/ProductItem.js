import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ item }) => {
  const { area, bedroom, bathroom } = item?.infoProject;
  const navigate = useNavigate();

  const information = [
    {
      image: "/area.jpg",
      content: `${area} m²`,
    },
    {
      image: "/giuong.jpg",
      content: bedroom,
    },
    {
      image: "/bon-tam.jpg",
      content: bathroom,
    },
  ];
  const handlePushDetail = (slug) => {
    navigate(`/nha-dat/${slug}`);
  };
  return (
    <div
      onClick={() => handlePushDetail(item?.slug)}
      className="flex relative flex-col  rounded-lg shadow-lg hover:-translate-y-[1px]  cursor-pointer "
    >
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
              <div key={index} className="flex items-center gap-1 product-item">
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
        <div className="text-[#dc2626] text-sm uppercase text__over-2 font-bold min-h-[40px]">
          {item?.title}
        </div>
        <div className="flex float-right items-center ">
          <div className="w-[34px] h-[18px] mr-2 flex item-center justify-center">
            <img
              className="w-[18px] h-[18px] object-cover"
              src="/location-primary.jpg"
              alt=""
            />
          </div>
          <span className="text__over-1 text-sm lg:text-base">
            {item?.address}
          </span>
        </div>
      </div>
    </div>
  );
};

ProductItem.prototype = {
  item: PropTypes.object.isRequired,
};

export default ProductItem;
