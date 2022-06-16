import styled from 'styled-components';
// import {Link} from 'react-scroll';

export const Button = styled.button`
    border-radius: 5px;
    background: ${props => props.theme.colors.hightlight};
  
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 32px' : '10px 20px')};
    color: ${props => props.theme.colors.white};
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-transform: uppercase;
    font-weight: bolder;
    font-size: ${({fontsize})=> fontsize};

    &:hover {
        transition: all 0.2s ease-in-out;
        filter: brightness(85%);
    }


`