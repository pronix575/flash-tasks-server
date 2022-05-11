import styled from "styled-components";

export const Wrap = styled.div<{color:string}>`
    background-color: ${({color}) => color};
    width: 200px;
    height: 400px;
    border-radius: 20px;
    margin: 0px 10px;
`