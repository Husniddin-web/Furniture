import React, { useState } from "react";
import {
  NavbarWrapper,
  NavbarContentWrapper,
  TopInfoWrapper,
  MenuItems,
  ContactsWrapper,
  MenuListContactsWrapper,
} from "./navbar.style";
import {
  CartIcon,
  CloseIcon,
  HeartIcon,
  MenueBar,
  NetwrokIcon,
  TogglerIcon,
} from "../../assets/icons";
import { Link } from "react-router-dom";
import LogoSvg from "../../assets/images/logo.svg";
import { Button, Input } from "../../components";

const Navbar = () => {
  const [isOpen, setMenue] = useState(false);
  return (
    <NavbarWrapper className="container">
      <div className="desktop-wrapper">
        <TopInfoWrapper>
          <MenuItems>
            <Link className="link">О компании</Link>
            <Link className="link">Доставка и оплата</Link>
            <Link className="link">Возврат</Link>
            <Link className="link">Гарантии</Link>
            <Link className="link">Контакты</Link>
            <Link className="link">Блог</Link>
          </MenuItems>
          <ContactsWrapper>
            <a href="tel:8808904556" className="phone-number">
              8 (800) 890-46-56
            </a>
            <button>Заказать звонок</button>
          </ContactsWrapper>
        </TopInfoWrapper>
        <NavbarContentWrapper>
          <Link to="/">
            <img className="logo" src={LogoSvg} alt="" />
          </Link>
          <Button>
            <TogglerIcon />
            Каталог
          </Button>
          <Input type="search" placeholder="Поиск по товарам" />
          <div className="action-bar">
            <div>
              <HeartIcon />
              <p>Избранное</p>
            </div>
            <div>
              <NetwrokIcon />
              <p>Сравнение</p>
            </div>
            <div>
              <CartIcon />
              <p>Корзина</p>
            </div>
          </div>
        </NavbarContentWrapper>
      </div>
      <div className="mobile-wrapper">
        <div className={`menu-list ${isOpen ? "show" : "hide"}`}>
          <div className="menu-list-wrapper">
            <div className="close">
              <CloseIcon onClick={() => setMenue(!isOpen)} />
              <div className="close-icon">
                <HeartIcon />
                <NetwrokIcon />
                <CartIcon />
              </div>
            </div>
            <div className="menue-list-links">
              <Link to="/" className="menue-list-link">
                О компании
              </Link>
              <Link to="/" className="menue-list-link">
                Доставка
              </Link>
              <Link to="/" className="menue-list-link">
                Возврат
              </Link>
              <Link to="/" className="menue-list-link">
                Гарантии
              </Link>
              <Link to="/" className="menue-list-link">
                Контакты
              </Link>
              <Link to="/" className="menue-list-link">
                Блог
              </Link>
            </div>
            <Button className="menue-list-category-btn">
              <TogglerIcon />
              Каталог
            </Button>
            <MenuListContactsWrapper>
              <div>
                <a href="tel:8808904556" className="phone-number">
                  8 (800) 890-46-56
                </a>
              </div>
              <div>
                <button>Заказать звонок</button>
              </div>
            </MenuListContactsWrapper>
          </div>
        </div>
        <div className="mobile-menue">
          <MenueBar onClick={() => setMenue(!isOpen)} />
          <Link to="/">
            <img className="logo" src={LogoSvg} alt="" />
          </Link>
          <HeartIcon />
          <CartIcon />
        </div>
        <div className="mobile-input">
          <Input type="search" placeholder="Поиск по товарам" />
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
