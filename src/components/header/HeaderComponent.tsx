import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import SearchComponent from "../movies-content/movies-search-components/SearchComponent.tsx";
import styles from './HeaderComponent.module.css'
import GenresComponent from "../genres-components/GenresComponent.tsx";
import {ThemeContext} from "../../context/ThemeContext.tsx";

const HeaderComponent = () => {

    const {theme, changeTheme} = useContext(ThemeContext);
    const changeThemeHandler = () => {
        changeTheme(theme === 'light' ? 'dark' : 'light')
        console.log(theme)
    };

    return (
        <div>
            <div className={styles.block}>
                <div>
                    <Link className={styles.link} to={'/'}><h3 className={styles.font}>Movies Universe</h3></Link>

                </div>
                <div className={styles.links}>
                    <Link className={styles.link} to={'/movies'}>Movies</Link>
                    <div className={styles.userIcon}>User</div>
                    <button className={styles.darkThemeButton} onClick={changeThemeHandler}>{theme === 'light' ? '🌞' : '🌙'}</button>
                </div>
            </div>
            <div><GenresComponent/></div>
            <div className={styles.searchComponent}><SearchComponent/></div>

        </div>
    );
};

export default HeaderComponent;