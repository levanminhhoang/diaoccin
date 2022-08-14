import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({
  breadTitle = "",
  linkBread = "/",
  breadSubtitle = "",
}) => {
  return (
    <div className="flex items-center gap-x-2 text-[#666] text-sm font-medium">
      <Link to="/">Trang chủ</Link> <span>/</span>
      <p className="text-f">{breadTitle}</p>
    </div>
  );
};

export default Breadcrumb;
