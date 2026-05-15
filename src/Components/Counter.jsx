import { useState } from "react";
function Counter(){
    const [count , setCount] = useState(0);

    const increment = () =>{
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    const decrement = () =>{
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    const reset = () =>{
        setCount(c => c = 0);
    }

    return(
        <div className="main-container">
            <h3 className="counter">{count}</h3>
            <p><button onClick={increment} className="class-btn">Increment</button>
                <button onClick={reset} className="class-btn">Reset</button>
                <button onClick={decrement} className="class-btn">Decrement</button>
            </p>
            
        </div>
    );
}
export default Counter;