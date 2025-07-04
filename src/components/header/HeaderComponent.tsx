import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import SearchComponent from "../movies-content/movies-search-components/SearchComponent.tsx";
import styles from './HeaderComponent.module.css'
import GenresComponent from "../genres-components/GenresComponent.tsx";
import {ThemeContext} from "../../context/ThemeContext.tsx";
import {useAppSelector} from "../../redux/hooks/UseAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/UseAppDispatch.tsx";
import {userSliceAction} from "../../redux/slices/userSlice/userSlice.ts";

const HeaderComponent = () => {

    const {theme, changeTheme} = useContext(ThemeContext);
    const changeThemeHandler = () => {
        changeTheme(theme === 'light' ? 'dark' : 'light')
        console.log(theme)
    };

    const {name} = useAppSelector(state => state.userSlice);
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(userSliceAction.clearUser())
    }

    return (
        <div>
            <div className={styles.block}>
                <div>
                    <Link className={styles.link} to={'/movies'}><h3 className={styles.font}>Movies</h3></Link>

                </div>
                <div className={styles.links}>
                    {name ? (
                        <div className={styles.userBlock}>
                            <span className={styles.userName}>👤 {name}</span>
                            <button className={styles.logoutBtn} onClick={handleLogout}>Logout</button>
                        </div>
                    ) : (
                        <span className={styles.userName}>Guest</span>
                    )}
                    <button className={styles.darkThemeButton} onClick={changeThemeHandler}>{theme === 'light' ? '🌞' : '🌙'}</button>
                </div>
            </div>
            <div><GenresComponent/></div>
            <div className={styles.searchComponent}><SearchComponent/></div>

        </div>
    );
};

export default HeaderComponent;