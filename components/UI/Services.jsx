import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import heroImg from "../../public/images/hero.svg";
import Image from "next/image";

const Services = () => {
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
              <SectionSubtitle subtitle="What I do" />
              <h3 className="mb-0 mt-4">We prioritize making your </h3>
              <h3 className="mb-4">brand MONTER the</h3>
              <p>
                Our growth oriented team employs innovative strategies based on
                a diligent research of existing as well as up and coming trends.
                We believe in diving into what’s working in the current digital
                climate. The greater your revenues, the greater our
                satisfaction.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Services;
