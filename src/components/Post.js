import React, { Component } from 'react';


class Post extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data));
  }
  
  render() {
    return (
      <div>
      <h1>POST</h1>
      </div>
    );
  }
}



export default Post;
