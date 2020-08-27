import React from "react";


function SearchForm ({ handleSearch }) {
    return (
        <div className="search">
            <form className="form-group">
                 <input type="search" className="form-control" id="exampleFormControlInput1" placeholder="search" 
                 onChange={e => handleSearch(e)}
                />
            </form>
        </div>
       );
    };

 export default SearchForm;   