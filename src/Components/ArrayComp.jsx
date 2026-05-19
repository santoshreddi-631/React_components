import { useState } from "react";
function ArrayComp(){
    const [foods , setFoods] =  useState(["apple","banana","orange"]);

    function addFood(){
        const newFood = document.getElementById("food-item").value;
        document.getElementById("food-item").value="";

        
        setFoods(foods => [...foods,newFood]);
    }


    function removeFood(index){
        setFoods(foods.filter((food , i)=> i !== index));
    }


    return(
        <div>
            <ul>
                {
                    foods.map((food,index) => <li key={index} onClick={()=> removeFood(index)}>{food}</li> )
                }
            </ul>
            <input type="text" id="food-item"/>
            <button onClick={addFood}>AddFood</button>
        </div>
    );
}
export default ArrayComp;