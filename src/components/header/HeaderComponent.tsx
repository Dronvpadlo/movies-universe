import React from 'react';
import {Link} from "react-router-dom";
import SearchComponent from "../movies-content/movies-search-components/SearchComponent.tsx";
import styles from './HeaderComponent.module.css'
import GenresComponent from "../genres-components/GenresComponent.tsx";

const HeaderComponent = () => {
    return (
        <div>
            <div className={styles.block}>
                <div>
                    <Link className={styles.link} to={'/'}><h3 className={styles.font}>Movies Universe</h3></Link>

                </div>
                <div className={styles.links}>
                    <Link className={styles.link} to={'/movies'}>Movies</Link>
                    <div className={styles.userIcon}>User</div>
                </div>
            </div>
            <div><GenresComponent/></div>
            <div className={styles.searchComponent}><SearchComponent/></div>

        </div>
    );
};

export default HeaderComponent;