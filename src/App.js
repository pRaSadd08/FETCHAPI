
import './App.css';
import React, { useState, useEffect } from "react";

// import {FetchApi} from "./FetchApi"
// import Api from './components/Api';
function App() {
    const [posts, setPosts] = useState([]);
    const fetchPost = async () => {
    const response = await fetch(
        "https://all-the-weather.herokuapp.com/cities"
      );
     const data = await response.json();
      setPosts(data.items);
  
    };
  
    console.log(posts[0])
  
    useEffect(() => {
      fetchPost();
    }, []);
    return (
      <div className="App">
      {posts.map(post => (
          <p>{post.id},<br/>{post.name}</p>))}
      </div>
    );
  }
  

export default App;
