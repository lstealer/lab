import React, {useEffect, useState} from "react";
import Animation from "../practice/Animation";
import Speed from "../practice/Speed";
import Preview from "../practice/Preview";
import {Form} from "react-bootstrap";
import TypingView from "../practice/TypingView";
import ContentView from "../practice/ContentView";
import SweetAlert from "react-bootstrap-sweetalert";
import soloStyle from "./soloStyle";
import Axios from "axios";
import {onChange, onKeyDown2} from "./coreAction";
import io from "socket.io-client";
import queryString from "query-string";
import {onFocus, onPrevent} from "../practice/onAction";


let socket
const Test = ({location}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'localhost:5000';
    const [typingPercent, setPercentage] = useState(0);
    const [sec, setSec] = useState(0);
    const [symbol, setSymbol] = useState("");
    const [text, setText] = useState("");
    const [userInput, setUserInput] = useState("");
    const [isCorrect, setIsCorrect] = useState("");
    const [oldInput, setOldInput] = useState("");
    const [finished, setFinished] = useState("");
    const [myTime, setMyTime] = useState("");
    const [color, setColor] = useState("");
    const [isSpecChar, setIsSpecChar] = useState("");
    const [char, setChar] = useState("");
    const [correct, setCorrect] = useState("");
    const [specChar1, setSpecChar1] = useState("");
    const [specChar2, setSpecChar2] = useState("");
    const [incorrect, setIncorrect] = useState("");
    const [accuracy, setAccuracy] = useState(0);
    const [isAlert, setIsAlert] = useState("");
    const [contentDetail,setContentDetail]=useState({});
    const [start,setStarting]=useState(false);
    const [countdown,setCountdown]=useState(30);
    const [time,setTime]=useState(10000)
    useEffect(() => {
            const {name, room} = queryString.parse(location.search);
            socket = io(ENDPOINT)

            setName(name);
            setRoom(room);

            // socket.emit('join', {name, room},()=>{
            //
            // });
            socket.emit('solo',name,()=>{});
            return  ()=>{
                socket.emit('disconnect');
                socket.off();
            }
        }, [ENDPOINT, location.search])


    useEffect(()=>{
        socket.on('message',(message)=>{
            console.log(message);
        });
    })
    useEffect(()=>{
        socket.on('content',(message)=>{
            setContentDetail(message.content);
            setText(message.content.data.khContent)
        });
    })
    useEffect(()=>{
        socket.on('countdown',(message)=>{
            setCountdown(message.countdown);
            console.log("countdown"+countdown);
        });
    });
    useEffect(()=>{
        socket.on('time',(message)=>{
            setTime(message.time);
            console.log("time"+time);
        });
    });

    const sendMessage=(event)=>{
        socket.emit('sendCurrent',{wpm:100,percentage:Math.round(11.5)},()=>{})
    }

    return (
        <div>
            <div className="mode-title">
                <h2>ប្រកួតម្នាក់ឯង</h2>
            </div>
            <div className="container my-practice">
                <div className="row">
                    <div className="col-md-10">
                        <div className="row mt-2">
                            <div
                                className="col-md-2"
                                style={soloStyle[1]}
                            >
                                <h4>
                                    <span>Dara</span>
                                </h4>
                            </div>
                            <div className="col-md-8 px-0">
                                {/*typingPercent*/}
                                <Animation percent={typingPercent}/>
                            </div>
                            <div className="col-md-2">
                                <h4
                                    style={soloStyle[2]}
                                >
                    <span>
                      {/*  sec and symbol */}
                        <Speed
                            sec={sec}
                            symbols={symbol}
                        />
                    </span>
                                </h4>
                            </div>
                        </div>
                        <h2
                            style={soloStyle[3]}
                        >
                            អត្ថបទ
                        </h2>
                        {/* hint for user*/}
                        <Preview
                            text={text}
                            userInput={userInput}
                        />
                        <h2
                            style={soloStyle[4]}
                        >
                            សូមវាយបញ្ចូលទីនេះ
                        </h2>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <textarea
                                    style={soloStyle[0]}
                                    onContextMenu={onPrevent.bind(this)}
                                    onPaste={onPrevent.bind(this)}
                                    onCopy={onPrevent.bind(this)}
                                    onCut={onPrevent.bind(this)}
                                    autoFocus
                                    onInput={sendMessage.bind(this)}
                                    onChange={onChange.bind(this)}
                                    onKeyDown={onKeyDown2.bind(this)}
                                ></textarea>
                                <Form.Text className="text-muted">
                                    {/*We'll never share your email with anyone else.*/}
                                </Form.Text>
                            </Form.Group>
                        </Form>
                    </div>
                    <div className="col-md-2">
                        <ContentView
                            myTime={myTime}
                            color={color}
                            isSpecChar={isSpecChar}
                            char={char}
                            correct={correct}
                            specChar1={specChar1}
                            specChar2={specChar2}
                            inCorrect={incorrect}
                            accuracy={accuracy}
                        />
                    </div>
                </div>

                {isAlert ? (
                    <SweetAlert success title="បានបញ្ចប់!" onConfirm={true} className="sweet-alert">
                        សូមចុច <span>OK</span> ដើម្បីពិនិត្យលទ្ធផល!
                    </SweetAlert>
                ) : ""}
            </div>
        </div>
    );
}
export default Test;