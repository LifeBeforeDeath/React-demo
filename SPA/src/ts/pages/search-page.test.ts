import SearchMeeting from "./search-page";
import meetings from '../data/meetings';

test('',()=>{
    
    const sp = new SearchMeeting();
    sp.deleteDisplayedSearch = jest.fn();
    sp.addSelectEventListeners = jest.fn();
    sp.getUsers = jest.fn();
    document.body.innerHTML = 
    '<div class="search-list"></div>';
    sp.displaySearchItems(meetings);
    const searchList = document.querySelector('.search-list')?.innerHTML;
    expect(searchList).not.toBe('');

    
});