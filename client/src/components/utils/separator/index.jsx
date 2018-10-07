import React from 'react';
import styles from './styles.scss';

export const Separator = ({text}) => (
    <div className={styles.separatorSection}>
        <div className={styles.separatorText}>
            {text}
        </div>
        <div className={styles.separatorLine}/>
    </div>
);
