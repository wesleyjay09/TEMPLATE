import React from 'react'

class AdminSpeceficBtn extends React.Component{
    constructor(props){
        super(props)   

        this.state = {
            loggedInUserRole: this.props.loggedInUserRole,
        }
    }
    render(){
        return(
        <div>
            <button className='topBarButton' id='adminButton' >Admin</button>
            <button className='topBarButton' id='shoutoutsButton'>Shoutouts</button>
            <button className='topBarButton' id='userProfileButton'>P</button>
        </div>
        )
    }
}
export default AdminSpeceficBtn
