import classes from "./Home.module.css";
import Summary from "../Summary";
import image_a from "../../../assets/small_image_a.jpg";
import image_b from "../../../assets/small_image_b.jpg";
import image_c from "../../../assets/small_image_c.jpg";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <Summary />
      <section className={classes.home} id="about">
        <h1>Welcome!</h1>
        <p>
          The <strong>Yam!</strong> menu offers around 10 pasta varieties and 5
          specialties such as chicken, veal, and seafood entries, along with an
          assortment of appetizers, salads. It serves an interesting variety of
          wines, cocktails, and desserts to complement each meal. We also make
          delivery, so check our menu. Working with the freshest ingredients,
          imported pasta, and top quality cuts of meat, yam! owes a great deal
          of its successful menu to its purveyors.
        </p>

        <div className={classes["pictures-container"]}>
          <img
            className={classes["food-image"]}
            src={image_a}
            alt="Delicious food!"
          />
          <img
            className={classes["food-image"]}
            src={image_b}
            alt="Delicious food!"
          />
          <img
            className={classes["food-image"]}
            src={image_c}
            alt="Delicious food!"
          />
        </div>
        <p>
          As a full service fine dining menu we offer a full array of mixed
          drinks, beers and wines. With a full bar area we offers a place where
          young adults, families, and singles to enjoy a drink while waiting for
          a to-go, waiting for a table, or a friendly place to meet and talk
          before dinner. We are a family array business and have never been
          known as a “Bar”. There will be no “Late-night Drinking Crowd” as this
          is not part of our customer base.
        </p>
      </section>
    </Fragment>
  );
};

export default Home;
