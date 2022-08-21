import React from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiFacebook,
  FiInstagram,
} from "react-icons/fi";
import { FaTwitterSquare, FaLinkedin, FaPinterest } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer__information">
          <div className="footer__information__contact">
            <div className="footer__information__logo">
              <img src="/logo.jpg" alt="" />
            </div>
            <div className="footer__information__contact__address">
              <h1>CÔNG TY CỔ PHẦN WESTERN HOMES VIỆT NAM</h1>

              <div className="footer__information__contact__address__icon">
                <FiMapPin />
                <div className="footer__information__contact__address__icon__addressName">
                  <h2>195 Phan Đình Phùng, Phường Phú Thuận, TP Huế</h2>
                </div>
              </div>
            </div>
            <div className="footer__information__contact__address__icon">
              <FiPhone />
              <div className="footer__information__contact__address__icon__phoneNumber">
                <p>0905 861 215</p>
              </div>
            </div>
            <div className="footer__information__contact__address__icon">
              <FiMail />
              <div className="footer__information__contact__address__icon__phoneNumber">
                <p>ctcpwesternhomes@gmail.com</p>
              </div>
            </div>
            <div className="footer__information__contact__us">
              <p>Kết nối với chúng tôi</p>
              <div className="footer__information__contact__us__blog">
                <div className="footer__information__contact__us__blog__item">
                  <a href="">
                    <FiFacebook />
                  </a>
                </div>
                <div className="footer__information__contact__us__blog__item">
                  <a href="">
                    <FaTwitterSquare />
                  </a>
                </div>

                <div className="footer__information__contact__us__blog__item">
                  <a href="">
                    <ImYoutube2 />
                  </a>
                </div>

                <div className="footer__information__contact__us__blog__item">
                  <a href="">
                    <FaLinkedin />
                  </a>
                </div>

                <div className="footer__information__contact__us__blog__item">
                  <a href="">
                    <FiInstagram />
                  </a>
                </div>

                <div className="footer__information__contact__us__blog__item">
                  <a href="">
                    <FaPinterest />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__information__list">
            <div className="footer__information__list__introduce">
              <div className="footer__information__list__introduce__title">
                <p>Về Western Homes</p>
              </div>
              <div className="footer__information__list__introduce__item">
                <a href="/">Giới thiệu</a>
                <a href="/">Mua bán nhà đất</a>
                <a href="/">Cho thuê nhà đât</a>
                <a href="/">Quy trình dịch vụ</a>
                <a href="/">Tuyển dụng</a>
                <a href="/">Liên hệ</a>
              </div>
            </div>
            <div className="footer__information__list__introduce">
              <div className="footer__information__list__introduce__title">
                <p>Quy định</p>
              </div>
              <div className="footer__information__list__introduce__item">
                <a href="/">Quy định đăng tin</a>
                <a href="/">Quy chế hoạt động</a>
                <a href="/">Điều khoản sử dụng</a>
                <a href="/">Chính sách bảo mật</a>
                <a href="/">Hướng dẫn đăng tin</a>
              </div>
            </div>
            <div className="footer__information__list__introduce">
              <div className="footer__information__list__introduce__title">
                <p>Quảng cáo</p>
              </div>
              <div className="footer__information__list__introduce__item">
                <a href="/">Báo giá đăng tin</a>
                <a href="/">Báo giá banner</a>
                <a href="/">Dự án bất động sản</a>
                <a href="/">Đặt logo thương hiệu</a>
                <a href="/">Bài viết tin tức PR</a>
                <a href="/">Hướng dẫn thanh toán</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
