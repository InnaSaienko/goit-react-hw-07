import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import filtersSlice from "./filtersSlice.js";
import contactsSlice from "./contactsSlice.js";

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['items'],
};

const persistedContactsReducer = persistReducer(persistConfig, contactsSlice);

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filters: filtersSlice,
    },
    devTools:  import.meta.env.MODE === 'development',
});

export const persistor = persistStore(store);