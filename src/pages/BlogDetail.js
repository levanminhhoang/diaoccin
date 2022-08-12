import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProP } from "./Blog";

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    const data = postsList.filter((item) => item.slug === slug);

    setPost(data);
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="w-full max-w-[1280px] px-[10px] md:px-6 lg:px-8 mx-auto font-base mt-10 md:mt-20">
      <div className="flex lg:gap-x-5 mb-28">
        <div className="flex flex-col lg:basis-[70%] px-5">
          {post.length > 0 &&
            post.map((item, index) => (
              <div key={index} className="w-full">
                <h2 className="mx-auto text-center font-semibold text-2xl mb-5">
                  {item?.title}
                </h2>

                <p className="my-4">{item?.contentOne}</p>
                <img
                  src={item?.imgOne}
                  alt=""
                  className="w-full max-w-[900px] object-cover mx-auto"
                />

                <h3 className="font-bold text-xl my-5">{item?.titleTwo}</h3>

                <p className="mb-4 text-base font-medium">{item?.contentTwo}</p>
                <span className="">{item?.contentFour}</span>
                <p className="my-5">{item?.contentFive}</p>
                <img
                  src={item?.imgTwo}
                  alt=""
                  className="w-full max-w-[900px] object-cover mx-auto"
                />

                <h3 className="font-bold text-xl my-5">{item?.titleThree}</h3>

                <p>{item?.contentThree}</p>
              </div>
            ))}
        </div>
        <ProP />
      </div>
    </div>
  );
};

export default BlogDetail;

export const postsList = [
  {
    title: "CHƯNG CẤT TINH DẦU THEO PHƯƠNG PHÁP TRUYỀN THỐNG ",
    imgOne: "/chuong1.jpg",
    imgTwo: "/chuong2.jpg",
    slug: "tinh-dau-chung-cat",
    titleTwo: "Quá trình chuẩn bị lò nấu theo phương pháp truyền thống:",
    titleThree:
      "Lò chưng cất dầu hiện đại theo công nghệ mới do Tinh dầu Thái Việt đầu tư, sáng chế",
    contentOne:
      " Tinh dầu Thái Việt với phương châm hoạt động Chất lượng tạo nên sự khác biệt. Cam kết sản phẩm được chưng cất 100% nguyên chất từ thiên nhiên. " +
      "Quá trinh chưng cất tinh dầu tràm trải qua nhiều công đoạn khácnhau, từ thu gom lá tràm, chuẩn bị lò chưng cất cho đến quá trìnhlên lửa, cho ra thành phẩm,… Đầu tiên, người ta sẽ thu gom lá tràm từ các vùng tràm gió tự nhiên,khi hái lá tràm, chỉ hái phần lá và một ít cành nhỏ, không chặt bỏcành, cây. <br /> Để dành cho cây mọc lại cho lần thu hoạch sau.",
    contentTwo:
      "Lò nấu truyền thống thường được cải chế từ thùng phuy kim loại, sau khi mang lá tràm về, cần đặt lá vào trong thùng. Sau khi cho lá vào nồi nấu xong, cần phết đất sét lên phần nối chưa 2 thùng để kín lò, tránh thất thoát nhiệt, hơi nước, hơi dầu. Sau khi nước thùng sôi lên, hơi nước sẽ bay qua ống dẫn vào bể làm lạnh, tinh dầu sẽ cô đọng và chảy vào bình chứa.",
    contentThree:
      "Do nhu cầu sản xuất số lượng lớn, công ty chúng tôi đã tiến hành nghiên cứu, sáng chế ra lò chưng cất hiện đại, tăng hiệu suất làm việc, giảm công sức lao động nhưng vẫn mang lại sản phẩm chất lượng cao  Mong muốn mang lại cho khách hàng những sản phẩm tốt nhất Tinh dầu Thái Việt luôn luôn phát triển và thay đổi công nghệ theo từng thời gian, giai đoạn nhưng vẫn giữ nét truyền thống để không mất đi sự tự nhiên của tinh dầu.",
  },
  {
    title: "Nhu cầu và xu hướng sử dụng tinh dầu tràm hiện nay",
    imgOne: "/chuong3.jpg",
    imgTwo: "/chuong4.jpg",
    slug: "xu-huong-su-dung-tinh-dau",
    contentOne:
      "Hiện nay tinh dầu tràm được sử dụng rất phổ biến ở tất cả các độ tuổi khác nhau, mục đích khác nhau để tận dụng hoàn hảo hết mức có thể tác dụng của tinh dầu. Do đó, tinh dầu Thái Việt luôn phát triển và đưa đến cho khách hàng những sản phẩm tốt nhất, chất lượng nhất, phù hợp với mọi nhu cầu của khách hàng trong và ngoài nước. Tinh dầu tràm có nhiều công dụng tốt cho sức khỏe, đặc biệt là đối với trẻ sơ sinh, trẻ nhỏ và phụ nữ đang mang thai. Thế nhưng, để sản phẩm phát huy được trọn vẹn tính hữu ích của mình, bạn cần sử dụng tinh dầu tràm đúng cách để đạt được hiệu quả cao. Trong bài là các hướng dẫn sử dụng tinh dầu tràm đúng chuẩn mà bạn nên tham khảo.",
    contentTwo:
      "Ngoài ra, như chúng ta đã biết, thành phần trong tinh dầu tràm có tác dụng kháng khuẩn tốt. Vì thế, các mẹ có thể nhỏ 1 vài giọt tinh dầu tràm vào đèn xông hơi để khử khuẩn không khí trong nhà, trong phòng. Điều này không chỉ giúp cho không khí trong lành, mà còn bảo vệ hệ hô hấp của trẻ sơ sinh và trẻ nhỏ. Đặc biệt, tinh dầu tràm còn có khả năng làm giảm triệu chứng đầy hơi, khó tiêu ở trẻ. Bạn cho một ít tinh dầu tràm vào lòng bàn tay của mình, sau đó nhẹ nhàng massage vùng bụng cho bé theo chiều kim đồng hồ, bé sẽ cảm thấy thoải mái và dễ chịu hơn rất nhiều.",
    contentThree:
      "Đặc biệt, tinh dầu tràm cũng mang đến công dụng rất tốt trong việc giải toả căng thẳng đầu óc, stress trong thời gian mang thai. Mẹ bầu có thể xông tinh dầu tràm để giúp đầu óc thư giãn, giải toả áp lực tâm lý. Việc xông tinh dầu còn hỗ trợ an thần, giúp phụ nữ mang thai dễ ngủ hơn.  Sử dụng tinh dầu đúng cách sẽ giúp làm nóng phổi, hỗ trợ tiêu đờm, giải phế, giảm các cơn ho. Bên cạnh đó, thành phần Cineol chứa trong tinh dầu tràm có tác dụng diệt khuẩn và giữ ấm tốt cơ thể. Cách trị ho bằng dầu tràm này có thể áp dụng cho mọi đối tượng.",
  },
  {
    title: "Tinh dầu Thái Việt – Tinh dầu tràm tốt nhất tại Huế",
    imgOne: "/chuong5.jpg",
    imgTwo: "/chuong6.jpg",
    slug: "tinh-dau-tram-tot-nhat-hue",
    contentFive:
      "Làm sao để chọn chọn tinh dầu tràm chuẩn xịn, an tâm dùng cho bé yêu và cả gia đình là điều vô cùng khó khăn. Chính vì vậy, nếu không may mua phải tràm pha trộn thì hậu quả khôn lường cho bé yêu của bạn như dị ứng, mẩn ngứa, viêm da,..và tiền mất tật mang.",
    contentFour:
      "Tinh dầu tràm Huế chuẩn phải được lấy từ lá cây tràm gió, mọc vùng cát trắng hoặc là tràm trên núi Bạch Mã, nguồn nguyên liệu khá thất thường nhất là vào mùa mưa. Để có 1 lít dầu tinh chất tràm phải mất khoảng 3 tạ lá tràm. Chi phí để mua lá và nấu, chưng cất một mẻ dầu tràm không hề rẻ, trong khi dầu tràm được bán tại Huế có thể nói là “thượng vàng hạ cám” và danh “dầu tràm nguyên chất” bị lạm dụng nhiều năm nay. ",
    contentOne:
      "Tinh dầu Thái Việt – Tinh dầu tràm được chiết suất 100% từ thiên nhiên. Được làm theo thủ công truyền thông và hỗ trợ từ máy móc hiện đại nhất trong lĩnh vực sản xuất tinh dầu hiện nay.",
    contentTwo:
      "Tinh dầu Thái Việt luôn dẫn đầu xu hướng về phát triển sản phẩm và công dụng của sản phẩm trong thời gian dài với đội ngũ nhân sự R&D, Nghiên cứu xu hướng thị trường, kỹ sư về máy móc được học tập từ nước ngoài trở về. ",
    contentThree:
      "Tràm Huế nguyên chất luôn mang lại một mùi thơm đặc trưng của tràm Huế, không giống với bất kỳ tràm nào khác trên thị trường.Do đó, Tinh dầu Thái Việt luôn được đánh giá cao về mặt sản phẩm và luôn dẫn đầu thị trường về chất lượng, sản lượng, số lượng. Mong muốn mang lại cho khách hàng sản phẩm tốt nhất và hiệu quả nhất.Tinh dầu Thái Việt với hơn 10 năm kinh nghiệm trong lĩnh vực tinh dầu tràm, tinh dầu Massage, tinh dầu xoa bóp trên thị trường Huế. Hi vọng tiếp tục được khách hàng ủng hộ trong thời gian tới và sau này.",
  },
];
