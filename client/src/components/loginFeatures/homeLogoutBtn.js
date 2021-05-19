import React from 'react'
// this is going to need to be installed just run npm -i
import { GoogleLogout} from 'react-google-login';

// this is the clientId for the login feature -- this is connected to the main controller google acc
const clientId = '5498314317-33lnc42jkoqki1duov32okcmrbiejsjj.apps.googleusercontent.com'

// this is the functionality tied to the logout button
function Logout(props){
    // if the logout is successful just display to the user with a simple pop-up that is easy
    const onSuccess = () =>{
        alert(`Logout made successfully`)
        props.logInWithGoogleAuthentication(null,null)
    }
    return(
        // this is calling from the react google login to impliment the style send all the style infromation into the style.
        <div>
            <GoogleLogout
                clientId={clientId}
                // render={renderProps => (
                //     <button onClick={renderProps.onClick} className='googleLogoutBtn' disabled={renderProps.disabled}>This is my custom Google button</button>
                //   )}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
                className={'googleLogoutBtn'}
            />
        </div>
    )
}
export default Logout;