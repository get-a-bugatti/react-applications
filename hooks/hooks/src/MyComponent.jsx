// onChange => event handler used primarily with form elements.
//          <input>, <textarea>, <select>, <radio>
//          Triggers a function everytime the value of the input changes 

import { useState } from "react";

function MyComponent() {
  
    let [name, setName] = useState("Guest");
    let [quantity, setQuantity] = useState(0);
    let [comment, setComment] = useState('');
    let [payment, setPaymentMethod] = useState('');
    let [deliveryMethod, setDeliveryMethod] = useState("");
    let [subStatus, setSubStatus] = useState(false);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleQuantityChange(e) {
        setQuantity(e.target.value);
    }

    function handleCommentChange(e) {
      setComment(e.target.value);
    }

    function handlePaymentChange(e) {
      setPaymentMethod(e.target.value);
    }

    function handleDeliveryMethod(e) {
      setDeliveryMethod(e.target.value);
    }

    function handleSubscribeStatusChange(e) {
      setSubStatus(!subStatus);
    }
  return(
    <>
    <input value={name} placeholder="Enter your name" onChange={handleNameChange}/>
    <p>UserName: {name}</p>

    <input value={quantity} placeholder="Quantity" onChange={handleQuantityChange} type="number"></input>
    <p>Quantity: {quantity}</p>

    <input value={comment} placeholder="Enter delivery note" onChange={handleCommentChange} type="text"></input>
    <p>Comment: {comment}</p>

    <select value={payment} onChange={handlePaymentChange}>
      <option value="">Select an Option</option>
      <option value="Visa">Visa</option>
      <option value="Mastercard">MasterCard</option>
      <option value="Giftcard">GiftCard</option>
    </select>
    <p>Payment Method: {payment}</p>

    <br></br>
    

    <input type="radio" id="pickup" value="Pick Up" checked={deliveryMethod === "Pick Up"} onChange={handleDeliveryMethod} />
    <label htmlFor="pickup">Pick Up</label>
    <br></br>

    <input type="radio" id="home-delivery" value="Home Delivery" checked={deliveryMethod === "Home Delivery"} onChange={handleDeliveryMethod} />
    <label htmlFor="home-delivery">Home Delivery</label>

    <br></br>
    <p> <b>Delivery Method :</b> {deliveryMethod} </p>

    {/* <input type="checkbox" id="subscribe" onChange={handleSubscribeStatusChange}></input>
    <label htmlFor="subscribe">Subscribe to me</label>
    <p id="subbed-status"></p> */}

    </>
  )
}

export default MyComponent;
