import styled from "styled-components";

export const AdvrWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 10%;
    justify-content: space-around;
     @media (max-width: 780px) {
        flex-direction: column-reverse;
        width: 100%;
       .advertisment-title{
            font-size: 28px;
        }
        .advertisment-img{
            width: 275px;
            height: 275px;
        }
     }
    p{
    width: 50%;
    font-weight: 700;
    font-size: 64px;
    }
    & >div{
        &> img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

`