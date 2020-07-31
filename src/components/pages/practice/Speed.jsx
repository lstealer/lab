import React from 'react'

export default (props) => {

    if(props.sec !== 0 && props.symbols !== 0){
        const wpm = (props.symbols /5) /(props.sec /60)

    return (
        <span>
           {Math.round(wpm)} wpm
        </span>
        )
    }
 
    return "0 wpm";
}
