import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contactsArray: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contactsArray.push(action.payload);
    },

    deleteContact: (state, action) => {
      state.contactsArray = state.contactsArray.filter(
        el => el.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
