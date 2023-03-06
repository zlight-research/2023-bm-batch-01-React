import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/slices/demoSlice'
import loginReducer from '../redux/slices/loginSlice'
import sidebarReducer from '../redux/slices/sidebarSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    sidebar:sidebarReducer
  },
})