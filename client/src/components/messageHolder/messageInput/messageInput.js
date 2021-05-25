import React from 'react'
import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:3000");

class MessageInput extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render(){
        return(
            <form id="MessageInput" onKeyDown={(event) => 
                {
                    if(event.keyCode === 13){
                        if(event.target.value === ''){
                        event.preventDefault()
                        window.alert('please provide a message to send')
                    } else {
                        socket.emit('newShoutout', event.target.value) 
                        this.props.postMessage(event.target.value)
                        event.target.value = ''
                        event.preventDefault()
                    }
                }
                else {
                    this.setState({message:this.state.message + event.key})
                }}}>
                <textarea id="message-input-box" type="text" placeholder="Let someone know how awesome you think they are!"/>
            </form>   
        )
    }
}
export default MessageInput