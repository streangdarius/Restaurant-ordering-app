import { Fragment, useState } from "react";
import classes from "./Header.module.css";
import CartButton from "./CartButton";

const Header = (props) => {
  const [navbar, setNavbar] = useState(false);

  const changeNavbarBackground = () => {
    if (window.scrollY >= 200) {
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
          <a onClick={() => window.location.replace("/#about")}>
            about
          </a>

          <a
            
            onClick={() => window.location.replace("/#recipes")}
          >
            menu
          </a>

          <CartButton onClick={props.onShowCart}></CartButton>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
