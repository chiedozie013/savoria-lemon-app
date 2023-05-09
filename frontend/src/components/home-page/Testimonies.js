import User1 from "../../images/user1.jpg";
import User2 from "../../images/user2.jpg";
import User3 from "../../images/user3.jpg";
import User4 from "../../images/user4.jpg";

import classes from "./Testimonies.module.css";
import TestimonyCard from "./TestimonyCard";

// a database fetched list of special dishes collected;

const testimonial = [
  {
    id: "t1",
    image: User1,
    name: "Mark J.",
    rate: 3,
    review: "I enjoy relaxing at the restaurant with the amazing Lemon Dessert",
  },
  {
    id: "t2",
    image: User2,
    name: "Julian G",
    rate: 4.5,
    review:
      "The restaurant has become a second home to me anytime i am in Chicago",
  },
  {
    id: "t3",
    image: User3,
    name: "Fidelia O",
    rate: 5.0,
    review:
      "Your meals always have i and my kids coming back for more everytime..",
  },
  {
    id: "t4",
    image: User4,
    name: "Chukwuemeka U",
    rate: 3.8,
    review:
      "I love the greek salad and pizza. And you render an excellent service",
  },
];

export default function Testimonies() {
  return (
    <section className={classes.testimoniesSection}>
      <div className={`fluidContainer ${classes.testimoniesContainer}`}>
        <h2 className="sectionTitle">
          Reviwes from our highly esteemed customers
        </h2>
        <div className={classes.testimonyCard}>
          {testimonial.map((item) => (
            <TestimonyCard
              key={item.id}
              image={item.image}
              name={item.name}
              rating={item.rate}
              review={item.review}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
