import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SubscribeFormData } from "@/data";

const SubscribeForm = () => {
  const { sectionContent } = SubscribeFormData;
  return (
    <section className="commonSection subscribe">
      <Container>
        <Row>
          <Col lg={4}>
          </Col>
          <Col lg={8}>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SubscribeForm;
