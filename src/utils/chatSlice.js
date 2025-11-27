import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "../assets/constants";

const chatSlice=createSlice({
    name:"chat",
    initialState:{
        messages:[],
    },
    reducers:{
        addmessages:(state,action)=>{
            //When we do a Splice it will restrict my length to be x(100 here) and remove y messages(1 here) from the Top
            state.messages.splice(LIVE_CHAT_COUNT,1);
            // state.messages.push(action.payload); this for doing regular chat coming first then new one above
            //now this one is for makeing just like yt live chat.ie push in from the first
            
              state.messages.unshift(action.payload);
        },
    },
});

export const {addmessages} =chatSlice.actions;
export default chatSlice.reducer;
