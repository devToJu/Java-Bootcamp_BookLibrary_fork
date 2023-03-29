import {useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import {Book} from "../models/Book";

export default function UpdateBook() {
    const {isbn} = useParams()
    const [book, setBook] = useState<Book>()
    const [msg, setMsg] = useState("loading...")

    useEffect(() => {
        if(isbn) {
           getBook()
        }
    }, [])

    const getBook = () => {
        axios.get('/api/books/' + isbn)
            .then(response => setBook(response.data))
            .catch(reason => {
                console.error("Error", reason)
                setMsg("Could not found Book")
            })
    }

    return (
        book
            ? <div>
                <p>Titel: {book.title}</p>
                <p>Autor: {book.author}</p>
                <p>Cover: {book.cover}</p>
                <p>ISBN: {book.isbn}</p>
            </div>
            : <p>{msg}</p>
    )
}