import React from 'react'
import HomeLoginBtn from './components/loginFeatures/homeLoginBtn' //tyler
import HomeLogoutBtn from './components/loginFeatures/homeLogoutBtn' //tyler
import TopBar from './components/topBar/topbar' //tyler
import MessageHolder from './components/messageHolder/messageHolder'//tyler
import PostMade from './components/postMade/postMade'
class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      loggedInUserGoogleData: null,
      loggedInUserRole: null,
      currentTab: 'openevent',
      //change this to be whatever id corresponds to gmail
      userId: 2
      //img
    }
  
  // bindings for functions
    this.changeTab = this.changeTab.bind(this)
    this.logInWithGoogleAuthentication = this.logInWithGoogleAuthentication.bind(this)
  }
    // functions
  changeTab(str){
    this.setState({currentTab: str}
    )
   
  }

  logInWithGoogleAuthentication(data1,data2){
    this.setState({
      loggedInUserGoogleData: data1,
      loggedInUserRole: data2
    })
    console.log(this.state.loggedInUserGoogleData);
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
        changeTab = {this.changeTab}
        />
        {this.state.currentTab === "openEvent" && <MessageHolder 
        loggedInUserGoogleData = {this.state.loggedInUserGoogleData}
        loggedInUserRole = {this.state.loggedInUserRole}
        />}
        {this.state.currentTab === "postMade" && <PostMade 
        id = {this.state.userId}
        />}
        {this.state.currentTab === ""

        }

      </div>
    );
  }
}

export default App;
