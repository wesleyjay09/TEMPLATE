import React from 'react'
// this is going to need to be installed just run npm -i
import { GoogleLogin } from 'react-google-login'

// this is the clientId for the login feature -- this is connected to the main controller google acc
const clientId = '5498314317-vrpiu36pegc5t2kkeo7sq349gb816dtg.apps.googleusercontent.com'

// this is tied to the landing page login btn, when clicked it checks whether or not it was successful
function Login(){
    // if it was successful then do this
    const onSuccess = (res) =>{
        // for now i just have the infromation out putted to the console, this will probbably get added to a change state feature for the entire page
        console.log('[Login Success] currentUser:', res.profileObj);
    };
    // otherwise do this
    const onFailure = (res) =>{
        // There isnt much happining here just saying its a failure
        console.log(`[Login failed] res: ${res}`)
    };
// this is just a base return with the login button connect to google login feature, hard to change 
    return(
        <div>
            <GoogleLogin
            clientId={clientId}
            buttonText='Login'
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            // you can set whatever styles for the button you want right here
            style={{marginTop: '100px'}}
            isSignedIn={true}
            />
        </div>
    )
}

export default Login