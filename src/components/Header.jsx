import React from 'react'
import imgSearch from "../assets/icon-search.svg"

const Header = ({ searchValue, setSearchValue }) => {
    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <header className="row navbar bg-info">
            <div className="col-12 col-md-4 col-lg-4 text-center">
                <p className="header-text fs-3">Support Desk</p>
            </div>
            <div className="col-12 col-md-5 col-lg-3 d-flex justify-content-center">
                <form className="d-flex">
                    {/*The input(search field) for filtering the person cards*/}
                    <input className="form-control search-bar" type="text" value={searchValue} onChange={handleInputChange} placeholder="Search..." />
                    <img className="icon-search" src={imgSearch} alt="..." />
                </form>
            </div>
        </header>
    );
};

export default Header;

