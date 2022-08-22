import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { project } from "../api/listproduct";
import ProductItem from "../components/ProductItem";

const Job = () => {
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(13);

  const handleChangePage = (value) => {
    if (value == 1) {
      setStart(1);
      setEnd(13);
    }
    if (value == 2) {
      setStart(14);
      setEnd(26);
    }
    if (value == 3) {
      setStart(27);
      setEnd(39);
    }
    if (value == 4) {
      setStart(40);
      setEnd(52);
    }
  };
  console.log(start, "statr");
  console.log(end, "end");

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
          project
            .slice(start, end)
            .map((item, index) => <ProductItem key={index} item={item} />)}
      </div>
      <div className="mt-5 w-full mx-auto flex gap-2 items-center justify-center">
        {new Array(4).fill(0).map((item, index) => (
          <button
            key={index}
            onClick={() => handleChangePage(index + 1)}
            className="w-full max-w-[60px] h-10 rounded-md bg-e text-w"
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Job;
