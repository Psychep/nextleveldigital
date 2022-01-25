import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TeamOneData } from "@/data";
import { Swiper, SwiperSlide } from "swiper/react";
import TeamCard from "@/components/team-card";
import "swiper/swiper-bundle.min.css";

import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

const TeamCarousel = () => {
  const { sectionContent, posts } = TeamOneData;
  const carouselOptions = {
    spaceBetween: 0,
    loop: false,
    slidesPerView: 1,

    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      576: {
        spaceBetween: 30,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 6,
        slidesPerGroup: 6,
      },
    },
  };

  return (
    <section className="commonSection team">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <Fragment>Bizimle tanışın</Fragment>
          </Col>
        </Row>
      </Container>
      <Swiper className="team_slider" {...carouselOptions}>
        {posts.map((post, index) => (
          <SwiperSlide key={index}>
            <TeamCard data={post} />
          </SwiperSlide>
        ))}
        {posts.map((post, index) => (
          <SwiperSlide key={index}>
            <TeamCard data={post} />
          </SwiperSlide>
        ))}
        {posts.map((post, index) => (
          <SwiperSlide key={index}>
            <TeamCard data={post} />
          </SwiperSlide>
        ))}
        {posts.map((post, index) => (
          <SwiperSlide key={index}>
            <TeamCard data={post} />
          </SwiperSlide>
        ))}{" "}
        {posts.map((post, index) => (
          <SwiperSlide key={index}>
            <TeamCard data={post} />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination" id="team-carousel-pagination"></div>
      </Swiper>
    </section>
  );
};

export default TeamCarousel;
