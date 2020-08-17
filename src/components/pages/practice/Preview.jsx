import React from "react";

export default (props) => {
  const text = props.text.split("");
  const userInput = props.userInput.split("");
  return (
    <div
      style={{
        border: "1px solid rgb(171,210,234)",
        borderRadius: "15px",
        margin: "5px 0",
        padding: "10px 15px",
        textAlign: "left",
        backgroundColor: "rgb(171,210,234)",
      }}
    >
      {text.map((item, index) => {
        let color;
        if (index < userInput.length) {
          color = item === userInput[index] ? "rgb(255,167,0)" : "";
        }
        return (
          <span
            key={index}
            style={{
              background: `${color}`,
              fontFamily: "Suwannaphum",
              fontSize: "20px",
              color: "black",
              transition: "all 1s ease-out",
              lineHeight: "30px",
            }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
};
