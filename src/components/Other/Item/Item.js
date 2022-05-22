import { useContext } from "react";
import ItemForm from "./ItemForm";
import CartContext from "../../../store/cart-context";
import classes from "./Item.module.css";

const Item = (props) => {
  const dynamicCartContext = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    dynamicCartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.item}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <ItemForm onAddToCart={addToCartHandler}></ItemForm>
      </div>
    </li>
  );
};

export default Item;
