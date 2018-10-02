import React from 'react';
import styles from './styles.scss';

import logo from '../../assets/media/logo.png';

export class Header extends React.Component {

    render() {
        return <div className={styles.header}>
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
                    <div className={styles.registrationNavigateButton}>
                        Вход
                    </div>
                    <div className={styles.registrationNavigateButton}>
                        Регистрация
                    </div>
                </div>
            </div>
            <div className={styles.separator} />
        </div>
    }
}


