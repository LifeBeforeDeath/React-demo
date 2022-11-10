

// function isValidate(){
//     return true;
// }

// function addFormEventListeners(){
//     const form = document.querySelector('#add-team-form');
//     const nameEl = document.querySelector('#name');
//     const shortNameEl = document.querySelector('#shortname');
//     const descriptionEl = document.querySelector('#description');
//     const teamSelectEl = document.querySelector('.select-member');
//     form.addEventListener('submit',function(event){
//         event.preventDefault();
//         let name = nameEl.value.trim();
//         let shortName = shortNameEl.value.trim();
//         let description = descriptionEl.value.trim();
//         let teamSelect = teamSelectEl.value;
    
//         const credentials = {
//             name:name,
//             shortName:shortName,
//             description:description,
//             members:[teamSelect]
//         }

//         if(isValidate()){
//             addTeam(credentials)
//             .then(
//                 function( loginResponse ) {
//                     console.log( loginResponse );
//                     window.location.href = './teams.html';
//                 }
//             )
//             .catch(
//                 function( error ) {
//                     alert( error.message );
//                 }
//             );
//         }

//     })
// }


// window.addEventListener( 'load', function() {
    
//     addFormEventListeners();
// });
