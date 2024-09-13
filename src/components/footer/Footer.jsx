import './footer.css'
import footerLogo from './../../image/Footer-logo.svg';
import tg from './../../image/Telegram App.svg'

function Footer() {
    return(
        <footer className="footer">
        <div className="container">
           <div className="footer__inner">
                <div className="footer__logo">
                    <a href="!#">
                        <img src={footerLogo} alt="Logo" />
                    </a>
                </div>
                <nav className="footer__nav">
                    <ul className='footer__nav-list'>
                        <li className='footer__nav-item'>
                            <a href="!#">о компании</a>
                        </li>
                        <li className='footer__nav-item'>
                            <a href="!#">контакты</a>
                        </li>
                        <li className='footer__nav-item'>
                            <a href="!#">ОБМЕННИКИ</a>
                        </li>
                    </ul>
                </nav>
                <div className="footer__conaction">
                    <ul className="footer__conaction-list">
                        <li className="footer__conaction-itams">
                            <a href="!#">+7-980-480-13-95</a>
                        </li>
                        <li className="footer__conaction-itams">
                            <a href="!#">@CryptoEurasiaDecdfund</a>
                        </li>
                        <li className="footer__conaction-itams">
                            <a href="!#"><img src={tg} alt="TG" /></a>
                        </li>
                    </ul>
                </div>
                <div className="footer__btn">
                    <a href="!#">Оставить заявку</a>
                </div>
           </div>
        </div>
    </footer>
    )
}
export {Footer};