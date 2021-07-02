import React, { useState, useEffect } from 'react';
import Users from './user';
import axios from 'axios';
import Pagination3 from './Pagination3';
import {Nav } from 'react-bootstrap';

const UserMain = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(res.data);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  // Get current posts
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate3 = pageNumber => setCurrentPage(pageNumber);

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
      <h1 className='text-primary mb-3'>Users</h1>
      <Users users={currentUsers} loading={loading} />
      <Pagination3
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate3={paginate3}
      />
      
    </div>
    </div>
  );
  
};

export default UserMain;
