// credentials = { email: 'john.doe@example.com', password: 'Password123#' }
import IAuthCredentials from "../models/authCredentials";
function login( credentials:IAuthCredentials ) {
    return fetch(
        `https://mymeetingsapp.herokuapp.com/api/auth/login`,
        {
            method: 'POST', // better to use ALL CAPS for the method
            body: JSON.stringify( credentials ),
            headers: {
                // Authorization: "sdkbkjwbejwbveiwbviwb"
                "Content-Type": "application/json"
            }
        }
    )
        .then(
            function( response ) {
                if ( !response.ok ) {
                    // for 404 kind of errors, we should check and explcitly throw an error
                    throw new Error( response.statusText );
                }

                return response.json();
            }
        )
        .then( function( getResponse ){
            localStorage.setItem( 'email', getResponse.email );
            localStorage.setItem( 'name', getResponse.name );
            localStorage.setItem( 'token', getResponse.token );
            
            return getResponse;
        } )
    ;
}
function getToken() {
    return localStorage.getItem( 'token' ) || '';
}
const isAuthenticated = ()=>{
    if( localStorage.getItem( 'token' ) === null ) {
        //window.location.href = './login.html';
        return false;
    }
    return true;
}
function logout() {
    localStorage.clear();
}

function getEmail(){
    return localStorage.getItem( 'email' );
}

export {
    login,
    getEmail,
    getToken,
    logout,
    isAuthenticated
}