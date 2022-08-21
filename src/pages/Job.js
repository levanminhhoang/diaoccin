import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { project } from "../api/listproduct";
import ProductItem from "../components/ProductItem";

const Job = () => {
  return (
    <div className="w-full max-w-[1170px] mx-auto my-10 px-[10px] md:px-4 lg:px-5 flex flex-col min-h-[700px]">
      <Breadcrumb breadTitle="Nhà đất" />
      <div className="flex my-2">
        <h2 className="text-2xl font-medium text-h">
          Bất động sản thành phố Huế
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5 mt-5 my-16">
        {project.length > 0 &&
          project.map((item, index) => <ProductItem key={index} item={item} />)}
      </div>
    </div>
  );
};

export default Job;
