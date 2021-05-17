import React from 'react'
import HomeLoginBtn from './components/loginFeatures/homeLoginBtn' //tyler
import HomeLogoutBtn from './components/loginFeatures/homeLogoutBtn' //tyler
class App extends React.Component{
  

  render(){
    return (
      <div className='App'>
        <HomeLoginBtn />
        <HomeLogoutBtn />
      </div>
    );
  }
}

export default App;
