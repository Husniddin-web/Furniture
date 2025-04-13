import styled from "styled-components";
import { colors } from "../../style/theme";
import { Link } from "react-router-dom";

export const CategoryCardWrapper = styled.div`
    width: 420px;
    height: 250px;
    border-radius: 20px;
    background-color: ${colors.light};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;

    .category-card-title{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 140px;
        &> p{
            font-weight: 500;
            font-size: 20px;
            line-height: 110.00000000000001%;
            letter-spacing: 0%;
            color: ${colors.mainGray};

        }
    }
`


export const CategoryArrowWrapper = styled(Link)`

display: flex;
justify-content: space-between;
align-items: center;
gap: 10px;
text-decoration: none;
color: ${colors.mainGray};

`