import React from "react";
import { suggest } from "../api/suggest";
const CategorySuggest = () => {
  return (
    <div className="w-full max-w-[1170px] mx-auto px-[10px] md:px-4 lg:px-5 xl:px-8 mt-10 mb-5  items-center justify-between grid grid-cols-3 gap-2 lg:grid-cols-5">
      {suggest &&
        suggest.map((item, index) => (
          <div key={index}>
            <div className="flex items-center  justify-center flex-col gap-1 suggest-item">
              <div className="w-[70px] h-[70px] rounded-full bg-[#f3f4f6]">
                <img
                  src={item?.image}
                  alt={item?.content}
                  className="w-full h-full "
                />
              </div>
              <span>{item?.content}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CategorySuggest;
