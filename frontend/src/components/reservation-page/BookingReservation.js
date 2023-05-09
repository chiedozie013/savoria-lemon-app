import { Fragment, useEffect, useState, useReducer } from "react";

import { fetchAPI } from "../../api/api";
import useSubmit from "../../hooks/useSubmit";
import { useAlertContext } from "../context/alert-context";
import ReservationForm from "./ReservationForm";
import ConfirmedBooking from "./ConfirmedBooking";
import classes from "./BookingReservation.module.css";

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "update-times":
      return fetchAPI(new Date(action.payload));
    case "reset-times":
      return fetchAPI(new Date());
    default:
      return state;
  }
};

export const initializeTimes = () => fetchAPI(new Date());

export default function BookingReservation() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [occasions] = useState([
    "Birthday",
    "Anniversary",
    "Engagement",
    "Friends-Hangout",
    "Others",
  ]);
  const [isFormDisplayed, setIsFormDisplayed] = useState(true);
  const { isLoading, response, submitAPI } = useSubmit();
  const { onOpen } = useAlertContext();

  useEffect(() => {
    document.title = "Table Reservation | Savorian Lemon";
  }, []);

  useEffect(() => {
    if (response) {
      if (response.type === "success") {
        dispatch({ type: "reset-times" });
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setIsFormDisplayed(false);
      }
      onOpen(response.type, response.message);
    } // eslint-disable-next-line
  }, [response]);

  const updateTimesHandler = (e) => {
    dispatch({ type: "update-times", payload: e.target.value });
  };

  return (
    <Fragment>
      <section className={classes.reservationFormSection}>
        <div className={`fluidContainer ${classes.reservationPageContainer}`}>
          <div className={classes.textSection}>
            <div className={classes.title}>Savorian Lemon</div>
            <div className={classes.subtitle}>Chicago</div>
          </div>
          <div className={classes.subContainer}>
            <div className={classes.reservationContainer}>
              <h3 className="sectionTitle">Make your reservations here...</h3>
              {isFormDisplayed ? (
                <ReservationForm
                  availableTimes={availableTimes}
                  occasions={occasions}
                  updateTimes={updateTimesHandler}
                  isLoading={isLoading}
                  submitAPI={submitAPI}
                />
              ) : (
                <ConfirmedBooking makeNewReservation={setIsFormDisplayed} />
              )}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
