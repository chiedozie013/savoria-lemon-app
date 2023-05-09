import { Fragment, useEffect } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import SmoothScroll from "../SmoothScroll";
import ToTopButton from "../../ui/ToTopButton";
import Alert from "../../ui/Alert";
import Menu from "./Menu";

export default function MenuPage() {
  useEffect(() => {
    document.title = "Menu Page | Savorian Lemon";
  }, []);
  return (
    <SmoothScroll>
      <Fragment>
        <Header />
        <Menu />
        <Footer />
        <ToTopButton />
        <Alert />
      </Fragment>
    </SmoothScroll>
  );
}
