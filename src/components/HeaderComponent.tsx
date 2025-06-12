import React from 'react';
import {Link} from "react-router-dom";
import SearchComponent from "./SearchComponent.tsx";

const HeaderComponent = () => {
    return (
        <div>
            <h4>Movies Universe</h4>
            <Link to={'/movies'}>Movies</Link>  <Link to={'/genres'}>Genres</Link>
            <SearchComponent/>
        </div>
    );
};

export default HeaderComponent;