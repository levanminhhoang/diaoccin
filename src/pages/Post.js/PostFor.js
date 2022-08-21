import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { JobHot } from "../Intro";
import { Block } from "./PostOne";

const PostFor = () => {
  return (
    <div className="w-full max-w-[1170px] px-[10px] md:px-4 lg:px-5 mx-auto font-base mt-10 mb-20">
      <Breadcrumb breadTitle="Tin tức" />
      <div className="my-10 flex md:gap-10 md:flex-row flex-col gap-5">
        <div className="md:basis-[70%] w-full flex flex-col">
          <h2 className="text-2xl font-medium py-1 border-[#333] border-b ">
            Tin tức
          </h2>
          <div className="grid grid-cols-1 gap-5 mt-5 text-base font-medium ">
            <h2 className="text-center text-xl font-bold mb-1">
              LÃI SUẤT VAY MUA NHÀ THÁNG 7 THẤP NHẤT?
            </h2>
            <span className="indent-3">
              Với các ngân hàng được khảo sát, MSB đạt ngưỡng lãi suất thấp nhất
              với mức lãi suất 4.99%/năm Bước sang tháng 7, lãi suất cho vay mua
              nhà tại các ngân hàng nhìn chung không có sự biến động đáng kể.
              Lãi suất dao động từ 4.99% đến 8.5%. Như đã nói, lãi suất ngân
              hàng vay mua nhà thấp nhất tháng 7 tiếp tục thuộc về Ngân hàng
              TMCP Hàng Hải Việt Nam – MSB. Mức lãi suất này được áp dụng cố
              định trong 3 tháng đầu với các khoản vay có thời hạn trên 24
              tháng. Mức lãi suất này được đánh giá là cạnh tranh rất cao so với
              các gói vay mua nhà hiện có trên thị trường, áp dụng cho khách vay
              mua nhà đến hết 31/12/2022. Bên cạnh đó ngân hàng cũng hỗ trợ
              khách hàng vay gói vay này tối đa 90% giá trị của căn nhà dự định
              mua cùng thời hạn cho vay kéo dài tới 35 năm.
            </span>
            <img src="/bai6/1.jpg" alt="" />
            <Block
              title={"(Ngân hàng TMCP Hàng Hải Việt Nam)"}
              des1="Vị trí tiếp theo thuộc về ngân hàng PVcomBank, tiếp tục duy trì lãi suất ngân hàng vay mua ở mức 5%/năm cố định trong 6 tháng đầu. Sau đó khách hàng phải trả hàng tháng với mức lãi suất là 12%/năm. Hạn mức cho vay tối đa lên đến 85% giá trị tài sản đảm bảo, thời hạn vay tối đa 20 năm."
              img="/bai6/2.jpg"
            />
            <Block
              title={" (Ngân hàng TMCP Đại chúng Việt Nam)"}
              des2="Ở mức lãi suất thấp thứ 3, với mức 5,9%/năm thuộc về 2 ngân hàng VPBank và TPBank. Tại mức này khách hàng có thể lựa chọn gói vay tại ngân hàng TPBank. Ngân hàng này cho phép vay tối đa 90% phương án vay vốn với thời hạn vay kéo dài từ 10 đến 30 năm .
"
              img="/bai6/3.png"
            />
          </div>
        </div>
        <JobHot />
      </div>
    </div>
  );
};

export default PostFor;
