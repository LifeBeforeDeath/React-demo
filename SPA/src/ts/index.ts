import loadPage from './loadpage';
// handle popstate event (fired when back/forward button is clicked)
window.addEventListener( 'popstate', function() {
    // load the new page based on the new url
    loadPage( location.pathname );
} );

loadPage( location.pathname );
