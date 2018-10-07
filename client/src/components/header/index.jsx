import React from 'react';
import {Link} from 'react-router-dom';
import styles from './styles.scss';

import logo from '../../assets/media/logo.png';
import {views} from '../../constans/views';

export const Header = ({page}) => (
    <div className={styles.header}>
        <div className={styles.headerContent}>
            <Link to='/' className={styles.headerTitle}>
                <img src={logo} alt='logo' className={styles.logoImg}/>
                <div className={styles.headerTitle}>
                    Boosters.pro
                </div>
            </Link>
            <div className={styles.headerNavigate}>
                <div className={styles.headerNavigateButton}>
                    Чемпионаты
                    {page === views.CHAMPIONSHIPS_PAGE ?  <div className={styles.activePage}/> : <div/>}
                </div>
                <div className={styles.headerNavigateButton}>
                    Рейтинг
                    {page === views.RATING_PAGE?  <div className={styles.activePage}/> : <div/>}
                </div>
                <div className={styles.headerNavigateButton}>
                    О нас
                    {page === views.ABOUT_PAGE ?  <div className={styles.activePage}/> : <div/>}
                </div>
            </div>
            <div className={styles.registrationNavigate}>
                <Link to='/login' className={styles.registrationNavigateButton}>
                    Вход
                    {page === views.LOGIN_PAGE ?  <div className={styles.activePage}/> : <div/>}
                </Link>
                <Link to='/registration' className={ styles.registrationNavigateButton}>
                    Регистрация
                    {page === views.REGISTRATION_PAGE ?  <div className={styles.activePage}/> : <div/>}
                </Link>
            </div>
        </div>
        {page === views.MAIN_PAGE ? <div className={styles.separatorSmall}/> :
            <div className={styles.separator}/>
        }
    </div>
);



