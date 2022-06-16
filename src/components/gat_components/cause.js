import React from 'react'

import styled from 'styled-components'
import {Textbox} from './textbox';
import { data } from './data';



export const Cause = () => {
  return (
     <CauseContainer>   
         <Textbox data = {data['cause']} />
               
    </CauseContainer>
            
  )
}

const CauseContainer = styled.div`
    position: absolute;
    top: ${props => props.theme.sectionStart.cause};
    width: 100%;
    height: 6%;
    /* background-color: rgba(250,250,250 ,.5); */
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: ${props => props.theme.breakpoints.md}){
       top: 82%;
    }
`
