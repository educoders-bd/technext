import React, { Component } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export class BlogPost extends Component {
    render() {
        return (
            <div class= "containerPost">
                <div class="post">
    <h5>Showing posts</h5>
    </div>
            <br></br>   
            
            <InputGroup size="lg">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-lg">Post</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>

            <br></br>
            <br></br>
        
    <div class="blue">
        <button type="button" class="btn btn-success">Post</button>
        <button type="button" class="btn btn-success">Update</button>
        <button type="button" class="btn btn-success">Delete</button>
    </div> 
            </div>
        )
    }
}

export default BlogPost
