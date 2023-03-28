import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import {Book, NewBook} from "./models/Book";
import AddBook from "./components/AddBook";

function App() {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => getBooks(), []);

    const getBooks = () => {
        axios.get("api/books")
            .then(response => setBooks(response.data))
            .catch(reason => console.log(reason));
    }

    const addBook = (newBook: NewBook) => {
        axios.post("api/books", newBook)
            .then(response => setBooks([...books, response.data]))
            .catch(reason => console.log(reason));
    }

    return (
        <div className="App">
            {
                books.map(book => <div key={book.isbn}>{book.title}</div>)
            }
            <AddBook addNewBook={addBook} />
        </div>
    );
}

export default App;
