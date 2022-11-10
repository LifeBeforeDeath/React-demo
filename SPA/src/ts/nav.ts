import {getEmail,logout} from './services/auth';

const initNav = ()=>{
    const icon = document.querySelector( '.fa' ) as HTMLElement;
    const logoutButtons = document.querySelectorAll( '.logout' ); 
    const authEmails = document.querySelectorAll( '.Auth-email' );
    icon.addEventListener( 'click',function( ){
        const mobileView = document.querySelector( '.mobile-view' ) as HTMLElement;
        mobileView.classList.toggle( 'hide-mobile-view' );
    } );
    logoutButtons.forEach( function( logoutBtn ){
        logoutBtn.addEventListener( 'click', function() {
            logout();
        
            window.location.href = './login.html';
        } );
    } );
    authEmails.forEach( function( authEmail ){
        authEmail.innerHTML =`${getEmail()}` ;
    } );
}
export default initNav;

