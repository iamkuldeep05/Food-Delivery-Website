import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchItem } from '../Redux/foodSlice';

export const SearchTab = () => {
  const [searchText, setSearchText] = useState(""); 
  const dispatch = useDispatch(); 

  const { foodList, searchList } = useSelector((state) => ({
    foodList: state.food.foodList,
    searchList: state.food.searchList,
  }));
  console.log(foodList);

  const handleSearch = () => {
    const filteredFoodList = foodList.filter((food) =>
      food.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    dispatch(searchItem(filteredFoodList));
  };

  const handleKeyPress = (event) => {
    if (event.code === "Enter") {
      console.log("Entered Press");
      handleSearch();
    }
  };

  const SearchResults = () => {
    return (
      <div style={{ marginTop: "20px", width: "50%" }}>
        {searchList.length > 0 ? (
          searchList.map((food, index) => (
            <div
              key={index}
              className="flex justify-between p-4 border rounded-lg shadow-lg mb-4 bg-white"
            >
              <div>
                <h1 className="font-bold text-lg">{food.info?.name || "Unnamed Restaurant"}</h1>
                <p className="text-sm text-gray-600">Category: {food.info?.category || "N/A"}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-green-600">
                  ₹{food.info?.price ? food.info.price / 100 : "-"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-lg text-gray-600">No results found.</p>
        )}
      </div>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        paddingTop: "20px",
        backgroundColor: "#f7f7f7",
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
      <SearchResults />
    </div>
  );
};
