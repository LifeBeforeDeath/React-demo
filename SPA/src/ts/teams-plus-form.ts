const showAddTeam = () => {
    const plusSign = document.querySelector( '.plus' ) as HTMLElement;
    const addMeetingForm = document.querySelector( '.add-meeting-form' ) as HTMLElement;
    plusSign.addEventListener( 'click',() => {
        addMeetingForm.classList.remove( 'div-hide' );
        plusSign.classList.add( 'div-hide' );
    } );
}

export default showAddTeam;
