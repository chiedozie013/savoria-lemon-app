import footerLogo from "../../images/logo-vertical-white.png";
import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={`fluidContainer ${classes.footerContainer}`}>
        <div className={classes.footerLogo}>
          <img src={footerLogo} alt="Footer-Logo" />
        </div>
        <div className={classes.footerContact}>
          <h3 className={classes.cont}>CONTACT</h3>
          <menu>
            <li>
              <p className={classes.cont}>No 35 Jamaica steet, New York, USA</p>
            </li>
            <li>
              <p className={classes.cont}>123-456-7890</p>
              <a className={classes.anchor} href="tel:123-456-7890">
                Give us a call
              </a>
            </li>
            <li>
              <p className={classes.cont}>info@little-lemon.com</p>
              <a className={classes.anchor} href="malito:info@little-lemon.com">
                Write us a mail
              </a>
            </li>
          </menu>
        </div>
        <div>
          <h3 className={classes.socials}>SOCIAL MEDIA</h3>
          <menu>
            <li>
              <a href="www.facebookcom">
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="2x"
                  style={{ color: "#fff" }}
                />
              </a>
            </li>
            <li>
              <a href="www.twitter.com">
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="2x"
                  style={{ color: "#fff" }}
                />
              </a>
            </li>
            <li>
              <a href="www.instagram.com">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  style={{ color: "#fff" }}
                />
              </a>
            </li>
          </menu>
        </div>
      </div>
    </footer>
  );
}
