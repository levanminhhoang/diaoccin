import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import { BiMessageDetail } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { collection, deleteDoc, onSnapshot } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const token = 1;

const Admin = () => {
  const [products, setProducts] = useState([]);
  const proRef = collection(db, "checkOutProducts");
  const navigate = useNavigate();
  // const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    if (token === 1) {
      onSnapshot(proRef, (snapshot) => {
        let pro = [];
        snapshot.docs.forEach((doc) => {
          pro.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setProducts(pro);
      });
    }
  }, []);
  const hanldeSignOut = () => {
    signOut(auth);
    navigate("/");
  };
  return (
    <div className="w-full max-w-[1200px] mx-auto mt-10  text-b px-[10px]">
      <h2 className="text-center font-semibold text-2xl ">
        Danh Sách Đơn Hàng
      </h2>
      <div className="flex w-full mx-auto gap-x-5 mt-10 flex-col max-w-[900px]">
        <div className="flex w-full mb-[1px]">
          <div className="flex w-full mb-5">
            <div className=" text-center md:basis-4/12 basis-6/12 ">
              Tên Khách Hàng
            </div>
            <div className=" text-center md:basis-3/12 basis-4/12">Địa chỉ</div>
            <div className=" text-center md:basis-2/12 hidden md:block">
              Tổng Tiền
            </div>
            <div className=" text-center md:basis-1/12 basis-2/12">
              Chi Tiết
            </div>
            <div className=" text-center md:basis-2/12 hidden md:block">
              Thời gian
            </div>
          </div>
        </div>
        <div>
          {products.length > 0 &&
            products.map((item) => <InfoItem key={item.id} item={item} />)}
        </div>
      </div>
      <button
        onClick={hanldeSignOut}
        className="mt-10 w-full max-w-[142px] outline-none border border-[#000] text-b text-center ml-10 lg:ml-36 rounded-sm py-2"
      >
        Đăng xuất
      </button>
    </div>
  );
};

function InfoItem({ item }) {
  const [total, setTotal] = useState(0);
  const [show, setShow] = useState(false);

  const date = new Date(item?.createAt?.seconds * 1000);
  const time = new Date(date).toLocaleDateString("vi-VI");

  useEffect(() => {
    setTotal(
      item?.products.reduce(
        (tot, item) => tot + +item.quantity * +item.price,
        0
      )
    );
  }, [item]);

  const hanldeShowItem = (item) => {
    setShow(true);
  };
  return (
    <>
      <div className="flex w-full text-base  ">
        <div className="py-1 px-2 md:py-3 md:basis-4/12 basis-6/12 border border-[#ccc] ">
          {item?.name}
        </div>
        <div className="py-1 px-2 md:py-3  basis-3/12 border border-[#ccc]">
          {item?.address}
        </div>
        <div className="py-1 px-2 md:py-3 md:basis-2/12 hidden md:block border border-[#ccc]">
          {total ? <span>{total + 20000} đ</span> : ""}
        </div>
        <div className="py-1 px-2 md:py-3 md:basis-1/12 basis-2/12 cursor-pointer border border-[#ccc] text-center flex items-center justify-center ">
          <span onClick={() => hanldeShowItem(item)}>
            <BiMessageDetail />
          </span>
        </div>
        <div className="py-1 px-2 md:py-3 md:basis-2/12  hidden  cursor-pointer border border-[#ccc] text-center md:flex items-center justify-center ">
          {time || ""}
        </div>
      </div>
      {show === true ? (
        <div className="fixed inset-0  text-w w-full bg-[#ccc]  transition duration-100 ">
          <div className="flex w-full max-w-[500px] mx-auto mt-10 text-base font-medium flex-col relative py-10 bg-f">
            <span
              onClick={() => setShow(false)}
              className="absolute top-2 right-3  text-xl p-2 cursor-pointer"
            >
              x
            </span>
            <h2 className="text-center mx-auto">Chi Tiết Đơn Hàng</h2>
            <div className="flex flex-col mt-5 px-5">
              <span>
                <strong>Tên:</strong> {item.name}
              </span>
              <span>
                <strong>Gmail:</strong> {item.email}
              </span>
              <span>
                <strong>SĐT:</strong> 0{item.phone}
              </span>
              <span>
                <strong>Địa chỉ:</strong> {item.address}
              </span>
              <span>
                <strong>Phường:</strong> {item.wart}
              </span>
              <span>
                <strong>Thành Phố:</strong> {item.province}
              </span>
              <span>
                <strong>Tỉnh:</strong> {item.city}
              </span>
            </div>
            <div className="flex mt-5 px-5 flex-col">
              <h2 className="text-center mx-auto">Danh sách sản phẩm</h2>
              <div className="flex  flex-col mt-5">
                {item.products.length > 0 &&
                  item.products.map((item, index) => (
                    <CartAdmin key={index} item={item} total={total} />
                  ))}
                <div className="mt-5 flex flex-col">
                  <span>Phí Ship: {item.ship} đ</span>
                  <div>
                    <strong>Thành Tiền: {item.ship + total} đ</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

function CartAdmin({ item, total }) {
  return (
    <div className="flex items-center my-3 pb-3 border-b ">
      <div className="gap-x-2 flex items-center">
        <img src={item.image} alt="" className="w-16" />
        <div className="flex flex-col">
          <span className="text__overflow-1">{item.title}</span>
          <div className="flex items-center ml-2">
            <span>
              {item.quantity} x {item.price}
            </span>
          </div>
        </div>
      </div>
      <div className="total ml-auto">
        <span>{+item.price * +item.quantity} đ</span>
      </div>
    </div>
  );
}
export default Admin;
