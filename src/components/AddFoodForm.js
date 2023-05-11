import { Divider, Input } from 'antd';
import React, {useState} from 'react';



// Iteration 4
function AddFoodForm({addNewFood}) {
const [name, setName]= useState('');
const [image, setImage]= useState('');
const [calories, setCalories]= useState('');
const [servings, setServings]= useState('');

const handleNameChange = (e) => setName(e.target.value);
const handleImageChange = (e) => setImage(e.target.value);
const handleCaloriesChange = (e) => setCalories(e.target.value)
const handleServingsChange = (e) => setServings(e.target.value)

const handleSubmit = (e) => {
    e.preventDefault();

const newFood = {name: name, image: image, calories: calories, servings: servings};

addNewFood(newFood);
setName('')
setImage('')
setCalories('')
setServings('')
}


  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>
      
      <label>Name</label>
      <Input placeholder="Name" value={name} onChange={handleNameChange} />

      <label>Image</label>
      <Input placeholder="Image URL" value={image} onChange={handleImageChange}/>

      <label>Calories</label>
      <Input placeholder="Calories" value={calories} onChange={handleCaloriesChange}/>

      <label>Servings</label>
      <Input placeholder="Servings" value={servings} onChange={handleServingsChange}/>

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;