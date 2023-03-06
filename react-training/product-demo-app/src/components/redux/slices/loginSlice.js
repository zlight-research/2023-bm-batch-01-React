import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    username : 'product user'
}

export const loginSlice = createSlice({
    name : 'login',
    initialState,
    reducers:{
        setUsername: (state,action) =>{
            state.username = action.payload
        }
    }
})

export const {setUsername} = loginSlice.actions
export default loginSlice.reducer