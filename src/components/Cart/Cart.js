import { useContext } from "react";
import Modal from "../Interface/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const dynamicCartContext = useContext(CartContext);

  const totalAmount = `$${dynamicCartContext.totalAmount.toFixed(2)}`;
  const cartHasItems = dynamicCartContext.items.length > 0;

  const cartItemAddHandler = (item) => {
    dynamicCartContext.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    dynamicCartContext.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {dynamicCartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {cartHasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
