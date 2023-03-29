import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import {Book, NewBook} from "./models/Book";
import AddBook from "./components/AddBook";
import BookBoard from "./components/BookBoard";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";

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

    const deleteBook = (isbn: string) => {
        axios.delete(`/api/books/${isbn}`)
            .then(() => setBooks(books.filter(book => book.isbn !== isbn)))
            .catch(reason => console.log(reason))
    }

    return (
        <div className="App">
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path={'/'}
                           element={<BookBoard books={books} deleteBook={deleteBook}/>}/>
                    <Route path={'/addBook'} element={<AddBook addNewBook={addBook}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
