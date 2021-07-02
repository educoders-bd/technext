import React from 'react';

  const Comments = ({ comments, loading }) => {
    if (loading) {
      return <h2>Loading...</h2>;
    }
  

  
  return (

    <div>
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">PostId</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Comment</th>
        </tr>
      </thead>
      <tbody className="tbody-font">
        {comments.map((comment)=> (
            <tr key= {comment.id}>
                <th scope ="row">{comment.id}</th>
                <td>{comment.name}</td>
                <td>{comment.email}</td>
                <td>{comment.body}</td>
            </tr>
    
        )) 
    }  
        
      </tbody>
    </table>
    </div>
  );
};

export default Comments;