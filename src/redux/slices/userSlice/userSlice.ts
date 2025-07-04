import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from '@reduxjs/toolkit';

type UserSliceType = {
    name: string | null
};

const initialState:UserSliceType = {
    name: localStorage.getItem('user') || null
};

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {
        setUser: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
            localStorage.setItem('user', action.payload)
        },
        clearUser: (state) => {
            state.name = null;
            localStorage.removeItem('user')
        }
    }
});

export const userSliceAction = userSlice.actions;
export default userSlice.reducer;