import {Link, Outlet} from "react-router-dom";
import React from "react";

export default function Navigation() {
    return (
        <>
            <Link to={"/"}>Home</Link>
            <Link to={"/addBook"}>Add Book</Link>
            <Outlet />
        </>
    )
}