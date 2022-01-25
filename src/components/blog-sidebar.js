import React, { Fragment } from "react";
import { BlogSidebarPost } from "@/data";
const BlogSidebar = () => {
  return (
    <Fragment>
      <aside className="widget search-widget">
        <form method="post" action="#" className="searchform">
          <input type="search" placeholder="Search here..." name="s" id="s" />
        </form>
      </aside>
      <aside className="widget recent_posts">
        <h3 className="widget_title"></h3>
        <div className="meipaly_post_widget">
          {BlogSidebarPost.map(({ title, image, url }, index) => (
            <div className="mpw_item" key={index}>
              <img src={image} alt="" />
              <a href={url}>{title}</a>
            </div>
          ))}
        </div>
      </aside>
      <aside className="widget categories">
        <h3 className="widget_title">Kategoriler</h3>
        <div className="meipaly_categorie_widget">
          <ul>
            <li>
              <a href="#">Faaliyet</a>
            </li>
            <li>
              <a href="#">Tanıtımlar</a>
            </li>
            <li>
              <a href="#">Yeni Teknolojiler</a>
            </li>
            <li>
              <a href="#">Tanıtım filmleri</a>
            </li>
          </ul>
        </div>
      </aside>
      <aside className="widget">
        <h3 className="widget_title">Tags:</h3>
        <div className="meipaly_tagcloude_widget">
          <a href="#">projeler,</a> <a href="#">ajans,</a>{" "}
          <a href="#">dijital,</a> <a href="#">e-ticaret,</a>
          <a href="#">gaziantep,</a> <a href="#">yenilikci,</a>{" "}
          <a href="#">profesyonel,</a>
          <a href="#">deneyim,</a>
        </div>
      </aside>
    </Fragment>
  );
};

export default BlogSidebar;
