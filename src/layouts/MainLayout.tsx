import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/header/HeaderComponent.tsx";
import FooterComponent from "../components/footer/FooterComponent.tsx";
import ScrollToTop from "../components/others/ScrollToTop.tsx";
import {ThemeContext} from "../context/ThemeContext.tsx";

const MainLayout = () => {
    return (
        <div>
            <ScrollToTop/>

            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>

        </div>
    );
};

export default MainLayout;