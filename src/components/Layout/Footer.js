import { Fragment } from "react";
import classes from "../../components/Layout/Footer.module.css";

const Footer = (props) => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <Fragment>
      <footer className={classes.footer}>
        <p>© {currentYear}. Website created by Darius Streang.</p>
      </footer>
    </Fragment>
  );
};

export default Footer;
