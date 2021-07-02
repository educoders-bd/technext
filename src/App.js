import { Component } from "react";
import Home from "./Home"
import './App.css';
import CommentMain from './components/Comment/CommentMain';
import PostMain from './components/Post/PostMain';
import UserMain from './components/User/UserMain';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AddPosts from "./components/AddPost/AddPosts";


class App extends Component {

  render () {
  return (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      
      <Route path="/components/Post/Posts" component={PostMain}/>

      <Route path="/components/Comment/Comments" component={CommentMain}/>

      <Route path="/components/User/user" component={UserMain}/>

      <Route path="/Addpost/AddPosts" component={AddPosts}/>

    </div>
  </Router>
  );
}
}
export default App;



