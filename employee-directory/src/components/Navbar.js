import React from "react";
import Search from "./Search";
import "./styles.css";

function Nav ({ handleSearches }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Search handleSearches= {handleSearches} />
            </nav>
    );
}

export default Nav;