import React from "react";
import serviceS1 from "@/images/video1.png";
import serviceS2 from "@/images/video2.png";
const eCommerceDetailsContent = () => {
  return (
    <div className="serviceArea">
      <img src={serviceS1} alt="" />
      <h2>Fotoğraf Video Animasyon</h2>
      <p>Teknolojinin ve rekabetin arttığı günümüz şartlarında, tüm şirketlerimizin ve markalarımızın tanıtım filmleri ihtiyacı olmazsa olmazlarımız arasına girmiştir. Şirketin üretim gücünün ve ürünlerin bilinirliğini arttırmak amacıyla yapılması gereken tanıtım videoları, müşteriler ve bayiler için büyük önem taşımaktadır.
Prodüksiyon şirketlerince hazırlanan kurumsal tanıtım filmi metinleri doğrultusunda hazırlanan videolar en etkili sunumlar olarak karşımıza çıkmaktadır.
Kurumsal tanıtım filmleri, dijital ortamda müşterilere açılan kapıdır. Binlerce Sayfalık metinlerle anlatamadığımız hikayemizi, 3-4 dakikalık videolar ile en etkili şekilde anlatılabildiği, istatistik bilgiler ile sabittir.
Yapılacak en stratejik planlama; Profesyonel bir partnerdir.
Next Level Dijital, şirketinizi, markanızı veya ürünleriniz için, Tanıtım Filminizin oluşturulması ve tüm prodüksiyon ihtiyaçlarınızda; doğru bilgiler vererek, stratejilerinizi mantık çerçevesinde yorumlar ve sizi kitlenize hızlı ulaştırır…</p>
      <div className="row gaping">
        <div className="col-lg-6 col-sm-12 col-md-6">
          <img src={serviceS2} alt="" />
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6">
          <h3>planlama & strateji</h3>
          <ul>
            <li className = "col">
              <i className="fa fa-check-square"></i>Reklam Videosu
            </li>
            <li className = "col">
              <i className="fa fa-check-square"></i>Drone Çekimi
            </li>
            <li className = "col">
              <i className="fa fa-check-square"></i>Animasyon Video  
            </li>
            <li className = "col">
              <i className="fa fa-check-square"></i>Kurumsal Tanıtım Filmi
            </li>
            <li className = "col">
              <i className="fa fa-check-square"></i>Sosyal Medya Videoları 
            </li>
            <li className = "col">
              <i className="fa fa-check-square"></i>Ürün ve Hizmet Fotoğrafları
            </li>
            <li className = "col">
              <i className="fa fa-check-square"></i>Etkinlik Videoları
            </li>
            
          </ul>
        </div>
      </div>
      <p>
      </p>
      <p>
      Next Level Dijital Sizlere şirketinize yenilik katma fırsatı sunar. Markanızı ön plana çıkartmak, yaratıcı reklamlar ile yeni müşterilerinizin dikkatini çekmek artık çok kolay. Sadece bizimle iletişime geçin ve markanız için en uygun dijital pazarlama ajansı ile tanışın.
      </p>
    </div>
  );
};

export default eCommerceDetailsContent;
