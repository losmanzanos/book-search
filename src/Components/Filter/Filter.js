import React from 'react';
import './Filter.css';

function Filter() {
    return(
        <div className="filter">
            <div className="filter_info">
                <label htmlFor="print_type">Print Type:</label>
                <select name='print_type' id='print_type'>
                    <option value=''>All</option>
                    <option value='books'>Books</option>
                    <option value='magazines'>Magazines</option>
                </select>
                <label htmlFor="book_type">Book Type:</label>
                <select name='book_type' id='book_type'>
                    <option value=''>No Filter</option>
                    <option value='free_ebooks'>Free eBooks</option>
                    <option value='paid_ebooks'>Paid eBooks</option>
                </select>
            </div>
        </div>
    );
}

export default Filter