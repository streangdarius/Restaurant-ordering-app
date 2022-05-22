import { useRef, useState } from "react";
import Input from "../../Layout/Input";
import classes from "./ItemForm.module.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const ItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountToNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountToNumber < 1 ||
      enteredAmountToNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountToNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="×"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>
        <AddCircleOutlineIcon className={classes.icon}/>
        {!amountIsValid && <p>Please neter a valid amount!</p>}
      </button>
    </form>
  );
};

export default ItemForm;
