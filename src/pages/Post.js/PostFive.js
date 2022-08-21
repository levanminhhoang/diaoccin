import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { JobHot } from "../Intro";
import { Block } from "./PostOne";

const PostFive = () => {
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
              CÓ NÊN ĐẦU TƯ BẤT ĐỘNG SẢN TẠI HUẾ?
            </h2>
            <span className="indent-3">
              Huế - tuy là cái tên không quá nổi bật trên bản đồ Việt Nam. Tuy
              nhiên, những năm gần đây nhờ sự đầu tư mạnh mẽ về cơ sở hạ tầng và
              sự bứt phá trong nền văn hóa du lịch, Huế đã thu hút được nhiều
              lượt du khách đến tham quan và nghỉ dưỡng. Tất cả tạo nên bức
              tranh toàn cảnh diễm lệ, thu hút lượng khách tham quan đông đảo
              hàng năm, tạo điều kiện đẩy mạnh phát triển kinh tế du lịch – dịch
              vụ. Vậy hiện nay có nên đầu tư bất động sản tại Huế? Hãy cũng
              chúng tôi tìm hiểu nhé!
            </span>
            <Block
              title={"1. Ánh sáng tự nhiên "}
              des1="Hiện tại, quỹ đất tại các thành phố lớn dần rơi vào tình trạng cạn kiệt, giá thành đắt đỏ. Trong khi đó, Huế vẫn còn sở hữu quỹ đất chưa khai thác khá lớn nên giá bất động sản (đất đai, nhà cửa…) vẫn còn mềm so với nhiều khu vực khác, có khả năng tăng trưởng mạnh trong tương lai."
              des2="Thừa Thiên Huế hiện đã có 10 dự án phát triển nhà ở thương mại, dự án phát triển đô thị được chấp thuận đầu tư, đã và đang triển khai xây dựng với diện tích đất lớn"
              img="/bai4/1.jpg"
            />
            <Block
              title={"2. Hạ tầng giao thông được chú trọng"}
              des2="Giai đoạn 2021 – 2031, Thừa Thiên Huế định hướng trở thành thành phố trực thuộc trung ương, do đó mở rộng địa giới hành chính đô thị Huế gấp 4 lần nhằm tạo không gian phát triển. Hàng loạt công trình giao thông được đầu tư mạnh như sân bay quốc tế Phú Bài, mở rộng tuyến đường Bắc Nam… sẵn sàng phục vụ cho hoạt động đối nội và đối ngoại.
Huế đã và đang xây dựng hình ảnh xanh – sạch – sáng với cơ sở hạ tầng được bổ sung và cải tiến qua các năm.
"
              des1="Huế có đủ cả 4 tuyến đường giao thông quan trọng, gồm đường bộ, đường sắt, đường không, đường thủy. Thuận lợi cho việc đi lại. "
              img="/bai5/2.jpg"
            />
            <Block
              title={"3. Nhiều “ông lớn” BĐS đẩy mạnh đầu tư vào Huế  "}
              des1="Những năm gần đây, Huế quy tụ nhiều “ông lớn” BĐS đầu tư như tập đoàn BGI, công ty TNHH Oleco-Nq, tập đoàn Vingroup… Tới thời điểm hiện tại, tỉnh Thừa Thiên Huế đã có hơn 10 dự án phát triển đô thị, nhà ở thương mại được chấp thuận và triển khai.Có thể kể đến các dự án như chuỗi căn hộ cao cấp 5 sao của khu đô thị Minh Linh Compound, dự án Apec Royal Park, dự án căn hộ khách sạn Apec Mandala Wyndham Huế và khu shophouse Apec Imperia Boulevard, dự án khu căn hộ cao cấp De 1st Quantum. "
              des2="Với BĐS đô thị, một loạt các dự án ở mọi phân khúc, đa dạng mô hình BĐS đô thị từ căn hộ cao cấp, shophouse, nhà liền kề, biệt thự… đang được triển khai."
            />
            <Block
              title={"4. Về du lịch văn hóa "}
              des2="Đây cũng là Cố đô sở hữu nhiều công trình kiến trúc đặc trưng của phong kiến, là cái nôi văn hóa với 5 di sản văn hóa thế giới cùng gần 1000 di tích lịch sử và hơn 500 lễ hội truyền thống."
              des1="Huế là thành phố của những di sản và lễ hội. Với 5 di sản văn hóa được thế giới công nhận đó là: Quần thể di tích Cố đô Huế, Nhã Nhạc Cung Đình Huế, Mộc bản triều Nguyễn, Châu bản Triều Nguyễn và Thơ Văn chữ Hán trên kiến trúc cung đình Huế. Nơi đây được xem là điểm đến không thể bỏ qua của du khách nước ngoài khi đến với Việt Nam. "
              img="/bai5/2.jpg"
            />
            <Block
              title="5. Về du lịch nghỉ dưỡng "
              des1="Làn sóng phát triển du lịch kết hợp với các hoạt động đẩy mạnh phát triển cơ sở hạ tầng. Cùng với đó là tăng cường khai thác các danh lam thắng cảnh khiến Huế trở nên thu hút khách du lịch hơn."
              des2="Thừa Thiên Huế may mắn sở hữu cảnh sắc vô cùng diễm lệ với dòng sông Hương êm đềm, vườn quốc gia Bạch Mã xanh ngắt, Vịnh Lặng Cô thuộc Top vịnh đẹp nhất thế giới cùng hệ thống đầm phá Tam Giang Cầu Hai rộng lớn. Tất cả tạo nên bức tranh thủy mạc, kết hợp với 120 km đường bờ biển đã tạo nên sức hấp dẫn vô cùng lớn cho du khách du lịch"
              img="/bai5/4.jpg"
            />
            <span>
              Đặc biệt, trong thời gian tới, Huế cũng có kế hoạch mở rộng địa
              bàn tỉnh. Cùng với đó là nâng cấp sân bay quốc tế Phú Bài và các
              hạ tầng khác. Có thể nói, không chỉ bất động sản mà ngành du lịch
              của Huế cũng đang có rất nhiều dấu hiệu tích cực để đi lên.
            </span>
          </div>
        </div>
        <JobHot />
      </div>
    </div>
  );
};

export default PostFive;
