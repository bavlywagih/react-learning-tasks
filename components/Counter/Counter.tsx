"use client";
import { useState } from "react";
import styles from "./Counter.module.css";
function Counter() {
    const [Count , SetCount ] = useState(0);
    return (
        <>
        <div className={styles.div_counter}>
            <h1>count is : {Count} </h1>
            <div>
                <button onClick={() => SetCount(Count + 1)}>+</button>
                <button onClick={() => SetCount(Count - 1)}>-</button>
            </div>
        </div>

        </>
    )
}
export default Counter;