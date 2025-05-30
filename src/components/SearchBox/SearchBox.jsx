import React from 'react';
import s from "./SearchBox.module.css"
import {useDispatch} from "react-redux";
import {changeFilter} from "../../redux/filtersSlice.js";

function SearchBox() {
    const dispatch = useDispatch();

    const newFilter = (filter) => {
        dispatch(changeFilter(filter));
    };
    return (
        <div className={s.searchBox}>
            <label className={s.label}>Find contact by name</label>
            <input
                type="text"
                placeholder="Search contacts..."
                name="filter"
                onChange={(e) => newFilter(e.target.value) }
                className={s.input}
            />
        </div>

    );
}

export default SearchBox;