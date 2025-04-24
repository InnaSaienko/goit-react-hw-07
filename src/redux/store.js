import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from "./filtersSlice.js";
import contactsSlice from "./contactsSlice.js";

export const store = configureStore({
    reducer: {
        contacts: contactsSlice,
        filters: filtersSlice,
    },
    // devTools:  import.meta.env.MODE === 'development',
});