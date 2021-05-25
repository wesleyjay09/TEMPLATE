import React from 'react'

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
            <div className='adminSpecificPage-sendEmail'></div>
        </div>
        )
    }
}
export default AdminSpeceficPage
