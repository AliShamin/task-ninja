import { createSlice } from '@reduxjs/toolkit'
import { saveItem, getItem } from '../helpers/localStorageUtils';

export const reminderSlice = createSlice({
    name: 'reminder',
    initialState: {
        reminders: getItem('reminders') != null ? getItem('reminders') : []
    },
    reducers: {
        addReminder: (state, action) => {
            state.reminders.push(action.payload);
            saveItem('reminders', state.reminders);
        },
        editReminder: (state, action) => {
          const editItem =  state.reminders.find(e => e.id==action.payload.id);
          /**
           * Edit reminder fields
           */
          saveItem('reminders', state.reminders);
        },
        deleteReminder: (state, action) => {
            state.reminders = state.reminders.filter(e => e.id != action.payload) // remove the item with given id
            saveItem('reminders', state.reminders);
        }
    },
})

// Action creators are generated for each case reducer function
export const { addReminder, deleteReminder, editReminder } = reminderSlice.actions

export default reminderSlice.reducer