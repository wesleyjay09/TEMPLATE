import React from 'react'
import axios from 'axios'
import MessageInput from './messageInput/messageInput' //tyler

import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:3000");


class MessageHolder extends React.Component{
    constructor(props){
        super(props)
        this.state={
            socket : socket,
            arrOfMessages: [],
        }    
        this.postMessage = this.postMessage.bind(this)
    }   
    
    componentDidMount(){
        socket.on("newShoutout", (message, user) => {
            const newMessage = {message:message}
            const newArrayOfMessages = this.state.arrOfMessages
            newArrayOfMessages.push({user, newMessage})
            this.setState({arrOfMessages:newArrayOfMessages})
        });
    }

    postMessage(message){
        let user = this.props.loggedInUserGoogleData.name;
        const newMessage = {message:message}
        const newArrayOfMessages = this.state.arrOfMessages
        newArrayOfMessages.push({user, newMessage})
        this.setState({arrOfMessages:newArrayOfMessages})
        const messageToSend = {
            message:message,
            role:this.props.loggedInUserRole
        }
        axios.post('http://localhost:8000/api/messages',messageToSend)
    }
    render(){
        console.log(this.state.arrOfMessages)
        if(this.props.loggedInUserRole === null && this.state.arrOfMessages.length !== 0){
            this.setState({arrOfMessages: []})
        }
        if(this.state.arrOfMessages.length === 0 && this.props.loggedInUserRole !== null){
            axios.get(`http://localhost:8000/api/messages/${this.props.loggedInUserRole}`)
                .then(res =>{
                    const arrOfMessages = res.data;
                    this.setState({arrOfMessages:arrOfMessages})
                })
        }
        const messages = this.state.arrOfMessages.slice(0).reverse().map(message=>{
            console.log(message)
            return(
                <div className='single-message-container'> 
                    <span class='username'>{message.user}: </span>
                    <span className='single-message-content'>{message.newMessage.message}</span>
                </div>
            )
            })
        return(
            <>
            <div className='messageContainer'>{messages}</div>
            {this.props.loggedInUserRole !== null && 
                <MessageInput
                    postMessage = {this.postMessage}
                    socket = {this.state.socket}
                    user = {this.props.loggedInUserGoogleData.name}
                />}
            </>
        )
    }
}
export default MessageHolder