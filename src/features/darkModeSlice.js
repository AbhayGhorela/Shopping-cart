import { createSlice } from "@reduxjs/toolkit";

const savedTheme = ()=>{
    try{
        const serializedState = localStorage.getItem('themeState');
        if(serializedState === null) return undefined;
        return JSON.parse(serializedState);
    }
    catch(e){
        console.warn('failed to load cart from localStorage',e);
        return undefined;
    }
}

const initialState = savedTheme() || {
    themeMode:'light'
}

const darkModeSlice = createSlice({
    name:'darkMode',
    initialState,
    reducers:{
        darkTheme:(state)=>{
            state.themeMode = 'dark'
        },
        lightTheme:(state)=>{
            state.themeMode = 'light'
        }
    }
})


export const {darkTheme,lightTheme} = darkModeSlice.actions

export default darkModeSlice.reducer;