import React from "react";
import {
  HomePageWrapper,
  AdvertismentWrapper,
  CategoryWrapper,
  CategorycardWrapper,
} from "./home.style";
import { Advertisment, CategoryCard } from "../../components";
import advrImg from "../../assets/images/advr.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { ArrowIcon } from "../../assets/icons";
import { Link } from "react-router-dom";

const HomePage = () => {
  const advr = [
    {
      id: 1,
      imgUrl: advrImg,
      text: "Скидка 15% на все подвесные светильники до 5 февраля",
    },
    {
      id: 2,
      imgUrl: advrImg,
      text: "Скидка 15% на все подвесные светильники до 5 февраля",
    },
    {
      id: 3,
      imgUrl: advrImg,
      text: "Скидка 15% на все подвесные светильники до 5 февраля",
    },
    {
      id: 21,
      imgUrl: advrImg,
      text: "Скидка 15% на все подвесные светильники до 5 февраля",
    },
    {
      id: 11224,
      imgUrl: advrImg,
      text: "Скидка 15% на все подвесные светильники до 5 февраля",
    },
  ];

  return (
    <>
      <AdvertismentWrapper>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
        >
          {advr.map((item) => (
            <SwiperSlide key={item.id}>
              <Advertisment data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </AdvertismentWrapper>

      <HomePageWrapper className="container">
        <CategoryWrapper>
          <div className="catefory-title-wrapper">
            <h1>Каталог</h1>
            <Link to="/" className="category-btn">
              <p>Весь каталог</p>
              <ArrowIcon />
            </Link>
          </div>
          <CategorycardWrapper>
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </CategorycardWrapper>
        </CategoryWrapper>
      </HomePageWrapper>
    </>
  );
};

export default HomePage;
