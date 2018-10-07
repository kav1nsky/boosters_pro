import React, {Component} from 'react';
import styles from './styles.scss';

export class LoginFullPage extends Component {

    render() {
        return (
            <div className={styles.fullPageBack}>
                <div className={styles.fullPage}>
                    <div className={styles.fullPageContent}>
                        Login
                    </div>
                </div>
            </div>
        );
    }
}