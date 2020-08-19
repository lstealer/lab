import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Preview from "./Preview";
import Speed from "./Speed";
import KeyView from "./KeyView";
import "../../../App.css";
import SweetAlert from "react-bootstrap-sweetalert";
import Result from "./Result";
import "./Practice.css";
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
} from "./onAction";
import ContentView from "./ContentView";
import TypingView from "./TypingView";
import { bindActionCreators } from "redux";
import { getContents } from "../../../redux/actions/contentAction/contentAction";
import { connect } from "react-redux";
import Animation from "./Animation";
import { baseURL } from "../../../config/API";
import Axios from "axios";

class Practice extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = {
      temp: [],
      text: "",
      // text: "កខគឃង",
      // text:
      //   "​កាំកុំកុះកេះកោះ ប្រទេសកម្ពុជាមានផ្ទៃដី ធំទូលំទូលាយ លាតសន្ធឹងនៅឆ្នេរអាស៊ីអាគ្នេយ៍",
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
      time: 1,
      mainTime: 1,
      isResult: false,
      isAlert: false,
      typingPercent: 0,
      correct: 0,
      inCorrect: 0,
      n: 0,
      author: "",
      title: "",
      desc: "",
      bookImage: "",
    };
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
    const text = await Axios.get(baseURL);
      // .then((result) => {})
      // .catch((error) => {});

    this.setState({
      text: text.data.data.khContent,
      title: text.data.data.title,
      author: text.data.data.author,
      desc: text.data.data.description,
      bookImage: text.data.data.image,
    });

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
      <SweetAlert
        success
        title="បានបញ្ចប់!"
        onConfirm={this.onConfirm.bind(this)}
        className="sweet-alert"
      >
        សូមចុច <span>OK</span> ដើម្បីពិនិត្យលទ្ធផល!
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

    if(this.state.isResult){
      const myHistory = {
        userId: 3,
        wpm: 100,
        rank: 1,
        contentId: 1,
        accuracy: 99,
      }
      Axios.post("/history",myHistory).then(result=>{
        console.log("#Result: ", result)
      }).catch(error=>{
        console.log("#Error: ", error)
      })
    }
    return (
      <div>
        <div className="mode-title">
          <h2>អនុវត្ត</h2>
        </div>
        <div className="container my-practice">
          <div className="row">
            <div className="col-md-10">
              <div className="row mt-2">
                <div
                  className="col-md-2"
                  style={{ textAlign: "right", paddingTop: "40px" }}
                >
                  <h4>
                    <span>Dara</span>
                  </h4>
                </div>
                <div className="col-md-8 px-0">
                  <Animation percent={this.state.typingPercent} />
                </div>
                <div className="col-md-2">
                  <h4 style={{ textAlign: "left", paddingTop: "40px" }}>
                    <span>
                      <Speed
                        sec={this.state.sec}
                        symbols={this.state.symbols}
                      />
                    </span>
                  </h4>
                </div>
              </div>
              <h2
                style={{
                  fontFamily: "Nokora",
                  // fontWeight: "bold",
                  color: "rgb(0,119,245)",
                }}
              >
                អត្ថបទ
              </h2>
              <Preview
                text={this.state.text}
                userInput={this.state.userInput}
              />
              <h2
                style={{
                  fontFamily: "Nokora",
                  // fontWeight: "bold",
                  marginTop: "25px",
                }}
              >
                សូមវាយបញ្ចូលទីនេះ
              </h2>
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
                  <h2
                    style={{
                      fontFamily: "Nokora",
                      // fontWeight: "bold",
                      marginTop: "25px",
                      color: "rgb(2,254,82)",
                    }}
                  >
                    គំរូក្តារចុច
                  </h2>
                  <h3>
                    <KeyView
                      viewKey={this.state.char[this.state.correct]}
                      nextKey={this.state.char[this.state.correct + 1]}
                    />
                  </h3>
                  <h6>
                    <span style={{ color: "rgb(177,177,177" }}>
                      NiDA - V 1.0 - 1/9/05 (Window OS)
                    </span>
                  </h6>
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
        </div>
        <div
          style={{
            backgroundImage: "linear-gradient(to right, #0073ff, #00000000)",
            textAlign: "left",
            padding: "15px",
            color: "#ffffff",
            visibility: `${this.state.isResult ? "visible" : "hidden"}`,
            marginBottom: "15px",
          }}
        >
          <Result
            mainTime={mainTime}
            wpm={wpm}
            total={this.state.correct + this.state.inCorrect}
            myAccuracy={myAccuracy}
            index={this.state.correct}
            inCorrect={this.state.inCorrect}
            title={this.state.title}
            author={this.state.author}
            desc={this.state.desc}
            bookImage={this.state.bookImage}
          />
          <p ref={this.myRef}></p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //*************************** */
    data: state.contentReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getContents,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Practice);
