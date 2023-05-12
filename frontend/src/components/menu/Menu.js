import MenuCards from "./MenuCards";

import React, { useState, useEffect } from "react";
import axios from "axios";

import classes from "./Menu.module.css";

// const menuDishes = [
//   {
//     id: "m1",
//     image: Meal1,
//     name: "Bruchetta",
//     price: 5.89,
//     rate: 4,
//     description: "Bruchetta with a bottle of white wine",
//   },
//   {
//     id: "m2",
//     image: Meal2,
//     name: "Greek Salad",
//     price: 12.99,
//     rate: 4.9,
//     description: "Greek Salad with extra cheese",
//   },
//   {
//     id: "m3",
//     image: Meal3,
//     name: "Lemon Dessert",
//     price: 6.02,
//     rate: 3.6,
//     description: "Lemon Dessert with extra cheese",
//   },
//   {
//     id: "m4",
//     image: Meal4,
//     name: "French Pizza",
//     price: 5.87,
//     rate: 4.2,
//     description: "Lemon Dessert with extra cheese",
//   },
//   {
//     id: "m5",
//     image: Meal5,
//     name: "Green Salad",
//     price: 8.47,
//     rate: 5,
//     description: "Green Salad with white wine",
//   },
//   {
//     id: "m6",
//     image: Meal6,
//     name: "French Balonge",
//     price: 5.87,
//     rate: 4.3,
//     description: "French Balonge with horny",
//   },
// ];

export default function Menu() {
  const [menuDishes, setMenuDishes] = useState([]);

  const getMenuDishes = async () => {
    const response = await axios.get("http://localhost:8000/api/");
    // console.log(response.data);
    setMenuDishes(response.data);
  };

  useEffect(() => {
    getMenuDishes();
  }, []);

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
