import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [],
    products: []
};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload.categories;
        },
        setProducts: (state, action) => {
            state.products = action.payload.products;
        }
    }
});

export const { setCategories, setProducts } = categorySlice.actions;

export default categorySlice.reducer;