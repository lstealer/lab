import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Preview from "../practice/Preview";
import Speed from "../practice/Speed";
import KeyView from "../practice/KeyView";
import "../../../App.css";
import SweetAlert from "react-bootstrap-sweetalert";
import Result from "../practice/Result";
import {
  onPrevent,
  onFocus,
  onRestart,
  onKeyDown,
  onKeyUp,
  onChange,
  setTimer,
  onFinish,
  countCorrectSymbols,
  onConfirm,
  handleScrollToElement,
} from "../practice/onAction";
import ContentView from "../practice/ContentView";
import TypingView from "../practice/TypingView";
import Axios from "axios";
import { baseURL } from "../../../config/API";

const initState = {
  // text: "កខគឃង",
  text:
    "​កាំកុំកុះកេះកោះ ប្រទេសកម្ពុជាមានផ្ទៃដី ធំទូលំទូលាយ លាតសន្ធឹងនៅឆ្នេរអាស៊ីអាគ្នេយ៍",
  // text: "កាំខុំគុះឃេះងោះព្រះរាជាណាចក្រកម្ពុជា ដោយនាមសាមញ្ញ កម្ពុជា (កាំ-ពុ-ជា) ឬ ប្រទេសខ្មែរ ជារាជាធិបតេយ្យមួយស្ថិតនៅផ្នែកខាងត្បូងនៃឧបទ្វីបឥណ្ឌូចិន ក្នុងអនុតំបន់អាស៊ីអាគ្នេយ៍ ។ កម្ពុជាមានផ្ទៃក្រឡាសរុប ១៨១,០៣៥ សហាតិមាត្រការ៉េ ។",
  userInput: "",
  oldInput: "",
  symbols: 0,
  sec: 0,
  char: [],
  getTyping: [],
  color: "lightgray",
  isCorrect: true,
  started: false,
  finished: false,
  specChar1: "",
  specChar2: "",
  isSpecChar: true,
  accuracy: 0,
  time: 100,
  mainTime: 100,
  isResult: false,
  isAlert: false,
  typingPercent: 0,
  correct: 0,
  inCorrect: 0,
};

export default class Solo extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = initState;
  }
  onPrevent = onPrevent.bind(this);
  onFocus = onFocus.bind(this);
  onRestart = onRestart.bind(this);
  onKeyDown = onKeyDown.bind(this);
  onKeyUp = onKeyUp.bind(this);
  onChange = onChange.bind(this);
  setTimer = setTimer.bind(this);
  onFinish = onFinish.bind(this);
  countCorrectSymbols = countCorrectSymbols.bind(this);
  onConfirm = onConfirm.bind(this);
  handleScrollToElement = handleScrollToElement.bind(this);

  async componentWillMount() {
    const text = await Axios.get(baseURL)
    this.setState({
      text: text.data.data.khContent,
    })
    
    //this.props.getContents();
    console.log("Length: " + this.state.text.length);
    //console.log(this.state.text.substr(0, this.state.text.length-1));
    this.state.text.split("").forEach((char) => {
      //console.log(char);
      this.state.char.push(char.charCodeAt(0));
    });
    //clearInterval(this.myInterval);
  }
  
  componentDidMount() {
    this.focusInput.focus();
    this.myInterval = setInterval(() => {
      this.setState((prev) => ({
        time: prev.time - 1,
      }));
      if (this.state.time == 0) {
        this.setState({
          //mainTime: this.state.mainTime - this.state.time,
          finished: true,
          isAlert: true,
        });
        clearInterval(this.myInterval);
        clearInterval(this.interval);
        //window.scrollBy(0, 200);
      }
    }, 1000);
  }

  render() {
    let alertResult = (
      <SweetAlert success title="បញ្ចប់!" onConfirm={this.onConfirm.bind(this)}>
        សូមចុច OK ដើម្បីពិនិត្យលទ្ធផល!
      </SweetAlert>
    );
    let myTime = `${String(Math.floor(this.state.time / 60)).padStart(
      2,
      "0"
    )}:${String(this.state.time % 60).padStart(2, "0")}`;
    let mainTime = `${String(Math.floor(this.state.mainTime / 60)).padStart(
      2,
      "0"
    )}:${String(this.state.mainTime % 60).padStart(2, "0")}`;

    let myAccuracy = `${this.state.accuracy.toFixed(2)}`;
    let wpm = <Speed sec={this.state.sec} symbols={this.state.symbols} />;
    return (
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-md-10">
            <p>ប្រកួតម្នាក់ឯង</p>
            <h4 style={{ textAlign: "right" }}>
            <Speed sec={this.state.sec} symbols={this.state.symbols} />
            </h4>
            <h3>អត្ថបទ</h3>
            <Preview text={this.state.text} userInput={this.state.userInput} />

            <h3>សូមវាយបញ្ចូលទីនេះ</h3>
            <Form>
              <Form.Group controlId="formBasicEmail">
                {/*<Form.Label>Email address</Form.Label>*/}

                <TypingView
                  onPrevent={this.onPrevent}
                  onFocus={this.onFocus}
                  isCorrect={this.state.isCorrect}
                  userInput={this.state.userInput}
                  oldInput={this.state.oldInput}
                  finished={this.state.finished}
                  onChange={this.onChange}
                  onKeyDown={this.onKeyDown}
                  onKeyUp={this.onKeyUp}

                />
                <Form.Text className="text-muted">
                  {/*We'll never share your email with anyone else.*/}
                </Form.Text>
                <h3>
                  <KeyView
                  viewKey={this.state.char[this.state.correct]}
                  nextKey={this.state.char[this.state.correct + 1]}
                />
                </h3>
                
              </Form.Group>
            </Form>
          </div>
          <div className="col-md-2">
           <ContentView 
            myTime={myTime} 
            color={this.state.color} 
            isSpecChar={this.state.isSpecChar}
            char={this.state.char}
            correct={this.state.correct}
            specChar1={this.state.specChar1}
            specChar2={this.state.specChar2}
            inCorrect={this.state.inCorrect}
            accuracy={this.state.accuracy}
           />
          </div>
        </div>

        {this.state.isAlert ? alertResult : ""}
        <div
          //ref={this.myRef}
          className="row"
          style={{
            border: "1px solid lightgray",
            borderRadius: "15px",
            textAlign: "left",
            padding: "15px",
            visibility: `${this.state.isResult ? "visible" : "hidden"}`,
          }}
        >
          <div className="col-md-12">
            <Result
              mainTime={mainTime}
              wpm={wpm}
              total={this.state.correct + this.state.inCorrect}
              myAccuracy={myAccuracy}
              index={this.state.correct}
              inCorrect={this.state.inCorrect}
            />
          </div>
        </div>
        <div className="row">
          <p ref={this.myRef}></p>
        </div>
      </div>
    );
  }
}
