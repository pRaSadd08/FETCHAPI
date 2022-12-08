import React, { useState, useEffect } from "react";

// export default function Api() {
//   const [posts, setPosts] = useState([]);

//   const fetchPost = async () => {
//   const response = await fetch(
//       "https://all-the-weather.herokuapp.com/cities"
//     );
//    const data = await response.json();
//     setPosts(data.items);

//   };

//   console.log(posts[0])

//   useEffect(() => {
//     fetchPost();
//   }, []);
//   return (
//     <div className="App">
//     {posts.map(post => (
//         <p>{post.id}</p>))}
//     </div>
//   );
// }
