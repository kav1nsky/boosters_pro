import React, {Component} from 'react';
import styles from './styles.scss';

import {Footer} from "../footer";



export class Feed extends Component {



    render() {
        return (
            <div className={styles.fullPageBack}>
                <div className={styles.fullPage}>
                    <div className={styles.fullPageContent}>


                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}


