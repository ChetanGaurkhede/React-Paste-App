import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from './redux/PastSlice'

export const store = configureStore({
  reducer: {
    counter: pasteReducer,
  },
})