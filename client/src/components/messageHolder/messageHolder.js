import React from 'react'
import axios from 'axios'
import MessageInput from './messageInput/messageInput' //tyler

class MessageHolder extends React.Component{
    constructor(props){
        super(props)
        this.state={
            arrOfMessages: [],
        }    
        this.postMessage = this.postMessage.bind(this)
    }     
    postMessage(message){
        const newMessage = {message:message}
        const newArrayOfMessages = this.state.arrOfMessages
        newArrayOfMessages.push(newMessage)
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
            return(
                <div className='single-message-container'>  
                    <div className='single-message-content'>{message.message}</div>
                </div>
            )
            })
        if(this.props.loggedInUserRole !== null){
            
        }
        return(
            <>
            <div className='messageContainer'>{messages}</div>
            {this.props.loggedInUserRole !== null && 
                <MessageInput
                    postMessage = {this.postMessage}
                />}
            </>
        )
    }
}
export default MessageHolder