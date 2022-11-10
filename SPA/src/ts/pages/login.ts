import {login} from '../services/auth';
import '../../scss/pages/login.scss';
import loadPage from '../loadpage';

class Login {
    loginForm : HTMLFormElement | null = null;
    passwordEl = document.querySelector( '#password' ) as HTMLInputElement;
    validatePassword = () => {
        const password = this.passwordEl.value.trim();
        const formPassword = this.passwordEl.closest( '.form-password' ) as HTMLElement;
        const message = formPassword.querySelector( '.message' ) as HTMLElement;
        let error = '';
        if( password.length<8 ){
            error += '<div>Password Should have atleast 8 characters</div>';
        } 

        const uppercasePat = /[A-Z]/;
        if( !uppercasePat.test( password ) ){
            error  += '<div>Password must have an uppercase character</div>';
        }

        // lowercase
        const lowercasePat = /[a-z]/;
        if( !lowercasePat.test( password ) ) {
            error += '<div>Password must have a lowercase character</div>';
        }
        message.innerHTML = error;
        return error === '';
    }

    isValidate = () => {
        let valid = true;
        valid = this.validatePassword() && valid;
        return valid;
    }

    addEventListeners = () => {

        this.passwordEl.addEventListener( 'input',this.validatePassword );
        this.passwordEl.addEventListener( 'blur',this.validatePassword );

        ( this.loginForm as HTMLFormElement ).addEventListener( 'submit', ( event ) => {
            event.preventDefault();

            // please do validations
            // ...

            // extract the email and password and form a credentials object
            const credentials = {
                email: ( document.getElementById( 'email' ) as HTMLInputElement ).value.trim(),
                password: ( document.getElementById( 'password' ) as HTMLInputElement ).value.trim()
            };

            // if everything is valid
            if( this.isValidate() ){
                login( credentials )
                    .then(
                        function( loginResponse ) {
                            console.log( loginResponse );
                            history.pushState( '', '', '/calender.html' );

                            // load the page (template + controller.load execution)
                            loadPage( location.pathname );
                        }
                    )
                    .catch(
                        function( error ) {
                            alert( error.message );
                        }
                    );
            }
            
        } );
    }

    load = () =>{
        this.loginForm = document.querySelector( '.form' ) as HTMLFormElement;
        
        this.addEventListeners();
    }
    
}

export default Login;