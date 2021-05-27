import React from 'react'
import axios from 'axios'
import MessageInput from './messageInput/messageInput' //tyler




class MessageHolder extends React.Component{
    constructor(props){
        super(props)
        this.state={
            arrOfMessages: [],
            socket : this.props.socket
        }    
        this.postMessage = this.postMessage.bind(this)
    }   
    
    componentDidMount(){
        this.state.socket.on("newShoutout", (message, user) => {
            const newMessage = {message:message, user:user}
            const newArrayOfMessages = this.state.arrOfMessages
            newArrayOfMessages.push(newMessage)
            this.setState({arrOfMessages:newArrayOfMessages})
        });
    }

    postMessage(message){
        let user = this.props.loggedInUserGoogleData.name;
        const newMessage = {message:message, user:user}
        const newArrayOfMessages = this.state.arrOfMessages
        newArrayOfMessages.push(newMessage)
        this.setState({arrOfMessages:newArrayOfMessages})
        const messageToSend = {
            message:message,
            user:user,
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
                    <span className='username'>{message.user}: </span>
                    <span className='single-message-content'>{message.message}</span>
                </div>
            )
            })
        return(
            <>
            <div className='messageContainer'>{messages}</div>
            {this.props.loggedInUserRole !== null && this.props.currentEvent.ongoing &&
                <MessageInput
                    postMessage = {this.postMessage}
                    socket = {this.state.socket}
                    user = {this.props.loggedInUserGoogleData.name}
                />}
            {!this.props.currentEvent.ongoing && <span id='noEventMessage'>No Event Currently Ongoing.</span>}
            </>
        )
    }
}
export default MessageHolder