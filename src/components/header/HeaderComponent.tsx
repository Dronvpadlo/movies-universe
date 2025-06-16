import React from 'react';
import {Link} from "react-router-dom";
import SearchComponent from "../movies-content/movies-search-components/SearchComponent.tsx";
import styles from './HeaderComponent.module.css'

const HeaderComponent = () => {
    return (
        <div>
            <div className={styles.section}>
                <div>
                    <Link className={styles.link} to={'/'}><h3 className={styles.font}>Movies Universe</h3></Link>

                </div>
                <div className={styles.links}>
                    <Link className={styles.link} to={'/movies'}>Movies</Link>
                    <Link className={styles.link} to={'/genres'}>Genres</Link>
                    <div className={styles.userIcon}>User</div>
                </div>
            </div>
            <div className={styles.searchComponent}><SearchComponent/></div>

        </div>
    );
};

export default HeaderComponent;