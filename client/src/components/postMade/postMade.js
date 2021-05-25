import React from 'react'
import axios from 'axios'


class postMade extends React.Component{
    constructor(props){
        super(props)
        this.state={
            arrOfMessages: [],
        }    
       
    }     
   
    render(){
       
        if(this.state.arrOfMessages.length === 0 && this.props.id !== null){
            //change call to include id why do we need user role
            axios.get(`http://localhost:8000/api/messages/${this.props.id}`)
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
        return(
            <>
            <div className='messageContainer'>{messages}</div>
            
            </>
        )
    }
}
export default postMade