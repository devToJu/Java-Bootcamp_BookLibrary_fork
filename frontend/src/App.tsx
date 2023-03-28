import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import {Book} from "./model/Book";

function App() {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => getBooks());

    const getBooks = () => {
        axios.get("api/books")
            .then(response => setBooks(response.data))
            .catch();
    }

    return (
        <div className="App">
            {
                books.map(book => <div>{book.title}</div>)
            }
        </div>
    );
}

export default App;
