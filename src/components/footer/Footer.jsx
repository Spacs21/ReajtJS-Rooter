import React from "react";
import "./Footer.scss";
import visaLogo from "../../assets/visa.png";
import vkIcon from "../../assets/vk.png";


const Footer = () => {
  return (
    <main className="main">
        <div className="container">
          <footer className="footer">
            <div className="footer__left">
              <div className="footer__logo">NORNLIGHT</div>
              <div className="footer__contact">8 (800) 890-46-56</div>
              <div className="footer__payments">
                <img src={visaLogo} />
              </div>
              <div className="footer__policies">
                <a href="#">Политика конфиденциальности</a>
                <a href="#">Пользовательское соглашение</a>
              </div>
              <div className="footer__socials">
                <img src={vkIcon} />
                <img src={vkIcon} />
                <img src={vkIcon} />
              </div>
            </div>

            <div className="footer__middle">
              <h4>Покупателям</h4>
              <ul>
                <li><a href="#">О компании</a></li>
                <li><a href="#">Доставка и оплата</a></li>
                <li><a href="#">Возврат</a></li>
                <li><a href="#">Гарантии</a></li>
                <li><a href="#">Контакты</a></li>
                <li><a href="#">Блог</a></li>
              </ul>
            </div>

            <div className="footer__right">
              <h4>Товары</h4>
              <ul>
                <li><a href="#">Люстры</a></li>
                <li><a href="#">Светильники</a></li>
                <li><a href="#">Бра</a></li>
                <li><a href="#">Торшеры</a></li>
                <li><a href="#">Комплектующие</a></li>
                <li><a href="#">Настольные лампы</a></li>
                <li><a href="#">Споты</a></li>
                <li><a href="#">Трековые светильники</a></li>
                <li><a href="#">Уличные светильники</a></li>
                <li><a href="#">Технические светильники</a></li>
                <li><a href="#">Светодиодные ленты</a></li>
              </ul>
            </div>
        </footer>
      </div>
    </main>
  );
};

export default Footer;
