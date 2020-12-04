import React , { useState } from 'react';
import { useQuery } from '@apollo/client';
import {getBooksQuery} from '../queries/queries';
import BookDetails from './BookDetails';

 
function BookList() {
    const {loading , error, data } = useQuery(getBooksQuery);
    const [bookId, setBookId] = useState(null);

    return (
        <div>
            <ul id="book-list">
                {loading? <div>Loading books</div> : (
                    data.books.map(book => {
                        return (<li key = {book.id} onClick = {() => {setBookId(book.id)}}>{book.name}</li>);
                    })
                )}
            </ul>
            <BookDetails bookId = {bookId}/>
        </div>
    )
}

export default BookList
