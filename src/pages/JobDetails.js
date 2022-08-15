import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { useParams } from "react-router-dom";
const JobDetails = () => {
  const { slug } = useParams();
  console.log(slug);

  const iconOne = [
    {
      icon: "/icon/icon-small/area.jpg",
      subTitleIcon: "Diện tích",
      value: "155",
      current: "m²",
    },
    {
      icon: "/icon/icon-small/giuong.jpg",
      subTitleIcon: "Phòng ngủ",
      value: "3",
      current: "",
    },
    {
      icon: "/icon/icon-small/bon-tam.jpg",
      subTitleIcon: "Phòng tắm",
      value: "2",
      current: "",
    },
    {
      icon: "/icon/icon-small/giay-to.jpg",
      subTitleIcon: "Giấy tờ pháp lý",
      value: "sổ hồng",
      current: "",
    },
  ];
  const iconTwo = [
    {
      icon: "/icon/icon-small/la-ban.jpg",
      subTitleIcon: "Hướng ban công",
      value: "Đông bắc",
      current: "",
    },
    {
      icon: "/icon/icon-small/width.jpg",
      subTitleIcon: "Chiều dài",
      value: "15.5",
      current: "m",
    },
    {
      icon: "/icon/icon-small/height.jpg",
      subTitleIcon: "Chiều rộng",
      value: "10",
      current: "m",
    },
    {
      icon: "/icon/icon-small/hien-trang.jpg",
      subTitleIcon: "Hiện trạng nhà",
      value: "Đang ở",
      current: "",
    },
  ];
  return (
    <div className="w-full max-w-[1170px] mx-auto my-10 px-[10px] md:px-4 lg:px-5 flex flex-col">
      <Breadcrumb breadTitle="Nhà đất" />
      <div className="flex flex-col lg:my-10 my-5">
        <div className="grid image-job gap-6">
          <div className="w-full  image-job-item">
            <img
              src="	https://nhadatvui.vn/uploads/images/6bd885dc9847a82baa6f14e24d387553.jpg"
              className="w-full  object-cover rounded-lg"
              alt=""
            />
          </div>
          <div className="w-full flex flex-col  images-small-show">
            <img
              src="https://nhadatvui.vn/uploads/images/1937e37d58757f0c2d35f79329d4c2d1.jpg"
              className="w-full object-cover h-full "
              alt=""
            />
          </div>
          <div className="w-full flex flex-col  images-small-show">
            <img
              src="https://nhadatvui.vn/uploads/images/e048d4f145d11d11fec2f3c22dc11f99.jpg"
              className="w-full object-cover h-full "
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row  gap-6 mt-5">
          <div className="w-full flex flex-col  gap-2 md:basis-[71%]">
            <h3 className="text-xl font-bold">
              Bán căn hộ chung cư Linh Tây 155m2, 3PN, đã có sổ hồng
            </h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="/icon/loca.jpg"
                  className="w-[18px] h-[18px] object-cover"
                  alt=""
                />
                <span className="text-base font-[100]">
                  Đường D1, Phường Linh Tây, TP. Thủ Đức, TP. Hồ Chí Minh
                </span>
              </div>
              <button className="border btn-mobile border-d py-[5px] px-4 text-d rounded-xl">
                xem bản đồ
              </button>
            </div>
            <div className="flex items-center justify-between pr-5">
              <div className="flex items-center gap-3">
                <div className="flex items-center font-bold text-f text-xl">
                  3.98 tỷ
                </div>
                <span className="font-normal text-h text-[13px] mt-1">
                  25.68 triệu/m²
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center text-sm item-sc">
                  <span className=" font-medium mr-1">Mã tin:</span>
                  <span className="text-h">21410</span>
                </div>
                <div className="flex items-center text-sm item-sc">
                  <span className=" font-medium mr-1">Hết hạn:</span>
                  <span className="text-h">31/08/2022</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-[400] my-5">Chi tiết nhà đất</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 md:justify-between md:gap-10 items-center">
                <div className="flex flex-col">
                  {iconOne.map((item, index) => (
                    <Icon key={index} item={item} />
                  ))}
                </div>
                <div className="flex flex-col">
                  {iconTwo.map((item, index) => (
                    <Icon key={index} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col   md:basis-[29%]"></div>
        </div>
      </div>
    </div>
  );
};

function Icon({ item }) {
  const { icon, subTitleIcon, value, current } = item;
  return (
    <div className="flex text-base font-[300] text-b items-center justify-between py-1 border-[#ccc] border-b">
      <div className="flex items-center gap-2">
        <img src={icon} className="w-[18px] h-[18px]" alt="" />
        <span>{subTitleIcon}</span>
      </div>
      <div className="flex items-center gap-1">
        <span>{value}</span>
        <span>{current}</span>
      </div>
    </div>
  );
}
export default JobDetails;
