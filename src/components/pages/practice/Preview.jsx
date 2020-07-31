import React from 'react'

export default (props) => {

    const text = props.text.split('');
    const userInput = props.userInput.split('');
    return (
        <div style={{border: "1px solid lightgray", borderRadius: "15px", margin: "5px 0", padding: "5px 15px", textAlign: "left"}}>
            {  
                text.map((item,index)=>{
                let color;
                if(index < userInput.length){
                    color = item === userInput[index] ? "lightgreen":""; 
                }
                return <span key={index} style={{background: `${color}`, transition: "all 1s ease-out"}}>{item}</span>
                })
            }
        </div>
    )
}
