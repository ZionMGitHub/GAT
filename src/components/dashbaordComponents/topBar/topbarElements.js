import styled from "styled-components";


export const TopbarContainer = styled.div`
    margin: 15px auto;
    height: 5rem;
    width: 100%;
    max-width: ${props => props.theme.boxstyle.maxWidth};
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: ${props => props.theme.boxstyle.minWidth};

`
export const LogoWrapper = styled.div`
    width: 20%;
    min-width: 200px;
   

`

export const ButtonWrapper = styled.div`
    display: none;
    margin-right: ${props => props.theme.boxstyle.marginX};

    @media screen and (max-width: ${props => props.theme.breakpoints.md}){
        display: block;
       
    }
`