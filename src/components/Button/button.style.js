import styled from "styled-components";
import { colors } from "../../style/theme";

export const ButtonWrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 50px;
    background-color: ${colors.mainGray};
    color: ${colors.white};
    border-radius: 100px;
    padding: 14px 28px;
    border: 1px solid  ${colors.mainGray};
   
`