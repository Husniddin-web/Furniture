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
    }

`



export const CategorycardWrapper = styled.div`

    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 20px 0 50px;
`