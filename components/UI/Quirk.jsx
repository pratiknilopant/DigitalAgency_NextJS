import React from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "../../styles/quirl.module.css";
import heroImg from "../../public/images/hero.svg";
import Image from "next/image";

const Quirk = () => {
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
              </div>
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <h3 className="mb-0 mt-4" >QuirkE-Marketing </h3>
            <h3 className="mb-4"></h3>
            <p>
            Our experimental approach to the market combines: following what is working and doing exactly that in a different way. We emphasize on creating quirky content that makes you stand out from the crowd. Our team firmly believes in committing to an unconventional course of action that facilitates your unique brand presence and an impact that stands the test of time.
            </p>
          </Col>
        </Row>
      </Container>
      </div>
    </section>
  );
};

export default Quirk;
