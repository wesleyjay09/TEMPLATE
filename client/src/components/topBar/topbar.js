import React from 'react'
import AdminSpeceficBtn from './TODOadminSpecificBtn'
class Topbar extends React.Component{
    constructor(props){
        super(props)   

        this.state = {

        }
    }
    render(){
        return(
            <div className='topBarContainer'>
                {this.props.loggedInUserRole === 'Admin'&&<AdminSpeceficBtn loggedInUserRole={this.props.loggedInUserRole}/>}
            </div>
        )
    }
}
export default Topbar