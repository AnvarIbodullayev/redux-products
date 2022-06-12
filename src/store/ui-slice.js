import { createSlice } from "@reduxjs/toolkit"

const uiSlice = createSlice({
    name: "ui",
    initialState: {bagIsVisible: false},
    reducers: {
        toggle(state) {
            state.bagIsVisible = !state.bagIsVisible;
        }
    }
});

export const uiAction = uiSlice.actions;
export default uiSlice;