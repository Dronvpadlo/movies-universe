import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent.tsx";
import SearchComponent from "../components/SearchComponent.tsx";
import PaginationComponent from "../components/PaginationComponent.tsx";

const MainLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <hr/>
            <Outlet/>
            <hr/>
            <PaginationComponent/>
        </div>
    );
};

export default MainLayout;