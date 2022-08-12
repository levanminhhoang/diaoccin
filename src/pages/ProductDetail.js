import React, { useEffect } from "react";

const ProductDetail = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <>
      <div className="w-full max-w-[1280px] px-[15px] md:px-6  xl:px-8 mx-auto mt-10 mb-20">
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-10">
          <div className="flex flex-col lg:flex-row  "></div>
          <div className="body">a</div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
