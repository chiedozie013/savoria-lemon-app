import React from "react";
import classes from "./TestimonyCard.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

function Rating({ ratingValue }) {
  const fullStars = Math.floor(ratingValue);
  const hasHalfStar = ratingValue % 1 !== 0;

  const starIcons = [];
  for (let i = 0; i < fullStars; i++) {
    starIcons.push(<FontAwesomeIcon icon={faStar} color="gold" />);
  }

  if (hasHalfStar) {
    starIcons.push(<FontAwesomeIcon icon={faStarHalfAlt} color="gold" />);
  }

  while (starIcons.length < 5) {
    starIcons.push(<FontAwesomeIcon icon={farStar} color="gold" />);
  }

  return <div>{starIcons}</div>;
}

export default function TestimonyCard({ image, name, rating, review }) {
  return (
    <article className={classes.testimonyCard}>
      <div className={classes.userImageContainer}>
        <img className={classes.userImage} src={image} alt="User" />
      </div>
      <div className={classes.star}>
        <Rating ratingValue={rating} />
        <span>{rating}</span>
      </div>
      <figure className={classes.userReview}>
        <blockquote>{review}</blockquote>
        <figcaption>&mdash; {name}</figcaption>
      </figure>
    </article>
  );
}
