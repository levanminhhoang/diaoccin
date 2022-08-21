import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const Contact = () => {
  const refForm = useRef();
  const hanldeSubmit = (e) => {
    e.preventDefault();
    try {
      emailjs
        .sendForm(
          "service_uu0bvjr",
          "template_eepi3mk",
          refForm.current,
          "nO9l9kQhyDQX-kvry"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      toast.success("Gửi thành công", {
        position: "top-right",
      });
    } catch (err) {
      toast.success("Gửi thành công", {
        position: "top-right",
      });
    }
  };
  return (
    <div className="w-full max-w-[1280px] mx-auto px-[10px] md:px-3 lg:px-4 xl:px-5 mt-20">
      <div className="flex flex-col">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2226.3455705367032!2d107.60592281104553!3d16.463361426243473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a111843798b3%3A0xf201be35a88dc367!2sThe%20Manor%20Crown%20Hu%E1%BA%BF!5e0!3m2!1svi!2s!4v1661092435608!5m2!1svi!2s"
          title="map"
          className="w-full h-[400px]"
          frameBorder="0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-10">
        <div className="flex text-base flex-col px-4 gap-2 text-center">
          <h2 className="text-center">CÔNG TY CỔ PHẦN WESTERN HOMES</h2>
          <div className=" flex flex-col ">
            <span className="">
              <strong>Địa chỉ:</strong> Lô B15 - The Manor Crown Huế - Thừa
              Thiên Huế
            </span>
            <span className="">
              <strong>Người đại diện: </strong> Nguyễn Đức Lập
            </span>
            <span className="">
              <strong>Điện thoại: </strong> 093 552 3636
            </span>
            <span className="">
              <strong>Email: </strong>
              <a href="mailto:ctcpwesternhomes@gmail.com">
                ctcpwesternhomes@gmail.com
              </a>
            </span>
            <div className="mt-5 flex items-center justify-center">
              <img src="/thaiviet1.jpg" alt="" className="w-[300px]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col px-2 mt-5 mb-32 w-full max-w-[460px] mx-auto">
          <h2 className="text-base font-bold">LIÊN HỆ</h2>
          <form
            ref={refForm}
            onSubmit={hanldeSubmit}
            className="text-base font-medium"
          >
            <div className="group-form w-full my-4">
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
                style={{ height: "140px" }}
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
    </div>
  );
};

export default Contact;
