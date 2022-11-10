import { search } from "./search";
import meetings from "../data/meetings";

test('search will search meetings on successfull http request',(done) => {
    search('all','google')
    .then((searchedMeeting) => {
        expect(searchedMeeting instanceof Array).toBe(true);
        expect(searchedMeeting).toEqual(meetings);
        done();
    })
})

