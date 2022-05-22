import { Fragment, useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);

  const dynamicCartContext = useContext(CartContext);

  const { items } = dynamicCartContext;

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const buttonClasses = `${classes.badge} ${
    buttonIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setButtonIsHighlighted(true);

    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [dynamicCartContext, items.length]);

  return (
    <Fragment>
      <button className={classes.button} onClick={props.onClick}>
        <ShoppingBasketIcon className={classes.icon} />
        {items.length >= 1 ? (
          <span className={buttonClasses}>{numberOfCartItems}</span>
        ) : (
          <span className={classes.hidden}>{numberOfCartItems}</span>
        )}
      </button>
    </Fragment>
  );
};

export default CartButton;
