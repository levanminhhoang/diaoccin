import React from "react";

const ProductItemOne = ({ item, trys }) => {
  const block = `Quy Mô: ${item?.scale?.block} block, ${item?.scale?.apartment} căn hộ`;
  const information = [
    {
      icon: "/g.jpg",
      content: item?.address,
    },
    {
      icon: "/k.png",
      content: block,
    },
    {
      icon: "/h.jpg",
      content: item?.type,
    },
  ];
  return (
    <div className="flex flex-col border border-[#ddd]">
      <div className="relative pt-[66%]">
        <img
          src={item?.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 p-2">
        <a href="/" className="text-[#242933] font-[400] text-xl leading-6">
          <h4>{item?.title}</h4>
        </a>
        {trys ? (
          <></>
        ) : (
          <>
            <div className="flex items-center gap-1 font-[400] text-[#5c5d56] text-base">
              <span>Chủ đầu tư:</span>
              <span>{item?.ownerInvestment}</span>
            </div>
            <div className="flex flex-col gap-2 font-[400] text-sm text-[#5c5d56]">
              {information.length > 0 &&
                information.map((item, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <div className="w-[20px] h-[20px] flex items-center justify-center">
                      <img
                        src={item?.icon}
                        alt=""
                        className="w-[18px] h-[18px] object-cover"
                      />
                    </div>
                    <span className="text__over-1">{item?.content}</span>
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductItemOne;
