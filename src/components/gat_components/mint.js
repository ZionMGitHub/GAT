import React from 'react'

import styled from 'styled-components'
import {Textbox} from './textbox';
import { data } from './data';




export const Mint = (props) => {
   const {isDesktop } = props;
  return (
     <MintContainer isDesktop={isDesktop}>   
        {/* <InnoLabs>Enter</InnoLabs> */}

        {/* <InfoWrapper id='mintText'> */}
             <Textbox data = {data['acropolis']} />

             {/* <SubHeading>Ways to Mint:</SubHeading>
             <Textbox data = {data['mintways']} tightSub = {true}/> */}
        {/* </InfoWrapper> */}
       
               
    </MintContainer>
            
  )
}

const MintContainer = styled.section`
    position: absolute;
    top: ${({isDesktop}) => (isDesktop ? '28.5%' : '48%')};
    width: 100%;
    height: 5%;
    /* background-color: rgba(40,240,40,.5); */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const InfoWrapper = styled.div`
   position: absolute;
   top: 20%;

`