import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import heroImg from "../../public/images/hero.svg";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Monter Digital" />
              <h2 className="mt-3 mb-3">We optimize </h2>
              <h5 className="mb-4" style={{ fontSize: "2.2rem" }}>
                your growth potential
              </h5>
              <p>
                Monter /mon.te/<br></br> 1.to rise up
                <br />
                2.to climb up
              </p>
              <div className="mt-5">
                {/* <button className="primary__btn">
                  <Link href="#">Hire me</Link>
                </button> */}
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="400" height="300" />

              <div className={`${classes.hero__skills}`}>
                <h6></h6>
              </div>

              <div
                className={`${classes.hero__experience} d-flex align-items-center gap-3`}
              >
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6></h6>
                  <h5 className="mb-0"></h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
