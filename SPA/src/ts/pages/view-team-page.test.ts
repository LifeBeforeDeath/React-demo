import Teams from "./view-team-page";
import teams from '../data/team';
import showAddTeam from '../teams-plus-form';
import loadpage from '../index';
jest.mock('../teams-plus-form');
jest.mock('../index');
test('',()=>{
    const tp = new Teams();
        tp.deleteDisplayedTeam = jest.fn();
        tp.getUsers = jest.fn();
        tp.addFormEventListeners = jest.fn();
        tp.addSelectEventListeners = jest.fn();
    document.body.innerHTML = 
    `<div class="parent-team"></div>
    <div class="display-meeting display-team"></div>
    <div class="display-meeting display-team"></div>
    <div class="display-meeting display-team"></div>
    <div class="display-meeting display-team"></div>
    <div class="display-meeting display-team"></div>
    `;
   
    tp.displayTeam(teams);
    const teamsList = document.querySelector('.parent-team') as HTMLElement;
    const showTeam = teamsList.querySelectorAll('.display-team');
    expect(teamsList?.innerHTML).not.toBe('');
    expect(showTeam?.length).toEqual(0);

});