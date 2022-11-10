import IMeeting ,{Attendee} from "../models/meetings";
import getCalender from '../services/calender';
import initNav from "../nav";
import '../../scss/pages/calender.scss';
class Calender {
    allCalender:IMeeting[] = [];
    calenderDate = document.getElementById( 'date' ) as HTMLInputElement;
    selectedDate = document.querySelector( '.selected-date' ) as HTMLElement;
    weekDay = document.querySelector( '.week-day' ) as HTMLElement;

    displayCalender = ( calender:IMeeting[] ) => {
        const span = document.querySelectorAll( '.day' );
        const allMeetingsSpan = document.querySelectorAll( '.meeting' );
        allMeetingsSpan.forEach( ( item )=>{
            item.innerHTML = '';
        } );
        calender.forEach( ( calender ) => {
            const attendeesEmail = calender.attendees.map( function( attendee ){
                return ( attendee as Attendee ).email;
            } ).join( ', ' );
            for( let i=0;i<span.length;i++ ){
                let string = '';
                const meetingDay = span[i].closest( '.days-list' ) as HTMLElement;
                const meeting = meetingDay.querySelector( '.meeting' ) as HTMLElement;
                if( parseInt( ( span[i].textContent ) as string ) === calender.startTime.hours ){
                    string += `
                    <div class="meeting-body">
                        <div class="title"><strong>${calender.name}</strong></div>
                        <hr />
                        <div class="attendees">${attendeesEmail}</div>
                    </div>`;   
                    meeting.innerHTML += string;
                }
            }
        } );
    }

    setDay = ( day:number ) => {
        let weekday;
        if( day === 0 ){
            weekday = 'Sunday';
        } else if( day === 1 ){
            weekday = 'Monday';
        } else if( day === 2 ){
            weekday = 'Tuesday';
        } else if( day === 3 ){
            weekday = 'Wednesday';
        } else if( day === 4 ){
            weekday = 'Thrusday';
        } else if( day === 5 ){
            weekday = 'Friday';
        } else if( day === 6 ){
            weekday = 'Saturday';
        } else {
            weekday = '';
        }
        this.weekDay.innerHTML = weekday;
    }

    fetchCalender = ( date:string ) => {
        getCalender( date )
            .then( ( calender ) => {
                this.allCalender = calender;
                this.displayCalender( calender );
            } )
            .catch( function( error ){
                alert( error.message );
            } )
    }

    setDate = ()=>{
        this.calenderDate.addEventListener( 'input',() => {
            const pickDate = this.calenderDate.value;
            this.selectedDate.innerHTML = `${pickDate}`;
            const fetchingDay = new Date( pickDate );
            this.setDay( fetchingDay.getDay() );
            this.fetchCalender( pickDate );
        } );
    }
    
    load =() =>{
        const today = new Date();
        const date = today.getFullYear()+'-'+( today.getMonth()+1 )+'-'+today.getDate();
        this.selectedDate.innerHTML = `${date}`;
        this.setDay( today.getDay() );
        this.fetchCalender( date );
        this.setDate();
        initNav();
    }   
}

export default Calender;




