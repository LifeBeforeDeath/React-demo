import Calender from "./calender-page";
import meetings from '../data/meetings';
//import attendees from "../data/attendee";

test('',() => {
    const cp = new Calender();
    document.body.innerHTML =`
    <section class="meeting-days">
                        <div class="days-list">
                            <span class="day same">1</span>
                            <div class="meeting same">
                            </div>
                        </div>
                        <div class="days-list">
                            <span class="day same">2</span>
                            <div class="meeting same"></div>
                        </div>
                        <div class="days-list">
                            <span class="day same">3</span>
                            <div class="meeting same"></div>
                        </div>
                        <div class="days-list">
                            <span class="day same">4</span>
                            <div class="meeting same"></div>
                        </div>
                        <div class="days-list">
                            <span class="day same">5</span>
                            <div class="meeting same"></div>
                        </div>
                        <div class="days-list">
                            <span class="day same">6</span>
                            <div class="meeting same"></div>
                        </div>
                        <div class="days-list">
                            <span class="day same">7</span>
                            <div class="meeting same"></div>
                        </div>
                        <div class="days-list">
                            <span class="day same">8</span>
                            <div class="meeting same"></div>
                        </div>
                        <div class="days-list">
                            <span class="day same">9</span>
                            <div class="meeting same"></div>
                        </div>
                        <div class="days-list">
                            <span class="day same">10</span>
                            <div class="meeting same"></div>
                        </div>
                        <div class="days-list">
                            <span class="day same">11</span>
                            <div class="meeting same"></div>
                        </div>
                        <div class="days-list">
                            <span class="day same">12</span>
                            <div class="meeting same"></div>
                        </div>
                        <div class="days-list">
                            <span class="day same">13</span>
                            <div class="meeting same"></div>
                        </div>
                        <div class="days-list">
                            <span class="day same">14</span>
                            <div class="meeting same"></div>
                        </div>
                        <div class="days-list">
                            <span class="day same">15</span>
                            <div class="meeting same"></div>
                        </div>
                        <div class="days-list">
                            <span class="day same">16</span>
                            <div class="meeting same"></div>
                        </div>
                        <div class="days-list">
                            <span class="day same">17</span>
                            <div class="meeting same"></div>
                        </div>
                        <div class="days-list">
                            <span class="day same">18</span>
                            <div class="meeting same" ></div>
                        </div>
                        <div class="days-list">
                            <span class="day same">19</span>
                            <div class="meeting same"></div>
                        </div>
                        <div class="days-list">
                            <span class="day same">20</span>
                            <div class="meeting same"></div>
                        </div>
                        <div class="days-list">
                            <span class="day same">21</span>
                            <div class="meeting same"></div>
                        </div>
                        <div class="days-list">
                            <span class="day same">22</span>
                            <div class="meeting same"></div>
                        </div>
                        <div class="days-list">
                            <span class="day same">23</span>
                            <div class="meeting same"></div>
                        </div>
                        <div class="days-list">
                            <span class="day same">24</span>
                            <div class="meeting same"></div>
                        </div>
                    </section>
    `;
    const calenderMeeting = document.querySelector('.meeting') as HTMLElement;
    cp.displayCalender(meetings);
    // for(let i=0; i<meetings.length; i++){
    //     expect(calenderMeeting?.innerHTML).toMatch(meetings[i].name);
    // }
    // for(let i=0; i<attendees.length; i++){
    //     expect(calenderMeeting?.innerHTML).toMatch(attendees[i].email);
    // }
    console.log(document.body.innerHTML);
    //expect(calenderMeeting?.innerHTML).not.toEqual('');
    for(let i=0;i<meetings.length;i++){
        expect(document.body.innerHTML).toMatch(meetings[i].name);
    }
})