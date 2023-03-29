import {Book} from "../models/Book";

type Props = {
    book: Book
    deleteBook: (isbn: string) => void
}
export default function BookComp(props: Props) {
    const {book} = props;

    return (
        <div style={{margin: "20px", border: "1px black solid"}}>
            <p>Titel: {book.title}</p>
            <p>Author: {book.author}</p>
            <p>Cover: {book.cover}</p>
            <p>ISBN: {book.isbn}</p>
            <button onClick={() => props.deleteBook(book.isbn)}>Delete</button>
        </div>
    )
}