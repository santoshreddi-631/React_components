import { useState } from "react";
function MultipleInputs(){

    const [formData , setFormData] = useState({
        email:"",
        password:"",
    });

    const [submitted , SetSubmitted] = useState(null);
function handleChange(event){
    setFormData({
        ...formData ,[event.target.name]:event.target.value,
    })
}

function handleForm(event){
    event.preventDefault();
    SetSubmitted(formData);

}

return(
    <div>
        <form onSubmit={handleForm}>
        <input type="email" 
        placeholder="enter your email"
        name="email"
        onChange={handleChange}
        required
        />
        <input type="password"
        placeholder="Enter your password" 
        name="password"
        onChange={handleChange}
        required
        />
        <button type="submit">Submit</button>
        </form>


        <div>
            {submitted && <p>{formData.email}     -----   
                {formData.password}
            </p> }
        </div>
    </div>


);

}
export default MultipleInputs;