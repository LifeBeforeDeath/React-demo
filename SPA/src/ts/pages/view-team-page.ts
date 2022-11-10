import ITeam,{Member} from "../models/teams";
import IAllUsers from "../models/allUsers";
import {addTeam,viewTeam,deleteTeam,addMember,fetchUsers} from '../services/add-team';
import showAddTeam from '../teams-plus-form';
import initNav from "../nav";
import '../../scss/pages/teams.scss';
import loadPage from '../loadpage';

class Teams{
    teamList : ITeam[] = []; 
    form : HTMLFormElement | null = null;
    nameEl : HTMLInputElement | null = null;
    shortNameEl : HTMLInputElement | null = null;
    descriptionEl : HTMLTextAreaElement | null = null;
    teamSelectEl : HTMLInputElement | null = null;

    displayTeam = ( response:ITeam[] ) => {
        const teamDisplay = document.querySelector( '.parent-team' ) as HTMLElement;
        const team = teamDisplay.querySelectorAll( '.display-meeting' );
        team.forEach( ( list ) => {
            list.remove();
        } );
        let string = '';
        response.forEach( ( list ) => {
            const memberEmail = list.members.map( function( member ){
                return ( member as Member ).email;
            } ).join( ', ' );
            string += ` 
            <div class="display-meeting team-list" team-id="${list._id}">
                <h2 class="display-team-name">${list.name}</h2>
                <h3 class="display-team-short-name">${list.shortName}</h3>
                <div class="display-team-description">
                    ${list.description}
                </div>
                <button class="excuse-yourself">Execuse yourself</button>
                <hr />
                <p class="team-example"><strong>Members</strong> : ${memberEmail} </p>
                <form action="https://mymeetingsapp.herokuapp.com/api/teams" method="PATCH" 
                class="team-dropdown select-form">
                    <select class="select-member" >
                        <option value="">Select Member</option>
                    </select>
                    <button class="team-add-btn">Add</button>
                </form>
            </div>
            `;  
        } );
        teamDisplay.innerHTML += string;
        
        showAddTeam();
        this.deleteDisplayedTeam();
        this.getUsers();
        this.addFormEventListeners();
        this.addSelectEventListeners();
    }

    deleteDisplayedTeam = () => {
        const btn = document.querySelectorAll( '.excuse-yourself' );
        btn.forEach( function( btn ){
            btn.addEventListener( 'click',function( ){
                const team = btn.closest( '.display-meeting' ) as HTMLElement;
                const teamId = team.getAttribute( 'team-id' );
                deleteTeam( teamId as string )
                    .then(
                        function() {
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
        select.forEach( ( select ) => {
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
                const teamId = team.getAttribute( 'team-id' );
                addMember( teamId as string,userId as string )
                    .then(
                        function( loginResponse ) {
                            console.log( loginResponse );
                            //window.location.href = './teams.html';
                            history.pushState( '', '', '/teams.html' );

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

    validateTeamShortName = () =>{
        const shortName = ( this.shortNameEl as HTMLInputElement ).value.trim();
        const shortNameForm = ( this.shortNameEl as HTMLInputElement ).closest( '.team-short-name' ) as HTMLElement;
        const message = shortNameForm.querySelector( '.message' ) as HTMLElement;
        let error = '';
        const spaceInBetween = /^\S+$/;
        if( !spaceInBetween.test( shortName ) ){
            error  += '<div>No space in between team short name</div>';
        }
        message.innerHTML = error;
        return error === '';
    }
    isValidate = () => {
        let valid = true;
        valid = this.validateTeamShortName() && valid;
        return valid;
    }

    addFormEventListeners = () => {
        this.form = document.querySelector( '#add-team-form' ) as HTMLFormElement;
        this.nameEl = document.querySelector( '#name' ) as HTMLInputElement;
        this.shortNameEl = document.querySelector( '#shortname' ) as HTMLInputElement;
        this.descriptionEl = document.querySelector( '#description' ) as HTMLTextAreaElement;
        this.teamSelectEl = document.querySelector( '.select-member' ) as HTMLInputElement;
        ( this.shortNameEl as HTMLInputElement ).addEventListener( 'input',this.validateTeamShortName );
        ( this.shortNameEl as HTMLInputElement ).addEventListener( 'blur',this.validateTeamShortName );
        ( this.form as HTMLFormElement ).addEventListener( 'submit',( event ) => {
            event.preventDefault();
            const name = ( this.nameEl as HTMLInputElement ).value.trim();
            const shortName = ( this.shortNameEl as HTMLInputElement ).value.trim();
            const description = ( this.descriptionEl as HTMLTextAreaElement ).value.trim();
            const teamSelect = ( this.teamSelectEl as HTMLInputElement ).value;
        
            const credentials:ITeam = {
                name:name,
                shortName:shortName,
                description:description,
                members:[teamSelect]
            }
    
            if( this.isValidate() ){
                addTeam( credentials )
                    .then(
                        ( loginResponse ) => {
                            console.log( loginResponse );
                            //window.location.href = './teams.html';
                            history.pushState( '', '', '/teams.html' );

                            // load the page (template + controller.load execution)
                            loadPage( location.pathname );
                            // this.displayTeam(loginResponse);
                        }
                    )
                    .catch(
                        function( error ) {
                            alert( error.message );
                        }
                    );
            }
    
        } )
    }

    fetchTeam = () => {
        viewTeam()
            .then( ( response ) => {
                this.teamList = response;
                this.displayTeam( response );
            } )
            .catch( ( error ) => {
                alert( error.message );
            } )
    }

    load = () => {
        
        this.addFormEventListeners();
        this.fetchTeam();
        initNav();
    }
    
}

export default Teams;