import React, {Component} from 'react';
import styles from './styles.scss';
import {Separator} from "../utils/separator";

export class LoginFullPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }

    changeEmail(e) {
        this.setState({
            email: e.target.value,
        });
    }

    changePassword(e) {
        this.setState({
            password: e.target.value,
        });
    }


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
                            <div className={styles.loginSocial}>
                                <div className={styles.whiteButtonSocial}>
                                    Github
                                </div>
                                <div className={styles.whiteButtonSocial}>
                                    Twitter
                                </div>
                            </div>
                            <Separator text="или"/>
                            <div className={styles.inputText}>
                                Электронная почта
                            </div>
                            <input className={styles.inputField}
                                   type="email"
                                   onChange={e => this.changeEmail(e)}
                                   value={this.state.email}
                                   placeholder={"ivanov@yandex.ru"}
                                   required="required"/>
                            <div className={styles.inputText}>
                                Пароль
                            </div>
                            <input className={styles.inputField}
                                   type="password"
                                   onChange={e => this.changePassword(e)}
                                   value={this.state.password}
                                   required="required"/>
                            <div className={styles.blueButtonLogin}>
                                Войти
                            </div>
                            <div className={styles.forgotPassword}>
                                Забыли пароль?
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}