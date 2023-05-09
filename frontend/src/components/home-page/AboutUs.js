import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Mario from "../../images/Mario.jpg";
import Adrian from "../../images/Adrian.jpg";

import classes from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <section className={classes.aboutUsSection}>
      <div className={`fluidContainer ${classes.aboutUsContainer}`}>
        <h2 className="sectionTitle">Our STORY...</h2>
        <div className={classes.story}>
          <div className={classes.storyContent}>
            <div className={classes.storyTitle}>Savorian Lemon</div>
            <div className={classes.storySubTitle}>Chicago</div>
            <div className={classes.storyText}>
              <p>
                In 2009, two talented chefs decided to join forces and open a
                restaurant in the bustling city of Chicago. They named their
                establishment "Savorian Lemon" in honor of their shared love for
                using fresh, citrus flavors in their dishes.
              </p>
              <p>
                The chefs, Mario and Adrian, had both trained at some of the
                most prestigious culinary schools in the country and had worked
                in top restaurants across the US. They wanted to create a unique
                dining experience that would showcase their skills and
                creativity while also reflecting their passion for using locally
                sourced ingredients.
              </p>
              <p>
                Over the years, Savorian Lemon has continued to thrive and
                attract food lovers from across the city and beyond. Mario and
                Adrian have expanded their menu and added new dishes to keep
                things fresh, but they remain committed to their original vision
                of using the freshest ingredients and the most creative cooking
                techniques to create a dining experience that is truly
                unforgettable.
              </p>
            </div>
          </div>
          <div className={classes.foundersImage}>
            <div className={classes.leftImageContainer}>
              <div>
                Adrian
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </div>
              <div>
                <img src={Mario} alt="Chef Mario" />
              </div>
            </div>
            <div className={classes.rightImageContainer}>
              <div>
                <img src={Adrian} alt="Chef Adrian" />
              </div>
              <div>
                <span>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </span>
                Mario
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
