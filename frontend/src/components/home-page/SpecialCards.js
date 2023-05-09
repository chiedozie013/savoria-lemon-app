import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOpencart } from "@fortawesome/free-brands-svg-icons";

import classes from "./SpecialCards.module.css";

export default function SpecialCards({ image, title, price, description }) {
  return (
    <article className={classes.card}>
      <div className={classes.cardImageContainer}>
        <div
          className={classes.cardImage}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <div className={classes.cardText}>
        <div className={classes.cardDishDetails}>
          <p>{title}</p>
          <span>${price}</span>
        </div>
        <p>{description}</p>
        <div className={classes.cardOrder}>
          <Link to="/">
            Order a delivery{" "}
            <span>
              {" "}
              <FontAwesomeIcon icon={faOpencart} style={{ color: "black" }} />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
