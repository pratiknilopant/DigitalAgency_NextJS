import React from "react";

import { Container, Row, Col } from "reactstrap";
import classes from "./footer.module.css";
import Link from "next/link";

// const NAV__LINK = [
//   {
//     path: "/",
//     display: "Home",
//   },
//   {
//     path: "#about",
//     display: "About",
//   },
//   {
//     path: "#services",
//     display: "Services",
//   },
//   {
//     path: "#portfolio",
//     display: "Portfolio",
//   },
//   {
//     path: "#contact",
//     display: "Contact",
//   },
// ];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          {/* ========= footer top =========== */}
          <Col lg="6" className={`${classes.footer__top}`}>
            {/* <div className={`${classes.nav__menu}`}>
              {NAV__LINK.map((item, index) => (
                <Link href={item.path} key={index}>
                  {item.display}
                </Link>
              ))}
            </div> */}
            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>abcd@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+91 2233445555</p>
              </li>
            </ul>
          </Col>

          <Col lg="6" className={`${classes.footer__top}`}>
            <div className={`${classes.social__links}`}>
              <Link href="#">
                <i className="ri-youtube-line"></i>
              </Link>
              <Link href="#">
                <i className="ri-github-line"></i>
              </Link>
              <Link href="#">
                <i className="ri-facebook-line"></i>
              </Link>
              <Link href="#">
                <i className="ri-linkedin-line"></i>
              </Link>
              <Link href="#">
                <i className="ri-instagram-line"></i>
              </Link>
            </div>
          </Col>

          {/* ========= footer bottom ========= */}
          <Col lg="12">
            <div className={`${classes.footer__copyright}`}>
              <p>
                &copy; Copyright {year} - Monter Digital. All right reserved.{" "}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
