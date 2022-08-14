import React from "react";

const Banner = () => {
  return (
    <div className="w-full max-w-[1170px] mx-auto px-[10px] md:px-4 lg:px-5 xl:px-8 mt-10 mb-5 grid grid-cols-1">
      <img
        src="/banner/banner2.jpg"
        alt="banner"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Banner;
