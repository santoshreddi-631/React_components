import { useState , useRef, useEffect } from "react";


function Search(){

    // const [search , setSearch] = useState("");
    const inputRef = useRef("");
    const [search2 , setSearch2] = useState("");
    const prevRef = useRef("");

    useEffect(()=>{
        prevRef.current = search2;
    },[search2]);

    function find(){
        setSearch2(inputRef.current.value);
    }
    return(
        <div>
            <input type="text" placeholder="Search here ....." ref={inputRef}/> <br />
            <button onClick={find}>Search</button> <br />
            <h3>Current Searched: {search2}</h3>
            <p>Recentlt Searched: {prevRef.current}</p>
        </div>
    );
}
export default Search;