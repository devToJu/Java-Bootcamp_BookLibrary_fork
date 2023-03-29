import React, {ChangeEvent, FormEvent, useState} from "react";
import {NewBook} from "../models/Book";

type Props = {
    addNewBook: (book: NewBook) => void;
}

export default function AddBook(props: Props) {
    const initBook: NewBook = {
        title: "",
        author: "",
        cover: "HARDCOVER"
    }

    const [newBook, setNewBook] = useState<NewBook>(initBook);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const attributeName = event.target.name;
        const value = event.target.value;
        const book = {...newBook, [attributeName]: value};
        setNewBook(book);
    }

    const addBook = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.addNewBook(newBook);
        setNewBook(initBook);
    }

    return (
        <>
            <form onSubmit={addBook}>
                <input type="text"
                       name="title"
                       onChange={onChange}
                       value={newBook.title}
                />
                <input type="text"
                       name="author"
                       onChange={onChange}
                       value={newBook.author}
                />
                <button type="submit">Add Book</button>
            </form>
        </>
    )
}