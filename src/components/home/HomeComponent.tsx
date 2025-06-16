import React from 'react';
import {Link} from "react-router-dom";
import styles from './HomeComponent.module.css'

const HomeComponent = () => {
    return (
        <div className={styles.section}>
            <h1 className={styles.h1}>Welcome to movies Universe</h1>
            <Link to={'/movies'} className={styles.link}>Let`s watch something</Link>
        </div>
    );
};

export default HomeComponent;