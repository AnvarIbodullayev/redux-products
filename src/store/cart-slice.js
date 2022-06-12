import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        // add item
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existItem = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++;

            if(!existItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title,
                });
            } else {
                existItem.quantity++;
                existItem.totalPrice = existItem.totalPrice + newItem.price;
            }
        },
        // remove item
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existItem = state.items.find((item) => item.id === id);
            state.changed = true;
            state.totalQuantity--;
            state.quantity--;

            if(existItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existItem.quantity--;
            }
        },
    }
})

export const cartAction = cartSlice.actions;
export default cartSlice;