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
        <button className='adminSpeceficBtn'>admin test btn</button>
        )
    }
}
export default AdminSpeceficBtn
