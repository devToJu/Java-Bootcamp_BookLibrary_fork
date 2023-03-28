import {Cover} from "./Cover";

export type Book = {
    isbn: string,
    title: string,
    author: string,
    cover: Cover
}

export type NewBook = {
    title: string,
    author: string,
    cover: Cover
}
