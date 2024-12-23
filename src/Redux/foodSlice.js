import { createSlice } from '@reduxjs/toolkit';

const foodSlice = createSlice({
    name: 'food',
    initialState: {
        foodList: [],
        searchList: []
    },
    reducers: {
        addItems: (state, action) => {
            // Replace the existing foodList with the new data
            state.foodList = action.payload;
        },
        searchItem: (state, action) => {
            console.log('Payload:', action.payload); // Log payload
            state.searchList = action.payload;
            console.log('Updated searchList:', state.searchList); // Log updated state
          }
          
        
    }
});

export const { addItems, searchItem } = foodSlice.actions;
export default foodSlice.reducer;
