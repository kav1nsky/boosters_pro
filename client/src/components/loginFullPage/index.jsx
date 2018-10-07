import React, {Component} from 'react';
import styles from './styles.scss';

export class LoginFullPage extends Component {

    render() {
        return (
            <div className={styles.fullPageBack}>
                <div className={styles.fullPage}>
                    <div className={styles.fullPageContent}>
                        <div className={styles.loginForm}>
                            <div className={styles.title}>
                                Войдите с помощью соцсетей
                            </div>
                            <div className={styles.loginSocial}>
                                <div className={styles.whiteButtonSocial}>
                                    Вконтакте
                                </div>
                                <div className={styles.whiteButtonSocial}>
                                    Facebook
                                </div>
                            </div>
                            <div className={styles.blueButtonLogin}>
                                Войти
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}