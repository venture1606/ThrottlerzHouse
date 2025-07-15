import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [],
    products: [],
    singleProduct: {},
    cartList : [],
    wishList: [],
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
        },
        setSingleProduct: (state, action) => {
            state.singleProduct = action.payload;
        },
        setCartList: (state, action) => {
            state.cartList = action.payload;
        },
        setWishList: (state, action) => {
            state.wishList = action.payload;
        },
    }
});

export const { 
    setCategories, 
    setProducts, 
    setSingleProduct, 
    setCartList,
    setWishList
} = categorySlice.actions;

export default categorySlice.reducer;