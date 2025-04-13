import React from "react";
import {
  NavbarWrapper,
  NavbarContentWrapper,
  TopInfoWrapper,
  MenuItems,
  ContactsWrapper,
} from "./navbar.style";
import {
  CartIcon,
  HeartIcon,
  NetwrokIcon,
  TogglerIcon,
} from "../../assets/icons";
import { Link } from "react-router-dom";
import LogoSvg from "../../assets/images/logo.svg";
import { Button, Input } from "../../components";

const Navbar = () => {
  return (
    <NavbarWrapper className="container">
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
          <a href="tel:8808904556">8 (800) 890-46-56</a>
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
    </NavbarWrapper>
  );
};

export default Navbar;
