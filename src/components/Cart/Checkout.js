import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveCharacters = (value) => value.trim().length === 10;

const Checkout = (props) => {
  const [formInputIsValid, setFormInputIsValid] = useState({
    name: true,
    address: true,
    phone: true,
  });

  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const phoneInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredPhoneIsValid = isFiveCharacters(enteredPhone);

    setFormInputIsValid({
      name: enteredNameIsValid,
      address: enteredAddressIsValid,
      phone: enteredPhoneIsValid,
    });

    const formIsValid =
      enteredNameIsValid && enteredAddressIsValid && enteredPhoneIsValid;

    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      address: enteredAddress,
      phone: enteredPhone,
    });
  };

  return (
    <form onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          formInputIsValid.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputIsValid.name && <p>Please enter a valid name.</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputIsValid.address ? "" : classes.invalid
        }`}
      >
        <label htmlFor="address">Your Address</label>
        <input type="text" id="address" ref={addressInputRef} />
        {!formInputIsValid.address && <p>Please enter a valid address.</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputIsValid.phone ? "" : classes.invalid
        }`}
      >
        <label htmlFor="phone">Your Phone Number</label>
        <input type="number" id="phone" ref={phoneInputRef} />
        {!formInputIsValid.phone && <p>Please enter a valid phone number.</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
