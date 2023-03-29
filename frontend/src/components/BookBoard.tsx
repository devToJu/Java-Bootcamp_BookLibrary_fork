import BookComp from "./BookComp";
import React from "react";
import {Book} from "../models/Book";

type Props = {
    books: Book[],
    deleteBook: (isbn: string) => void
}

export default function BookBoard(props: Props) {
    return (
        <>
            {
                props.books.map(book =>
                    <BookComp key={book.isbn}
                              book={book}
                              deleteBook={props.deleteBook}
                    />)
            }
        </>
    )
}