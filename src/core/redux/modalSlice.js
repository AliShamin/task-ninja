import { createSlice } from '@reduxjs/toolkit'
import { getItem, saveItem } from '../helpers/localStorageUtils';

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isModalOpen: false,
        notificationModal: {
            id: 0,
            title: '',
            isModalOpen: false
        },
        maxViewModal: {
            isModalOpen: false,
            isEditable: false
        },
        existingNotificationModal: {
            isModalOpen: false
        },
        infoModal: {
            isModalOpen: false
        },
        isDarkMode: getItem('isDarkMode') != null ? getItem('isDarkMode') : false
    },
    reducers: {
        switchToDarkMode: (state) => {
            // state.isDarkMode = true;
            state = {...state,isDarkMode:true}
            saveItem('isDarkMode', true);
        },
        switchToLightMode: (state) => {
            state.isDarkMode = false;
            saveItem('isDarkMode', false);
        },
        openModal: (state) => {
            state.isModalOpen = true;
        },
        closeModal: (state) => {
            state.isModalOpen = false;
        },
        openMaxViewModal: (state, action) => {
            state.maxViewModal.isModalOpen = true;
            state.maxViewModal.isEditable = action.payload.isEditable;
        },
        closeMaxViewModal: (state) => {
            state.maxViewModal.isModalOpen = false;
        },
        openInfoModal: (state) => {
            state.infoModal.isModalOpen = true;
        },
        closeInfoModal: (state) => {
            state.infoModal.isModalOpen = false;
        },
        openNotificationModal: (state, action) => {
            state.notificationModal.isModalOpen = true;
            state.notificationModal.id = action.payload.id;
            state.notificationModal.title = action.payload.cardTitle;
        },
        closeNotificationModal: (state) => {
            state.notificationModal.isModalOpen = false;
        },
        openExistingNotificationModal: (state) => {
            state.existingNotificationModal.isModalOpen = true;
        },
        closeExistingNotificationModal: (state) => {
            state.existingNotificationModal.isModalOpen = false;
        }
    },
})

// Action creators are generated for each case reducer function
export const { switchToDarkMode, switchToLightMode, openModal, closeModal, openNotificationModal, closeNotificationModal, openExistingNotificationModal, closeExistingNotificationModal, openInfoModal, closeInfoModal, openMaxViewModal, closeMaxViewModal } = modalSlice.actions

export default modalSlice.reducer