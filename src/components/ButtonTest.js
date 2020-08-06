import React, { useState } from "react";

function ButtonTest() {

    // function init() {
    //     console.log('init')
    //     return 4
    // }
    const [satate, setSatate] = useState({count:4, theme:'blue'});
    const count = satate.count;


    const counten = () => {
        setSatate(pval => {
            return {...pval, count: pval.count + 1}
        })
    }
    const countde = () => {
        // setCount(pval => pval - 1)
    }
    return (
        <div>
            <button onClick={counten}>+</button>
            <span>{count}</span>
            <button onClick={countde}>-</button>
        </div>
    )
}

export default ButtonTest
