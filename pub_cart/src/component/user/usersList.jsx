import React from "react";
import User from './users';
import './usersList.style.css';


class UsersList extends React.Component {
    constructor(){
        super();
        this.state = {users : [
            {
                key:1,
                name:"aarav",
                designation:"CEO",
                email:"aarav@example.com",
                avatarUrl: "https://avatars.githubusercontent.com/u/1?v=4",
                description:"Useless guy"
            },
            {
                key:2,
                name:"aarav",
                designation:"CEO",
                email:"aarav@example.com",
                avatarUrl: "https://avatars.githubusercontent.com/u/1?v=4",
                description:"Useless guy"
            },
            {
                key:3,
                name:"aarav",
                designation:"CEO",
                email:"aarav@example.com",
                avatarUrl: "https://avatars.githubusercontent.com/u/1?v=4",
                description:"Useless guy"
            },
            {
                key:4,
                name:"aarav",
                designation:"CEO",
                email:"aarav@example.com",
                avatarUrl: "https://avatars.githubusercontent.com/u/1?v=4",
                description:"Useless guy"
            },
            {
                key:5,
                name:"aarav",
                designation:"CEO",
                email:"aarav@example.com",
                avatarUrl: "https://avatars.githubusercontent.com/u/1?v=4",
                description:"Useless guy"
            },
        ]};
    }

    render(){
        let allUsers = this.state.users.map(user=>< User
            userDetails={user}
            key={user.id}
        >          
        </User>)
        return(
            <div className="user-list">
                {
                    allUsers
                }
                
            </div>
        ) 
    }
}

export default UsersList;