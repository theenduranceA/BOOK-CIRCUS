import React from "react";
import BookSearch from "../BookSearch/BookSearch";
import './Header.css';
import Review from "../Review/Review";
import Recommendation from "../Recommendation/Recommendation";


const Header = () => {
    return (
        <div className="header">
            <header className="header-menu">
                <div className="header-sub-menu">
                    <h2 className="header-content">Welcome to Book Circus</h2><br />
                    <p className="header-sub-content">Find your favorite books, read reviews, and discover new recommendations!</p>
                    <BookSearch /> 
                    <Recommendation />
                    <Review />
                </div>
            </header>
        </div>
    )
}

export default Header;