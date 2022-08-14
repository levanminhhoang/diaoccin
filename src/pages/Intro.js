import React from "react";
import { apiJob } from "../api/projectJob";
import ProductItemOne from "../components/ProductItemOne";

const Intro = () => {
  return (
    <div className="w-full max-w-[1170px] px-[10px] md:px-4 lg:px-5 mx-auto mt-10 mb-20 text-[#333] flex gap-10 flex-col md:flex-row">
      <div className="md:basis-[75%] w-full ">
        <h2 className="text-3xl font-medium py-1">Giới Thiệu</h2>
        <div>
          Trong những năm gần đây, ở Việt Nam thị trường bất động sản phát triển
          khá nhanh và được rất nhiều người quan tâm. Chính vì vậy, nhu cầu bán,
          cho thuê, tìm mua, hay tìm thuê bất động sản ngày càng lớn. Thực tế đó
          đòi hỏi cần phải có một kênh thông tin tối ưu giúp cho các cá nhân, tổ
          chức, nhà đầu tư nắm bắt được thông tin một cách kịp thời về tình hình
          thị trường bất động sản để có được những quyết định đầu tư đúng đắn.
          Bởi lẽ, khi triển khai kinh doanh một dự án bất động sản, bán hoặc cho
          thuê một căn nhà – nền đất, điều băn khoăn nhất của các chủ đầu tư là
          làm sao truyền tải những thông tin trên đến với nhiều khách hàng có
          nhu cầu sử dụng thực sự. Trong khi đó, những khách hàng có nhu cầu
          mua, thuê bất động sản thì mong muốn tìm kiếm những bất động sản phù
          hợp nhất, đảm bảo tính an toàn, tiện lợi và pháp lý cao.
        </div>
        <span>
          Tuy nhiên, trên thực tế những người có nhu cầu về giao dịch bất động
          sản đã và đang gặp rất nhiều khó khăn trong việc quảng cáo cũng như
          tìm kiếm thông tin về bất động sản. Làm thế nào để quảng cáo và tìm
          kiếm được thông tin bất động sản nhanh chóng, tin cậy, chính xác, tiết
          kiệm thời gian, công sức, giúp cho các giao dịch bất động sản trở nên
          dễ dàng, nhanh chóng, thuận tiện và hiệu quả hơn? Để trả lời câu hỏi
          này và đáp lại những mong muốn từ phía khách hàng, CÔNG TY CỔ PHẦN
          WESTERN HOMES VIỆT NAM đã ra đời và đáp ứng được rất nhiều sự kỳ vọng
          đó.
        </span>
        <div className="grid grid-cols-1 gap-2 my-10">
          <div className="flex flex-col gap-1">
            <h3 className="text-[#e11c49] text-xl font-medium">
              LĨNH VỰC HOẠT ĐỘNG CHÍNH
            </h3>
            <ul className="flex flex-cols gap-1 flex-col">
              {field.map((item, index) => (
                <div key={index} className="flex items-center gap-[6px]">
                  <img src="/bong.png" alt="" className="w-[30px] h-[30px]" />
                  <span>{item}</span>
                </div>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[#e11c49] text-xl font-medium">TẦM NHÌN</h3>
            <div>
              <div>
                Trở thành một Tập đoàn Bất động sản lớn mạnh và tạo dựng được
                một thương hiệu uy tín trong lĩnh vực môi giới, phân phối, đầu
                tư bất động sản.
              </div>
              <span>
                Thiết lập được một chuỗi sàn giao dịch bất động sản có quy mô
                lớn và chuyên nghiệp. Đào tạo đội ngũ nhân viên năng động, thích
                ứng nhanh với thị trường và tâm huyết với nghề bất động sản
              </span>
              <span>
                Phát triển mạnh trong lĩnh vực quảng cáo, tiếp thị dự án, môi
                giới, đầu tư dự án bất động sản.
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[#e11c49] text-xl font-medium">SỨ MỆNH</h3>
            <div>
              Cung cấp cho khách hàng những sản phẩm chất lượng, đa dạng và dịch
              vụ thương mại tốt nhất Góp phần xây dựng một xã hội nhân văn, mang
              lại cuộc sống thịnh vượng và hạnh phúc cho cộng đồng.
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[#e11c49] text-xl font-medium">
              GIÁ TRỊ CỐT LÕI
            </h3>
            <div>
              Chúng tôi luôn coi khách hàng và thành công của họ là giá trị quan
              trọng nhất. Sự hài lòng và đánh giá cao của khách hàng chính là
              động lực lớn để Western Homes tiếp tục làm tốt vai trò là nhà tư
              vấn hữu ích và khẳng định được vị thế của mình trên thị trường bất
              động sản Việt Nam.
            </div>
          </div>
        </div>
      </div>
      <JobHot />
    </div>
  );
};

export default Intro;

const field = [
  "Kinh doanh bất động sản, quyền sử dụng đất thuộc chủ sở hữu, chủ sử dụng hoặc đi thuê",
  " Tư vấn, môi giới, đấu giá bất động sản, đấu giá quyền sử dụng đấ ",
  " Đại lý, môi giới, đấu giá",
  "Hoạt động xây dựng chuyên dụng",
];

export function JobHot() {
  return (
    <div className="md:basis-[25%] flex flex-col gap-5 w-full">
      <h3 className="text-xl font-medium py-1  border-b border-[#ddd]">
        Dự án nổi bật
      </h3>
      <div className="grid grid-cols-1 gap-3">
        {apiJob.slice(0, 2).map((item, index) => (
          <ProductItemOne item={item} key={index} trys={true} />
        ))}
      </div>
    </div>
  );
}
