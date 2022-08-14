import React from "react";
import Banner from "../components/Banner";
import CategorySuggest from "../components/CategorySuggest";
import ProductItemOne from "../components/ProductItemOne";
import Section from "../components/Section";
import { apiJob } from "../api/projectJob";
import SectionOne from "../components/SectionOne";
const Home = () => {
  return (
    <div className="home-page">
      <Banner />
      <CategorySuggest />
      <Section />
      <div className="w-full max-w-[1170px] mx-auto my-10 px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-center  text-2xl font-[400] text-[#5d5c56] ">
            Dự án bất động sản
          </h2>
          <button className="bg-[#fff] border text-[#eec346] border-[#eec346] rounded-sm px-4 py-1">
            Xem tất cả
          </button>
        </div>
        <div className="grid grid-cols-3 gap-5 py-5">
          {apiJob.slice(0, 3).map((item, index) => (
            <div key={index}>
              <ProductItemOne item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
