import React, {useContext, useState} from 'react';
import styles from './HomeComponent.module.css'
import {Form} from "reactstrap";
import {useAppDispatch} from "../../redux/hooks/UseAppDispatch.tsx";
import {useNavigate} from "react-router-dom";
import {userSliceAction} from "../../redux/slices/userSlice/userSlice.ts";
import {ThemeContext} from "../../context/ThemeContext.tsx";

const HomeComponent = () => {


    const [name, setName] = useState('')
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {theme, changeTheme} = useContext(ThemeContext);
    const changeThemeHandler = () => {
        changeTheme(theme === 'light' ? 'dark' : 'light')
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) return;
        dispatch(userSliceAction.setUser(name.trim()));
        navigate('/movies')
        console.log('click')
    }


    return (
        <div className={styles.section}>

            <button className={styles.darkThemeButton}
                    onClick={changeThemeHandler}>{theme === 'light' ? '🌞' : '🌙'}</button>

            <h1 className={styles.h1}>Welcome to Movies Universe</h1>
            <Form onSubmit={handleSubmit}>
                <input
                    className={styles.searchForm}
                    type='text'
                    placeholder='enter your name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button className={styles.button}>Register</button>
            </Form>
        </div>
    );
};

export default HomeComponent;