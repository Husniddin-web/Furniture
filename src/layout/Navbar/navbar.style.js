import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../style/theme";

export const NavbarWrapper = styled.div`
   
`
export const NavbarContentWrapper = styled.div`
 & > logo{
    width: 210px;
    height: 35px;
 }
  display: flex;
    justify-content: space-between;
    align-items: center;
   .action-bar{
        display: flex;
        gap: 30px;
        align-items: center;
        & > div{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 6px;
        }
   }
   

`

export const TopInfoWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 12px auto 20px auto;
   
`

export const MenuItems = styled.div`
    display: flex;
    gap: 27px;
    & .link{
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        color:${colors.mainGray}50;
    }

`


export const ContactsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;

    & > button{
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        color:${colors.mainGray}50;
        background-color: transparent;
        border: none;

        cursor: pointer;
    }
    & > a{

        font-weight: 600;
        font-size: 14px;
        color: ${colors.mainGray};
        cursor: pointer;
    }

`
