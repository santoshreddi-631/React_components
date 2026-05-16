import { useState , useEffect } from "react";
function WindowSize(){
    const [width , setWidth] = useState(window.innerWidth);
    const [height , setHeight] = useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize",handleSize);
        console.log("Event added");


        return()=>{
            window.addEventListener("resize",handleSize);
            console.log("removed event");
        }
    },[]);

    useEffect(()=>{
        document.title=`Size:${width} x ${height}`;
    },[width,height]);

    function handleSize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    return(
        <>
            <p>Window width: {width} px</p>
            <p>Window height: {height} px</p>
        </>
    );
}

export default WindowSize;