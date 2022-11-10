import React, { Component } from "react";


export default class Posts extends Component {
   state = {
    allPosts : []
   }
  componentDidMount() {
    // DOM is ready !
    // AJAX | integrating with other library
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(posts => {
        console.log(posts);
        this.setState({allPosts:posts});
    });
  }
  render() {
    let element = this.state.allPosts.map((post)=><li key={post.id}>{post.title}</li>);
    return (
        <ol>
            {element}
        </ol> 
    )
  }
}
