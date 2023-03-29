import {useParams} from "react-router-dom";

export default function UpdateBook() {
    const {isbn} = useParams()

    return (
        <div>{isbn}</div>
    )
}