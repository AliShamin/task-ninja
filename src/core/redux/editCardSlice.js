import { createSlice } from '@reduxjs/toolkit'

export const editCardSlice = createSlice({
    name: 'editCard',
    initialState: {
        showEditCard: false,
        cardId:0
    },
    reducers: {
        openEditCard: (state, action) => {
            state.showEditCard = true;
            state.cardId = action.payload;
        },
        closeEditCard: (state) => {
            state.showEditCard = false;
        }
    },
})

// Action creators are generated for each case reducer function
export const { openEditCard, closeEditCard } = editCardSlice.actions

export default editCardSlice.reducer