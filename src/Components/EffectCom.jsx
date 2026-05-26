import { useState , useEffect } from "react";
function EffectCom(){
const [count , setCount]= useState(0);
const [color,setColor] = useState("green");
function addbutton(){
    setCount((c => c+1));
}
function substractbutton(){
    setCount((c => c-1));
}

function changeColor(){
    setColor( c => c === "green" ? "red":"green")
}

useEffect(()=>{
    document.title =`Count: ${count} ${color}`;
},[count,color])

    return(
        <div>
            <p style={{color:color}}>Count: {count}</p>
            <button onClick={addbutton}>Add</button>
            <button onClick={substractbutton}>substract</button> <br />
            <button onClick={changeColor}>Change color</button>
        </div>
    );
}
export default EffectCom;