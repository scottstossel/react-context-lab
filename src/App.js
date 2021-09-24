import logo from "./logo.svg";
import "./App.css";
import { useContext, useState, createContext, useEffect } from "react";
import { FoodsContext } from "./FoodContext";
import {useForm} from './useForm';

function App() {
  const { foods, addFood, setFoods } = useContext(FoodsContext);

  const { foodName, foodType, protein, calories, handleChange, resetForm } = useForm({
    foodName: '',
    foodType: '',
    protein: '',
    calories: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFood = {
      foodName,
      foodType,
      protein,
      calories
    }
    setFoods([...foods, newFood]);
  }

  return (
    <div className="App">
      {foods &&
        foods.map((food, i) => (
          <>
            <h4 key={i}>{food.foodName}</h4>
            <h5 key={i}>{food.foodType}</h5>
            <h5 key={i}>Protein type: {food.protein}</h5>
            <h5 key={i}>Calories: {food.calories}</h5>
          </>
        ))}
    </div>
  );
}

export default App;
