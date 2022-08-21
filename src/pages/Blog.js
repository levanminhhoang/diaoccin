import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { posts } from "../api/listpost";
import { JobHot } from "./Intro";
import { useNavigate } from "react-router-dom";
const Blog = () => {
  return (
    <div className="w-full max-w-[1170px] px-[10px] md:px-4 lg:px-5 mx-auto font-base mt-10 mb-20">
      <Breadcrumb breadTitle="Tin tức" />
      <div className="my-10 flex md:gap-10 md:flex-row flex-col gap-5">
        <div className="md:basis-[70%] w-full flex flex-col">
          <h2 className="text-2xl font-medium py-1 border-[#333] border-b ">
            Tin tức
          </h2>
          <div className="grid grid-cols-1 gap-5 mt-5">
            {posts.map((item, index) => (
              <BlogItem item={item} key={index} />
            ))}
          </div>
        </div>
        <JobHot />
      </div>
    </div>
  );
};

export function BlogItem({ item }) {
  const navigate = useNavigate();
  return (
    <div
      onclick={() => navigate(`/bai-viet/${item.image}`)}
      className="flex gap-3 flex-col md:flex-row"
    >
      <div className="relative md:basis-4/12 w-full min-h-[150px] h-[200px] ">
        <img
          src={item?.image}
          alt=""
          className="w-full h-full object-cover absolute inset-0"
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
    </div>
  );
}
export default Blog;
