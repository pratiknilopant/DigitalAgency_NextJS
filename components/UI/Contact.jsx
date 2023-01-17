import React from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "../../styles/contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <h1 className={`${classes.demo}`}>What’s left to think about?</h1>
          <button className={`${classes.demobtn}`}>Grow your brand</button>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
