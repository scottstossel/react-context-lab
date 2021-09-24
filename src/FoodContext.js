import {useState, useEffect, createContext} from "react";
import {foodItems} from './food.json';

export const FoodsContext = createContext({});

export const FoodProvider = ({children}) => {
  const [foods, setFoods] = useState([]);
  const [food, setFood] = useState({});

  useEffect(() => {
    setFoods(foodItems)
  }, [])

  const addFood = (obj) => {
    setFoods([...food, obj]);
  }


  return (
    <FoodsContext.Provider value={{
      foods,
      setFoods,
      addFood
    }}>
      {children}
    </FoodsContext.Provider>
  )
}