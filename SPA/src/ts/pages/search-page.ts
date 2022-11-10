import { search,addAttendee,fetchUsers,deleteTeam } from "../services/search";
import IMeeting,{Attendee} from "../models/meetings";
import IAllUsers from "../models/allUsers";
import initNav from "../nav";
import '../../scss/pages/filter-a-meeting.scss';
import loadPage from '../loadpage';
class SearchMeeting {
    searchItemList:IMeeting[] = [];

    addEventListeners = () => {
        const form = document.querySelector( '.form' ) as HTMLFormElement;
        const date = document.querySelector( '#start-date' ) as HTMLInputElement;
        const search = document.getElementById( 'search' ) as HTMLInputElement;
        form.addEventListener( 'submit',( event ) => { 
            event.preventDefault();
            const dateValue  = date.value;
            const searchValue = search.value.trim();
            this.fetchSearchedItem( dateValue,searchValue );
        } );  
    }

    displaySearchItems = ( response:IMeeting[] ) => {
        const searchList = document.querySelector( '.search-list' ) as HTMLElement;
        let string = '';
        response.forEach( ( list ) => {
            const newDate = new Date( list.date );
            const year = newDate.getUTCFullYear();
            const day = newDate.getUTCDate();
            let month : string | number;
            month = newDate.getUTCMonth() + 1;
            if ( month === 1 ) {
                month = `January`;
            } else if ( month === 2 ) {
                month = `February`;
            } else if ( month === 3 ) {
                month = `March`;
            } else if ( month === 4 ) {
                month = `April`;
            } else if ( month === 5 ) {
                month = `May`;
            } else if ( month === 6 ) {
                month = `June`;
            } else if ( month === 7 ) {
                month = `July`;
            } else if ( month === 8 ) {
                month = `August`;
            } else if ( month === 9 ) {
                month = `September`;
            } else if ( month === 10 ) {
                month = `October`;
            } else if ( month === 11 ) {
                month = `November`;
            } else if ( month === 12 ) {
                month = `December`;
            }
            const attendeeEmail = list.attendees.map( function( member ){
                return ( member as Attendee ).email;
            } ).join( ', ' );
            string += `
            <div class="display-meeting" search-id="${list._id}">
                <h2 class="display-team-name">
                    ${day} ${month} ${year}  ${list.startTime.hours}:${list.startTime.minutes} - ${list.endTime.hours}:${list.endTime.minutes}
                </h2>
                <h3 class="display-team-short-name">${list.name}</h3>
                <button class="excuse-yourself">Execuse yourself</button>
                <hr />
                <p class="team-example"><strong>Attendees</strong> : ${attendeeEmail} </p>
                <form action="https://mymeetingsapp.herokuapp.com/api/meetings" method="PATCH" 
                class="team-dropdown select-form">
                    <select class="select-member">
                        <option value="">Select Member</option>
                    </select>
                    <button class="team-add-btn">Add</button>
                </form>
            </div>
            `;

        } );
        searchList.innerHTML = string;
        this.deleteDisplayedSearch();
        this.addSelectEventListeners();
        this.getUsers();
    }

    deleteDisplayedSearch = () => {
        const btn = document.querySelectorAll( '.excuse-yourself' );
        btn.forEach( function( btn ){
            btn.addEventListener( 'click',( ) => {
                const team = btn.closest( '.display-meeting' ) as HTMLElement;
                const teamId:string | null = team.getAttribute( 'search-id' );
                deleteTeam( teamId as string )
                    .then(
                        function( ) {
                            team.remove();
                        }
                    )
                    .catch(
                        function( error ) {
                            alert( error.message );
                        }
                    )
            } );
        } );
    }

    displayUsers = ( response:IAllUsers[] ) => {
        const select = document.querySelectorAll( '.select-member' );
        select.forEach( function( select ){
            let str = '';
            response.forEach( function( usersList )
            { 
                str += `<option value="${usersList._id}">${usersList.email}</option>`;
            } );
            select.innerHTML += str; 
        } );
    }

    addSelectEventListeners = () => {
        const selectForms = document.querySelectorAll( '.select-form' );
        
        selectForms.forEach( function( selectForm ){
            const selectMember = selectForm.querySelector( '.select-member' ) as HTMLInputElement;
            selectForm.addEventListener( 'submit',( event ) => {
                event.preventDefault();
                const userId = selectMember.value; 
                const team = selectForm.closest( '.display-meeting' ) as HTMLElement;
                const searchId = team.getAttribute( 'search-id' );
                addAttendee( searchId as string,userId as string )
                    .then(
                        function( loginResponse ) {
                            console.log( loginResponse );
                            //window.location.href = './meetings-filter-a-meeting.html';
                            history.pushState( '', '', '/meetings-filter-a-meeting.html' );

                            // load the page (template + controller.load execution)
                            loadPage( location.pathname );
                        }
                    )
                    .catch(
                        function( error ) {
                            alert( error.message );
                        }
                    );
            } );
        } )
        
    }

    getUsers = () => {
        fetchUsers()
            .then( ( response ) => {
                this.displayUsers( response );
            } )
            .catch( function( error ){
                alert( error.message );
            } );
    }

    fetchSearchedItem = ( date:string,searchItem:string ) => {
        search( date,searchItem )
            .then( ( response ) => {
                this.searchItemList = response;
                this.displaySearchItems( response );
            } )
            .catch( function( error ){
                alert( error.message );
            } )
    }
    load = () =>{
        this.addEventListeners();
        initNav();
    }  
}

export default SearchMeeting;
