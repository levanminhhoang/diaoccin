import React from "react";

import Breadcrumb from "../../components/Breadcrumb";
import { JobHot } from "../Intro";
const Post1 = () => {
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
              KINH NGHIỆM MUA ĐẤT BẠN CẦN BIẾT
            </h2>
            <span className="indent-3">
              Đầu tư bất động sản không phải cuộc chơi thích hợp nếu bạn hoàn
              toàn rỗng kinh nghiệm mua đất. Đã có nhiều trường hợp mạo hiểm đầu
              tư một “mảnh đất vàng” rồi cuối cùng nhận kết đắng khi mảnh đất đó
              thuộc “dự án ma” hoặc đang bị tranh chấp, chung chủ,... Việc tìm
              cho mình một mảnh đất để an cư lạc nghiệp là vô cùng quan trọng.
              Do đó, không nên nóng vội và cần phải có thời gian để nghiên cứu
              tổng thể thị trường cũng như chọn lựa những vị trí cụ thể. Như
              vậy, nếu ít nhiều có kinh nghiệm đầu tư, mua bán đất thì người mua
              đã có thể tránh được những rủi ro ngoài ý muốn
            </span>
            <img
              src="/bai1/1.png"
              className="w-full my-2 h-full object-cover"
              alt=""
            />
            <Block
              title={"1. TÌM HIỂU THÔNG TIN VỀ KHU ĐẤT"}
              des1="Một trong những điều cần biết khi mua đất là phải tìm hiểu thật kỹ thông
        tin chung về khu đất. Mảnh đất đó thuộc diện như thế nào? Giao thông có
        thuận tiện không? Khu dân cư sinh sống có ổn định? Đặc biệt, cần lưu ý
        đến các yếu tố như: trường học, bệnh viện, chợ,…."
              des2="Bên cạnh đó, các vấn đề pháp lý như: mảnh đất bạn mua có nằm trong diên
        quy hoặc hay giải tỏa khu vực không?,….bạn cần phải tìm hiểu kỹ. Thậm
        chí, để chắc chắn hơn, bạn có thể yêu cầu kiểm tra hồ sơ địa chính cấp
        xã, huyện hay Sở Tài Nguyên và Môi trường xem khu vực đó có dự án nào
        không."
              img="/bai1/2.jpg"
            />

            <Block
              title={"2. CHỌN LỰA HƯỚNG MẢNH ĐẤT LÝ TƯỞNG CHO VIỆC XÂY NHÀ"}
              des1="Thành ngữ có câu “trạch địa di cư” tức chọn đất mà ở. Do đó, khi quyết định mua đất, bạn cần đặc biệt lưu tâm đến hướng mảnh đất."
              des2="Theo kinh nghiệm mua đất về phong thủy, mảnh đất lý tưởng nhất là ở hướng Nam hoặc Đông Nam. Tại 2 hướng này khí hậu ôn hòa, gió lành, thuận lợi và đẹp nhất để xây nhà. Tuy nhiên đây cũng chỉ là kinh nghiệm dân gian, bạn vẫn có thể lựa chọn các hướng khác phù hợp."
              img="/bai1/3.jpg"
            />
            <Block
              title={"3. TÌM HIỂU VỊ TRÍ CỦA MẢNH ĐẤT"}
              des1="Một trong những kinh nghiệm mua đất phổ biến là tìm hiểu vị trí cũng như vị thế của mảnh đất. Nên chọn những mảnh đất có hướng đẹp, chiều dài, chiều rộng có tỷ lệ tương quan. Đặc biệt nên ở vị trí đẹp, bằng phẳng, không bị gồ ghề."
              des2="Theo phong thủy, khi chọn đất nên tránh các mảnh đất phía trước mặt có cột điện, cây lớn hay con đường thẳng cắm vào khu đất. Người kinh doanh thì nên tránh các mảnh đất có hình chữ L, hình tam giác, bị đầu to đuôi tóp lại…sẽ khó thuận lợi về tài chính"
              img="/bai1/4.jpg"
            />
            <Block
              title={"4. TÌM HIỂU VỀ MÔI TRƯỜNG SỐNG XUNG QUANH"}
              des1="Địa chất của mảnh đất ảnh hưởng quan trọng đến việc xây dựng nhà, do đó khi mua đất cần tìm hiểu kỹ vấn đề này. Bạn nên nhớ rằng, các khu đất nằm trên các khu vực cao hồ lấp sẽ có địa chất nền đất yếu, điều này khiến bạn tốn khá nhiều chi phí gia cố nền đất khi xây nhà sau này."
              des2=""
              img="/bai1/5.jpg"
            />
          </div>
        </div>
        <JobHot />
      </div>
    </div>
  );
};

export default Post1;

export function Block({
  title = "",
  des1 = "",
  des2 = "",
  des3 = "",
  img = "",
}) {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-lg font-semibold">{title}</h4>
      <span>{des1}</span>
      <span>{des2}</span>
      <span>{des3}</span>
      {img && (
        <img src={img} className="w-full my-2 h-[400px] object-cover" alt="" />
      )}
    </div>
  );
}
