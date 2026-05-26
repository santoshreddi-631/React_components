function Card(props){
    return(
        <div className="card">
        <img src={reactLogo} alt="santosh" className="card-img"></img>
        <h3 className="card-title">{props.name}</h3>
        <p className="card-des">3rd year CSE student</p>
    </div>
    );
}
export default Card;