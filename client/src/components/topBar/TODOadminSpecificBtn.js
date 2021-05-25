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
            <button className='topBarButton' id='adminButton' onClick={()=>{
                this.props.changeTab('admin')
                    }}>Admin
            </button>
            <button className='topBarButton' id='pending' onClick={()=>{
                this.props.changeTab('pending')
                    }}>Pending
            </button>
            <button className='topBarButton' id='recentEvents' onClick={()=>{
                this.props.changeTab('recent')
                    }}>Recent Events
            </button>
            <button className='topBarButton' id='cohortData' onClick={()=>{
                this.props.changeTab('about me')
                    }}>Cohort Data
            </button>
            <button className='topBarButton' id='shoutoutsButton' onClick={()=>{
                this.props.changeTab('openevent')
            }}>Open Shoutout </button> 
            <button className='topBarButton' id='userProfileButton' onClick={()=>{
                this.props.changeTab('postMade')
                    }}>P
            </button>

        </div>
        )
    }
}
export default AdminSpeceficBtn
