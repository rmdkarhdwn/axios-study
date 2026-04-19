import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Button = styled.button<{selected: boolean}>`
    width: 100px;
    height: 50px;
    margin: 10px;
    background-color: ${(props) => props.selected ? "blue" : "gray"};
`