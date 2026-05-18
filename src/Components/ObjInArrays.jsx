import { useState } from "react";
function ObjInArrays(){

    const [cars , setCars] = useState([]);
    const [carYear,setYear] = useState(new Date().getFullYear());
    const [carMake,setMake] = useState();
    const [carModel,setModel] = useState();

    function addCar(){
        const newCar = {year: carYear , make:carMake ,model:carModel};
        setCars(c => [...c , newCar]);

    }
    function removeCar(index){
        setCars(c => c.filter((element,i) => i !== index));
    }

    function yearChange(event){ 
        setYear(event.target.value);
    }

     function makeChange(event){
        setMake(event.target.value);
    }

     function modelChange(event){
        setModel(event.target.value);
    }

    return(
        <div>
            
            <h1>List of car objects</h1>
            <ul>
                {
                    cars.map((car,index)=> <li key={index} onClick={()=> removeCar(index)}> {car.year}{car.make} {car.model}</li> )
                }
            </ul>

            <input type="number" value={carYear} onChange={yearChange}/> <br />
            <input type="text" value={carMake} onChange={makeChange}placeholder="Enter the car"/> <br />
            <input type="text" value={carModel} onChange={modelChange} placeholder="Enter the model"/> <br />
            <button onClick={addCar}>Add Car</button>
        </div>
    );


}
export default ObjInArrays;