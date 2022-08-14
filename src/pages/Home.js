import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import CategorySuggest from "../components/CategorySuggest";
import Section from "../components/Section";

const Home = () => {
  return (
    <div className="home-page">
      <Banner />
      <CategorySuggest />
      <Section />
    </div>
  );
};
export default Home;
