import React from 'react'
import axios from 'axios'
import MessageMaker from './MessageMaker'
class RecentEvents extends React.Component{
    constructor(props){
        super(props)
        this.state={
            arrOfMessages: [],
           
        }    
       
    }     
   
    render(){
       
        if(this.state.arrOfMessages.length === 0 && this.props.id !== null){
            axios.get(`http://localhost:8000/api/messages/${this.props.cohortID}`)
                .then(res =>{
                    const arrOfMessages = res.data;
                    this.setState({arrOfMessages:arrOfMessages})
                })
        }
        const eventList = {}
        this.state.arrOfMessages.forEach((elem)=>{
            if(!eventList[elem.event]){
              eventList[elem.event]= [];
              eventList[elem.event].push(elem.msg) 
            }else{
              eventList[elem.event].push(elem.msg) 
            }
          }
          )
            
            
        return(
           <h1>hi</h1>
            // for (let key in eventList) {
                
            //     key.map(elem =>{
                    
            //             MessageMaker(elem = {elem})
                    
                    
            //     })
            // }
            
        )
    }
}
export default RecentEvents