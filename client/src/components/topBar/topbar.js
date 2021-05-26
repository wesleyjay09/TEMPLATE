import React from 'react'
class Topbar extends React.Component{
    constructor(props){
        super(props)   

        this.state = {

        }
    }
    render(){
        return(
            <div className='topBarContainer'>
                {this.props.loggedInUserRole === 'Admin'&&<button className='topBarButton' id='adminButton'onClick={()=>{this.props.changeTab('admin')}}>Admin</button>}
                <button className='topBarButton' id='pending' onClick={()=>{this.props.changeTab('pending')}}>Pending</button>
                <button className='topBarButton' id='recentEvents' onClick={()=>{this.props.changeTab('recentEvents')}}>Recent Events</button>
                <button className='topBarButton' id='cohortData' onClick={()=>{this.props.changeTab('cohortData')}}>Cohort Data</button>
                <button className='topBarButton' id='shoutoutsButton' onClick={()=>{this.props.changeTab('openevent')}}>Open Shoutout </button> 
                <button className='topBarButton' id='userProfileButton' onClick={()=>{this.props.changeTab('myPost')}}>P</button>
            </div>
        )
    }
}
export default Topbar