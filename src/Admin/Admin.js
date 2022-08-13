import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import { BiMessageDetail } from "react-icons/bi";
import { collection, onSnapshot } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const token = 1;

const Admin = () => {
  const [products, setProducts] = useState([]);
  const proRef = collection(db, "project");

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

  return (
    <div className="w-full max-w-[1200px] mx-auto mt-10  text-b px-[10px]">
      a
    </div>
  );
};
export default Admin;
