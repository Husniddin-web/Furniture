import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../style/theme";
export const NavbarWrapper = styled.div`
  .mobile-wrapper {
    display: none;
  }

  @media (max-width: 780px) {
    .desktop-wrapper {
      display: none;
    }
    .mobile-wrapper {

      display: block;
    }
    .mobile-menue {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 0;
    }

    .menu-list {
      position: fixed;
      transform: translateY(-100%);
      width: 100%;
      transition: transform 0.3s ease;
      background-color: ${colors.light};
      z-index: 99999;
      padding: 0;
      /* padding: 10px/; */
    }
    .menu-list-wrapper {
      display: flex;
      flex-direction: column;

      .close{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;

        .close-icon{
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }
      }

      .menue-list-links{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-decoration: none;

       .menue-list-link{
        text-decoration: none;
        padding: 15px 0 20px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid ${colors.mainGray}50;
        color: ${colors.mainGray};
        
      }
      .menue-list-link:last-child{
         margin-bottom: 15px;

       }

      &> .menu-list-contact{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
       }
       
      }
    }
  }

  .menu-list.show {
    transform: translateY(0);
  }
  
  
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
  

`



export const MobileNavbarWrapper = styled.div`

`


export const MenuListContactsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 30px 0;

    button{
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        color:${colors.mainGray}50;
        background-color: transparent;
        border: none;

        cursor: pointer;
    }
`
