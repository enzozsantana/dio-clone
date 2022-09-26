import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 100px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.div`
    max-width: 368px;
    margin-left: 60px;
`

export const Column = styled.div`
    flex: 1;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 2px;
    max-width: 368px;
`

export const Title = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 410px;
    margin-bottom: 180px;
    line-height: 44px;

    color: #FFF;
`

export const TitleLogin = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 8px;
    line-height: 44px;
`

export const SubtitleLogin = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;
`

export const TenhoText = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
`

export const LoginText = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    margin-left: 10px;

    color: #23DD7A;
    cursor: pointer;
`
export const InputContainer = styled.div`
    width: 100%;
    max-width: 275px;
    height: 30px;
    border-bottom: 1px solid #3B3450;
    background-color: transparent;

    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

export const InputText = styled.input`
    background-color: transparent;
    color: #FFF;
    flex: 1;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    height: 30px;
    font-size: 18px;
`

export const ErrorText = styled.p`
    color: #FF0000;
    font-size: 12px;
    margin: 5px 0;
`