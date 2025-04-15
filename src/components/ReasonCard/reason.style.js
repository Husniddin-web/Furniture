import styled from "styled-components";
import { colors } from "../../style/theme";

export const ReasonCardWrapper = styled.div`

        width: 310px;
        height: 360px;
        border: 1px solid ${colors.light};
        padding: 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;



        .img{
            width: 80px;
            height: 80px;
           &> img{
                width: 100%;
                object-fit: contain;
                height: 100%;
            }
        }
        &> h4{
            font-weight: 700;
            font-size: 20px;
            line-height: 130%;
            letter-spacing: 0%;
        }
        &>p{
            font-weight: 400;
            font-size: 16px;
            line-height: 130%;
            letter-spacing: 0%;
            color: ${colors.mainGray}50;
        }



        @media (max-width: 780px) {
            width: 160px;
            height: 230px;
            padding: 10px;

            .img{
                width: 40px;
                height: 40px;
            }

            &>h4{
                font-size: 16px;
            }
            &>p{
                font-size: 14px;
            }
        }

`