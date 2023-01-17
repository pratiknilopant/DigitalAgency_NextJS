import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import heroImg from "../../public/images/hero.svg";

import classes from "../../styles/about.module.css";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" className={`${classes.about__content}`}>
            {/* <SectionSubtitle subtitle="About me" /> */}
            <h3 className="mt-4">We make the perfect fit for you</h3>
            <h3 className="mb-4"></h3>
            <p>
              Putting your specific needs at the forefront, we sink ourselves
              into understanding what is essential for your brand. Our creative
              squad gets to work designing the optimal framework for you by
              putting together cherry picked ideas. We tailor the shoe for you.
            </p>
          </Col>

          <Col lg="6">
            <div
              className={`${classes.about__img__gallery} d-flex gap-4 justify-content-end`}
            >
              <Image alt="hero-image" src={heroImg} width="400" height="300" />
              {/* <div className=" d-flex flex-column mb-3">
                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img01} alt="about-img" />
                </div>

                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img02} alt="about-img" />
                </div>
              </div>

              <div className=" d-flex flex-column mb-3">
                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img03} alt="about-img" />
                </div>

                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img04} alt="about-img" />
                </div>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
