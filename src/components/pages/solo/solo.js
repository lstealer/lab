import React, {useEffect, useState} from "react";
import Animation from "./Animation";
import Preview from "../practice/Preview";
import {Form} from "react-bootstrap";
import TypingView from "../practice/TypingView";
import ContentView from "./ContentView";
import SweetAlert from "react-bootstrap-sweetalert";
import soloStyle from "./soloStyle";
import io from "socket.io-client";
import queryString from "query-string";
import {onFocus, onPrevent} from "../practice/OnAction";
import Animated from "./Animated";
import Countdown from "./Countdown";


let socket
const Test = ({location}) => {
    const [user, setUser] = useState([]);
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'localhost:5000';
    const [typingPercent, setPercentage] = useState(0);
    let [sec, setSec] = useState(0);
    const [symbol, setSymbol] = useState("");
    const [text, setText] = useState("Loading");
    const [userInput, setUserInput] = useState("");
    const [isCorrect, setIsCorrect] = useState("");
    const [oldInput, setOldInput] = useState("");
    const [finished, setFinished] = useState("");
    const [myTime, setMyTime] = useState("");
    const [color, setColor] = useState("");
    const [isSpecChar, setIsSpecChar] = useState(true);
    const [char, setChar] = useState("");
    let [correct, setCorrect] = useState(0);
    const [specChar1, setSpecChar1] = useState("");
    const [specChar2, setSpecChar2] = useState("");
    let [incorrect, setIncorrect] = useState(1);
    const [accuracy, setAccuracy] = useState(0);
    const [isAlert, setIsAlert] = useState("");
    const [contentDetail, setContentDetail] = useState({});
    const [start, setStarting] = useState(false);
    const [countdown, setCountdown] = useState(30);
    const [time, setTime] = useState(10000);
    const [wpm, setWpm] = useState(0);
    const [txtValue, setTxtValue] = useState('');
    let userTest=[];

    useEffect(() => {
        const {name, room} = queryString.parse(location.search);
        socket = io(ENDPOINT)

        setName(name);
        setRoom(room);

        // socket.emit('join', {name, room},()=>{
        //
        // });
        socket.emit('solo', name, () => {
        });
        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [ENDPOINT, location.search])


    useEffect(() => {
        socket.on('message', (message) => {

            let newUser={user:message.user,wpm:message.wpm,percentage:message.percentage}
            let userMap = userTest.map((item) =>{
                return item.user === message.user ?
                    newUser : item;}
            )
            userTest=userMap;
            setUser(
                userMap
            )

        });
    },[user.percentage])

    useEffect(() => {
        socket.on('content', (message) => {
            setContentDetail(message.content);
            setText(message.content.data.khContent);

        });
    }, [text])
    useEffect(() => {
        socket.on('countdown', (message) => {
            setCountdown(message.countdown);
        });
        setSpecChar1(text[0])
        setSpecChar2(text[1])
    },[countdown]);
    useEffect(() => {
        socket.on('time', (message) => {
            setTime(message.time);
            if (time === 1) {
                socket.emit('disconnect');
                socket.off();
                console.log("Time Up");
            }
        });
    },[time]);
    useEffect(()=>{
        sendMessage()
    },[typingPercent,wpm])
    useEffect(() => {
        socket.on('roomData', (message) => {
            let a = Object.assign(user, []);
            message.users.forEach((message) => {
                if(!a.some(a=>a.user===message))
                a.push({user: message, wpm: 0, percentage:0})
            })
            userTest=a;
            setUser(a);
        })
    },[user])
    const onKeyDown2 = function (e) {
        setOldInput(e.target.value);
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
    const sendMessage = (event) => {
        socket.emit('sendCurrent', {wpm: Math.round(wpm),
            percentage: txtValue===text?100: Math.round(typingPercent)}, () => {
        })
    }


    const onChange = (event) => {
        let sc1, sc2;
        event.preventDefault()
        setIsSpecChar(true)
        const typeTimer = setInterval(() => {
            setSec(sec++);
        }, 1000);
        if (event.target.value === text || time === 0) {
            clearInterval(typeTimer);
        }
        setSymbol(event.target.value.length);
        let temp = event.target.value.split('')
        if (temp[temp.length - 1] !== text[temp.length - 1]) {
            setIncorrect(incorrect+1);
            setTxtValue(oldInput);
             sc1 = text[txtValue.length ];
             sc2 = text[txtValue.length + 1];
            console.log("sc1",sc1,"sc2",sc2);
            setSpecChar1(sc1);
            setSpecChar2(sc2);
            
            
        } else {
            setCorrect(correct+1);
            console.log("Correct:",correct,"Incorrect:",incorrect)
            if (time !== 1) {
                setTxtValue(event.target.value);
                setPercentage((txtValue.length / text.length) * 100)
                 sc1 = text[event.target.value.length ];
                 sc2 = text[event.target.value.length + 1];
                console.log("sc1",sc1,"sc2",sc2);
                setSpecChar1(sc1);
                setSpecChar2(sc2);
            }
            if (symbol !== 0 && sec !== 0) {
                if (event.target.value !== text) {
                    setWpm((symbol / 5) / (sec / 60))
                }
            }
            // let sc1 = text[event.target.value.length];
            // let sc2 = text[event.target.value.length + 1];
            // console.log("sc1",sc1,"sc2",sc2);
            // setSpecChar1(sc1);
            // setSpecChar2(sc2);
            sc1=sc1.charCodeAt(0);
            sc2=sc2.charCodeAt(0);
            console.log("sc1==>",sc1,"sc2==>",sc2);
            if (
                sc1 === 6070 ||
                sc1 === 6075 ||
                sc1 === 6081 ||
                sc1 === 6084
            ) {
                if (sc2 === 6086 || sc2 === 6087) {
                    setIsSpecChar(false);
                }
            }
        }


        if (event.target.value !== text)
            setAccuracy((correct * 100) / (correct + incorrect))
    }
console.log("is SPec Char==>",txtValue.length)
    return (
        <div>
            <div className="mode-title">
                <h2>ប្រកួតម្នាក់ឯង</h2>
            </div>
            <Countdown
                countdown={countdown}
            />
            <div className="container my-practice">
                <div className="row">
                    <div className="col-md-10">
                        {user.map((user) =>
                            <Animated
                                user={user.user}
                                typingPercent={user.percentage}
                                wpm={user.wpm}
                            />)}
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
                                    value={txtValue}
                                    disabled={time === 0 || countdown !== 0 ? true : false}
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
                            time={time}
                            color={color}
                            isSpecChar={isSpecChar}
                            char={char}
                            correct={correct}
                            specChar1={specChar1}
                            specChar2={specChar2}
                            inCorrect={incorrect}
                            accuracy={accuracy}
                        />
                        {/*    */}
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