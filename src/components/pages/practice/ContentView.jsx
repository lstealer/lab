import React from "react";

export default (props) => {
  return (
    <div>
      <div
        style={{
          width: "160px",
          height: "40px",
          backgroundColor: "rgb(255,167,0)",
          borderRadius: "25px",
          paddingTop: "7px",
        }}
      >
        <h4>
          <span style={{ fontWeight: "bold" }}>{props.myTime}</span>
        </h4>
      </div>
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
          textAlign: "center",
          transition: "border-color 75ms ease",
          margin: "15px 0",
          backgroundColor: "#ffffff",
          color: "#000000",
          fontFamily: "Koulen",
          // fontWeight: "bold",
        }}
      >
        {props.isSpecChar
          ? String.fromCharCode(props.char[props.correct])
          : `${
              String.fromCharCode(props.specChar1) +
              String.fromCharCode(props.specChar2)
            }`}
      </div>
      <p style={{ fontSize: "20px", marginBottom: "10px" }}>ត្រូវ</p>
      <div
        style={{
          width: "160px",
          height: "40px",
          backgroundColor: "rgb(92,204,131)",
          borderRadius: "25px",
          paddingTop: "7px",
          marginBottom: "15px",
        }}
      >
        <h4>
          <span style={{ fontWeight: "bold" }}>{props.correct}</span>
        </h4>
      </div>

      <p style={{ fontSize: "20px", marginBottom: "10px" }}>​​ខុស</p>
      <div
        style={{
          width: "160px",
          height: "40px",
          backgroundColor: "rgb(253,39,0)",
          borderRadius: "25px",
          paddingTop: "7px",
          marginBottom: "15px",
        }}
      >
        <h4>
          <span style={{ fontWeight: "bold" }}>{props.inCorrect}</span>
        </h4>
      </div>

      <p style={{ fontSize: "20px", marginBottom: "10px" }}>សុក្រឹតភាព</p>
      <div
        style={{
          width: "160px",
          height: "80px",
          backgroundColor: "rgb(5,165,79)",
          border: "4px solid rgb(124,237,176)",
          borderRadius: "25px",
          paddingTop: "7px",
          marginBottom: "15px",
          paddingTop: "22px",
          textAlign: "center",
        }}
      >
        <h4>
          <span style={{fontWeight: "bold"}}>{props.accuracy.toFixed(2)}%</span>
        </h4>
      </div>
    </div>
  );
};
