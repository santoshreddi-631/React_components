

function Register_Form(){
    return(
        <div className="Main-form">
        <form action="" className="form-card">
            <p>Name: <input type="text" placeholder="Enter your name"/></p>
            <p>Email: <input type="email" placeholder="Enter your email"/></p>
            <p>Password: <input type="password" placeholder="Enter your password"/></p>
            <button className="btn">Submit</button>
        </form>
        </div>
    );

}
export default Register_Form;