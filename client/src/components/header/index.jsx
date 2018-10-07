import React from 'react';
import {Link} from 'react-router-dom';
import styles from './styles.scss';

import logo from '../../assets/media/logo.png';

export const Header = ({page}) => (
    <div className={styles.header}>
        <div className={styles.headerContent}>
            <img src={logo} alt='logo' className={styles.logoImg}/>
            <div className={styles.headerTitle}>
                Boosters.pro
            </div>
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
                <Link to='/login' className={styles.registrationNavigateButton}>
                    Вход
                </Link>
                <Link to='/registration' className={styles.registrationNavigateButton}>
                    Регистрация
                </Link>
            </div>
        </div>
        <div className={styles.separator}/>
    </div>
);



