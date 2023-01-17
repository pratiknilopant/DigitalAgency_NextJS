import { Fragment } from "react";
import Hero from "../components/UI/Hero";
import Services from "../components/UI/Services";
import About from "../components/UI/About";
// import Portfolio from "../components/UI/Portfolio";
// import Testimonial from "../components/UI/Testimonial";
import Contact from "../components/UI/Contact";
import DigiService from "../components/UI/DigiService";
// import ContactBar from "../components/contactBar";
import Quirk from "../components/UI/Quirk";
import Navigation from "../components/UI/Navigation";
import Breaking from "../components/UI/breaking";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Services />
      <About />
      <Quirk />
      <Navigation />
      <Breaking />
      <DigiService />
      <Contact />
    </Fragment>
  );
}
