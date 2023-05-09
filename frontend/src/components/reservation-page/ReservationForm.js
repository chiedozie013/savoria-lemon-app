import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import classes from "./ReservationForm.module.css";

export default function ReservationForm({
  availableTimes,
  occasions,
  updateTimes,
  isLoading,
  submitAPI,
}) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      number: "",
      indoor: "",
      outdoor: "",
      date: "",
      time: "",
      guests: "",
      // test: 0,
      occasion: "",
      policy: "",
    },
    onSubmit: (values) => {
      // console.log(values);
      submitAPI(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("You have to put your firstname"),
      lastName: Yup.string().required("You have to put your lastname"),
      email: Yup.string().required("You have to input a valid email address"),
      number: Yup.string().required("You have to input your phone number"),
      date: Yup.string().required("You have to pick a date"),
      time: Yup.string().required("You have to pick a time"),
      guests: Yup.number()
        .min(1, "Provide a number between 1 and 10")
        .max(10, "Provide a number between 1 and 10")
        .required("You have to provide at least 1 guest"),
      // test: Yup.string().required(),
      occasion: Yup.string().required("You have to pick an occasion"),
    }),
  });

  // Validates email address
  const [setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  function handleEmailChange(event) {
    const inputEmail = event.target.value;
    setEmail(inputEmail);

    // Check if the input value matches the pattern of a valid email address
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailPattern.test(inputEmail));
  }
  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <FormControl>
        <FormLabel
          htmlFor="indoor"
          fontWeight={600}
          fontSize="var(--font-lead-text)"
          className={classes.formRadio}
        >
          Indoor Seating
          <Input
            type="radio"
            id="indoor"
            name="seating"
            value="indoor"
            checked="true"
          />
        </FormLabel>
      </FormControl>
      <FormControl>
        <FormLabel
          htmlFor="outdoor"
          fontWeight={600}
          fontSize="var(--font-lead-text)"
          className={classes.formRadio}
        >
          Outdoor Seating
          <Input type="radio" id="outdoor" name="seating" value="outdoor" />
        </FormLabel>
      </FormControl>
      <FormControl
        isInvalid={formik.touched.firstName && formik.errors.firstName}
      >
        <FormLabel
          htmlFor="firstName"
          fontWeight={600}
          fontSize="var(--font-lead-text)"
        >
          First Name
        </FormLabel>
        <Input
          className={classes.input}
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First name"
          {...formik.getFieldProps("firstName")}
        />
        <FormErrorMessage>
          {formik.errors.firstName && (
            <div className={classes.errorContent}>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              {formik.errors.firstName}
            </div>
          )}
        </FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={formik.touched.lastName && formik.errors.lastName}
      >
        <FormLabel
          htmlFor="lastName"
          fontWeight={600}
          fontSize="var(--font-lead-text)"
        >
          Last Name
        </FormLabel>
        <Input
          className={classes.input}
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last name"
          {...formik.getFieldProps("lastName")}
        />
        <FormErrorMessage>
          {formik.errors.lastName && (
            <div className={classes.errorContent}>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              {formik.errors.lastName}
            </div>
          )}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={formik.touched.email && formik.errors.email}>
        <FormLabel
          htmlFor="email"
          fontWeight={600}
          fontSize="var(--font-lead-text)"
        >
          Email
        </FormLabel>
        <Input
          className={classes.input}
          id="email"
          name="email"
          type="email"
          value={formik.values.email}
          onChange={handleEmailChange}
          placeholder="you@company.com"
          {...formik.getFieldProps("email")}
        />
        {isValidEmail ? null : (
          <FormErrorMessage>
            {formik.errors.email && (
              <div className={classes.errorContent}>
                <FontAwesomeIcon icon={faExclamationTriangle} />
                {formik.errors.email}
              </div>
            )}
          </FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={formik.touched.number && formik.errors.number}>
        <FormLabel
          htmlFor="number"
          fontWeight={600}
          fontSize="var(--font-lead-text)"
        >
          Phone Number
        </FormLabel>
        <Input
          className={classes.input}
          id="number"
          name="number"
          type="tel"
          pattern="\+[0-9]{1,3}\s[0-9]{8,10}"
          placeholder="+012 3456789"
          {...formik.getFieldProps("number")}
        />
        <FormErrorMessage>
          {formik.errors.number && (
            <div className={classes.errorContent}>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              {formik.errors.number}
            </div>
          )}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.touched.date && formik.errors.date}>
        <FormLabel
          htmlFor="date"
          fontWeight={600}
          fontSize="var(--font-lead-text)"
        >
          Choose date
        </FormLabel>
        <Input
          className={classes.input}
          id="date"
          name="date"
          type="date"
          // {...formik.getFieldProps("date")}
          value={formik.values.date}
          onBlur={formik.handleBlur}
          onChange={(e) => {
            updateTimes(e);
            formik.handleChange(e);
          }}
        />
        <FormErrorMessage>
          {formik.errors.date && (
            <div className={classes.errorContent}>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              {formik.errors.date}
            </div>
          )}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={formik.touched.time && formik.errors.time}>
        <FormLabel
          htmlFor="time"
          fontWeight={600}
          fontSize="var(--font-lead-text)"
        >
          Choose time
        </FormLabel>
        <Select
          className={classes.input}
          id="time"
          name="time"
          placeholder="Select an appropriate time"
          {...formik.getFieldProps("time")}
        >
          {availableTimes.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </Select>
        <FormErrorMessage>
          {formik.errors.time && (
            <div className={classes.errorContent}>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              {formik.errors.time}
            </div>
          )}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.touched.guests && formik.errors.guests}>
        <FormLabel
          htmlFor="guests"
          fontWeight={600}
          fontSize="var(--font-lead-text)"
        >
          Number of guests
        </FormLabel>
        <input
          // className={classes.input}
          id="guests"
          name="guests"
          type="number"
          placeholder="A number between 1 and 10"
          min="1"
          max="10"
          step={1}
          className={`${classes.formNumberInput} ${
            formik.touched.guests && formik.errors.guests && classes.error
          }`}
          {...formik.getFieldProps("guests")}
        />
        <FormErrorMessage>
          {formik.errors.guests && (
            <div className={classes.errorContent}>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              {formik.errors.guests}
            </div>
          )}
        </FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={formik.touched.occasion && formik.errors.occasion}
      >
        <FormLabel
          htmlFor="occasion"
          fontWeight={600}
          fontSize="var(--font-lead-text)"
        >
          Occasion
        </FormLabel>
        <Select
          className={classes.input}
          id="occasion"
          name="occasion"
          placeholder="Select an occasion"
          {...formik.getFieldProps("occasion")}
        >
          {occasions.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </Select>
        <FormErrorMessage>
          {formik.errors.occasion && (
            <div className={classes.errorContent}>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              {formik.errors.occasion}
            </div>
          )}
        </FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel
          htmlFor="comment"
          fontWeight={600}
          fontSize="var(--font-lead-text)"
        >
          Special Requests
          <textarea
            type="textarea"
            id="comment"
            name="comment"
            rows="8"
            placeholder="Comments"
            className={classes.input}
          />
        </FormLabel>
      </FormControl>
      <div style={{ marginTop: "1.5rem" }}>
        <button
          className={classes.submitButton}
          fullWidth={true}
          disabled={isLoading}
          isSubmit={true}
        >
          {isLoading ? (
            <span style={{ display: "inline-flex", gap: "1rem" }}>
              Loading
              <FontAwesomeIcon icon={faSpinner} spin />
            </span>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  );
}
