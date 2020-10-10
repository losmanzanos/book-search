import React from 'react';
import './Search.css';

import Filter from '../Filter/Filter';

function Search(props) {
    return(
        <div className="search">
            <form className="search_form" onSubmit={props.bookSearch}>
                <label htmlFor="search">Search:</label>
                <input 
                    required
                    type="text" 
                    name="search" 
                    id="title" 
                    placeholder="Book Title"
                    />
                <button type="submit" >Search</button>
                <Filter />
            </form>
        </div>
    );
}

export default Search