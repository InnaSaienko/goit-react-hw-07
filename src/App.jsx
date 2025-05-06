import s from './App.module.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchContacts} from "./redux/contactsOps.js";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import Loader from "./components/Loader/Loader.jsx";
import {selectContacts, selectError, selectLoading} from "./redux/contactsSlice.js";

const App = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);
    const isError = useSelector(selectError);

    const contacts = useSelector(selectContacts);

    useEffect(() => {
        if (contacts.length === 0) {
            dispatch(fetchContacts());
        }

    }, [dispatch, contacts]);
    return (
        <div className={s.main}>
            <ContactForm/>
            <SearchBox/>
            {isLoading && !isError && < Loader/>}
            <ContactList/>
        </div>

    )
}

export default App
