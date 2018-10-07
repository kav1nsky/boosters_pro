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
                </div>
                <div className={styles.headerNavigateButton}>
                    Рейтинг
                </div>
                <div className={styles.headerNavigateButton}>
                    О нас
                </div>
            </div>
            <div className={styles.registrationNavigate}>
                <Link to='/login' className={page === views.LOGIN_PAGE ?
                    styles.registrationNavigateButtonActive :
                    styles.registrationNavigateButton}>
                    Вход
                </Link>
                <Link to='/registration' className={page === views.REGISTRATION_PAGE ?
                    styles.registrationNavigateButtonActive :
                    styles.registrationNavigateButton}>
                    Регистрация
                </Link>
            </div>
        </div>
        {page === views.MAIN_PAGE ? <div className={styles.separatorSmall}/> :
            <div className={styles.separator}/>
        }
    </div>
);



