import { createSlice } from '@reduxjs/toolkit'

export const viewCardSlice = createSlice({
    name: 'viewCard',
    initialState: {
        showViewCard: false,
        cardId:0
    },
    reducers: {
        openViewCard: (state, action) => {
            state.showViewCard = true;
            state.cardId = action.payload;
        },
        closeViewCard: (state) => {
            state.showViewCard = false;
        }
    },
})

// Action creators are generated for each case reducer function
export const { openViewCard, closeViewCard } = viewCardSlice.actions

export default viewCardSlice.reducer