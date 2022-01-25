import React from "react";
import { LogoImage } from "@/data";

const Footer = () => {
  const { light } = LogoImage;
  return (
    <footer className="footer_1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-6 col-md-5">
            <aside className="widget aboutwidget">
              <a href="/">
                <img src={light} alt="" />
              </a>
              <p>
                Next Level Dijital Sizlere şirketinize yenilik katma fırsatı sunar.
                Markanızı ön plana çıkartmak, yaratıcı reklamlar ile yeni müşterilerinizin dikkatini çekmek artık çok kolay.
                Sadece bizimle iletişime geçin ve markanız için en uygun dijital pazarlama ajansı ile tanışın.
              </p>
            </aside>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
            <aside className="widget contact_widgets">
              <h3 className="widget_title">İLETİŞİM</h3>
              <p>
                Atatürk, Süleyman Kamçı Cd. No:14/A, 27560
                <br />
                Şehitkamil/Gaziantep
              </p>
              <p>Tel: <a href="tel:0850 223 4448">0850 223 4448</a></p>
              <p>
                E mail: <a href="mailto:info@nextleveldijital.com">info@nextleveldijital.com</a>
              </p>
            </aside>
          </div>
          <div className="col-lg-3 col-sm-2 col-md-3">
            <aside className="widget social_widget">
              <h3 className="widget_title">Sosyal Medya</h3>
              <ul>
                <li>
                  <a href="https://twitter.com/nextleveldijital">
                    <i className="fa fa-twitter"></i>Twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/nextleveldijital">
                    <i className="fa fa-facebook-square"></i>Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCNXd43--ZLb4TJrX6FkKkIw">
                    <i className="fa fa-youtube-play"></i>Youtube
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="copyright">
              © copyright {new Date().getFullYear()} by{" "}
              <a href="#">NEXT LEVEL DİJİTAL</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
