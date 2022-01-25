import React, { Fragment } from "react";

const ServiceSidebar = () => {
  return (
    <Fragment>
      <aside className="widget categories">
        <h3 className="widget_title">Hizmetlerimiz</h3>
        <div className="meipaly_categorie_widget">
          <ul>
            <li>
              <a href="/webdesing">Web Yazılımı</a>
            </li>
            <li>
              <a href="/graphic-design">Grafik Tasarım</a>
            </li>
            <li>
              <a href="/social-media">Sosyal Medya Yönetimi</a>
            </li>
            <li>
              <a href="/film-details">Tanıtım Filmi</a>
            </li>
            <li>
              <a href="/e-commerce">E-ticaret</a>
            </li>
          </ul>
        </div>
      </aside>
      <aside className="widget categories">
        <div className="meipaly_services_help">
          <h4>Next Level Dijital</h4>
          <p>
            Markanız için en iyi olanı öğrenmek ister misiniz? Bizimle iletişime geçin.
          </p>
          <h2>0850 223 4448</h2>
        </div>
      </aside>
    </Fragment>
  );
};

export default ServiceSidebar;
