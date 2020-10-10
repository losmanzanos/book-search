import React from 'react';

function Book(props) {
    return(
        <li>
            <h2>{props.book.volumeInfo.title}</h2>
            <p>{props.book.volumeInfo.description}</p>
            <img src={props.book.volumeInfo.imageLinks.smallThumbnail} alt={props.book.volumeInfo.title}/>
            <p>$ {props.book.listPrice?props.book.listPrice.amount: 'price not listed'}</p>
            <a href={props.book.volumeInfo.infoLink} target='_new'>See More</a>
      </li>
    );
}

export default Book