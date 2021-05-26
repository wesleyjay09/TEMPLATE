import React from 'react'
import emailjs from 'emailjs-com';
class AdminSpeceficPage extends React.Component{
    constructor(props){
        super(props)   
        this.state = {
            loggedInUserRole: this.props.loggedInUserRole,
        }
    }
    
    // componentDidMount(){
    //     // 
    //     // form.addEventListener('submit', this.addUser(form.value))
    // }



    addUser(event){
        event.preventDefault();
        let input = document.querySelector('#addUserFormInput');
        emailjs.send("service_c02xz3j","template_j3hykjj",{to_name:input.value},"user_l5iqJQOFtkuJlrm5bzM8J");
        input.value = "";
    }

    render(){
        return(
        <div className='adminSpecificPage-container'>
            <form id='addUserForm' onSubmit={this.addUser}>
                <span>Add New User: </span>
                <input id='addUserFormInput' type="text" placeholder='Enter Email...'></input>
                <input type="submit"></input>
            </form>
        </div>
        )
    }
}
export default AdminSpeceficPage
