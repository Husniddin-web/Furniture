import styled from "styled-components";
import { colors } from "../../style/theme";

export const HomePageWrapper = styled.div``




export const AdvertismentWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 62px 0 102px;
    margin-bottom: 68px;
    height: 500px;
    background-color: ${colors.light};
    border-radius: 50px;
`


export const CategoryWrapper = styled.div`

   .category-desktop-wrapper{
     & > .catefory-title-wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
         & > h1{
            font-family: Manrope;
            font-size: 40px;
            line-height: 100%;
            letter-spacing: 0%;
            text-transform: capitalize;
            color: ${colors.mainGray};
         }
        }
    }
    .category-btn{
       display: flex;
       justify-content: space-between;
       align-items: center;
       gap: 10px;
       padding: 14px 47px;
       border: 1px solid ${colors.mainGray};
       border-radius: 100px;
       text-decoration: none;
       cursor: pointer;
       &> p{
           text-decoration: none;
           color: ${colors.mainGray};
       }
    }



   .category-mobile-wrapper{
    .category-btn{
        width: 300px;
        display: flex;
        margin: 0 auto;
    }
    display: none;
   }


    @media (max-width: 780px) {
        .category-desktop-wrapper{
            display: none;
        }
        .category-mobile-wrapper {

            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 30px;
        }   
   }

`



export const CategorycardWrapper = styled.div`

    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin: 20px 0 50px;
`




export const WhyNorLightWrapper = styled.div`

    .why-title-wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;

        &> h3{
            font-weight: 700;
            font-size: 40px;
            line-height: 100%;
            letter-spacing: 0%;


        }
    }
    .why-norlight-btn{
                display: flex;
                justify-content: space-around;
                width: 270px;
                align-items: center;
                gap: 10px;
                text-decoration: none;
                border-radius: 100px;
                padding: 14px 47px;
                border: 1px solid ${colors.mainGray};
                color: ${colors.mainGray};
            }
    .why-norlight-cards{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 20px;
            }

    .mobile-norlight-category-btn{
                    display: none;
        }




        @media (max-width: 780px) {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 30px;

                .mobile-norlight-category-btn{
                    display: block;
                }
               .desktop-norlight-category-btn{
                display: none;
               }
         }
`



export const CategorycardMobileWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
`;