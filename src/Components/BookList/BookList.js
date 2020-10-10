import React from 'react';
import './BookList.css';

import Book from '../Book/Book';

function BookList(props) {
    console.log(props.books);
    return(
        <ul className='books_list'>
            {props.books.map(book => <Book book={book} key={book.id}/>)}
        </ul>
    );
}

export default BookList