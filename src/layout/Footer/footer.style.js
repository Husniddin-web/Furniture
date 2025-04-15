import styled from "styled-components";

export const FooterWrapper = styled.div`
    background-color:#F2F2F2;
    padding: 79px 0;
    margin-top: 100px;
`

export const FooterSection = styled.div`
    display: flex;
    justify-content: space-between;
    /* align-items: center; */

    @media (max-width: 760px) {
            flex-direction: column;
            justify-content: center;
            /* align-items: center; */
            padding-left: 40px;
        }

     ul{
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    h4{
        margin-bottom: 10px;
    }

`



export const FooterLogoWrapper = styled.div`
    display   :flex ;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
    .footer-phone{
        &> a{
            font-size: 24px;
            font-weight: 600;
        }
    }

    
`


export const FooterForBuyerWrapper = styled.div`
`

export const FooterForGoodsWrapper = styled.div`
`
