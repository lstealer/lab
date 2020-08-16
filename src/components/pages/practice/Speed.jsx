import React from 'react'
let wpm = 0;
export default (props) => {

    if(props.sec !== 0 && props.symbols !== 0){
        wpm = (props.symbols /5) /(props.sec /60)

    return (
        <span>
           {Math.round(wpm)} wpm
        </span>
        )
    }
 
    return "0 wpm";
}
