'use client';
import Navbar from "@/components/navbar";
import { useState } from "react";

function Counter() {

    const [counter , setCounter] = useState(0);
    const plus = () => {
        setCounter(counter + 1)
    }

    const minus = () => {
        setCounter(counter - 1 )
    }
    return (
        <>
            <Navbar />
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",margin:"auto auto",width:"27rem",height:"27rem",border:"black 1px solid",alignItems:"center",borderRadius:"1rem"}}>
                <h1 style={{fontSize:"3rem", padding:"1rem"}}>
                    Counter
                </h1>
                <h2>your Counter is : {counter}</h2>
                <button onClick={ plus  } >+</button>
                <button onClick={ minus } >-</button>
            </div>
        </>
    )
}

export default Counter;