import {useState }from "react";
import "../App.css";
import axios from "axios";


const Add = () => {
  const[Cook_Time, setCook_Time] = useState('')
  const[Prep_Time, setPrep_Time] = useState('')
  const[recepie_Name, setrecepie_Name] = useState('')
  const[Serves, setServes] = useState('')
  const[categorie, setCategorie] = useState('')
  const[recepie_Image, setrecepie_Image] = useState('')
  const[recepie_Description, setrecepie_Description] = useState('')  


    const newRecepie = {
      Cook_Time,
      Prep_Time,
      recepie_Name,
      Serves,
      categorie,
      recepie_Image,
      recepie_Description
    } 
    axios.post('http://localhost:4000/api/recepies',newRecepie)
    .then(res => {
      console.log(res) 
      setCook_Time('')
      setPrep_Time('')
      setrecepie_Name('')
      setServes('')
      setCategorie('')
      setrecepie_Image('')
      setrecepie_Description('')
    })
    .catch(err => {
      console.log(err)
    })
  
  
  return (
    <div className="add-recipe-form ">
      <div className="form-group">
        <label>Name:</label>
        <input type="text" placeholder="Name" />
      </div>
      <div className="form-group">
        <label>Cook Time:</label>
        <input type="number" placeholder="Cooking Time" />
      </div>
      <div className="form-group">
        <label>Prep Time:</label>
        <input type="number" placeholder="Preparation Time"
         />
      </div>
      <div className="form-group">
        <label>Serves:</label>
        <input type="number" placeholder="serves" />
      </div>
      <div className="form-group">
        <label>Category:</label>
        <input type="text" placeholder="Category" />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input type="text" placeholder="Description" />
      </div>
      <div className="form-group">
        <label>Ingredients:</label>
        <input placeholder="Ingredients" />
      </div>

      <div className="form-group">
        <label>Image:</label>
        <input type="text" placeholder="Image URL" />
      </div>
      <button className="create-recipe-btn" type="submit">Create Recipe</button>
    </div>
  );
};
export default Add;
