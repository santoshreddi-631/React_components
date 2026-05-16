import { useState } from "react";
function EventChange(){

    const [name , setName] = useState("");
    const [age ,setAge] = useState(0);
    const [instuctions , setInstructions] = useState("");
    const [payment , setpayment] = useState("");
    const [D_type , setD_type] = useState("");


    const handleNameChange = (event) => setName(event.target.value);
    const handleAgeChange = (event) => setAge(event.target.value);
    const handleInstructionsChange = (event) => setInstructions(event.target.value);
    const handlePaymentChange = (event) => setpayment(event.target.value);
    const handleDeliveryChange = (event) => setD_type(event.target.value);
    return(
        <div>
            <input onChange={handleNameChange} value={name}/>
            <p>Name: {name}</p>

            <input onChange={handleAgeChange} value={age} type="number"/>
            <p>Age: {age}</p>

            <textarea onChange={handleInstructionsChange} placeholder="Delivery Instructions here!" value={instuctions}/>
            <p>Instructions: {instuctions}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an Option</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="UPI">UPI</option>
            </select>
            <p>Selected Payment Mode: {payment}</p>

            <label>
                <input type="radio" value="Pick Up" 
                checked={D_type === "Pick Up"} 
                onChange={handleDeliveryChange}/>
                Pick Up</label> <br />
            <label>
                <input type="radio" value="Delivery" checked={D_type === "Delivery"}
                onChange={handleDeliveryChange} />
                Delivery</label> <br />
                <p>Selected: {D_type}</p>
        </div>
    );


}
export default EventChange;