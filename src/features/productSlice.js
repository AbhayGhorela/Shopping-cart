import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const  fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async ()=>{
        const res = await fetch('https://fakestoreapi.com/products');
        return res.json()
    }
)

const productSlice = createSlice({
    name:'products',
    initialState:{
        items:[],
        status:'idle',
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.status = 'loading';
        });
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.status = 'failed';
            state.error = action.error.message;
        });
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.status = 'succeeded';
            state.items = action.payload;
        })
    }
})

export default productSlice.reducer