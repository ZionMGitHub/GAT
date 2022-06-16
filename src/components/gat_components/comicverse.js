import React from 'react'

import styled from 'styled-components'
import {Textbox} from './textbox';
import { data } from './data';


export const Comicverse = (props) => {
    const {isDesktop} = props;
  return (
     <ComicContainer isDesktop={isDesktop}>   
       <Wrapper isDesktop={isDesktop}>
         <Textbox data = {data['comicverse']}/>
          </Wrapper>     
    </ComicContainer>
            
  )
}

const ComicContainer = styled.div`
    position: absolute;
    top: ${({isDesktop}) => (isDesktop ? '16%' : '29.5%')};
    width: 100%;
    height: 5%;
    /* background-color: rgba(200,240,100,.5); */
    display: flex;
    justify-content: ${({isDesktop}) => (isDesktop ? 'flex-start' : 'center')};
    align-items: center;
`

const Wrapper = styled.div`
     position: absolute;
    /* background-color: rgba(200,240,100,.5); */
    right:  ${({isDesktop}) => (isDesktop ? '40%' : '')};

    
`
