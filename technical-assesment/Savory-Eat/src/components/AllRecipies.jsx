import React from "react";
import { useState , useEffect } from "react";
import axios from "axios";
//import data from '../data/data.json'

import "../index.scss";
const AllRecepies = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:4000/api/menuItems")
    .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []); 
  



//   const fetchData = () => {
//     fetch(data)
//     .then(response =>{
//       return response.json()
//     }).then(data => {
//       setData(data);
//     })
//     .catch(err =>{
//       console.log(err)
//     })
//   }
//   useEffect(() => {
//     fetchData()
//   },[])
// }

  return (
  <div className="card-container">
  {data.map((data)=> (
    <div> 
      {data.Cook_Time}
      {data.Prep_Time}
      {data.recepie_Name}
      {data.Serves}
      {data.categorie}
      {data.recepie_Image}
      {data.recepie_Description}
      </div>
    

  ))
  }
    <div className="card">
      <button className="delete">delete</button>
      <button className="update">update </button>
   
   
       
      
    </div>
 
  </div>
) } 
    


export default AllRecepies;
