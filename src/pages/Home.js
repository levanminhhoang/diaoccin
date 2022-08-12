import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import { Link } from "react-router-dom";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import Section from "../components/Section";
import productData from "../data/products";
import { Post2, posts } from "./Blog";
import { SectionInfo } from "./Intro";
const Home = () => {
  const pro = productData.getAllProducts();

  const [productSaler, setProductSaler] = useState([]);
  const [other, setOther] = useState([]);
  const [news, setnews] = useState([]);
  useEffect(() => {
    const saler = pro.filter((e) => e.cart === "yêu thích").slice(0, 8);

    const other = pro.filter((e) => e.bought === true).slice(0, 8);
    const news = pro.filter((e) => e.cart === "new").slice(0, 8);

    setProductSaler(saler);
    setOther(other);
    setnews(news);
  }, [pro]);

  return (
    <>
      <div className="w-full mx-auto mb-5">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          grabCursor={"true"}
          slidesPerView={"auto"}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {slides.length > 0 &&
            slides.map((item) => (
              <SwiperSlide key={item.id}>
                <Slider item={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="flex items-center flex-col">
        <div className="flex flex-col">
          <h1 className="text-center md:text-4xl text-3xl  font-bold  mb-3">
            Giới Thiệu
          </h1>
          <p className="text-lg font-bold text-center px-4">
            Tinh dầu Tràm Huế Thái Việt – Chất lượng tạo nên sự khác biệt
          </p>
        </div>
        <div className="flex flex-col items-center  md:flex-row w-full max-w-[1280px] px-[10px] md:px-3 lg:px-5 xl:px-8 mx-auto gap-5 ">
          <Info />
          <Banner img="/chuong7.PNG" />
        </div>
      </div>
      <div className="w-full max-w-[1280px] px-[10px] md:px-3 lg:px-5 xl:px-8 mx-auto gap-5 my-5 md:my-5 lg:my-16">
        <div className="line w-full px-20 border-top pt-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="flex flex-col gap-2 md:gap-5 items-center justify-center px-5 text-center">
            <img src="/icon1.png" alt="" className="w-[60px]" />
            <span>
              Lành tính tới mức có thể xoa lên da em bé, dây là điều làm cho các
              bà mẹ ưa chuộng dầu tràm Huế đến vậy.
            </span>
          </div>
          <div className="flex flex-col gap-2 md:gap-5 items-center justify-center px-5 text-center">
            <img src="/icon2.png" alt="" className="w-[60px]" />
            <span>
              Dầu tràm gió chiết xuất tự nhiên và các chế phẩm dẫn xuất dưới
              dạng xông, hít mũi trong phòng làm việc.
            </span>
          </div>
          <div className="flex flex-col gap-2 md:gap-5 items-center justify-center px-5 text-center">
            <img src="/icon3.png" alt="" className="w-[60px]" />
            <span>
              Có hương thơm diệu nhẹ thơm mát giúp xua đuổi các côn trùng, muỗi
              hiệu quả
            </span>
          </div>
          <div className="flex flex-col gap-2 md:gap-5 items-center justify-center px-5 text-center">
            <img src="/icon4.png" alt="" className="w-[60px]" />
            <span>
              Tạo hương thơm dễ chịu lại vừa sát khuẩn, ức chế virus, đặc biệt
              đang trong mùa cao điểm sốt, cúm.
            </span>
          </div>
        </div>
        <div className="line w-full  px-20 border-b pb-8"></div>
      </div>
      <div className="w-full max-w-[1280px] px-[10px] md:px-3 lg:px-5 xl:px-8 mx-auto gap-5 md:my-5 lg:my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-x-5">
          <div className="flex pt-[54%] relative">
            <img
              src="/chuong8.PNG"
              alt="tinh dầu thái việt"
              className="border-relex-btn w-full h-full absolute top-0 left-0 right-0 object-cover"
            />
          </div>
          <div className="flex pt-[54%] relative">
            <img
              src="/chuong9.JPG"
              alt="tinh dầu thái việt"
              className="border-relex-btn w-full h-full absolute top-0 left-0 right-0  object-cover"
            />
          </div>
        </div>
      </div>
      <Section title="Sản Phẩm Bán Chạy" data={other} />

      <Section title="Được Đánh Giá Cao" data={productSaler} />
      <div className="flex justify-center items-center w-full mx-auto mt-5">
        <h2 className="lg:text-4xl text-3xl font-bold">Bài Viết</h2>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 w-full max-w-[1280px] px-[10px] md:px-3 lg:px-5 xl:px-8 mx-auto gap-10 md:my-5 lg:my-16">
        {posts.length > 0 &&
          posts
            .slice(0, 3)
            .map((item, index) => <Post2 key={index} item={item} />)}
      </div>
      <div className="w-full max-w-[1280px] px-[10px] md:px-3 lg:px-5 xl:px-8 mx-auto gap-10 md:my-5 lg:mt-20 lg:mb-32">
        <SectionInfo />
      </div>
    </>
  );
};

const slides = [
  {
    id: 1,
    img: "/img/slide/slide1.png",
  },
  {
    id: 2,
    img: "/img/slide/slide2.png",
  },
];

function Banner({ img }) {
  return (
    <div className="w-full my-10 md:my-16 xl:my-20">
      <img
        src={img}
        alt="tinh dầu thái việt"
        name="tinh dầu thái việt"
        className="w-full max-w-[500px] object-cover"
      />
    </div>
  );
}

function Slides({ img }) {
  return (
    <div className="flex overflow-hidden cursor-pointer ">
      <img
        src={img}
        alt="tinh dầu thái việt"
        className="border-relex-btn w-full max-w-[500px] h-full object-cover"
      />
    </div>
  );
}
function Info() {
  return (
    <div className=" w-full max-w-[1280px] mx-auto px-[10px] md:px-4 lg:px-5 xl:px-8 mt-5 text-[#333]">
      <div className="flex flex-col mt-10  ">
        <div className="flex flex-col font-bold text-base">
          <span className="text-xl font-bold px-6 text-">Về chúng tôi</span>
          <p className="text-justify text-[15px] font-normal mb-4">
            Tinh dầu Tràm Huế - Tinh dầu Thái Việt – Chất lượng tạo nên sự khác
            biệt Về chúng tôi Từ xa xưa, dầu tràm xứ Huế đã đi vào tiềm thức
            người Việt như một loại dược liệu xức ngoài da tốt số một, một thứ
            biệt dược có thể dùng cho cả làn da non nớt, mẫn cảm nhất như trẻ sơ
            sinh. Để gìn giữ tinh túy đó của ông cha, tinh dầu Thái Việt được
            kiến tạo từ những năm 2000 với mục tiêu hòa quyện tinh hoa truyền
            thống với dòng chảy thời đại để cho ra đời sản phẩm tinh dầu thiên
            nhiên chất lượng uy tín nhất. Bên cạnh đó quảng bá sản phẩm truyền
            thống xa xưa của ông cha ta đến với những người bạn phương xa tại
            nước ngoài
          </p>

          <Link
            to="/gioi-thieu"
            className="flex items-center cursor-pointer justify-center w-full max-w-[132px] px-4 py-[6px] bg-[#68b943] text-w rounded-2xl"
          >
            Xem thêm
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

const slide2 = [
  { img: "/img/slide/slide6.png" },
  { img: "/img/slide/slide4.png" },
  { img: "/img/slide/slide2.png" },
  { img: "/img/slide/slide3.png" },
];
