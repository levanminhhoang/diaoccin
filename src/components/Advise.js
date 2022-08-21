import React from "react";

const Advise = () => {
  return (
    <div className="grid grid-cols-1 gap-8 w-full max-w-[1170px] mx-auto px-[10px] md:px-4 lg:px-6 xl:px-6 my-10">
      <h2 className="text-2xl font-medium text-h">Nhận Báo Giá Ngay</h2>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2226.3455705367032!2d107.60592281104553!3d16.463361426243473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a111843798b3%3A0xf201be35a88dc367!2sThe%20Manor%20Crown%20Hu%E1%BA%BF!5e0!3m2!1svi!2s!4v1661092435608!5m2!1svi!2s"
            title="map"
            className="w-full h-[300px]"
            frameBorder="0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <form
          // ref={refForm}
          // onSubmit={hanldeSubmit}
          className="text-base font-medium"
        >
          {/* <h2 className="text-xl text-center font-medium">Nhận Báo Giá Ngay</h2> */}
          <div className="group-form w-full mb-4">
            <input
              type="text"
              placeholder="Họ và Tên"
              className="outline-none border border-[#ccc] w-full px-2 py-2 focus:border-c"
            />
          </div>
          <div className="group-form w-full my-4">
            <input
              type="text"
              placeholder="Số điện thoại"
              className="outline-none border border-[#ccc] w-full px-2 py-2 focus:border-c"
            />
          </div>
          <div className="group-form w-full my-4">
            <input
              type="text"
              placeholder="Email"
              className="outline-none border border-[#ccc] w-full px-2 py-2 focus:border-c"
            />
          </div>
          <div className="group-form w-full my-4">
            <textarea
              type="text"
              style={{ height: "124px" }}
              placeholder="Nội dung"
              className="outline-none border border-[#ccc] w-full px-2 py-2 focus:border-c h-28"
            />
          </div>
          <button className="w-full max-w-[132px] bg-f text-w rounded-sm hover:opacity-75 py-[6px]">
            Gửi ngay
          </button>
        </form>
      </div>
    </div>
  );
};

export default Advise;
