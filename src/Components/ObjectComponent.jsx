import { useState } from "react";
function ObjectComponent(){

    const [car ,setCar] = useState({year:2026 , model:"sierra" ,make:"TATA"});

    function yearChange(event){
         setCar(car => ({...car , year: event.target.value}));
    }
    function makeChange(event){
        setCar(car => ({...car , make: event.target.value}));
    }
    function modelChange(event){
        setCar(car => ({...car , model: event.target.value}));
    }

    return(
        <div>
            <p>Your Favourite Car is: {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={yearChange}/> <br />
            <input type="text" value={car.make} onChange={makeChange}/> <br />
            <input type="text" value={car.model} onChange={modelChange}/>
        </div>
    );

}
export default ObjectComponent;