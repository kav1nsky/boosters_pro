import React, {Component} from 'react';
import styles from './styles.scss';

export class RegistrationFullPage extends Component {

    render() {
        return (
            <div className={styles.fullPageBack}>
                <div className={styles.fullPage}>
                    <div className={styles.fullPageContent}>
                        Registration
                    </div>
                </div>
            </div>
        );
    }
}