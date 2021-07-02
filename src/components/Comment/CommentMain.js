import { useState, useEffect } from "react";
import {Nav} from  'react-bootstrap';
import axios from 'axios';
import Pagination2 from "./Pagination2";
import Comments from './Comments'

const CommentMain = () => {
const [comments, setComments] = useState([]);
const [loading, setLoading] = useState(false);
const [currentPage, setCurrentPage] = useState(1);
const [commentsPerPage] = useState(10);


useEffect(() => {
  const fetchComments = async () => {
    setLoading(true);
    const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
    setComments(res.data);
    setLoading(false);
  };

  fetchComments();
}, []);

// Get current posts
const indexOfLastComment = currentPage * commentsPerPage;
const indexOfFirstComment = indexOfLastComment - commentsPerPage;
const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);

// Change page
const paginate2 = pageNumber => setCurrentPage(pageNumber);

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
      <Nav.Link  href="/components/Comment/Comments">Comments</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link  href="/Addpost/AddPosts">AddPosts</Nav.Link>
    </Nav.Item>
   
    
  </Nav>
</div>

  
  <div className='container mt-5'>
    <h1 className='text-primary mb-3'>Comments</h1>
    <Comments comments={currentComments} loading={loading} />
    <Pagination2
      commentsPerPage={commentsPerPage}
      totalComments={comments.length}
      paginate2={paginate2}
    />
    
  </div>
  </div>
);
}


export default CommentMain;
