import React, { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import { Row, Divider } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [searchQuery, setSearchQuery] = useState('');

  const addNewFood = (newFood) => {
    setFoodList([...foodList, newFood]);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredFoodList = foodList.filter((food) =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id) => {
    setFoodList(foodList.filter((foodItem) => foodItem.id !== id));
  };

  return (
    <div className="App">
      <AddFoodForm addNewFood={addNewFood} />

      {/* Display Search component here */}
      <Search handleSearch={handleSearch} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        <div className="food-list">
          {filteredFoodList.map((food) => (
            <FoodBox
              key={food.id}
              food={food}
              foodList={foodList}
              setFoodList={setFoodList}
              clickHandler={handleDelete}
            />
          ))}
        </div>
      </Row>
    </div>
  );
}

export default App;
