import { createSlice } from '@reduxjs/toolkit'
import { saveItem, getItem } from '../helpers/localStorageUtils';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        items: getItem('filter') != null ? getItem('filter') : [],
    },
    reducers: {
        addFilter: (state, action) => {
            state.items.push({
                'cardType': action.payload.cardType,
                'filterType': action.payload.filterType,
            })
            saveItem('filter', state.items);
        },
        removeFilter: (state, action) => {
            state.items = state.items.filter(e => !(e.cardType == action.payload.cardType && e.filterType == action.payload.filterType))
            saveItem('filter', state.items);
        }
    },
})

// Action creators are generated for each case reducer function
export const { addFilter, removeFilter } = filterSlice.actions

export default filterSlice.reducer