import React from 'react';
import './App.css';
import PostIt from './PostIt';
import { Nav } from 'react-bootstrap';
function AddPosts() {
  return (
    <div>
    <div>
        <Nav variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  href="/components/Post/Posts">Posts</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  href="/components/User/user">User</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  href="/Profile">Profile</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  href="/components/Comment/Comments">Comments</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  href="/Addpost/AddPosts">AddPosts</Nav.Link>
  </Nav.Item>

  </Nav>
  </div>
  
<div className='todo-app'>
      <PostIt />
    </div>
    </div>
  );
}

export default AddPosts;
