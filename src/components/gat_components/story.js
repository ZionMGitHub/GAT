import React from 'react'

import styled from 'styled-components'
import {Textbox} from './textbox';
import { data } from './data';


export const Story = (props) => {
  const {isDesktop} = props;

  return (
     <StoryContainer isDesktop={isDesktop}>   
         <Textbox data = {data['story']} />
               
    </StoryContainer>
            
  )
}

const StoryContainer = styled.div`
    position: absolute;
    top: ${({isDesktop}) => (isDesktop ? '10.5%' : '19%')};
    width: 100%;
    height: 4%;
    /* background-color: rgba(200,240,100,.5); */
    display: flex;
    justify-content: center;
    align-items: flex-start;
`
