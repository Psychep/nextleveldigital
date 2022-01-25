import React from "react";
import serviceS1 from "@/images/ecommerce1.png";
import serviceS2 from "@/images/ecommerce2.png";
const eCommerceDetailsContent = () => {
  return (
    <div className="serviceArea">
      <img src={serviceS1} alt="" />
      <h2>E-TİCARET</h2>
      <p>
        Next Level Şimdi <a href="https://www.ideasoft.com.tr/" target="_blank"><strong>İdeaSoft</strong></a> işbirliği ile daha güçlü! E-ticaret ihtiyaçlarınız için <a href="https://www.ideasoft.com.tr/" target="_blank"><strong>İdeaSoft</strong></a> ile işbirliği yapıyoruz ve size en iyi hizmeti sunmayı hedefliyoruz. <br /> <br />
        E-Ticaret sitesi paket tasarımı ve yazılımı ile markanıza özgü bir çalışma gerçekleştirmekteyiz. Müşterilerinizin, hızlı bir şekilde alışveriş yapabildikleri tüm cihazlara uygun bir tasarıma sahip ve en önemlisi kategorize edilmiş altyapısıyla e-ticaret sitesinize sahip olabilir dijitalde de satış yapmaya başlayabilirsiniz.
        XML yapılarının ve sanal posların ayarlandığı,  kullanımı çok kolay yönetim paneline sahip olacağınız e-ticaret sitesi paketleri sunan dijital reklam ajansı Next Level, en kısa sürede kazanmanıza olanak sağlayan e-ticaret sitelerinin alt yapılarını ve tasarımlarını oluşturur. Bugün e-ticaret sitenizi oluşturarak Next Level Dijital ile kazanmaya başlayın.
      </p>
      <div className="row gaping">
        <div className="col-lg-6 col-sm-12 col-md-6">
          <img src={serviceS2} alt="" />
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6">
          <h3>planlama & strateji</h3>
          <ul>
            <li className="col">
              <i className="fa fa-check-square"></i>Strateji Danışmanlığı
            </li>
            <li className="col">
              <i className="fa fa-check-square"></i>Pazar ve rakip analizi
            </li>
            <li className="col">
              <i className="fa fa-check-square"></i>Yazılım Danışmanlığı.
            </li>
            <li className="col">
              <i className="fa fa-check-square"></i>Marka ve Pazarlama
            </li>
            <li className="col">
              <i className="fa fa-check-square"></i>Dijital Reklam
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
