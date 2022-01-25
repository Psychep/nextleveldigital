import React, { Fragment } from "react";
import CommentCard from "@/components/comment-card";
import { BlogComments } from "@/data";

const Comments = () => {
  return (
    <Fragment>
      <div className="comment_area">
        <h3>{BlogComments.length} Yorumlar</h3>
        <ol>
          {BlogComments.map((post, index) => (
            <li key={index}>
              <CommentCard data={post} />
            </li>
          ))}
        </ol>
      </div>
      <div className="commentForm">
        <h3>Geri</h3>
        <form action="/contact" method="post">
          <div className="row">
            <div className="col-lg-6">
              <input
                required=""
                className="input-form"
                type="text"
                name="name"
                placeholder="Adınız"
              />
            </div>
            <div className="col-lg-6">
              <input
                required=""
                className="input-form"
                type="email"
                name="email"
                placeholder="E-posta"
              />
            </div>
            <div className="col-lg-12">
              <textarea
                required=""
                className="input-form"
                name="comment"
                placeholder="Mesajınızı yazınız"
              ></textarea>
            </div>
          </div>
          <a className="common_btn red_bg" href="#">
            <span>Mesaj Gönder</span>
          </a>
        </form>
      </div>
    </Fragment>
  );
};

export default Comments;
