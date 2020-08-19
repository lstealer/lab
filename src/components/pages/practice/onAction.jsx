import { baseURL } from '../../../config/API';
import Axios from 'axios';

export const onPrevent = function(e) {
    // alert("onPrevent")
    e.preventDefault();
    window.event.preventDefault();
}

export const onFocus = function(e){
    this.focusInput = e;
}

export const onRestart = function(e){
    window.location.reload();
}

export const onKeyDown = function(e){
    // console.log(
    //     "KeyDown: " + String.fromCharCode(e.keyCode) + ":" + e.target.value
    //   );
      this.setState({
        oldInput: e.target.value,
      });
      if (
        e.keyCode === 8 ||
        e.keyCode === 46 ||
        e.keyCode === 37 ||
        e.keyCode === 38 ||
        e.keyCode === 39 ||
        e.keyCode === 40 ||
        e.keyCode === 9
      ) {
        e.preventDefault();
        window.event.preventDefault();
      }
}

export const onKeyUp = function(e){
    this.setState({
        color: "lightgray",
      });
      if (this.state.isCorrect === false) {
        this.setState({
          color: "crimson",
        });
      }
}

export const setTimer = function() {
    if (!this.state.started) {
      this.setState({ started: true });
      this.interval = setInterval(() => {
        this.setState((prev) => {
          return { sec: prev.sec + 1 };
        });
      }, 1000);
    }
  }

  export const onFinish = function(userInput) {
    console.log("Userinput: " + userInput);
    console.log("Text: " + this.state.text);
    if (userInput === this.state.text) {
      clearInterval(this.interval);
      clearInterval(this.myInterval);
      this.setState({
        mainTime: this.state.mainTime - this.state.time,
        finished: true,
        isAlert: true,
      });
      // window.scrollBy(0, 200);
    }
  }

  export const countCorrectSymbols = function(userInput) {
    const text = this.state.text;
    return userInput.split("").filter((s, i) => s === text[i]).length;
  }

  export const onConfirm = function() {
    this.setState({
      color: "lightgray",
      isAlert: false,
      isResult: true,
    });
    //window.scrollBy(0,500);
    this.handleScrollToElement();
  }

  export const handleScrollToElement = function() {
    window.scrollTo(0, this.myRef.current.offsetTop);
    // this.myRef.current.scrollIntoView({ behavior: "smooth" });
  }

  export const onChange = function(e) {
    let count = 0;
    let index = 0;
    this.setTimer();
    this.onFinish(e.target.value);
    this.setState({
      userInput: e.target.value,
      symbols: this.countCorrectSymbols(e.target.value),
    });

    //***************************
    let getTyping = e.target.value;

    this.setState({
      getTyping: [],
    });
    getTyping.split("").forEach((i) => {
      this.state.getTyping.push(i.charCodeAt(0));
    });
    console.log("GETYPING: " + getTyping.length);
    index = getTyping.length;
    //console.log(this.state.getTyping);
    this.state.getTyping.map((item, j) => {
      console.log(
        item +
          "=" +
          this.state.char[j] +
          "=>" +
          String.fromCharCode(item) +
          "=" +
          String.fromCharCode(this.state.char[j])
      );

      if (item === this.state.char[j]) {
        console.log("True: " + j);
        this.setState({
          color: "rgb(31,188,12)",
          isCorrect: true,
        });
      } else {
        this.setState({
          color: "#ff9999",
          isCorrect: false,
          
        });
        count = 1;
        //console.log("False: " + count);
      }
      if (getTyping === "") {
        this.setState({
          color: "lightgray",
        });
      }
    });

    if (count == 1) {

      console.log("inCorrect: " + this.state.inCorrect);
      this.setState(prev=>({
        isCorrect: false,
        color: "#ff4d4d",
        inCorrect: prev.inCorrect + 1,
      }), ()=>{
        this.setState({
          accuracy: (index * 100) / (index + this.state.inCorrect),
        });
      });
      count = 0;
      index = this.state.oldInput.length;
    }

    this.setState({
      accuracy: (index * 100) / (index + this.state.inCorrect),
    });

    this.setState({
      isSpecChar: true,
    });
    let specChar1 = this.state.char[index];
    //console.log("specChar1: "+specChar1)
    let specChar2 = this.state.char[index + 1];
    console.log("specChar2: " + specChar2);
    if (
      specChar1 == "6070" ||
      specChar1 == "6075" ||
      specChar1 == "6081" ||
      specChar1 == "6084"
    ) {
      if (specChar2 == "6086" || specChar2 == "6087") {
        this.setState({
          specChar1: specChar1,
          specChar2: specChar2,
          isSpecChar: false,
        });
      }
    }

    console.log("New: " + getTyping.length);
    console.log("Old: " + this.state.oldInput.length);
    if (getTyping.length < this.state.oldInput.length) {
      this.setState({
        isCorrect: false,
      });
    }

    this.setState({
      correct: index,
      typingPercent: index * 100 / this.state.text.length,
    },()=>{
      console.log("Percentage: ", this.state.typingPercent);
    });
  }

  