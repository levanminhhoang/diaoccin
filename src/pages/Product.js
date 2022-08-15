import React, { useEffect } from "react";

import Breadcrumb from "../components/Breadcrumb";
import { apiJob } from "../api/projectJob";
import ProductItemOne from "../components/ProductItemOne";
const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#f5f5f5]">
      <div className="w-full max-w-[1170px] px-[10px] md:px-4 xl:px-5 mx-auto  pt-5 pb-10 mb-10">
        <Breadcrumb breadTitle="Dự án" />

        <div className=" mt-10 gap-7 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {apiJob.map((item, index) => (
            <div key={index}>
              <ProductItemOne item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
