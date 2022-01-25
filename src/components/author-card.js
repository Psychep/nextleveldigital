import React from "react";
import authorImage from "@/images/blog/8.jpg";

const AuthorCard = () => {
  return (
    <div className="post_author">
      <img src={authorImage} alt="" />
      <h3>
        <a href="/contact">İbrahim DEMİRTÜRK</a>
      </h3>
      <p>Nextlevel dijital ajans işini severek yapan, yaptığı işin hakkını veren yenilikçi salt düşünen ve ilham kaynağı olan iki genç girişimci tarafından 2021 yılında oluşturuldu.</p>
      <a href="#">Tüm Gönderileri Gör</a>
    </div>
  );
};

export default AuthorCard;
