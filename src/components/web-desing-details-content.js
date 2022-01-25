import React from "react";
import serviceS1 from "@/images/s1.png";
import serviceS2 from "@/images/s2.png";
const ServiceDetailsContent = () => {
  return (
    <div className="serviceArea">
      <img src={serviceS1} alt="" />
      <h2>Web Tasarım</h2>
      <p>
        {" "}
        Günümüzde değişen dinamikler doğrultusunda, bir web sitesinin "iyi"
        olarak nitelendirilebilmesi için kusursuz bir kullanıcı deneyimi sunması
        gerekiyor. Bir web sitesi tasarlamaya önce hedef kitlenizin kullanıcı
        deneyimlerini çözümleyerek yola çıkıyoruz. İhtiyaçlarınıza etkin şekilde
        yanıt veren bir web sitesi oluşturmak için beraber "omuz omuza"
        çalışmanın gücüne inanıyoruz. Projenizin detaylarını görüşmek üzere sizi
        en kısa zamanda Gaziantep'deki web tasarım ajansımıza bekliyoruz.
      </p>
      <div className="row gaping">
        <div className="col-lg-6 col-sm-12 col-md-6">
          <img src={serviceS2} alt="" />
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6">
          <h3>Hız & Bulunulabilirlik</h3>
          <ul>
            <li className="col">
              <i className="fa fa-check-square"></i>Markanızın gücünü ortaya
              çıkaracak özgün tasarım.
            </li>
            <li className="col">
              <i className="fa fa-check-square"></i>Seo uyumlu ve hızlı web
              siteleri
            </li>
            <li className="col">
              <i className="fa fa-check-square"></i>Markanız için dijital
              portfolyo
            </li>
          </ul>
        </div>
      </div>
      <p></p>
      <p>
        Next Level Dijital Sizlere şirketinize yenilik katma fırsatı sunar.
        Markanızı ön plana çıkartmak, yaratıcı reklamlar ile yeni
        müşterilerinizin dikkatini çekmek artık çok kolay. Sadece bizimle
        iletişime geçin ve markanız için en uygun dijital pazarlama ajansı ile
        tanışın.
      </p>
    </div>
  );
};

export default ServiceDetailsContent;
