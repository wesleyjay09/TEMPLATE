import React from 'react'
import axios from 'axios'
import { GoogleLogin } from 'react-google-login'

// this is the clientId for the login feature -- this is connected to the main controller google acc
const clientId = '5498314317-vrpiu36pegc5t2kkeo7sq349gb816dtg.apps.googleusercontent.com'

// this is tied to the landing page login btn, when clicked it checks whether or not it was successful
function Login(props){
    // if it was successful then do this
    const onSuccess = (res1) =>{
        try {
            axios.get('http://localhost:8000/api/example')
            .then(res2 =>{
                const userRole = res2.data.data
                props.logInWithGoogleAuthentication(res1.profileObj,userRole)
            })
        } catch (err) {
            props.logInWithGoogleAuthentication(res1.profileObj)
            window.alert('Login Failed, please contact the site admin for further instructions.')
        }
    };
    // otherwise do this
    const onFailure = (res) =>{
        window.alert('Login Failed, please contact the site admin for further instructions.')
        // There isnt much happining here just saying its a failure
        props.logInWithGoogleAuthentication(null)
    };
// this is just a base return with the login button connect to google login feature, hard to change 
    return(
        <div>
            <GoogleLogin
            clientId={clientId}
            // render={renderProps => (
            //     <button onClick={renderProps.onClick} className='googleLoginBtn' disabled={renderProps.disabled}>This is my custom Google button</button>
            //   )}
            buttonText='Login'
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            className={'googleLoginBtn'}
            />
        </div>
    )
}

export default Login