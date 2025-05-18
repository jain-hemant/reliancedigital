import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  type: '', // 'success', 'error', 'info'
  isVisible: false
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type || 'success';
      state.isVisible = true;
    },
    hideNotification: (state) => {
      state.isVisible = false;
    },
    resetNotification: (state) => {
      state.message = '';
      state.type = '';
      state.isVisible = false;
    }
  }
});

export const { showNotification, hideNotification, resetNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
