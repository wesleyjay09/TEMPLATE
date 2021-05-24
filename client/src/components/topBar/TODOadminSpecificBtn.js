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
            <button className='topBarButton' id='adminButton'onClick={()=>{
                this.props.changeTab('admin')
            }}>Admin</button>
            <button className='topBarButton' id='pending'>Pending</button>
            <button className='topBarButton' id='recentEvents'>Recent Events</button>
            <button className='topBarButton' id='cohortData'>Cohort Data</button>
            <button className='topBarButton' id='shoutoutsButton'>Open Shoutout</button> 
            <button className='topBarButton' id='userProfileButton'>P</button>

        </div>
        )
    }
}
export default AdminSpeceficBtn
