import React from "react";
import serviceS1 from "@/images/social1.png";
import serviceS2 from "@/images/social2.png";
const ServiceDetailsContent = () => {
  return (
    <div className="serviceArea">
      <img src={serviceS1} alt="" />
      <h2>Sosyal Medya</h2>
      <p>Sosyal medya uzmanlığı; isim ve marka bilinirliğinin artırılması, satış oranının yükseltilmesi, pazarlama faaliyetlerinin geliştirilmesi amacıyla stratejiler planlanması, uygulanması ve takip edilmesidir. Sosyal medya uzmanı markayı rekabete adapte eder, dinamik bir yapıya kavuşturur.
Her sosyal medya platformunda aktif olarak rol almak zaman ve uğraş gerektirir. Bunu sizin yerinize profesyonel olarak yapacak kişi sosyal medya uzmanıdır. Üstelik her sosyal medyada yer alan hedef kitlenin beklentileri farklıdır. Tüm platformlar için ayrı ayrı paylaşımlar oluşturmak da sosyal medya uzmanının görevidir.
Sosyal medya ile dijital dünyadaki varlığınızı güçlendirmek, sitenize trafik çekmek, takipçilerinizi sâdık müşteriye dönüştürmek istiyorsanız Next Level Dijital'in sosyal medya uzmanları size yardımcı olmaya hazırdır.</p>
      <div className="row gaping">
        <div className="col-lg-6 col-sm-12 col-md-6">
          <img src={serviceS2} alt="" />
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6  ">
          <h3>planlama & strateji</h3>
          <ul className = "col">
            <li className = "col">
              <i className="fa fa-check-square"></i>Hesap Yönetimi
            </li>
            <li className = "col">
              <i className="fa fa-check-square"></i>İçerik Yönetimi
  
            </li>
            <li className = "col" >
              <i className="fa fa-check-square"></i>Reklam Yönetimi
            </li>
            <li className = "col">
              <i className="fa fa-check-square"></i>Grafik Tasarım
            </li>
            <li className = "col">
              <i className="fa fa-check-square"></i>Sosyal Medya Pazarlama
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

export default ServiceDetailsContent;
