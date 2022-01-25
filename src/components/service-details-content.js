import React from "react";
import serviceS1 from "@/images/desing1.png";
import serviceS2 from "@/images/desing2.png";
const ServiceDetailsContent = () => {
  return (
    <div className="serviceArea">
      <img src={serviceS1} alt="" />
      <h2>Grafik Tasarım</h2>
      <p> Grafik tasarım bir mesajı iletmek, bir görseli geliştirmek veya bir düşünceyi görselleştirmek için metnin ve görsellerin algılanabilir ve görülebilir bir düzlemde,  iki boyutlu veya üç boyutlu olarak organize edilmesini içeren yaratıcı bir süreçtir. Bütün tasarım işlerinizde yaratıcı ve yenilikçi bakış açısıyla yaklaşıyor, uygulama sürecinde de hızlı ve yaratıcı destek sunuyoruz.
 Görsel açıdan güçlü bir marka, hedef kitle ile bağlantı kurulmasında yardımcı olur ve kurumunuzun kişiliğini sergiler. Bu nedenle zayıf, modası geçmiş görseller markanızın imajı üzerinde olumsuz etkiler bırakır.Söz uçar grafik kalır !
Çoğu zaman isimler unutulur, yaratıcı şekilde hazırlanmış logo tasarımı, kurumsal kimlik çalışmaları ve görsel tasarımlar sayesinde hatırlanmanız ve akıllarda kalıcı olmanız kolaylaşır. Logonun ve görsellerinizin, işinizi anlatan birer materyal olarak hafızalara kazınması, kurduğunuz veya kuracağınız işin gelişimi ve büyümesi açısından büyük etkiler yaratır
      </p>
      <div className="row gaping">
        <div className="col-lg-6 col-sm-12 col-md-6">
          <img src={serviceS2} alt="" />
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6">
          <h3>planlama & strateji</h3>
          <ul>
            <li>
              <i className="fa fa-check-square"></i>Markanız için Hedefleri tanımlama
            </li>
            <li>
              <i className="fa fa-check-square"></i>Pazar ve rakip analizi  
            </li>
            <li>
              <i className="fa fa-check-square"></i>Markanızın gücünü ortaya çıkaracak özgün tasarımlar.
            </li>
            <li>
              <i className="fa fa-check-square"></i>Hedef kitleyi tanıma 
            </li>
            <li>
              <i className="fa fa-check-square"></i>Markanızı yeni müşteriler ile tanıştırmanızda yardımcı olacak içerikler
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
