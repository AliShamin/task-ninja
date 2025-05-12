import { createSlice } from '@reduxjs/toolkit'
import { saveItem, getItem } from '../helpers/localStorageUtils';
import { current } from '@reduxjs/toolkit';

export const cardSlice = createSlice({
    name: 'card',
    initialState: {
        item: getItem('cardItems') != null ? getItem('cardItems') : []
    },
    reducers: {
        addCard: (state, action) => {
            state.item.push(action.payload);
            saveItem('cardItems', state.item);
        },
        addAllCards: (state, action) => {
            state.item = [...state.item,...action.payload];
            saveItem('cardItems', state.item);
        },
        editCard: (state, action) => {
          const editItem =  state.item.find(e => e.id==action.payload.id);
          editItem.cardTitle = action.payload.cardTitle;
          editItem.textData = action.payload.textData;
          editItem.cardType = action.payload.cardType;
          editItem.isImp = action.payload.isImp;
          saveItem('cardItems', state.item);
        },
        deleteCard: (state, action) => {
            state.item = state.item.filter(e => e.id != action.payload) // remove the item with given id
            saveItem('cardItems', state.item);
        },
        deleteAllCard: (state, action) => {
            state.item = []
            saveItem('cardItems', []);
        }
    },
})

// Action creators are generated for each case reducer function
export const { addCard, addAllCards, deleteCard, deleteAllCard, editCard } = cardSlice.actions

export default cardSlice.reducer