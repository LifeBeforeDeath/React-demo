import { fetchUsers,viewTeam,deleteTeam,addTeam } from "./add-team";
import users from "../data/users";
import teams from '../data/team';

test('fetchUseers fetch all the users on teams page on successfull http request',(done)=>{
    fetchUsers()
    .then((allUsers)=>{
        expect(allUsers instanceof Array).toBe(true);
        expect(allUsers).toEqual(users);
        done();
    })
});

test('viewTeam fetch all the teams on teams page on successfull http request',(done)=>{
    viewTeam()
    .then((allTeams)=>{
        expect(allTeams instanceof Array).toBe(true);
        expect(allTeams).toEqual(teams);
        done();
    })
});
test('deleteTeam will delete team from teams page on successfull http request',(done)=>{
    deleteTeam('62fc71f99176720015231e9a')
    .then((allTeams)=>{
        expect(allTeams).not.toEqual(teams);
        done();
    })
});

test('',(done)=>{
    addTeam({
        name: "Agile team",
        shortName: "agile-emperor",
        description: "Team spreading awareness about Agile practices at Zwiggy",
        members: [
            {
                userId: '62cac5263bc6d2001598c5ac',
                email: "john.doe@example.com"
            },
            {
                userId: "62f50e9b8c5a13001599dd3d",
                email: "jane.doe@example.com"
            }
        ]
    })
    .then((response) => {
        expect(response).toEqual({
            name: "Agile team",
            shortName: "agile-emperor",
            description: "Team spreading awareness about Agile practices at Zwiggy",
            members: [
                {
                    userId: "62cac5263bc6d2001598c5ac",
                    email: "jane.doe@example.com"
                },
                {
                    userId: "62f50e9b8c5a13001599dd3d",
                    email: "john.doe@example.com"
                },
                {
                    userId: "62f0d277ad71500015c8be52",
                    email: "Praveenkumar4@example.com"
                }
            ]
        })
        done();
    })
});