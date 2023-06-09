import { Link } from "react-router-dom";
import HeroImage from "../../images/cta-hero-image.jpg";
import classes from "./HeroSection.module.css";

export default function HeroSection() {
  // const handleClick = (event) => {
  //   event.preventDefault();
  //   window.location.href = "/Reservation-Page";
  // };
  // href="/Reservation-Page" onClick={handleClick}

  return (
    <section className={classes.heroSection}>
      <div className={`fluidContainer ${classes.heroContainer}`}>
        <div className={classes.heroText}>
          <div className={classes.title}>Savorian Lemon</div>
          <div className={classes.subtitle}>Chicago</div>
          <div className={classes.text}>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </div>
          <div className={classes.action}>
            <button>
              <Link to="/Reservation-Page">Reserve a table</Link>
            </button>
          </div>
        </div>
        <div className={classes.heroImage}>
          <div className={classes.imageContainer}>
            <img src={HeroImage} alt="Bruschettas Dessert" />
          </div>
        </div>
      </div>
    </section>
  );
}
