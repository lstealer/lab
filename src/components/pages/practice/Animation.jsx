import React, { Component } from "react";

export default class Animation extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.image = new Image();
    this.image.src = "/image/mymoto.png";
    this.state = {
      swidth: 120,
      sheight: 120,
      sx: 0,
      sy: 0,
      width: 30,
      height: 100,
      x: 0,
      y: 35,
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
    //Clear Old Image in Canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(0, 0, 0, 0)";
    // ctx.fillStyle = "rgba(0, 0, 0, 1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgb(92,204,131)";
    ctx.fillRect(1, 119, canvas.width, 5);
    //console.log("===>", frame.percentage);
    position = Math.floor(
      ((canvas.width - frame.width) / 100) * frame.percentage
    );

    ctx.imageSmoothingEnabled = true;
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
