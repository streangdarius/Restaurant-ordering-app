import { Fragment, useState } from "react";
import classes from "./Header.module.css";
import headerImage from "../../assets/header_image.jpg";
import CartButton from "./CartButton";

const Header = (props) => {
  const [navbar, setNavbar] = useState(false);

  const changeNavbarBackground = () => {
    if (window.scrollY >= 110) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbarBackground);

  return (
    <Fragment>
      <header
        className={
          navbar ? `${classes.header} ${classes.active}` : `${classes.header}`
        }
      >
        <h1 className={classes.title}>
          Yam!<span className={classes["title-trademark"]}>&trade;</span>
        </h1>
        <div className={classes.container}>
          <a className={classes["link-active"]} href="#">
            home
          </a>
          <a className={classes.link} href="#">
            menu
          </a>
          <a className={classes.link} href="#">
            blog
          </a>
          <CartButton onClick={props.onShowCart}></CartButton>
        </div>
      </header>
      <div className={classes["main-image"]}>
        <img src={headerImage} alt="Delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
