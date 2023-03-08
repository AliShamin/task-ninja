import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './modalSlice'
import cardReducer from "./cardSlice"
import viewCardReducer from './viewCardSlice'
import editCardReducer from './editCardSlice'
import reminderReducer from './reminderSlice'
import filterReducer from './filterSlice'

export default configureStore({
  reducer: {
    modal: modalReducer,
    card: cardReducer,
    viewCard: viewCardReducer,
    editCard: editCardReducer,
    reminder: reminderReducer,
    filter: filterReducer
  },
})