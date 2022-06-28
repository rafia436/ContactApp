import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IContactArrayModel} from '../models/IContact';

const initialState: IContactArrayModel = {
  all_contacts: [],
  selected_contact: {
    name: '',
    id: 0,
    mobile: 0,
    email: '',
  },
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    add_contact: (state, action) => {
      const contact = {
        id: Math.random() * 100,
        ...action.payload,
      };
      state.all_contacts.push(contact);
    },
    get_contact: (state, action) => {
      const selected = state.all_contacts.filter(contact => {
        return contact.id === action.payload;
      });
      state.selected_contact = action.payload;
    },
  },
});

export const {add_contact, get_contact} = contactSlice.actions;
export default contactSlice.reducer;
