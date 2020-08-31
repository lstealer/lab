import React from "react";
const Countdown=(props)=> {
    return (
        <div
            style={{
                display: props.countdown == 0 ? "none" : "block",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.75)",
                position: "absolute",
                zIndex: "999",
                margin: "0",
                padding: "0",
                left: "0",
                top: "0",
            }}
        >
            <span
                style={{
                    display: props.countdown === 0 ? "none" : "block",
                    boxShadow:  props.countdown% 2 === 0 ? "0 0 10px 10px #ff1010c7" : "0 0 10px 10px rgba(0,0,0,0)",
                }}
                className="count-down"
            >
                {props.countdown}
            </span>
        </div>
    );
}
export default Countdown;