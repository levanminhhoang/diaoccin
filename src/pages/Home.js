import React from "react";
import Banner from "../components/Banner";
import CategorySuggest from "../components/CategorySuggest";
import ProductItemOne from "../components/ProductItemOne";
import Section from "../components/Section";
import { apiJob } from "../api/projectJob";
import Advise from "../components/Advise.js";
import InformationBranch from "../components/InformationBranch";

const Home = () => {
  return (
    <div className="home-page">
      <Banner />
      <CategorySuggest />

      <InformationBranch />
      <div className="w-full max-w-[1170px] mx-auto my-10 px-[10px] md:px-5 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-center  text-2xl font-[400] text-[#5d5c56] ">
            Dự án bất động sản
          </h2>
          <button className="bg-[#fff] border text-[#eec346] border-[#eec346] rounded-sm px-4 py-1">
            Xem tất cả
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-5 ">
          {apiJob.slice(0, 3).map((item, index) => (
            <div key={index}>
              <ProductItemOne item={item} />
            </div>
          ))}
        </div>
      </div>
      <Section />
      <Advise />
    </div>
  );
};
export default Home;
