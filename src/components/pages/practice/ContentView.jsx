import React from 'react'

export default (props) => {

    return(
        <div>
            <h4>{props.myTime}</h4>
            <div
              style={{
                border: `6px solid ${props.color}`,
                //boxShadow: `0 4px 8px 0 ${this.state.color}, 0 6px 20px 0 ${this.state.color}`,
                borderRadius: "25px",
                height: "175px",
                fontSize: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "border-color 75ms ease",
                margin: "25px 0",
              }}
            >
              {props.isSpecChar
                ? String.fromCharCode(props.char[props.correct])
                : `${
                    String.fromCharCode(props.specChar1) +
                    "+" +
                    String.fromCharCode(props.specChar2)
                  }`}
            </div>
            <span>ត្រូវ</span>
            <h4>{props.correct}</h4>
            <span>​​ខុស</span>
            <h4>{props.inCorrect}</h4>
            <span>សុក្រឹតភាព</span>
            <h4>{props.accuracy.toFixed(2)} %</h4>
        </div>
    )
}