import React, { Component } from "react";

export default class Animation extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.image = new Image();
    this.image.src = "/image/motodelivery.png";
    this.state = {
      swidth: 600,
      sheight: 600,
      sx: 0,
      sy: 0,
      width: 20,
      height: 100,
      x: 0,
      y: 23,
      percentage: 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    // console.log('next props :', nextProps)
    this.setState({
      percentage: nextProps.percent,
    });
  }

  canvasFrame = () => {
    // (canvas_width - pic_width) / 100 * percentage => to calculate the position of frame
    var position = 0;
    const frame = { ...this.state };
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.save();

    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#1b1c25";
    ctx.fillRect(1, 119, canvas.width, 5);
    //console.log("===>", frame.percentage);
    position = Math.floor(
      ((canvas.width - frame.width) / 100) * frame.percentage
    );
    ctx.drawImage(
      this.image,
      frame.sx,
      frame.sy,
      frame.swidth,
      frame.sheight,
      position,
      frame.y,
      frame.width,
      frame.height
    );
  };

  componentDidMount() {
    window.addEventListener("load", this.handleLoad);
    //console.log('====>',this.props.percent)
  }

  componentWillUnmount() {
    window.removeEventListener("load", this.handleLoad);
  }

  handleLoad = () => {
    window.requestAnimationFrame(this.canvasFrame);
  };

  render() {
    window.requestAnimationFrame(this.canvasFrame);
    return (
      <div>
        <canvas
          ref={this.canvasRef}
          style={{ width: "100%", height: "90px" }}
        />
        {/* <h1>{this.state.percentage}</h1> */}
      </div>
    );
  }
}
