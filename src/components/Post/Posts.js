import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>

<div>
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">UserId</th>
          <th scope="col">PostId</th>
          <th scope="col">Title</th>
          <th scope="col">Post</th>
        </tr>
      </thead>
      <tbody className="tbody-font">
        {posts.map((post)=> (
            <tr key= {post.id}>
                <th scope ="row">{post.id}</th>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
            </tr>
    
        )) 
    }
    
      
        
      </tbody>
    </table>
        <br></br>
        </div>
        </div>
    
  );
};

export default Posts;
