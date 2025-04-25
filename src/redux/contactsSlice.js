import {createSlice} from "@reduxjs/toolkit";
import {addContact, deleteContact, fetchContacts} from "./contactsOps.js";

const initialState = {
    items: [],
    loading: false,
    error: null,
};

const handelPending = state => {
    state.isLoading = true;
};

const handelFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.items = action.payload;
};

const handelRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const slice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, handelPending)
            .addCase(fetchContacts.fulfilled, handelFulfilled)
            .addCase(fetchContacts.rejected, handelRejected)
            .addCase(addContact.pending, handelPending)
            .addCase(addContact.fulfilled, handelFulfilled)
            .addCase(addContact.rejected, handelRejected)
            .addCase(deleteContact.pending, handelPending)
            .addCase(deleteContact.fulfilled, handelFulfilled)
            .addCase(deleteContact.rejected, handelRejected)
    },
});

export default slice.reducer;