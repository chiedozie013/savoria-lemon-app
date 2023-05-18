import MenuCards from "./MenuCards";

import React, { useState, useEffect } from "react";
import axios from "axios";

import classes from "./Menu.module.css";

export default function Menu() {
  const [menuDishes, setMenuDishes] = useState([]);

  const getMenuDishes = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/menu",
    });
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
            <h3 className="sectionTitle">We serve amazing menus...</h3>
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
