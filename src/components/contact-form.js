import React from "react";
import { ContactFormTitle } from "@/data";
import emailjs from "emailjs-com";
const ContactForm = () => {
  const { subTitle, title, description } = ContactFormTitle;
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_8kjnr3o', 'template_uul77ao', e.target, 'user_ijt9nhCteZejMvvrDlvuZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <section className="commonSection ContactPage">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4 className="sub_title">{subTitle}</h4>
            <h2 className="sec_title">{title}</h2>
            <p className="sec_desc">{description}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-sm-12 col-md-10 offset-md-1">
            <form
              action="#"
              method="post"
              onSubmit={sendEmail}
              className="contactFrom"
              id="contactForm"
            >
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form required"
                    type="text"
                    name="f_name"
                    id="f_name"
                    placeholder="Adınız"
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form required"
                    type="text"
                    name="l_name"
                    id="l_name"
                    placeholder="Soyadınız"
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form required"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="E-posta"
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form"
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Telefon"
                  />
                </div>
                <div className="col-lg-12 col-sm-12">
                  <textarea
                    className="input-form required"
                    name="con_message"
                    id="con_message"
                    placeholder="Mesajınızı yazınız"
                  ></textarea>
                </div>
              </div>
              <button
                className="common_btn red_bg"
                type="submit"
                id="con_submit" >
                <span>Mesaj Gönder</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
