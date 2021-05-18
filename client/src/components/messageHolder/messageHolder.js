import React from 'react'

class MessageHolder extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <div className='messageContainer'>
                <h1>THIS IS WHERE THE MESSAGES WILL BE DISPLAYED</h1>
            </div>
        )
    }
}
export default MessageHolder