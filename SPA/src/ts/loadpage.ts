import {isAuthenticated} from './services/auth';
import Login from "./pages/login";
import Register from "./pages/register-page";
import Calender from "./pages/calender-page";
import AddMeeting from "./pages/add-meeting-page";
import SearchMeeting from "./pages/search-page";
import Teams from "./pages/view-team-page";

// interface for a function that can be called with new
interface Constructable<T> {
    new( ...args: any ) : T;
}

interface Routes {
    [key: string]: {
        template: string,
        Controller: Constructable<any> | null,
        auth:boolean
    }
}



const routes:Routes = {
    '/login.html':{
        template:'login',
        Controller:Login,
        auth:false
    },
    '/register.html':{
        template:'register',
        Controller:Register,
        auth:false
    },
    '/calender.html':{
        template:'calender',
        Controller:Calender,
        auth:true
    },
    '/meetings-Add-a-meeting.html':{
        template:'addMeeting',
        Controller:AddMeeting,
        auth:true
    },
    '/meetings-filter-a-meeting.html':{
        template:'filterMeeting',
        Controller:SearchMeeting,
        auth:true
    },
    '/teams.html':{
        template:'teams',
        Controller:Teams,
        auth:true
    },
    '*':{
        template:'page-not-found',
        Controller:null,
        auth:false
    }
}

const setUpLinks = ()=>{
    const links = document.querySelectorAll( 'a' );

    links.forEach( link => {
        link.addEventListener( 'click',function( event ){
            event.preventDefault();
            const nextPageUrl = link.getAttribute( 'href' );
            history.pushState( '','',nextPageUrl );

            loadPage( location.pathname );
        } );
    } );
}

const loadPage = ( pathname : string ) =>{
    let route;
    if( pathname in routes ){
        route = routes[pathname];
    } else {
        route = routes['*'];
    }

    if( route?.auth === true ){
        if( isAuthenticated() === false ){
            loadPage( './login.html' );
            return ;
        }
    }
    // console.log(route.template);
    if( route?.template ){
        const root = document.getElementById( 'root' ) as HTMLElement;
        const tpl = ( document.getElementById( route.template ) as HTMLTemplateElement ).innerHTML;
        root.innerHTML = tpl;
    }
    
    // const tpl = document.getElementById( route.template ).innerHTML;
    // document.getElementById('root').innerHTML = tpl;

    if( route?.Controller ){
        ( new route.Controller() ).load();
        setUpLinks();
    }
}
export default loadPage;