import { useEffect, useRef } from "react";
function RefHook(){

const inputRef1 = useRef(null);
const inputRef2 = useRef(null);
const inputRef3 = useRef(null);


useEffect(()=>{
    console.log("Comp rendered");
})
function handleClick1(){
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor="yellow";
    inputRef2.current.style.backgroundColor="";
    inputRef3.current.style.backgroundColor="";
}

function handleClick2(){
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor="";
    inputRef2.current.style.backgroundColor="green";
    inputRef3.current.style.backgroundColor="";
}

function handleClick3(){
    inputRef3.current.focus();
    inputRef1.current.style.backgroundColor="";
    inputRef2.current.style.backgroundColor="";
    inputRef3.current.style.backgroundColor="red";
}

    return(
        <div>
            <button onClick={handleClick1}>Click me1</button><br />
            <input ref={inputRef1}/><br />
            <button onClick={handleClick2}>Click me2</button><br />
            <input  ref={inputRef2}/><br />
            <button onClick={handleClick3}>Click me3</button><br />
            <input  ref={inputRef3}/><br />
        </div>
    );
}
export default RefHook;