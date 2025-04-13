import styled from "styled-components";

export const AdvrWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    p{
        width: 50%;
    font-family: Manrope;
    font-weight: 700;
    font-size: 64px;
    line-height: 100%;
    letter-spacing: 0%;

    }
    & >div{
        &> img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

`