import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent.tsx";
import FooterComponent from "../components/FooterComponent.tsx";

const MainLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <hr/>
            <Outlet/>
            <FooterComponent/>
        </div>
    );
};

export default MainLayout;