import React from "react";
import Banner from "../components/Banner";
import CategorySuggest from "../components/CategorySuggest";
import ProductItemOne from "../components/ProductItemOne";
import Section from "../components/Section";
import { apiJob } from "../api/projectJob";
import Advise from "../components/Advise.js";
import InformationBranch from "../components/InformationBranch";
import { posts } from "../api/listpost";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
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
          <button
            onClick={() => navigate("/du-an")}
            className="bg-[#fff] border text-[#eec346] border-[#eec346] rounded-sm px-4 py-1"
          >
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
      <div className="my-10 flex md:gap-10 md:flex-row flex-col gap-5 w-full max-w-[1170px] px-[10px] md:px-4 lg:px-5 mx-auto font-base  mb-20">
        <div className=" w-full flex flex-col">
          <h2 className="text-2xl font-medium py-1 border-[#333] border-b ">
            Tin tức
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
            {posts.slice(0, 4).map((item, index) => (
              <BlogItem item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
      <Advise />

      <a
        href="tel:+0935523636"
        className="fixed bottom-4 right-2 w-16 h-16 block animate-bounce"
      >
        <img
          src="/whatsapp.jfif"
          alt="phones"
          className="w-full h-full object-cover"
        />
      </a>
    </div>
  );
};
export default Home;

function BlogItem({ item }) {
  return (
    <Link to={`/${item?.slug}`} className="flex gap-3 flex-col md:flex-row">
      <div
        className={`relative md:basis-6/12 w-full  md:max-w-[300px] min-h-[165px] `}
      >
        <img
          src={item?.image}
          alt=""
          className={`w-full h-full object-cover absolute inset-0 `}
        />
      </div>
      <div className="py-1 md:basis-8/12">
        <span className="text-[#242933] font-medium text-lg text__over-1">
          {item?.title}
        </span>
        <span className="text-[#5d5c56] font-[100] text-base text__over-3 indent-2">
          {item?.subTitle}
        </span>
      </div>
    </Link>
  );
}
