import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

export const cartSlice = createSlice({
    //reducer name
    name: 'cart',
    initialState,
    //actions available
    reducers: {
        addProduct: (product,state) => {
            state.products += product;
        },
    }
});
export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;
