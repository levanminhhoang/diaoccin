import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { JobHot } from "../Intro";
import { Block } from "./PostOne";

const PostTwo = () => {
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
              KINH NGHIỆM MUA NHÀ CHUNG CƯ CHO NGƯỜI MỚI
            </h2>
            <span className="indent-3">
              Không thể phủ nhận sức hút mạnh mẽ của các căn hộ chung cư với
              đông đảo khách hàng, đặc biệt trong bối cảnh “đất chật người đông”
              tại các thành phố lớn như hiện nay. Chung cư đã và đang trở thành
              xu thế lựa chọn của nhiều gia đình hiện nay, đặc biệt là gia đình
              trẻ, bởi những tiện ích mà nó mang lại. Tuy nhiên, để chọn mua một
              căn hộ chung cư tốt không phải chuyện dễ dàng đối với người mua
              nhà lần đầu. Người mua cần lưu ý 9 điều sau để giúp mình thuận lợi
              tìm kiếm chốn an cư lý tưởng
            </span>

            <Block
              title={"1. Xác định khu vực/vị trí chung cư phù hợp"}
              des1="Căn hộ chung cư có vị trí tốt khi nó đảm bảo thuận tiện cho nhu cầu cơ bản của bạn và gia đình (đi lại, sinh hoạt, làm việc…). Không dễ để tìm một dự án khu chung cư có vị trí thuận lợi với giá mềm, bởi phân khúc căn hộ dưới 1 tỉ đồng thường nằm ở khá xa trung tâm thành phố. Người mua cần dung hòa giữa 3 yếu tố vị trí, nhu cầu và ngân sách tốt để có thể chọn cho mình căn hộ phù hợp. Đồng thời, cần tìm kiếm đủ tốt để không bỏ sót các dự án phù hợp."
              des2="Bên cạnh đó, bạn hãy lưu ý tình hình giao thông quanh khu chung cư mà bạn muốn mua. Bạn nên dành thời gian đến tham khảo thực địa dự án, thử đi trên những trục đường dẫn tới dự án và quan sát trong các giờ cao điểm nhằm đánh giá tình trạng giao thông tại đây có quá phức tạp hay không"
              des3="Vì vậy, bạn cần cân đối tài chính và nhu cầu để chọn mua căn hộ phù hợp. Nên xem xét vị trí gần các tiện ích như chợ, trường học, nơi làm việc… "
              img="/bai2/1.png"
            />

            <Block
              title={"2. Tìm hiểu về chủ đầu tư"}
              des1="Một chủ đầu tư có tên tuổi, vị thế trên thị trường sẽ đảm bảo các vấn đề liên quan đến tốc độ thi công, tính pháp lý, chất lượng xây dựng, quy trình bàn giao,... Do đó, khi đã “nhắm” trúng dự án nào, khách hàng nên tìm kiếm tất cả những thông tin liên quan đến chủ đầu tư cũng như một số thông tin về nhà thầu, đơn vị thiết kế, giám sát và quản lý dự án đó. Kinh nghiệm mua căn hộ chung cư này sẽ hạn chế tối đa những rủi ro mà khách hàng có thể gặp phải. "
              des2="Bạn nên dành thời gian để đến quan sát tiến độ xây dựng (trường hợp mua căn hộ chung cư chưa hoàn thiện), thăm hỏi người dân đã và đang sống trong chung cư đó về mức độ hài lòng (trường hợp mua căn hộ chung cư có sẵn)."
              img="/bai2/2.jpg"
            />
            <Block
              title={"3. Kiểm tra pháp lí"}
              des1="Không giống các sản phẩm mua bán tiêu dùng thông thường, các căn hộ chung cư nói riêng hay nhà ở nói chung luôn đòi hỏi người mua bỏ ra một khoản chi phí tương đối lớn. Do đó, trước khi ra quyết định xuống tiền, khách hàng nên xem xét kỹ lưỡng và yêu cầu kiểm tra một số giấy tờ pháp lý sau để tránh tình trạng lừa đảo, tiền mất tật mang:"
              img="/bai2/3.jpg"
            />
            <Block
              title={"4. Đánh giá tiện ích nội – ngoại khu"}
              des1="Bạn cũng nên để ý đến tiện ích nội khu và ngoại khu quanh chung cư bạn sắp mua. Những yếu tố này tưởng chừng như nhỏ và thường bị bỏ qua khi cân nhắc chọn chung cư với suy nghĩ có thì tốt không có cũng không sao. Song đến 60% người mua cho biết đây là điểm quan trọng ảnh hưởng trực tiếp đến quá trình sinh hoạt của gia đình mỗi ngày và nuối tiếc khi đã không cân nhắc kỹ yếu tố này."
              des2="Ưu thế khi sống trong chung cư là bạn sẽ được sử dụng rất nhiều tiện ích ngoại khu như công viên, trung tâm thương mại… Tuy nhiên, với sự phát triển bùng nổ của các dự án, không thiếu những khu chung cư chỉ đáp ứng được nhu cầu về nhà ở mà bỏ qua yếu tố này, thậm chí xây sát mặt đường và cắt hoàn toàn khu vui chơi cho trẻ…"
              img="/bai2/4.jpg"
            />
            <Block
              title="Hệ thống an ninh – an toàn"
              des1="Bạn cần quan sát xem chung cư đó có được trang bị hệ thống phòng chống cháy nổ chuẩn chỉnh không, cách quản lý việc ra vào chung cư ra sao, có hệ thống camera giám sát hay hệ thống báo động khi có tình huống khẩn cấp không... "
            />
            <Block
              title="Tầng hầm và sức chứa"
              des1="Trung bình mỗi hộ gia đình thường có ít nhất 2 xe máy, một số hộ còn có 1 đến 2 ô tô. Do đó, khi mua chung cư mà chủ đầu tư xây dựng hầm để xe không đủ sức chứa tương đương mật độ căn hộ/mật độ cư dân có thể mang lại nhiều phiền toái trong quá trình sinh sống."
              img="/bai2/5.jpg"
            />
          </div>
        </div>
        <JobHot />
      </div>
    </div>
  );
};

export default PostTwo;
