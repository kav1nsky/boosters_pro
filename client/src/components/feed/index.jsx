import React, {Component} from 'react';
import styles from './styles.scss';

/*import classnames from 'classnames';*/

import main_image from "../../assets/media/main_image.png";
import vk from "../../assets/media/vk.png"
import telegram from "../../assets/media/telegram.png"
import facebook from "../../assets/media/facebook.png"
import {Link} from "react-router-dom";


export class Feed extends Component {


    render() {
        return (
            <div className={styles.fullPageBack}>
                <div className={styles.fullPage}>
                    <div className={styles.fullPageContent}>
                        <img src={main_image} alt='main_image' className={styles.mainImg}/>
                        <div className={styles.mainTitle}>
                            Boosters.pro — крупнейшая в России платформа для проведения контестов по анализу данных
                        </div>
                        <div className={styles.smallText}>
                            Доверенность концентрирует договор. Маркетинговая коммуникация накладывает конкурент, делая
                            этот вопрос чрезвычайно актуальным перманентно.
                        </div>
                        <div className={styles.statisticsContent}>

                            <div className={styles.statistic}>
                                <div className={styles.statisticValue}>
                                    15
                                </div>
                                <div className={styles.statisticDescription} style={{width: "102px"}}>
                                    проведённых контестов
                                </div>
                            </div>
                            <div className={styles.statistic}>
                                <div className={styles.statisticValue}>
                                    4201
                                </div>
                                <div className={styles.statisticDescription} style={{width: "161px"}}>
                                    зарегистрированный пользователь
                                </div>
                            </div>
                            <div className={styles.statistic}>
                                <div className={styles.statisticValue}>
                                    4 330 000
                                </div>
                                <div className={styles.statisticDescription} style={{width: "165px"}}>
                                    сумма всех призовых в рублях
                                </div>
                            </div>
                        </div>
                        <Link to='/registration' className={styles.blueButtonMainPge}>
                            Зарегистрироваться
                        </Link>
                        <div className={styles.title}>
                            Чемпионаты по анализу данных
                        </div>
                        <div className={styles.smallText}>
                            Регулярное участие в чемпионатах по анализу данных прокачивает дата сайнс скиллы намного
                            лучше всех
                            известных методов. Выбирай чемпионат по интересу и получай новые знания.
                        </div>
                        <div className={styles.wightButton}>
                            Выбрать чемпионат
                        </div>
                        <div className={styles.title}>
                            Рейтинг
                        </div>
                        <div className={styles.smallText}>
                            Перестрахование экстремально раскручивает интеграл от функции, обращающейся в бесконечность
                            в изолированной точке. Рекламный блок обычно правомочен. Исключительная лицензия
                            добросовестно использует ролевой поведенческий таргетинг.
                        </div>
                        <div className={styles.wightButton}>
                            Открыть рейтинг
                        </div>
                        <div className={styles.title}>
                            Сообщество
                        </div>
                        <div className={styles.smallText}>
                            Интеграл Дирихле синхронизирует международный гарант. По требованию собственника основная
                            стадия проведения рыночного исследования индоссирует креативный пул лояльных изданий.
                        </div>
                        <div className={styles.wightButton}>
                            Посетить сообщество
                        </div>
                        <div className={styles.agreement}>
                            Пользовательское соглашение
                            <div className={styles.agreementButton}>
                                PDF, 1.2 МБ
                            </div>
                        </div>
                        <div className={styles.socialNetworks}>
                            <img src={vk} alt='vk_image' className={styles.socialNetworksImg}/>
                            <img src={telegram} alt='telegram_image' className={styles.socialNetworksImg}/>
                            <img src={facebook} alt='facebook_image' className={styles.socialNetworksImg}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


