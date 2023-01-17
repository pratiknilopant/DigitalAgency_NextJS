import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import heroImg from "../../public/images/hero.svg";


import classes from "../../styles/navigation.module.css";

const Navigation = () => {
  return (
    <section id="about">
        <div className={`${classes.bgcolor}`}>
      <Container>
        <Row>
          <Col lg="6" className={`${classes.about__content}`}>
            {/* <SectionSubtitle subtitle="About me" /> */}
            <h3 className="mt-4">We’ll be the navigators of </h3>
            <h3 className="mb-4">your digital journey</h3>
            <p>
            We will guide your brand at every twist and turn. Just like a GPS, our Brand Positioning System (BPS) maps out the most efficient route to reach the best results. We put together a compelling brand story that hooks the audience and sticks with them, creating your own original space in the market. Our creative squad presents a unique narrative that moves the consumer in a way that converts their engagement into sales.
            </p>
          </Col>

          <Col lg="6">
            <div
              className={`${classes.about__img__gallery} d-flex gap-4 justify-content-end`}
            >
              <Image
                  alt="hero-image"
                  src={heroImg}
                  width="400"
                  height="300"
                />
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    </section>
  );
};

export default Navigation;
