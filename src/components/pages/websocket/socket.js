import SockJsClient from 'react-stomp';
import React from "react";

const socket=()=>{
return(<SockJsClient url='http://localhost:8080/websocket-chat/'
              topics={['/topic/user']}
              onConnect={() => {
                  console.log("connected");
              }}
              onDisconnect={() => {
                  console.log("Disconnected");
              }}
              onMessage={(msg) => {
                  console.log(msg);
              }}
              ref={(client) => {
                  this.clientRef = client
              }}/>)
}
export default socket;