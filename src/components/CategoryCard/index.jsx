import React from "react";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../assets/icons";
import {
  CategoryArrowWrapper,
  CategoryCardWrapper,
  CategoryCardMobileWrapper,
  CategoryArrowMobileWrapper,
} from "./category.card.style";
import CateogryCardImg from "../../assets/images/category.png";

const CategoryCard = () => {
  return (
    <>
      <CategoryCardWrapper>
        <div className="category-card-title">
          <p>Торшеры</p>
          <CategoryArrowWrapper>
            <p>От 540₽</p>
            <ArrowIcon />
          </CategoryArrowWrapper>
        </div>
        <div className="category-card-img">
          <img src={CateogryCardImg} alt="" />
        </div>
      </CategoryCardWrapper>

      <CategoryCardMobileWrapper>
        <p>Торшеры</p>
        <div className="category-card-img">
          <img src={CateogryCardImg} alt="" />
        </div>
        <CategoryArrowMobileWrapper to="/">
          <p>От 540₽</p>
          <ArrowIcon />
        </CategoryArrowMobileWrapper>
      </CategoryCardMobileWrapper>
    </>
  );
};

export default CategoryCard;
