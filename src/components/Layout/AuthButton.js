import { Fragment, useContext, useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import classes from "./AuthButton.module.css";

const AuthButton = (props) => {
  return (
    <Fragment>
      <button className={classes.button} onClick={props.onClick}>
    <AccountCircleIcon className={classes["button-icon"]} />
      </button>
    </Fragment>
  );
};

export default AuthButton;
