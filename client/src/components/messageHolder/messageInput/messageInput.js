import React from 'react'

class MessageInput extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            message: '',
        }
    }
    render(){
        return(
            <form id="MessageInput" onKeyDown={(event) => 
                {
                    if(event.keyCode === 13){
                        if(this.state.message === ''){
                        event.preventDefault()
                        window.alert('please provide a message to send')
                    } else {
                        this.props.postMessage(this.state.message)
                        event.target.value = ''
                        this.setState({message:''})
                        event.preventDefault()
                    }
                }
                else {
                    if(event.keyCode > 47 && event.keyCode < 112)
                    this.setState({message:this.state.message + event.key})
                }}}>
                <input id="message-input-box" type="text" placeholder="post message here"/>
            </form>   
        )
    }
}
export default MessageInput