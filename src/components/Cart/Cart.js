import { Fragment, useContext, useState } from "react";
import Modal from "../Interface/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import CartContext from "../../store/cart-context";
import classes from "./Cart.module.css";
import preparing from "../../assets/food_prep.svg";

const Cart = (props) => {
  const [checkoutOrder, setCheckoutOrder] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState();
  const [orderSubmitted, setOrderSubmitted] = useState();

  const dynamicCartContext = useContext(CartContext);

  const totalAmount = `$${dynamicCartContext.totalAmount.toFixed(2)}`;
  const cartHasItems = dynamicCartContext.items.length > 0;

  const cartItemAddHandler = (item) => {
    dynamicCartContext.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    dynamicCartContext.removeItem(id);
  };

  const orderHandler = () => {
    setCheckoutOrder(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://yam-91ab0-default-rtdb.europe-west1.firebasedatabase.app/client-orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: dynamicCartContext.items,
        }),
      }
    );
    setIsSubmitting(false);
    setOrderSubmitted(true);
    dynamicCartContext.clearCart();
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

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {cartHasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {checkoutOrder && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!checkoutOrder && modalActions}
    </Fragment>
  );

  const orderSubmittedContent = (
    <div className={classes.message}>
      <p>Your order is beeing sent!</p>
    </div>
  );

  const orderIsPreparingContent = (
    <div className={classes.message}>
      <img src={preparing} alt="Food icon" />
      <p>Your order is set! Thank you for ordering from us!</p>
      <button className={classes.closing} onClick={props.onClose}>
        Close
      </button>
    </div>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !orderSubmitted && cartModalContent}
      {isSubmitting && orderSubmittedContent}
      {orderSubmitted && orderIsPreparingContent}
    </Modal>
  );
};

export default Cart;
