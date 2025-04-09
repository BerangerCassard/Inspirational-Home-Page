import { createSlice } from '@reduxjs/toolkit';

export const barSlice = createSlice({
    name: 'bar',
    initialState: {
        text: ''
    },
    reducers: {
        setText: (state, action) => {
            state.text = action.payload;
        },
        clearText: (state) => {
            state.text = '';
        },
    },
});

export const { setText, clearText } = barSlice.actions;
export default barSlice.reducer;
