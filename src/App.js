import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const Login = lazy(() => import("./pages/Login"));

const Admin = lazy(() => import("./Admin/Admin"));
const Blog = lazy(() => import("./pages/Blog"));
const Home = lazy(() => import("./pages/Home"));

const LayOut = lazy(() => import("./pages/layout/LayOut"));
const Intro = lazy(() => import("./pages/Intro"));
const Contact = lazy(() => import("./pages/Contact"));
const Product = lazy(() => import("./pages/Product"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="w-10 h-10 border-4 border-[#ee4d2d] border-t-w border-b-w rounded-full animate-spin mx-auto mt-10"></div>
      }
    >
      <Routes>
        <Route element={<LayOut />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/san-pham" element={<Product />} />
          <Route path="/san-pham/:slug" element={<ProductDetail />} />
          <Route path="/lien-he" element={<Contact />} />
          <Route path="/gioi-thieu" element={<Intro />} />
          <Route path="/bai-viet" element={<Blog />} />
          <Route path="/bai-viet/:slug" element={<BlogDetail />} />

          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Suspense>
  );
}

export default App;
