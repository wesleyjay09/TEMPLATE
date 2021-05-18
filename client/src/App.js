import React from 'react'
import HomeLoginBtn from './components/loginFeatures/homeLoginBtn' //tyler
import HomeLogoutBtn from './components/loginFeatures/homeLogoutBtn' //tyler
import TopBar from './components/topBar/topbar' //tyler
import MessageHolder from './components/messageHolder/messageHolder'//tyler
class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      loggedInUserGoogleData: null,
      loggedInUserRole: null,
    }
  
  // bindings for functions
    this.logInWithGoogleAuthentication = this.logInWithGoogleAuthentication.bind(this)
  }
    // functions
  logInWithGoogleAuthentication(data1,data2){
    this.setState({
      loggedInUserGoogleData: data1,
      loggedInUserRole: data2
    })
    console.log(this.state.loggedInUserGoogleData)
    console.log(this.state.loggedInUserRole)
  }


  // end of functions 
  render(){
    return (
      <div className='App'>
        {this.state.loggedInUserGoogleData === null && <HomeLoginBtn 
        logInWithGoogleAuthentication = {this.logInWithGoogleAuthentication}
        />}
        {this.state.loggedInUserGoogleData !== null&& <HomeLogoutBtn 
        logInWithGoogleAuthentication = {this.logInWithGoogleAuthentication}
        />}
        <TopBar
        loggedInUserGoogleData = {this.state.loggedInUserGoogleData}
        loggedInUserRole = {this.state.loggedInUserRole}
        />
        <MessageHolder 
        loggedInUserGoogleData = {this.state.loggedInUserGoogleData}
        loggedInUserRole = {this.state.loggedInUserRole}
        />
      </div>
    );
  }
}

export default App;
