import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

import classes from "./MenuCards.module.css";

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

export default function MenuCards({
  image,
  title,
  price,
  rating,
  description,
}) {
  return (
    <article className={classes.cardMenu}>
      <div className={classes.menuCardImageContainer}>
        <div
          className={classes.menuCardImage}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <div className={classes.menuCardText}>
        <div className={classes.menuCardDetails}>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className={classes.star}>
            <Rating ratingValue={rating} />
            <span>{rating}</span>
          </div>
        </div>
        <div className={classes.menuDishPrice}>
          <p>${price}</p>
        </div>
      </div>
    </article>
  );
}
