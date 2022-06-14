import classes from "./Summary.module.css";
import headerImage from "../../assets/header_dish.png";
import tazzImage from "../../assets/logos/tazz.png";

const Summary = () => {
  return (
    <section className={classes.summary}>
      <div className={classes["summary-container"]}>
        <div className={classes.titles}>
          <h2 className={classes["title-first"]}>Fastest</h2>
          <h2 className={classes["title-second"]}>
            Delivery <span className={classes["title-second-span"]}>&</span>
          </h2>
          <h2 className={classes["title-third"]}>
            Easy <span className={classes["title-third-span"]}>Pickup</span>
          </h2>
          <div className={classes["company-container"]}>
            <h4 className={classes["company-title"]}>
              Best recommended restaurant on:
            </h4>
            <div className={classes["company-logo-container"]}>
              <img
                className={classes["company-logo"]}
                src={tazzImage}
                alt="Company logo"
              />
            </div>
          </div>

          <a
            className={classes["order-button"]}
            onClick={() => window.location.replace("/#recipes")}
            href="#recipes"
          >
            Order now!
          </a>
        </div>

        <div className={classes.image}>
          <img src={headerImage} alt="Delicious food!" />
        </div>
      </div>
    </section>
  );
};

export default Summary;
