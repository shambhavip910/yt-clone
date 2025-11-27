import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{isOpen:false},
    reducers:{
        toggleMenu:(state)=>{
            state.isOpen=!state.isOpen;
        },
        closeMenu:(state)=>{
            state.isOpen=false;
        },
    },
});

export const {toggleMenu,closeMenu} =appSlice.actions;
export default appSlice.reducer;



