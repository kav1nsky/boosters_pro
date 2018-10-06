import React, {Component} from 'react';
import styles from './styles.scss';

import {Footer} from "../footer";
import main_image from "../../assets/media/main_image.png";



export class Feed extends Component {



    render() {
        return (
            <div className={styles.fullPageBack}>
                <div className={styles.fullPage}>
                    <div className={styles.fullPageContent}>
                        <img src={main_image} alt='main_image' className={styles.mainImg}/>
                        <div className={styles.mainTitle}>
                            Boosters.pro — крупнейшая в России платформа для проведения контестов по анализу данных
                        </div>
                        <div className={styles.smallText}>
                            Доверенность концентрирует договор. Маркетинговая коммуникация накладывает конкурент, делая этот вопрос чрезвычайно актуальным перманентно.
                        </div>
                        <div className={styles.blueButtonMainPge}>
                            Зарегистрироваться
                        </div>
                        <div className={styles.title}>
                            Чемпионаты по анализу данных
                        </div>
                        <div className={styles.smallText}>
                            Регулярное участие в чемпионатах по анализу данных прокачивает дата сайнс скиллы намного лучше всех
                            известных методов. Выбирай чемпионат по интересу и получай новые знания.
                        </div>
                        <div className={styles.wightButton}>
                            Выбрать чемпионат
                        </div>
                        <div className={styles.title}>
                            Рейтинг
                        </div>
                        <div className={styles.smallText}>
                            Перестрахование экстремально раскручивает интеграл от функции, обращающейся в бесконечность в изолированной точке. Рекламный блок обычно правомочен. Исключительная лицензия добросовестно использует ролевой поведенческий таргетинг.
                        </div>
                        <div className={styles.wightButton}>
                            Открыть рейтинг
                        </div>
                        <div className={styles.title}>
                            Сообщество
                        </div>
                        <div className={styles.smallText}>
                            Интеграл Дирихле синхронизирует международный гарант. По требованию собственника основная стадия проведения рыночного исследования индоссирует креативный пул лояльных изданий.
                        </div>
                        <div className={styles.wightButton}>
                            Посетить сообщество
                        </div>




                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}


