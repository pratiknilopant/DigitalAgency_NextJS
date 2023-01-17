import React from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "../../styles/breaking.module.css";
import heroImg from "../../public/images/hero.svg";
import Image from "next/image";

const Breaking = () => {
  return (
    <section id="services">
      <div className={`${classes.bgcolor}`}>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className={`${classes.services__container}`}>
                <div>
                  <Image
                    alt="hero-image"
                    src={heroImg}
                    width="400"
                    height="300"
                  />
                  {/* <ServicesItem title="App Development" icon="ri-apps-line" />

                <ServicesItem title="Web Development" icon="ri-computer-line" /> */}
                </div>

                {/* <ServicesItem
                title="Full-Stack Development"
                icon="ri-code-s-slash-line"
              /> */}
              </div>
            </Col>

            <Col lg="6" md="6" className={`${classes.service__title}`}>
              {/* <SectionSubtitle subtitle="What I do" /> */}
              <h3 className="mb-0 mt-4">You can bank on us without</h3>
              <h3 className="mb-4">breaking the bank</h3>
              <p style={{ color: "black" }}>
                Let’s be honest, we all have heard of marketers deserting their
                clients and not providing an up to the mark service. With us,
                you can forget about your worries. We deliver your work on time
                and pay full attention to your needs. That’s a monter promise.
                To top this all off, we cater to you with an industry leading
                competence at 20% lower charges than our competitors.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Breaking;
