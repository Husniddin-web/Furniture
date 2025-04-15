import styled from "styled-components"
import { colors } from "../../style/theme"

export const InputWrapper = styled.div`
    position: relative;
    width: 100%;
    .input{
        width: 100%;
        height: 50px;
        padding: 0 16px;
        border: 1px solid ${colors.mainGray};
        border-radius: 100px;
        font-size: 15px;
        color:${colors.mainGray};
        transition: all 0.2s ease;
    }
    .search-icon{
        position: absolute;
        left: 85%;
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none;
    }
    .none{
        display: none;
    }
`