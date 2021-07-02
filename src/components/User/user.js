import React from 'react';
import {Nav } from 'react-bootstrap';
const Users = ({ users, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (

  
<div>
<table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Website</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody className="tbody-font">
    {users.map((user)=> (
        <tr key= {user.id}>
            <th scope ="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.website}</td>
            <td>{user.phone}</td>
        </tr>

    )) 
}

  
    
  </tbody>
</table>
    <br></br>
    </div>

    
  );
};

export default Users;
