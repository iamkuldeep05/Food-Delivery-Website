import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchItem } from '../Redux/foodSlice';

export const SearchTab = () => {
  const [searchText, setSearchText] = useState(""); 
  const dispatch = useDispatch(); 

  const { foodList } = useSelector((state) => ({
    foodList: state.food.foodList,
  }));

  const handleSearch = () => {
    const filteredFoodList = foodList.filter((food) =>
      food.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    dispatch(searchItem(filteredFoodList));
  };

  const handleKeyPress = (event) => {
    if (event.code === "Enter") {
      console.log("Entered Press");
      console.log(foodList)
      handleSearch();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        height: "100vh",
      }}
    >
      <input 
        type="text"
        value={searchText}
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "10px",
          width: "50%",
          fontSize: "16px",
        }}
        placeholder="Search Restaurants..."
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};
