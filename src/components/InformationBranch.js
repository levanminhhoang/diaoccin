import React from "react";
import Brand from "../components/Brand";
const InformationBranch = () => {
  return (
    <div className="w-full max-w-[1170px] mx-auto my-10 px-[10px] md:px-5 lg:px-8">
      <h2 className="text-f text-center text-2xl">
        CÔNG TY CỔ PHẦN WESTERN HOMES
      </h2>
      <h3 className="text-center font-medium text-lg text-h lg:px-20 hidden md:block">
        Công ty cổ phần Western Homes đưuọc thành lập vào ngày 23/06/2022 với
        một sứ mệnh cao cả mang đến cho mọi người một chỗ dừng chân lý tưởng,
        quyết tâm phấn đấu để trở thành doanh nghiệp bất động sản số một Việt
        Nam với tiêu chí
      </h3>
      <Brand />
    </div>
  );
};

export default InformationBranch;
