import { Fragment } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import BookingReservation from "./BookingReservation";

import SmoothScroll from "../SmoothScroll";
import ToTopButton from "../../ui/ToTopButton";
import Alert from "../../ui/Alert";

export default function ReservationPage() {
  return (
    <SmoothScroll>
      <Fragment>
        <Header />
        <BookingReservation />
        <Footer />
        <ToTopButton />
        <Alert />
      </Fragment>
    </SmoothScroll>
  );
}
