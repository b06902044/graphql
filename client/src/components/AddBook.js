import React , { useEffect , useState } from 'react';
import { useQuery , useMutation } from '@apollo/client';
import { getAuthorsQuery , addBookMutation , getBooksQuery } from '../queries/queries';


function AddBook() {
    const {loading: authorLoading , error, data: authorData } = useQuery(getAuthorsQuery);
    const [addBook] = useMutation(addBookMutation);
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [authorId, setAuthorId] = useState('');

    const submit = e => {
        e.preventDefault();
        addBook({
            variables: {
                name: name,
                genre: genre,
                authorId: authorId
            },
            refetchQueries: [{query: getBooksQuery}]
        })
    }
      
    return (
        <form id="add-book" onSubmit = {submit}>
                <div className="field">
                    <label>Book name:</label>
                    <input type="text" onChange = { e => {setName(e.target.value)}}/>
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text" onChange = { e => {setGenre(e.target.value)}}/>
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select onChange = { e => {setAuthorId(e.target.value)}}>
                        <option>Select author</option>
                        {authorLoading? <option>Loading authors</option> : (
                            authorData.authors.map(author => {
                                return (<option key = {author.id} value = {author.id}>{author.name}</option>);
                            })
                        )}
                    </select>
                </div>
                <button>+</button>

        </form>
    )
}

export default AddBook
