import addMeeting from '../services/add-meeting';
import IMeeting from '../models/meetings';
import initNav from '../nav';
import '../../scss/pages/add-meeting.scss';
import loadPage from '../loadpage';

class AddMeeting{
    form = document.querySelector( '.form' ) as HTMLFormElement;
    nameEl = document.getElementById( 'name' ) as HTMLInputElement;
    dateEl = document.getElementById( 'date' ) as HTMLInputElement;
    startTimeHoursEl = document.getElementById( 'start-time-hours' ) as HTMLInputElement;
    startTimeMinutesEl = document.getElementById( 'start-time-minutes' ) as HTMLInputElement;
    endTimeHoursEl = document.getElementById( 'end-time-hours' ) as HTMLInputElement;
    endTimeMinutesEl = document.getElementById( 'end-time-minutes' ) as HTMLInputElement;
    descriptionEl = document.getElementById( 'description' ) as HTMLTextAreaElement;
    emailEl = document.getElementById( 'email' ) as HTMLInputElement;

    validateDate = () => {
        const date = this.dateEl.value;
        const dateDiv = this.dateEl.closest( '.meeting-date' ) as HTMLElement;
        const message = dateDiv.querySelector( '.message' ) as HTMLElement;
        const today = new Date();
        const selectedDate = new Date( date );
        const tday = today.getDate();
        const mDay = selectedDate.getDate();
        const tYear = today.getFullYear();
        const mYear = selectedDate.getFullYear();
        const tMonth = today.getMonth();
        const mMonth = selectedDate.getMonth();
        let error = '';
        if ( tYear > mYear ) {
            error += "Date Should be greater than today's date";
        } else if ( tYear === mYear ) {
            if ( tMonth > mMonth ) {
                error += "Date Should be greater than today's date";
            } else if ( tMonth === mMonth ) {
                if ( tday > mDay ) {
                    error += "Date Should be greater than today's date";
                }
            }
        }
        message.innerHTML = error;
        return error === "";
    }

    validateTime =() => {
        const startTimeHours = this.startTimeHoursEl.value;
        const startTimeMinutes = this.startTimeMinutesEl.value;
        const endTimeHours = this.endTimeHoursEl.value;
        const endTimeMinutes = this.endTimeMinutesEl.value;
        const timeDiv = this.endTimeHoursEl.closest( '.meeting-end-time' ) as HTMLElement;
        const message = timeDiv.querySelector( '.message' ) as HTMLElement;
        const sh = parseInt( startTimeHours, 10 );
        const sm = parseInt( startTimeMinutes, 10 );
        const eh = parseInt( endTimeHours, 10 );
        const em = parseInt( endTimeMinutes, 10 );
        let error = '';
        if ( sh > eh ) {
            error += "End time should greater than start time";
        } else if ( sh === eh ) {
            if ( sm > em ) {
                error += "End time should greater than start time";
            }
        }
        message.innerHTML = error;
        return error === "";

    }

    isValidate = () => {
        let isValid = true;

        isValid = this.validateDate() && isValid;
        isValid = this.validateTime() && isValid;

        return isValid;
    }

    addEventListeners = () => {
        this.dateEl.addEventListener( "blur", this.validateDate );
        this.dateEl.addEventListener( "input", this.validateDate );

        this.startTimeHoursEl.addEventListener( "blur", this.validateTime );
        this.startTimeHoursEl.addEventListener( "input", this.validateTime );

        this.startTimeMinutesEl.addEventListener( "blur", this.validateTime );
        this.startTimeMinutesEl.addEventListener( "input", this.validateTime );

        this.endTimeHoursEl.addEventListener( "blur", this.validateTime );
        this.endTimeHoursEl.addEventListener( "input", this.validateTime );

        this.endTimeMinutesEl.addEventListener( "blur", this.validateTime );
        this.endTimeMinutesEl.addEventListener( "input", this.validateTime );

        this.form.addEventListener( 'submit',( event ) => {
            event.preventDefault();
            const name = this.nameEl.value.trim();
            const date = this.dateEl.value;
            const startTimeHours = this.startTimeHoursEl.value;
            const startTimeMinutes = this.startTimeMinutesEl.value;
            const endTimeHours = this.endTimeHoursEl.value;
            const endTimeMinutes = this.endTimeMinutesEl.value;
            const description = this.descriptionEl.value;
            const emails = this.emailEl.value.split( ',' );
            const emailarray = emails.map( function( email ){
                return email.trim();
            } );
            const credentials:IMeeting = {
                name:name,
                description:description,
                date:date,
                startTime:{
                    hours:parseInt( startTimeHours ),
                    minutes:parseInt( startTimeMinutes )
                },
                endTime:{
                    hours:parseInt( endTimeHours ),
                    minutes:parseInt( endTimeMinutes )
                },
                attendees:emailarray
            }
            if( this.isValidate() ){
                addMeeting( credentials )
                    .then(
                        function( loginResponse ) {
                            console.log( loginResponse );
                            //window.location.href = './meetings-Add-a-meeting.html';
                            history.pushState( '', '', '/meetings-Add-a-meeting.html' );

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

        } )
    }
    load = () =>{
        this.addEventListeners();
        initNav();
    }
}

export default AddMeeting;