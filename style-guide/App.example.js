import React, { useState } from "react";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";import { Row, Divider, Button } from 'antd';

function App() {
  
  const [foodList, setFoodList] = useState(foods);

  return (
    <div className="App">
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
      <div className="food-list">
        {foodList.map((food) => (
          <FoodBox key={food.id} food={food} />
        ))}
      </div>
      </Row>
    </div>
  );
}

export default App;
