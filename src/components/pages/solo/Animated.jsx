import React from "react";
import soloStyle from "./soloStyle";
import Animation from "./Animation";
import Speed from "../practice/Speed";

const Animated = (props) => {
    return (
        <div key={props.user} className="row mt-2">
            <div
                className="col-md-2"
                style={soloStyle[1]}
            >
                <h4>
                    <span>{props.user}</span>
                </h4>
            </div>
            <div className="col-md-8 px-0">
                {/*typingPercent*/}
                <Animation
                    keys={props.user}
                    typingPercent={Math.round(props.typingPercent)}/>
            </div>
            <div className="col-md-2">
                <h4
                    style={soloStyle[2]}
                >
                    <span>
                      {/*  sec and symbol */}
                        <span>
                              {Math.round(props.wpm)} wpm
                         </span>
                    </span>
                </h4>
            </div>
        </div>
    )
}
export default Animated;