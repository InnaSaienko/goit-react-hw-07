import React from 'react';
import Contact from "../Contact/Contact.jsx";
import s from "./ContactList.module.css"
import {useSelector} from "react-redux";

const ContactList = () => {
    const users = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filters.name);

    const getFilteredContacts = (userContacts, filterValue) => {
        if (filterValue !== "") {
            return userContacts.filter(
                (contact) =>
                contact.name.toLowerCase().includes(filterValue.toLowerCase()) ||
                contact.number.includes(filterValue)
            );
        }
        return userContacts;
    };
    const filteredContacts = getFilteredContacts(users, filter);
    return (
        <div className={s.list}>
            {filteredContacts.length === 0 ? (
                <p>No users available</p>
            ) : (
                filteredContacts.map((contact) => (
                    <Contact key={contact.id} contact={contact}/>
                ))
            )
            }
        </div>
    );
}

export default ContactList;