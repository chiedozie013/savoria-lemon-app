import { Fragment, useEffect } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import HeroSection from "./HeroSection";
import Specials from "./Specials";
import Testimonies from "./Testimonies";
import AboutUs from "./AboutUs";
import SmoothScroll from "../SmoothScroll";
import ToTopButton from "../../ui/ToTopButton";
import Alert from "../../ui/Alert";

export default function HomePage() {
  useEffect(() => {
    document.title = "Home Page | Savorian Lemon";
  }, []);
  return (
    <SmoothScroll>
      <Fragment>
        <Header />
        <HeroSection />
        <Specials />
        <Testimonies />
        <AboutUs />
        <ToTopButton />
        <Alert />
        <Footer />
      </Fragment>
    </SmoothScroll>
  );
}
