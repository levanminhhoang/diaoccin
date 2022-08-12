const products = [
  {
    id: 1,
    title: "Tinh Dầu Massage",
    pricesale: 265000,
    cart: "yêu thích",
    bought: true,
    image: "/img/image/massage.jpg",
    categorySlug: "tinh-dau",
    slug: "tinh-dau-massage",
    name: "hộp",
    description:
      "Công dụng: Hỗ trợ trong điều trị tê thấp, đau nhức xương khớp, khử mùi hôi chân. Hỗ trợ trong thê thao làm phục hồi thư giãn cơ, xương khớp khi vận động quá sức.Hỗ trợ trong xoa bóp thẩm mỹ làm thư giản vòng eo, bụng.",
  },
  {
    id: 40,
    title: "Tinh Dầu Tràm Loại 1",
    pricesale: 232000,
    cart: "yêu thích",
    bought: true,
    image: "/img/image/tram-1-100ml.png",
    categorySlug: "tinh-dau",
    slug: "tinh-dau-tram-1",
    name: "hộp",
    description:
      "Công dụng: Hỗ trợ trong điều trị tê thấp, đau nhức xương khớp, khử mùi hôi chân. Hỗ trợ trong thê thao làm phục hồi thư giãn cơ, xương khớp khi vận động quá sức.Hỗ trợ trong xoa bóp thẩm mỹ làm thư giản vòng eo, bụng.",
  },

  {
    id: 42,
    title: "Tinh Dầu Tràm 30ml",
    pricesale: 137000,
    cart: "mới",
    bought: true,
    image: "/img/image/tram-30ml.png",
    categorySlug: "tinh-dau",
    slug: "tinh-dau-tram-30ml",
    name: "hộp",
    description:
      "Công dụng: Hỗ trợ trong điều trị tê thấp, đau nhức xương khớp, khử mùi hôi chân. Hỗ trợ trong thê thao làm phục hồi thư giãn cơ, xương khớp khi vận động quá sức.Hỗ trợ trong xoa bóp thẩm mỹ làm thư giản vòng eo, bụng.",
  },
  {
    id: 2,
    title: "Tinh Dầu Hoa Sen",
    pricesale: 137000,

    bought: true,
    cart: "mới",
    image: "/img/image/hoa-sen.jpg",
    categorySlug: "tinh-dau",
    slug: "tinh-dau-hoa-sen",
    name: "hộp",
    description:
      "Giảm stress, ổn định thần kinh, giúp giảm nhức đầu, chóng mặt và mất ngủ, giảm huyết áp, làm sạch không khí, xông phòng làm gia vị.",
  },

  {
    id: 8,
    title: "Tinh Dầu Dừa",

    pricesale: 95000,

    cart: "mới",
    image: "/img/image/tinh-dau-dua.jpg",
    categorySlug: "tinh-dau",
    slug: "tinh-dau-dua",
    name: "hộp",
    description:
      "Công dụng: Giúp bồi bổ cơ thể, đẹp da, trị suy nhược cơ thể, đẹp da, trị suy nhược thần kinh, khỏe gân cốt, giảm cholesterol, chống xơ vỡ động mạch. Đặc biệt là bài thuốc quý trong điều trị rụng tóc và tóc bạc sớm.",
  },
  {
    id: 43,
    title: "Tinh Dầu Tràm 10ml",

    pricesale: 42000,

    cart: "mới",
    bought: true,
    image: "/img/image/tram-10ml.jpg",
    categorySlug: "tinh-dau",
    slug: "tinh-dau-tram-10ml",
    name: "hộp",
    description:
      "Công dụng: Hỗ trợ trong điều trị tê thấp, đau nhức xương khớp, khử mùi hôi chân. Hỗ trợ trong thê thao làm phục hồi thư giãn cơ, xương khớp khi vận động quá sức.Hỗ trợ trong xoa bóp thẩm mỹ làm thư giản vòng eo, bụng.",
  },

  {
    id: 11,
    title: "Tinh Dầu Treo Xe Hoa Hồng",
    pricesale: 130000,
    bought: true,
    cart: "yêu thích",
    image: "/img/image/tinh-dau-treo-xe-hoa-hong.jpg",
    categorySlug: "tinh-dau-treo",
    slug: "tinh-dau-treo-xe-hoa-hong",
    name: "hộp",
    description:
      "Công dụng: Khử mùi, thanh lọc không khí; kháng khuẩn, hương thơm dễ chịu, giúp tinh thần thư giãn, tỉnh táo, giảm mệt mỏi và giảm say xe. Đuỗi muỗi và côn trùng.",
  },
  // data start new
  {
    id: 100,
    title: "Tinh dầu xả chanh 100ml",
    pricesale: 240000,
    bought: true,
    cart: "yêu thích",
    image: "/img/image/tinh-dau-chanh-sa-100.png",
    categorySlug: "tinh-dau",
    slug: "tinh-dau-chanh-xa-100ml",
    name: "hộp",
    description:
      "Có tác dụng sát khuẩn, khử mùi, trị cảm lạnh, ho, cảm cúm, đau đầu, đuổi muỗi, côn trùng, trị lạnh bụng, khắc phục da nhờn, trị hôi nách,…",
  },

  {
    id: 102,
    title: "Cao Tràm 15gr",
    pricesale: 87000,
    cart: "mới",
    image: "/img/image/cao-dau-tram-15.png",
    categorySlug: "cao-dau",
    slug: "cao-tram-15gr",
    name: "hộp",
    description:
      "Ngăn ngừa cảm lạnh, nhức đầu, ho hen, viêm phổi, sổ mũi, trị dị ứng da, thấp khớp, nhức xương, đau dây thần kinh, ứ huyết sau sinh, tiêu hóa kém,…",
  },
  {
    id: 103,
    title: "Cao Tràm 8gr",
    pricesale: 45000,
    cart: "mới",
    image: "/img/image/cao-dau-tram.jpg",
    categorySlug: "cao-dau",
    slug: "cao-tram-8gr",
    name: "hộp",
    description:
      "Ngăn ngừa cảm lạnh, nhức đầu, ho hen, viêm phổi, sổ mũi, trị dị ứng da, thấp khớp, nhức xương, đau dây thần kinh, ứ huyết sau sinh, tiêu hóa kém,…",
  },
  {
    id: 104,
    title: "Nước hoa hồng",
    pricesale: 168000,
    cart: "mới",
    image: "/img/image/nuoc-hoa-hong.png",
    categorySlug: "khac",
    slug: "nuoc-hoa-hong",
    name: "hộp",
    description:
      "Kháng khuẩn nhẹ, làm sạch các chất bụi bẩn,  các chất bả nhờn, bám trên da, làm se khít lỗ chân lông, tạo nên sự mềm mại, cân bằng độ đàn hồi cho da, mang lại cho bạn sự sảng khoái nhẹ nhàn dễ chịu, giúp giữ",
  },

  // {
  //   id: 105,
  //   title: "Tinh Dầu Vitamin",
  //   pricesale: 168000,
  //   cart: "mới",
  //   image: "/img/image/tinh-1.jpg",
  //   categorySlug: "khac",
  //   slug: "nuoc-hoa-hong",
  //   name: "hộp",
  //   description:
  //     "Kháng khuẩn nhẹ, làm sạch các chất bụi bẩn,  các chất bả nhờn, bám trên da, làm se khít lỗ chân lông, tạo nên sự mềm mại, cân bằng độ đàn hồi cho da, mang lại cho bạn sự sảng khoái nhẹ nhàn dễ chịu, giúp giữ",
  // },
  {
    id: 106,
    title: "Tinh dầu quế 100ml",
    pricesale: 210000,
    cart: "mới",
    image: "/img/image/tinh-dau-que-100ml.png",
    categorySlug: "tinh-dau",
    slug: "tinh-dau-que-100ml",
    name: "hộp",
    description:
      "Giảm lượng đường trong máu, giúp điều trị  bệnh tiểu đường, trợ giúp tiêu hóa, hạn chế tiêu chảy, làm tăng sức đề kháng do bị cảm lạnh, giúp giảm cholesterol, giảm stress, giảm cân, khử mùi hôi tanh, thanh lọc không khí, chống buồn nôn, long đàm dễ thở, chống chuột rút.",
  },
  {
    id: 107,
    title: "Tinh dầu quế 25ml",
    pricesale: 100000,
    cart: "mới",
    image: "/img/image/tinh-dau-que-25ml.png",
    categorySlug: "tinh-dau",
    slug: "tinh-dau-que-25ml",
    name: "hộp",
    description:
      "Giảm lượng đường trong máu, giúp điều trị  bệnh tiểu đường, trợ giúp tiêu hóa, hạn chế tiêu chảy, làm tăng sức đề kháng do bị cảm lạnh, giúp giảm cholesterol, giảm stress, giảm cân, khử mùi hôi tanh, thanh lọc không khí, chống buồn nôn, long đàm dễ thở, chống chuột rút.",
  },
  {
    id: 107,
    title: "Đèn xông tinh dầu ",
    pricesale: 350000,
    cart: "mới",
    image: "/img/image/den-xong-tinh-dau.png",
    categorySlug: "khac",
    slug: "den-xong-tinh-dau",
    name: "hộp",
    description: "công cụ hữu ích cho việc xông hơi",
  },
  {
    id: 117,
    title: "Tinh dầu Sả",
    pricesale: 100000,
    cart: "mới",
    image: "/img/image/tinh-dau-sa.png",
    categorySlug: "tinh-dau",
    slug: "tinh-dau-sa",
    name: "hộp",
    description:
      "Xua đuổi muỗi, côn trùng và các loài bò sát, xua tan khí độc, gia vị bữa sáng, sát trùng làm lành vết thương, ngừa nấm da. Xông hơi giảm cân giảm đau nhức chân tay. Phục hồi sức khỏe sau khi vận động mạnh.",
  },
  {
    id: 108,
    title: "Tinh Dầu Oải Hương",

    pricesale: 137000,

    cart: "mới",
    image: "/img/image/oai-huong.png",
    categorySlug: "tinh-dau",
    slug: "tinh-dau-oai-huong",
    name: "hộp",
    description:
      "Giảm stress, ổn định thần kinh, giúp giảm nhức đầu, chóng mặt và mất ngủ, giảm huyết áp, làm sạch không khí, xông phòng làm gia vị.",
  },
  {
    id: 109,
    title: "Tinh Dầu Bưởi",

    pricesale: 137000,

    cart: "mới",
    image: "/img/image/tinh-dau-buoi.png",
    categorySlug: "tinh-dau",
    slug: "tinh-dau-buoi",
    name: "hộp",
    description:
      "Giảm stress, ổn định thần kinh, giúp giảm nhức đầu, chóng mặt và mất ngủ, giảm huyết áp, làm sạch không khí, xông phòng làm gia vị.",
  },
  {
    id: 101,
    title: "Tinh dầu xả chanh 25ml",
    pricesale: 100000,

    cart: "mới",
    image: "/img/image/tinh-dau-chanh-sa-100.png",
    categorySlug: "tinh-dau",
    slug: "tinh-dau-chanh-xa-10ml",
    name: "hộp",
    description:
      "Có tác dụng sát khuẩn, khử mùi, trị cảm lạnh, ho, cảm cúm, đau đầu, đuổi muỗi, côn trùng, trị lạnh bụng, khắc phục da nhờn, trị hôi nách,…",
  },
  // data start end
  {
    id: 12,
    title: "Tinh Dầu Treo Xe Hoa Lài",

    pricesale: 130000,

    cart: "yêu thích",
    image: "/img/image/tinh-dau-treo-xe-hoa-lai.jpg",
    categorySlug: "tinh-dau-treo",
    slug: "tinh-dau-treo-xe-hoa-lai",
    name: "hộp",
    description:
      "Công dụng: Khử mùi, thanh lọc không khí; kháng khuẩn, hương thơm dễ chịu, giúp tinh thần thư giãn, tỉnh táo, giảm mệt mỏi và giảm say xe. Đuỗi muỗi và côn trùng.",
  },
  {
    id: 13,
    title: "Tinh Dầu Treo Xe Ngọc Lan Tây",

    pricesale: 110000,

    cart: "mới",
    image: "/img/image/tinh-dau-treo-xe-hoa-ngoc-lan-tay.jpg",
    categorySlug: "tinh-dau-treo",
    slug: "tinh-dau-treo-xe-hoa-ngoc-lan-tay",
    bought: true,
    name: "hộp",
    description:
      "Công dụng: Khử mùi, thanh lọc không khí; kháng khuẩn, hương thơm dễ chịu, giúp tinh thần thư giãn, tỉnh táo, giảm mệt mỏi và giảm say xe. Đuỗi muỗi và côn trùng.",
  },
  {
    id: 14,
    title: "Tinh Dầu Treo Xe Oải Hương",

    pricesale: 110000,

    cart: "mới",
    image: "/img/image/tinh-dau-treo-xe-oai-huong.jpg",
    categorySlug: "tinh-dau-treo",
    slug: "tinh-dau-treo-xe-oai-huong",
    name: "hộp",
    description:
      "Công dụng: Khử mùi, thanh lọc không khí; kháng khuẩn, hương thơm dễ chịu, giúp tinh thần thư giãn, tỉnh táo, giảm mệt mỏi và giảm say xe. Đuỗi muỗi và côn trùng.",
  },
  {
    id: 15,
    title: "Tinh Dầu Treo Xe Quế",

    pricesale: 95000,

    cart: "mới",
    image: "/img/image/tinh-dau-treo-xe-que.jpg",
    categorySlug: "tinh-dau-treo",
    slug: "tinh-dau-treo-xe-que",
    name: "hộp",
    description:
      "Công dụng: Khử mùi, thanh lọc không khí; kháng khuẩn, hương thơm dễ chịu, giúp tinh thần thư giãn, tỉnh táo, giảm mệt mỏi và giảm say xe. Đuỗi muỗi và côn trùng.",
  },
  {
    id: 16,
    title: "Tinh Dầu Treo Xe Sả Chanh",

    pricesale: 75000,

    cart: "mới",
    image: "/img/image/tinh-dau-treo-xe-sa-chanh.jpg",
    categorySlug: "tinh-dau-treo",
    slug: "tinh-dau-treo-xe-sa-chanh",
    name: "hộp",
    description:
      "Công dụng: Khử mùi, thanh lọc không khí; kháng khuẩn, hương thơm dễ chịu, giúp tinh thần thư giãn, tỉnh táo, giảm mệt mỏi và giảm say xe. Đuỗi muỗi và côn trùng.",
  },
  {
    id: 17,
    title: "Tinh Dầu Ngãi Cứu",

    pricesale: 130000,

    cart: "mới",
    image: "/img/image/ngai-cuu.jpeg",
    categorySlug: "tinh-dau",
    slug: "ngai-cuu",
    bought: true,
    name: "hộp",
    description:
      "Công dụng: Hỗ trợ điều trị đau các cơ bắp, các khớp xương, đau cột sống, đau thần kinh tọa, chống mệt mỏi toàn thân.Chú ý khi dùng: Không dùng cho trẻ em dưới 2 tuổi, không nên dùng vết thương hở, người bị kích ứng với các thành phần của sản phẩm.",
  },
  {
    id: 18,
    title: "Trị Đau Răng Gia Truyền",

    pricesale: 95000,

    cart: "mới",
    image: "/img/image/tinh-dau-tri-dau-rang.jpg",
    categorySlug: "khac",
    slug: "tinh-dau-tri-dau-rang",
    name: "hộp",
    description:
      "Công dụng: Chặn đứng hoàn toàn sự lung lay của răng, làm hết viêm nhiễm các chân răng, hết sưng các nướu ở chân răng, diệt các vi khuẩn gây nguy hại đến tủy của chân răng, hết tê buốt, hết kiên chân răng, làm răng chắc khỏe mỗi ngày.",
  },
  {
    id: 19,
    title: "Trị Gút",

    pricesale: 95000,

    cart: "mới",
    image: "/img/image/tri-gut.jpg",
    categorySlug: "khac",
    slug: "tri-gut",
    name: "hộp",
    description:
      "Công dụng: Giải tỏa các độc tố tích tụ, ứ đọng ở các khớp, thanh nhiệt trừ phong, thông kinh hoạt huyết, xua tan các cơn đau nhức ở các xương khớp, giúp lợi gân cốt, hạn chế các bệnh teo cơ, chống tê mỏi tay chân.",
  },

  {
    id: 22,
    title: "Trị Sâu Răng",

    pricesale: 60000,

    cart: "yêu thích",
    image: "/img/image/tri-sau-rang.jpg",
    categorySlug: "khac",
    slug: "tri-sau-rang",
    bought: true,
    name: "hộp",
    description:
      "Công dụng: Điều trị các loại sâu răng, viêm chân răng, chảy máu chân răng, ngứa, sưng và nhức chân răng.",
  },
  {
    id: 23,
    title: "Trị Viêm Xoang",

    pricesale: 13000,

    cart: "mới",
    image: "/img/image/tri-viem-xoang.jpg",
    categorySlug: "khac",
    slug: "tri-viem-xoang",
    name: "hộp",
    description:
      "Công dụng: Chuyên đặc trị cấc loại viêm xoang cấp và mãn tính: viêm xoang, viêm mũi dị ứng, nghẹt mũi, ngứa mũi, đau nhức đầu vùng mặt do viêm xoang gây ra.",
  },
  {
    id: 24,
    title: "Vitamin Dưỡng Da",

    pricesale: 170000,

    cart: "yêu tích",
    image: "/img/image/vitamin-duong-da.jpg",
    categorySlug: "vitamin",
    slug: "vitamin-duong-da",
    name: "hộp",
    description:
      "Công dụng: Làm mát da, mịn da, bổ sung vitamin nuôi dưỡng và các dưỡng chất cần thiết nuôi dưỡng da. Làm hết hăm, rát các vùng kín ở người lớn và trẻ nhỏ. Đặc biệt ngăn ngừa rôm sảy, ngứa ở trẻ sơ sinh và trẻ nhỏ, giúp làm nhanh chóng lên da non, làm dịu các vết bỏng, làm liền sẹo, mịn màng, trắng da.",
  },
  {
    id: 25,
    title: "Vitamin Dưỡng thể",

    pricesale: 300000,

    image: "/img/image/vitamin-duong-the.jpg",
    categorySlug: "vitamin",
    slug: "vitamin-duong-the",
    name: "hộp",
    description:
      "Công dụng: Làm mát da, mịn da, bổ sung vitamin nuôi dưỡng và các dưỡng chất cần thiết nuôi dưỡng da. Làm hết hăm, rát các vùng kín ở người lớn và trẻ nhỏ. Đặc biệt ngăn ngừa rôm sảy, ngứa ở trẻ sơ sinh và trẻ nhỏ, giúp làm nhanh chóng lên da non, làm dịu các vết bỏng, làm liền sẹo, mịn màng, trắng da.",
  },
  {
    id: 26,
    title: "Xịt Phòng Bưởi",

    pricesale: 130000,

    cart: "mới",
    image: "/img/image/xit-phong-buoi.jpg",
    categorySlug: "xit-phong",
    slug: "xit-phong-buoi",
    name: "hộp",
    description:
      "Công dụng: Làm thư giản, khử mùi ẩm mốc, sát khuẩn, hương thơm dễ chịu.",
  },
  {
    id: 27,
    title: "Xịt Phòng Hoa Lài",

    pricesale: 130000,

    cart: "yêu thích",
    image: "/img/image/xit-phong-hoa-lai.jpg",
    categorySlug: "xit-phong",
    slug: "xit-phong-hoa-lai",
    name: "hộp",
    description:
      "Công dụng: Làm thư giản, khử mùi ẩm mốc, sát khuẩn, hương thơm dễ chịu.",
  },
  {
    id: 28,
    title: "Xịt Phòng Hoa Sen",

    pricesale: 130000,
    bought: true,

    cart: "yêu thích",
    image: "/img/image/xit-phong-hoa-sen.jpg",
    categorySlug: "xit-phong",
    slug: "xit-phong-hoa-sen",
    name: "hộp",
    description:
      "Công dụng: Làm thư giản, khử mùi ẩm mốc, sát khuẩn, hương thơm dễ chịu.",
  },
  {
    id: 29,
    title: "Xịt Phòng Oải Hương",

    pricesale: 130000,

    cart: "mới",
    image: "/img/image/xit-phong-oai-huong.jpg",
    categorySlug: "xit-phong",
    slug: "xit-phong-oai-huong",
    name: "hộp",
    description:
      "Công dụng: Làm thư giản, khử mùi ẩm mốc, sát khuẩn, hương thơm dễ chịu.",
  },
  {
    id: 30,
    title: "Xịt Phòng Quế",

    pricesale: 130000,

    image: "/img/image/xit-phong-que.jpg",
    categorySlug: "xit-phong",
    slug: "xit-phong-que",
    name: "hộp",
    description:
      "Công dụng: Làm thư giản, khử mùi ẩm mốc, sát khuẩn, hương thơm dễ chịu.",
  },
  {
    id: 31,
    title: "Xịt Phòng Sả Chanh",

    pricesale: 130000,

    cart: "mới",
    image: "/img/image/xit-phong-xa-chanh.jpg",
    categorySlug: "xit-phong",
    slug: "xit-phong-xa-chanh",
    name: "hộp",
    description:
      "Công dụng: Làm thư giản, khử mùi ẩm mốc, sát khuẩn, hương thơm dễ chịu.",
  },
  {
    id: 32,
    title: "Xịt Phòng Trầm",

    pricesale: 130000,

    image: "/img/image/xit-phong-tram.jpeg",
    categorySlug: "xit-phong",
    slug: "xit-phong-tram",
    name: "hộp",
    bought: true,
    description:
      "Công dụng: Làm thư giản, khử mùi ẩm mốc, sát khuẩn, hương thơm dễ chịu.",
  },
  {
    id: 41,
    title: "Tinh Dầu Tràm Loại 2",

    pricesale: 116000,

    cart: "mới",
    bought: true,
    image: "/img/image/tram-2-100ml.png",
    categorySlug: "tinh-dau",
    slug: "tinh-dau-tram-2",
    name: "hộp",
    description:
      "Công dụng: Hỗ trợ trong điều trị tê thấp, đau nhức xương khớp, khử mùi hôi chân. Hỗ trợ trong thê thao làm phục hồi thư giãn cơ, xương khớp khi vận động quá sức.Hỗ trợ trong xoa bóp thẩm mỹ làm thư giản vòng eo, bụng.",
  },
];

const getAllProducts = () => products;

const getProducts = (min, count) => {
  const max = products.length - count;

  return products.slice(min, count);
};
const getProductBySlug = (slug) => products.find((e) => e.slug === slug);
const productData = {
  getAllProducts,
  getProducts,

  getProductBySlug,
};
export default productData;
