import React from "react";

const brand = [
  {
    image: "/tam-nhin.jpg",
    content: "tầm nhìn",
    subContent:
      "Trở thành một Tập đoàn Bất động sản lớn mạnh và tạo dựng được một thương hiệu uy tín trong lĩnh vực môi giới, phân phối, đầu tư bất động sản.",
  },
  {
    image: "/cot-loi.jpg",
    content: "cốt lõi",
    subContent:
      "Cung cấp cho khách hàng những sản phẩm chất lượng, đa dạng và dịch vụ thương mại tốt nhất.",
  },
  {
    image: "/su-menh.jpg",
    content: "sứ mệnh",
    subContent:
      "Góp phần xây dựng một xã hội nhân văn, mang lại cuộc sống thịnh vượng và hạnh phúc cho cộng đồng. Mang đến cho khách hàng Sản phẩm thật – Giá trị thật",
  },
  {
    image: "/triet-ly.jpg",
    content: "Triết lý",
    subContent:
      "Lợi ích của khách hàng là ưu tiên hàng đầu. Luôn tôn trọng đạo đức kinh doanh. Hoạt động bằng tất cả đam mê, nhiệt huyết và tinh thần trách nhiệm cao.",
  },
];
const Brand = () => {
  return (
    <div className="w-full max-w-[1170px] mx-auto my-10 px-[10px] md:px-5 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {brand.length > 0 &&
          brand.map((item, index) => (
            <div key={index} className="flex items-center flex-col gap-2">
              <div className="w-[80px] h-[80px] ">
                <img src={item?.image} alt="" />
              </div>
              <span className="text-xl uppercase text-f">{item.content}</span>
              <span className="text-[15px] font-[400] text-center">
                {item.subContent}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Brand;
