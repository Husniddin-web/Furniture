import React from "react";
import {
  FooterWrapper,
  FooterLogoWrapper,
  FooterForBuyerWrapper,
  FooterForGoodsWrapper,
  FooterSection,
} from "./footer.style";
import LogoSvg from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import PaymentSvg from "../../assets/images/payment.svg";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <FooterSection>
          <FooterLogoWrapper>
            <Link to="/">
              <img className="logo" src={LogoSvg} alt="" />
            </Link>
            <div className="footer-phone">
              <a className="phone-number" href="tel:8808904556">
                8 (800) 890-46-56
              </a>
            </div>
            <Link className="footer-payment-img">
              <img src={PaymentSvg} alt="payment-svg" />
            </Link>
            <div>
              <Link className="footer-link" to="/">
                Политика конфидециальности
              </Link>
            </div>
            <div>
              <Link className="footer-link" to="/">
                Пользовательское соглашение
              </Link>
            </div>
          </FooterLogoWrapper>
          <FooterForBuyerWrapper>
            <h4>Покупателям</h4>
            <ul>
              <li>
                <Link className="footer-link">О компании</Link>
              </li>
              <li>
                <Link className="footer-link">Доставка и оплата</Link>
              </li>
              <li>
                <Link className="footer-link">Возврат</Link>
              </li>
              <li>
                <Link className="footer-link">Гарантии</Link>
              </li>
              <li>
                <Link className="footer-link">Контакты</Link>
              </li>
              <li>
                <Link className="footer-link">Блог</Link>
              </li>
            </ul>
          </FooterForBuyerWrapper>
          <FooterForGoodsWrapper>
            <h4>Товары</h4>
            <ul>
              <li>
                <Link className="footer-link">Люстры</Link>
              </li>
              <li>
                <Link className="footer-link">Светильники</Link>
              </li>
              <li>
                <Link className="footer-link">Бра</Link>
              </li>
              <li>
                <Link className="footer-link">Торшеры</Link>
              </li>
              <li>
                <Link className="footer-link">Комплектуюшие</Link>
              </li>
              <li>
                <Link className="footer-link">Настольные лампы</Link>
              </li>
            </ul>
          </FooterForGoodsWrapper>
          <div>
            <ul>
              <li>
                <Link className="footer-link">Споты</Link>
              </li>
              <li>
                <Link className="footer-link">Трековые светильники</Link>
              </li>
              <li>
                <Link className="footer-link">Уличные светильники</Link>
              </li>
              <li>
                <Link className="footer-link">Технические светильники</Link>
              </li>
              <li>
                <Link className="footer-link">Светодиодные ленты</Link>
              </li>
            </ul>
          </div>
        </FooterSection>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
