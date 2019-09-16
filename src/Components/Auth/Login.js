import React from "react";
import "../../Styles/Auth/Auth.scss";

const Auth = () => {
    return (
        <div className="wrapper-auth">
            <header>
                <img src="../Images/logo.png" className="wrapper-auth__header-logo" alt="лого" />
                <div className="wrapper-auth__header-line"></div>
            </header>
            <main>
                <section>
                    <h1 className="wrapper-auth__left-paragraph">Личный кабинет Карддекс</h1>
                    <div className="wrapper-auth__left">
                        <h3>Личный кабинет партнеров и дилеров Карддекс</h3>
                        <p>
                            Войдите или зарегестрируйтесь для получения всей доступной информации по продуктам 
                            Карддекс, вашим заказам, скидкам и предложениям.
                        </p>
                    </div>
                </section>
                <div className="wrapper-auth__separator"></div>
                <section>
                    <form className="wrapper-auth__right">

                    </form>
                </section>
            </main>
            <footer className="wrapper-auth__footer">
                <div className="wrapper-auth__footer-copy">Copyright 2019 &copy; CARDDEX</div>
                <div className="wrapper-auth__footer-info">Информация на сайте не является публичной офертой</div>
                <div className="wrapper-auth__footer-phone-up">8 (800) 333-93-36</div>
                <div className="wrapper-auth__footer-phone-down">8 (499) 64-333-69</div>
                <div className="wrapper-auth__footer-email">help@carddex.ru</div>
            </footer>
        </div>
    )
}
export default Auth;