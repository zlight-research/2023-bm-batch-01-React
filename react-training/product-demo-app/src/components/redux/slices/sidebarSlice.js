import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    isdashboard : true
}

export const sidebarSlice = createSlice({
    name : 'sidebar',
    initialState,
    reducers:{
        setDashboard: (state,action)=>{
            state.isdashboard = action.payload
        }
    }
})

export const {setDashboard} = sidebarSlice.actions
export default sidebarSlice.reducer