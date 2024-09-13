import logo from './../../image/logo.svg';
import './header.css'
// import logo from ''

function Header () {
    return(
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__navigation">
                        <div className="header__logo">
                            <a href="!#">
                                <img src={logo} alt="LOGO" />
                            </a>
                        </div>
                        <nav className="header__nav">
                            <ul className="header__nav-list">
                                <li className="header__nav-items"><a href="!#">О компании</a></li>
                                <li className="header__nav-items"><a href="!#">Обменники </a></li>
                                <li className="header__nav-items"><a href="!#">Контакты</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header__conaction">
                        <div className="header__tg">
                            <a href="https:\\t.me/CryptoEurasiaDecdfund" target='_blank' rel="noopener noreferrer">@CryptoEurasiaDecdfund</a>
                        </div>
                        <div className="header__btn">
                            <a href="!#">Оставить заявку</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export {Header};