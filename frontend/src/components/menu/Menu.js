import MenuCards from "./MenuCards";

import Meal1 from "../../images/Bruchetta.png";
import Meal2 from "../../images/Greek-Salad.png";
import Meal3 from "../../images/Lemon-Dessert.png";
import Meal4 from "../../images/cta-hero-image.jpg";
import Meal5 from "../../images/Menuimages/Pic1.png";
import Meal6 from "../../images/Menuimages/Pic2.png";
// import Meal7 from "../../images/Menuimages/Pic3.png";
// import Meal8 from "../../images/Menuimages/Pic4.png";
// import Meal9 from "../../images/Menuimages/Pic5.png";
// import Meal10 from "../../images/Menuimages/Pic6.png";
// import Meal11 from "../../images/Menuimages/Pic7.png";
// import Meal12 from "../../images/Menuimages/Pic8.png";
// import Meal13 from "../../images/Menuimages/Pic9.png";
// import Meal14 from "../../images/Menuimages/Pic10.png";

import classes from "./Menu.module.css";

const menuDishes = [
  {
    id: "m1",
    image: Meal1,
    name: "Bruchetta",
    price: 5.89,
    rate: 4,
    description: "Bruchetta with a bottle of white wine",
  },
  {
    id: "m2",
    image: Meal2,
    name: "Greek Salad",
    price: 12.99,
    rate: 4.9,
    description: "Greek Salad with extra cheese",
  },
  {
    id: "m3",
    image: Meal3,
    name: "Lemon Dessert",
    price: 6.02,
    rate: 3.6,
    description: "Lemon Dessert with extra cheese",
  },
  {
    id: "m4",
    image: Meal4,
    name: "French Pizza",
    price: 5.87,
    rate: 4.2,
    description: "Lemon Dessert with extra cheese",
  },
  {
    id: "m5",
    image: Meal5,
    name: "Green Salad",
    price: 8.47,
    rate: 5,
    description: "Green Salad with white wine",
  },
  {
    id: "m6",
    image: Meal6,
    name: "French Balonge",
    price: 5.87,
    rate: 4.3,
    description: "French Balonge with horny",
  },
];

export default function Menu() {
  return (
    <section className={classes.menuPageSection}>
      <div className={`fluidContainer ${classes.menuPageContainer}`}>
        <div className={classes.textSection}>
          <div className={classes.title}>Savorian Lemon</div>
          <div className={classes.subtitle}>Chicago</div>
        </div>
        <div className={classes.menuContainer}>
          <div className={classes.menuContainer}>
            <h3 className="sectionTitle">Place your orders...</h3>
            <div className={classes.menuCard}>
              {menuDishes.map((dish) => (
                <MenuCards
                  key={dish.id}
                  image={dish.image}
                  name={dish.name}
                  price={dish.price}
                  rating={dish.rate}
                  description={dish.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
