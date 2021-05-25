import React from 'react'
import emailjs from 'emailjs-com';
class AdminSpeceficPage extends React.Component{
    constructor(props){
        super(props)   
        this.state = {
            loggedInUserRole: this.props.loggedInUserRole,
        }
    }
    render(){
        return(
        <div className='adminSpecificPage-container'>
            <div className='adminSpecificPage-sendEmail'>
            <button onClick={()=>{emailjs.send("service_c02xz3j","template_j3hykjj",{to_name:'jeffry71510@gmail.com'},"user_l5iqJQOFtkuJlrm5bzM8J")}}>test</button>
            </div>
        </div>
        )
    }
}
export default AdminSpeceficPage
