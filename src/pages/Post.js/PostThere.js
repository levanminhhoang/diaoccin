import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { JobHot } from "../Intro";
import { Block } from "./PostOne";

const PostThere = () => {
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
              NHỮNG TIÊU CHÍ ĐÁNH GIÁ NHÀ CÓ PHONG THUỶ TỐT
            </h2>
            <span className="indent-3">
              Nhà là một nơi sẽ gắn bó cả đời của mọi người, do đó, việc xây
              dựng và sửa chữa nhà đóng vai trò khá là quan trọng. Phong thủy là
              một trong những yếu tố vô cùng quan trọng ảnh hưởng đến vận khí
              của toàn bộ ngôi nhà và sự nghiệp cũng như tài lộc của gia chủ. Để
              có thể biết được một ngôi nhà có phong thủy tốt hay không, không
              phải là việc dễ dàng. Vậy nên hãy cùng chúng tôi tìm hiểu ngay các
              tiêu chí đánh giá nhà ở có phong thuỷ tốt qua bài viết dưới đây để
              có cái nhìn tổng quan và xem rằng liệu ngôi nhà của bạn đã hội tụ
              đủ các yếu tố phong thủy tốt chưa nhé
            </span>
            <Block
              title={"1. Ánh sáng tự nhiên "}
              des1="Ánh sáng được xem là phần quan trọng nhất của việc xác định phương hướng khi xây nhà. Ngôi nhà của bạn có hứng đủ nắng tự nhiên hay không? Phong thủy ngôi nhà thật sự tốt khi đầy đủ ánh sáng tự nhiên, thông gió, những điều này giúp sản sinh nhiều dương khí, tốt cho cả sức khỏe và tài lộc của gia chủ."
              img="/bai3/1.png"
            />
            <Block
              title={"2. Yếu tố tàng phong tụ khí "}
              des1="Tàng phong tụ khí có thể hiểu nôm na là tránh nơi gió thổi quá mạnh. Nơi có gió thổi mạnh sẽ khiến tài lộc bị thổi bay, đây được xem là yếu tố đánh giá phong thủy hàng đầu. Không những thế, gió to cũng không tốt, bạn chỉ cần chọn nơi thoáng khí, gió vừa phải giúp thông thoáng ngôi nhà. "
              img="/bai3/2.jpg"
            />
            <Block
              title={"3. Xung quanh nhà có vật dẫn dụ sát khí  "}
              des1="Vật dẫn dụ sát khi có thể chính là những góc nhọn của các kiến trúc hay vật thể lớn có hướng chĩa thẳng vào nhà. Trong cuộc sống nhộn nhịp hiện đại, các ngôi nhà chung cư thường được xây sát nhau do đó khá khó tránh khỏi việc này. Cơ bản bạn nên hạn chế tối đa những mũi tên, vật nhọn chĩa vào nhà vì nó như những mũi tên độc, kèm theo sát khi khiến gia trạch bất ổn. "
              img="/bai3/3.png"
            />
            <Block
              title={"4. Phương vị bát quái "}
              des1="Nếu như muốn tăng tiền tài thì bạn nên chọn phương vị đối ứng là Đông Nam. Trước tiên bạn phải kiểm tra bát quái của mình , đối ứng với Đông Nam là Mộc, bạn nên chọn những đồ vật liên quan đến mộc để gia tăng sinh khí chẳng hạn như lẵng hoa, cây cối, hoặc dựa vào Thủy, vì Thủy tăng năng lượng cho Mộc (Thủy sinh Mộc). Do đó, bạn nên tìm ra Ngũ hành trước khi quyết định trang trí cho ngôi nhà của mình."
              img="/bai3/4.jpg"
            />
            <Block
              title="5. Nhà không bị khuyết góc "
              des1="Khuyết góc mang hàm ý ẩn dụ là thiếu nhân khẩu. Hơn nữa, nếu ngôi nhà bị khuyết góc còn đồng nghĩa với việc quyền lực bị phân tán, hơn cả là ảnh hưởng đến sức khỏe của gia chủ, mắc bệnh đau ốm thường xuyên. Không chỉ mang hàm ý của phong thủy, nhà khuyết góc làm căn nhà thiếu phần tinh tế và không đẹp. "
              img="/bai3/5.jpg"
            />
          </div>
        </div>
        <JobHot />
      </div>
    </div>
  );
};

export default PostThere;
