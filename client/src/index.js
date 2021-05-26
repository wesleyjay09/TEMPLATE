import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


//socket.io
// import openSocket from "socket.io-client";
// const socket = openSocket("http://localhost:3000");

// const newShoutout = (shoutoutData) => {
//   socket.emit('newShoutout', shoutoutData) 
// }

// socket.on('id', (id) => {
//   console.log('ID RECIEVED: ' + id)
// })


//end socket.io

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
