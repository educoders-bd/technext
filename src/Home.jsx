import React, { Component } from 'react';
import { Jumbotron, Nav, Button } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
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
    <Nav.Link  href="/components/Comment/Comments">Comments</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  href="/Addpost/AddPosts">AddPosts</Nav.Link>
  </Nav.Item>

  
 
  
</Nav>
<div className="container">
     <h2>Welcome To Homepage</h2>
<Jumbotron>
  <h1>Instructions</h1>
     <p>
Your responsibility is to use the JSON placeholder API and make a blog-like simple web
application using ReactJS. You will use the following API endpoints:<br></br>
● Posts<br></br>
● Comments<br></br>
● Users<br></br>
Requirements: Use Context, Hooks, Routing, and Functional Component with no props
drilling.<br></br>
Todo:<br></br>
1. As a user I want to see all the “Posts”<br></br>
a. Load the first 10 posts as the page loads<br></br>
b. Add a “load more” button, which if clicked, load 10 more posts<br></br>
2. As a user, on my profile, I want to -<br></br>
a. See my own posts<br></br>
b. Have the option to update the posts<br></br>
c. Have the option to delete the posts<br></br>
d. Use user id 2 as current user<br></br>
3. As a user I want to add a new post with “Post title” and “Description”<br></br>
4. As a user I want to see post details with respective comments along with the post on
a separate page<br></br>
5. As a user I want to see all the other users listed in a table. (Don’t use any plugin for
table)<br></br>
a. Show the columns - “Name”, “Email”, “Website”<br></br>
b. Option to sort columns with name, email. (ASC, DSC)<br></br>
c. Option to search users from table name, email, website<br></br>
d. Pagination page size (Number of users displaying per page. Eg: 3, 5, All) can
be changeable<br></br>
e. If user reload the page then show the list according to the state
(filter/sort/pagination/page size) before the reload<br></br>
f. Clicking on a user’s name will take me to the corresponding user profile page
where the details for that user will be shown as well as his/her all posts with
pagination.<br></br>
Upload your project in github public repo. And share the link via email reply
     </p>
    
</Jumbotron>
          </div>
        
          <footer>  Copyright:2021</footer>
      </div>
    );
  }
}

export default Home;
