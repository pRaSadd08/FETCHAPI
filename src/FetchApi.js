// import React, { useEffect, useState } from 'react'

// export function FetchApi() {

//   const [data, setData] = useState([])    
//   const apiGet = () => {
//     fetch('https://all-the-weather.herokuapp.com/cities')
//     .then((response)=> response.json())
//     .then((json)=> {
//       console.log(json);
//       setData(json);
//     })
//   }

//   useEffect(() => {
//     apiGet();
//   },[])
//   return (
//     <div>

//       My API<br/>

//       <button onClick={apiGet}>Fetch API</button>
//       <br/>
//       {/* <pre>{JSON.stringify(data,null,2 )}</pre> */}
//       <div>
//         <ul>
//         {items.map((item)=>(
//           <li key={item.id}>
//           {item.title}</li>
//         ))}
//         </ul>
//       </div>
//     </div>
//   )
// } 

 