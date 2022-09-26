import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
    background-color: #565656;
    border-radius: 22px;
    position: relative;

    color: #FFF;
    padding: 2px 12px;
    min-width: 120px;
    height: 25px;
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
    border: none;
    margin-left: 20px;

    &:hover {
        opacity: 0.6;
    }

    ${({variant}) => variant !== "primary" && css`
        min-width: 167px;
        max-width: 275px;
        height: 33px;
        margin: 40px 0 20px 0;

        background-color: #E4105D;

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #E4105D;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`